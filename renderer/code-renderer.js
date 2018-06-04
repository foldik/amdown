const javaRenderer = require( './code/java-renderer' );

exports.canRender = function ( block ) {
  return block.type === 'code';
}

exports.render = function ( block ) {
  let content = '<div>\n';
  if ( block.lang === 'java' || block.lang === 'sql' ) {
    content += '<pre><code class="language-' + block.lang + '">' + javaRenderer.render( block.code ) + ' </code></pre>';
  } else if ( block.lang !== '' ) {
    content += '<pre><code class="language-' + block.lang + '">' + block.code + ' </code></pre>';
  } else {
    content += '<pre><code>' + block.code + ' </code></pre>';
  }
  content += '</div>\n';
  return content;
}
