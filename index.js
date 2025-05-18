import fs from "fs";
import antlr4 from "antlr4";

import GramaticaLexer from "./generated/GramaticaLexer.js";
import GramaticaParser from "./generated/GramaticaParser.js";
import CustomGramaticaVisitor from "./CustomGramaticaVisitor.js";

const tokenNames = {
  1: "IMPRIMIR",
  2: "MIENTRAS",
  3: "VERDADERO",
  4: "FALSO",
  5: "PUNTO_Y_COMA",
  6: "LLAVE_ABRE",
  7: "LLAVE_CIERRA",
  8: "PAREN_ABRE",
  9: "PAREN_CIERRA",
  10: "CADENA",
  11: "ID",
  12: "WS"
};

const input = fs.readFileSync("input.txt", "utf8");
const chars = new antlr4.InputStream(input);

const lexer = new GramaticaLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);

tokens.fill();
console.log("=== TOKENS ===");
tokens.tokens.forEach(token => {
    if (token && token.text && token.type !== antlr4.Token.EOF) {
    const name = tokenNames[token.type] ?? `TOKEN ${token.type}`;
    console.log(`[${name}] -> '${token.text}'`);}
});

const parser = new GramaticaParser(tokens);
parser.buildParseTrees = true;

const tree = parser.programa();

if (parser._syntaxErrors > 0) {
    console.error("Errores de sintaxis");
    process.exit(1);
}

console.log("\n=== ÁRBOL SINTÁCTICO ===");
console.log(tree.toStringTree(parser.ruleNames));

console.log("\n=== EJECUCIÓN ===");
const visitor = new CustomGramaticaVisitor();
visitor.visit(tree);
