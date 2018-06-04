const javaDialect = require( './java-dialect' );
const sqlDialect = require( './sql-dialect' );
const javascriptDialect = require( './javascript-dialect' );

exports.tryFindDialect = function ( language ) {
  if ( language === 'java' || language === 'JAVA' ) {
    return javaDialect.dialect;
  } else if ( language === 'sql' || language === 'SQL' ) {
    return sqlDialect.dialect;
  } else if ( language === 'javascript' || language === 'JAVASCRIPT' ) {
    return javascriptDialect.dialect;
  } else {
    return null;
  }
}
