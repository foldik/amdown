const javaProcessor = require( './code/java-processor' );

exports.process = function ( block ) {
  if ( !block || !block.hasOwnProperty( 'lang' ) ) {
    return {
      match: false
    };
  }
  if ( block.lang === 'java' ) {
    return {
      match: true,
      block: {
        type: 'code',
        lang: 'java',
        code: javaProcessor.process( block.code )
      }
    };
  }
  return {
    match: true,
    block: block
  };
}
