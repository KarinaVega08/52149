// Generated from c:/Users/cnico/Desktop/analizador/Gramatica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by GramaticaParser.

export default class GramaticaVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by GramaticaParser#programa.
	visitPrograma(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by GramaticaParser#instruccion.
	visitInstruccion(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by GramaticaParser#bucle.
	visitBucle(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by GramaticaParser#salida.
	visitSalida(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by GramaticaParser#condicion.
	visitCondicion(ctx) {
	  return this.visitChildren(ctx);
	}



}