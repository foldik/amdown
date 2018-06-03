exports.process = function ( code ) {
  const keywords = new Set( [
            'abstract', 'continue', 'for', 'new', 'switch', 'assert', 'default', 'goto', 'package', 'synchronized', 'boolean', 'do', 'if', 'private', 'this', 'break', 'double', 'implements',
            'protected', 'throw', 'byte', 'else', 'import', 'public', 'throws', 'case', 'enum', 'instanceof', 'return', 'transient', 'catch', 'extends', 'int', 'short', 'try', 'char', 'final', 'interface',
            'static', 'void', 'class', 'finally', 'long', 'strictfp', 'volatile', 'const', 'float', 'native', 'super', 'while'
        ] );

  const separators = new Map();
  separators.set( '\n', 'indent' );
  separators.set( '\t', 'indent' );
  separators.set( ' ', 'indent' );
  separators.set( ';', 'semicolon' );
  separators.set( ',', 'colon' );
  separators.set( '(', 'openingBracket' );
  separators.set( ')', 'closingBracket' );
  separators.set( '[', 'openingSquareBracket' );
  separators.set( ']', 'closingSquareBracket' );
  separators.set( '{', 'openingCurlyBracket' );
  separators.set( '}', 'closingCurlyBracket' );
  separators.set( '.', 'dot' );
  separators.set( '=', 'equalSign' );

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

  const evaluateText = function ( ch ) {
    if ( keywords.has( cache ) ) {
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
    if ( ch === '"' ) {
      let stringContent = ch;
      let tmpChar = '';
      let completed = false;
      while ( codeCharacters.length > 0 && !completed ) {
        if ( ( tmpChar = codeCharacters.shift() ) === '"' && stringContent.charAt( stringContent.length - 1 ) !== '\\' ) {
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
