grammar Gramatica;

programa        : instruccion* EOF ;
instruccion     : bucle | salida ;

bucle           : MIENTRAS condicion LLAVE_ABRE instruccion* LLAVE_CIERRA ;
salida          : IMPRIMIR PAREN_ABRE CADENA PAREN_CIERRA PUNTO_Y_COMA ;

condicion       : VERDADERO | FALSO ;

IMPRIMIR        : 'imprimir' ;
MIENTRAS        : 'mientras' ;
VERDADERO       : 'verdadero' ;
FALSO           : 'falso' ;
PUNTO_Y_COMA    : ';' ;
LLAVE_ABRE      : '{' ;
LLAVE_CIERRA    : '}' ;
PAREN_ABRE      : '(' ;
PAREN_CIERRA    : ')' ;

CADENA          : '"' ( ~["\\] | '\\' . )* '"' ;
ID              : [a-zA-Z] ([a-zA-Z] | [0-9])* ;

WS              : [ \t\r\n]+ -> skip ;
