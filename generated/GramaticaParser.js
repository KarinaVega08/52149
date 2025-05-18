// Generated from c:/Users/cnico/Desktop/analizador/Gramatica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import GramaticaListener from './GramaticaListener.js';
import GramaticaVisitor from './GramaticaVisitor.js';

const serializedATN = [4,1,12,42,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,5,0,12,8,0,10,0,12,0,15,9,0,1,0,1,0,1,1,1,1,3,1,21,8,1,1,2,1,2,1,2,1,
2,5,2,27,8,2,10,2,12,2,30,9,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,
4,0,0,5,0,2,4,6,8,0,1,1,0,3,4,39,0,13,1,0,0,0,2,20,1,0,0,0,4,22,1,0,0,0,
6,33,1,0,0,0,8,39,1,0,0,0,10,12,3,2,1,0,11,10,1,0,0,0,12,15,1,0,0,0,13,11,
1,0,0,0,13,14,1,0,0,0,14,16,1,0,0,0,15,13,1,0,0,0,16,17,5,0,0,1,17,1,1,0,
0,0,18,21,3,4,2,0,19,21,3,6,3,0,20,18,1,0,0,0,20,19,1,0,0,0,21,3,1,0,0,0,
22,23,5,2,0,0,23,24,3,8,4,0,24,28,5,6,0,0,25,27,3,2,1,0,26,25,1,0,0,0,27,
30,1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,29,31,1,0,0,0,30,28,1,0,0,0,31,32,
5,7,0,0,32,5,1,0,0,0,33,34,5,1,0,0,34,35,5,8,0,0,35,36,5,10,0,0,36,37,5,
9,0,0,37,38,5,5,0,0,38,7,1,0,0,0,39,40,7,0,0,0,40,9,1,0,0,0,3,13,20,28];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GramaticaParser extends antlr4.Parser {

    static grammarFileName = "Gramatica.g4";
    static literalNames = [ null, "'imprimir'", "'mientras'", "'verdadero'", 
                            "'falso'", "';'", "'{'", "'}'", "'('", "')'" ];
    static symbolicNames = [ null, "IMPRIMIR", "MIENTRAS", "VERDADERO", 
                             "FALSO", "PUNTO_Y_COMA", "LLAVE_ABRE", "LLAVE_CIERRA", 
                             "PAREN_ABRE", "PAREN_CIERRA", "CADENA", "ID", 
                             "WS" ];
    static ruleNames = [ "programa", "instruccion", "bucle", "salida", "condicion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = GramaticaParser.ruleNames;
        this.literalNames = GramaticaParser.literalNames;
        this.symbolicNames = GramaticaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GramaticaParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===2) {
	            this.state = 10;
	            this.instruccion();
	            this.state = 15;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 16;
	        this.match(GramaticaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, GramaticaParser.RULE_instruccion);
	    try {
	        this.state = 20;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 18;
	            this.bucle();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 19;
	            this.salida();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, GramaticaParser.RULE_bucle);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.match(GramaticaParser.MIENTRAS);
	        this.state = 23;
	        this.condicion();
	        this.state = 24;
	        this.match(GramaticaParser.LLAVE_ABRE);
	        this.state = 28;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===2) {
	            this.state = 25;
	            this.instruccion();
	            this.state = 30;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 31;
	        this.match(GramaticaParser.LLAVE_CIERRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, GramaticaParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(GramaticaParser.IMPRIMIR);
	        this.state = 34;
	        this.match(GramaticaParser.PAREN_ABRE);
	        this.state = 35;
	        this.match(GramaticaParser.CADENA);
	        this.state = 36;
	        this.match(GramaticaParser.PAREN_CIERRA);
	        this.state = 37;
	        this.match(GramaticaParser.PUNTO_Y_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, GramaticaParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===4)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

GramaticaParser.EOF = antlr4.Token.EOF;
GramaticaParser.IMPRIMIR = 1;
GramaticaParser.MIENTRAS = 2;
GramaticaParser.VERDADERO = 3;
GramaticaParser.FALSO = 4;
GramaticaParser.PUNTO_Y_COMA = 5;
GramaticaParser.LLAVE_ABRE = 6;
GramaticaParser.LLAVE_CIERRA = 7;
GramaticaParser.PAREN_ABRE = 8;
GramaticaParser.PAREN_CIERRA = 9;
GramaticaParser.CADENA = 10;
GramaticaParser.ID = 11;
GramaticaParser.WS = 12;

GramaticaParser.RULE_programa = 0;
GramaticaParser.RULE_instruccion = 1;
GramaticaParser.RULE_bucle = 2;
GramaticaParser.RULE_salida = 3;
GramaticaParser.RULE_condicion = 4;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramaticaParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(GramaticaParser.EOF, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramaticaVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramaticaParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramaticaVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramaticaParser.RULE_bucle;
    }

	MIENTRAS() {
	    return this.getToken(GramaticaParser.MIENTRAS, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	LLAVE_ABRE() {
	    return this.getToken(GramaticaParser.LLAVE_ABRE, 0);
	};

	LLAVE_CIERRA() {
	    return this.getToken(GramaticaParser.LLAVE_CIERRA, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.exitBucle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramaticaVisitor ) {
	        return visitor.visitBucle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramaticaParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(GramaticaParser.IMPRIMIR, 0);
	};

	PAREN_ABRE() {
	    return this.getToken(GramaticaParser.PAREN_ABRE, 0);
	};

	CADENA() {
	    return this.getToken(GramaticaParser.CADENA, 0);
	};

	PAREN_CIERRA() {
	    return this.getToken(GramaticaParser.PAREN_CIERRA, 0);
	};

	PUNTO_Y_COMA() {
	    return this.getToken(GramaticaParser.PUNTO_Y_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramaticaVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GramaticaParser.RULE_condicion;
    }

	VERDADERO() {
	    return this.getToken(GramaticaParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(GramaticaParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GramaticaListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof GramaticaVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




GramaticaParser.ProgramaContext = ProgramaContext; 
GramaticaParser.InstruccionContext = InstruccionContext; 
GramaticaParser.BucleContext = BucleContext; 
GramaticaParser.SalidaContext = SalidaContext; 
GramaticaParser.CondicionContext = CondicionContext; 
