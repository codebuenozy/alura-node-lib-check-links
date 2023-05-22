import fs from "fs";
import chalk from "chalk";

//Função que utiliza expressão regular e o operador de espalhamento ... para extrair links entre [] e ().
function extraiLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];
  const resultados = capturas.map(captura => ({[captura[1]]: [captura[2]]}));
  return resultados;
}

//Função que exibe um erro no console caso o arquivo não seja encontrado.
function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "Arquivo não encontrado"));
}

//Função assíncrona que percorre o arquivo especificado.
async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = "utf-8";
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(extraiLinks(texto));
  } catch (erro) {
    trataErro(erro);
  }
}

pegaArquivo("./arquivos/texto.md");
