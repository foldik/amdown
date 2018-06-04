exports.process = function ( code, dialect ) {
  const keywords = dialect.keywords;
  const separators = dialect.separators;
  const isCaseSensitive = dialect.isCaseSensitive;

  let elements = [],
    cache = '',
    inString = false,
    codeCharacters = code.split( '' );

  const add = function ( type, content ) {
    elements.push( {
      type: type,
      content: content
    } );
  };

  const isNumber = function ( n ) {
    return !isNaN( parseFloat( n ) ) && isFinite( n );
  };

  const transfromIfCaseSensitive = function ( cache ) {
    if ( isCaseSensitive ) {
      return cache;
    } else {
      return cache.toUpperCase();
    }
  }

  const evaluateText = function ( ch ) {
    if ( keywords.has( transfromIfCaseSensitive( cache ) ) ) {
      add( 'keyword', cache );
    } else {
      if ( isNumber( cache ) ) {
        add( 'number', cache );
      } else if ( cache !== '' && cache.charAt( 0 ) === '@' ) {
        add( 'annotation', cache );
      } else if ( cache !== '' ) {
        add( 'text', cache );
      }
    }
    if ( ch !== '' ) {
      add( separators.get( ch ), ch );
    }
    cache = '';
  }

  while ( codeCharacters.length > 0 ) {
    const ch = codeCharacters.shift();
    if ( ch === '"' || ch === '\'') {
      const terminateChar = ch;
      let stringContent = ch;
      let tmpChar = '';
      let completed = false;
      while ( codeCharacters.length > 0 && !completed ) {
        if ( ( tmpChar = codeCharacters.shift() ) === terminateChar && stringContent.charAt( stringContent.length - 1 ) !== '\\' ) {
          completed = true;
        }
        stringContent = stringContent + tmpChar;
      }
      add( 'string', stringContent );
    } else if ( separators.has( ch ) ) {
      evaluateText( ch );
    } else {
      cache = cache + ch;
    }
  }
  return elements;
}
