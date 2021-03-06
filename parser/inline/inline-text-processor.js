const linkProcessor = require( './link-processor' );
const italicTextProcessor = require( './italic-text-processor' );
const strongTextProcessor = require( './strong-text-processor' );

exports.process = function ( paragraph ) {
  let index = 0;
  let resultParagraph = [];
  while ( index < paragraph.length ) {
    if ( paragraph[ index ].value === '[' ) {
      const result = linkProcessor.tryProcess( paragraph, index );
      if ( result.match ) {
        resultParagraph.push( result.element );
        index = result.newIndex;
        continue;
      }
    }

    if ( paragraph[ index ].value === '*' || paragraph[ index ].value === '_' ) {
      const result = italicTextProcessor.tryProcess( paragraph, index );
      if ( result.match ) {
        resultParagraph.push( result.element );
        index = result.newIndex;
        continue;
      }
    }

    if ( paragraph[ index ].value === '*' || paragraph[ index ].value === '_' ) {
      const result = strongTextProcessor.tryProcess( paragraph, index );
      if ( result.match ) {
        resultParagraph.push( result.element );
        index = result.newIndex;
        continue;
      }
    }
    resultParagraph.push( paragraph[ index ] );
    index++;
  }
  return resultParagraph;
}
