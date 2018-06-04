const languages = require( './code/languages' );
const languageProcessor = require( './code/language-processor' );

exports.process = function ( block ) {
  if ( !block || !block.hasOwnProperty( 'lang' ) ) {
    return {
      match: false
    };
  }
  const diealect = languages.tryFindDialect( block.lang );
  if ( diealect !== null ) {
    return {
      match: true,
      block: {
        type: 'code',
        lang: block.lang.toLowerCase(),
        code: languageProcessor.process( block.code, diealect )
      }
    };
  }
  return {
    match: true,
    block: block
  };
}
