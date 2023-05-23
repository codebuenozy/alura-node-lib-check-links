# Projeto Nodejs Lib Check Links MD

Projeto realizado durante as aulas de *Nodejs: Criando sua Primeira Biblioteca*, na trilha FullStack do Grupo Boticário na plataforma da Alura, utilizando JavaScript e Nodejs foi desenvolvido uma biblioteca que percorre arquivos .md utilizados nas postagens de um blog, sua principal função é encontrar e testar links dos arquivos especificados retornando o código de status.

## Como Utilizar

Realize sua instalação preferencialmente de forma global para que possa ser acessada de qualquer pasta, utilize o comando `npm install check-links-md -g` 

Para utilizar, no terminal, use o comando `check-links-md ./caminho/do/arquivo.md` para extrair os links dos arquivo, ou o comando `check-links-md ./caminho/do/arquivo.md -- --valida` com a flag `--valida` para extrair e exibir o status code do link para validação, o caminho especificado pode ser somente do diretório `./diretorio` ou o caminho contendo o arquivo especifico `./diretorio/arquivo.md`.