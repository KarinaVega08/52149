import GramaticaVisitor from "./generated/GramaticaVisitor.js";

class CustomGramaticaVisitor extends GramaticaVisitor {
  visitPrograma(ctx) {
    return ctx.instruccion().forEach(instr => this.visit(instr));
  }

  visitInstruccion(ctx) {
    if (ctx.bucle()) return this.visit(ctx.bucle());
    if (ctx.salida()) return this.visit(ctx.salida());
  }

  visitSalida(ctx) {
    const texto = ctx.CADENA().getText();
    const sinComillas = texto.substring(1, texto.length - 1);
    console.log(sinComillas);
  }

  visitBucle(ctx) {
    const condicion = ctx.condicion().getText();
    if (condicion === "falso") return;

    for (let i = 0; i < 5; i++) {
      ctx.instruccion().forEach(instr => this.visit(instr));
    }
  }
}

export default CustomGramaticaVisitor;
