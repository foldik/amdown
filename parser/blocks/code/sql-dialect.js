const keywords = new Set( [
  'ADD',
  'AND',
  'ALL',
  'ALTER',
  'AS',
  'ASC',
  'BETWEEN',
  'BY',
  'CHECK',
  'COALESCE',
  'COLUMN',
  'CONSTRAINT',
  'COUNT',
  'CREATE',
  'DATABASE',
  'DEFAULT',
  'DESC',
  'DISTINCT',
  'DROP',
  'EXISTS',
  'FOREIGN',
  'FROM',
  'GROUP',
  'HAVING',
  'IN',
  'INDEX',
  'INNER',
  'INSERT',
  'INTO',
  'IS',
  'JOIN',
  'KEY',
  'LEFT',
  'LIKE',
  'LIMIT',
  'MODIFY',
  'NOT',
  'NULL',
  'ON',
  'OR',
  'ORDER',
  'OUTER',
  'PRIMARY',
  'REFERENCES',
  'RIGHT',
  'SELECT',
  'SET',
  'TABLE',
  'TOP',
  'TRUNCATE',
  'UNION',
  'UNIQUE',
  'UPDATE',
  'USE',
  'VALUES',
  'VIEW',
  'WHERE',
  'WITH'
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

exports.dialect = {
  keywords: keywords,
  separators: separators
}
