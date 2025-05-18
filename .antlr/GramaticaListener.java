// Generated from c:/Users/cnico/Desktop/analizador/Gramatica.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link GramaticaParser}.
 */
public interface GramaticaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link GramaticaParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(GramaticaParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link GramaticaParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(GramaticaParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link GramaticaParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(GramaticaParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GramaticaParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(GramaticaParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link GramaticaParser#bucle}.
	 * @param ctx the parse tree
	 */
	void enterBucle(GramaticaParser.BucleContext ctx);
	/**
	 * Exit a parse tree produced by {@link GramaticaParser#bucle}.
	 * @param ctx the parse tree
	 */
	void exitBucle(GramaticaParser.BucleContext ctx);
	/**
	 * Enter a parse tree produced by {@link GramaticaParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalida(GramaticaParser.SalidaContext ctx);
	/**
	 * Exit a parse tree produced by {@link GramaticaParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalida(GramaticaParser.SalidaContext ctx);
	/**
	 * Enter a parse tree produced by {@link GramaticaParser#condicion}.
	 * @param ctx the parse tree
	 */
	void enterCondicion(GramaticaParser.CondicionContext ctx);
	/**
	 * Exit a parse tree produced by {@link GramaticaParser#condicion}.
	 * @param ctx the parse tree
	 */
	void exitCondicion(GramaticaParser.CondicionContext ctx);
}