exports.render = function ( code ) {
  let result = '';
  for ( var i = 0; i < code.length; i++ ) {
    const part = code[ i ];
    if ( part.type === 'indent' ) {
      result = result + part.content;
    } else {
      result = result + '<span class="' + part.type + '">' + part.content + '</span>';
    }
  }
  return result;
}
