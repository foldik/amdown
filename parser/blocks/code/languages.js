const javaDialect = require( './java-dialect' );
const sqlDialect = require( './sql-dialect' );

exports.tryFindDialect = function ( language ) {
  if ( language === 'java' || language === 'JAVA' ) {
    return javaDialect.dialect;
  } else if (language === 'sql' || language === 'SQL') {
    return sqlDialect.dialect;
  } else {
    return null;
  }
}
