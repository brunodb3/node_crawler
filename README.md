# Node Crawler

Um projeto baseado em NodeJS para coletar dados de websites, desenvolvido por Bruno Duarte Brito.

> Este projeto foi desenvolvido Bruno Duarte Brito mantendo em mente o código open-source.
> Baseado no módulo [Osmosis](https://github.com/rchipka/node-osmosis/) pelo usuário ```rchipka``` do GitHub.

### Versão
1.0.0

### Tecnologia envolvida

Lista de tecnologias e linguagens de programação envolvidas:

* [NodeJS](https://nodejs.org)
* [JavaScript](http://www.w3schools.com/js/)

### Instalação

Antes de baixar o repositório, tenha certeza que sua máquina possui [NodeJS](https://nodejs.org/en/).

Clone o repositório em sua máquina:

```sh
$ git clone [url-do-repositorio]
$ cd [pasta-do-repositorio]
```

Então, prepare a plataforma, baixe os módulos e execute o script de exemplo:

```sh
$ npm install # instala todos os módulos do npm
$ node google_crawler.js # executa o script de exemplo, que realiza uma busca no Google
```

Você pode passar alguns parâmetros para o script ```google_crawler.js```.

```sh
-q ou --query > String que será utilizada como query. # node google_crawler.js -q "o que buscar"
-l ou --log > Booleano que dirá ao script para exibir os resultados no console # node google_crawler.js -l
-s ou --save > Booleano que dirá ao script se deverá salvar um arquivo com os resultados em json # node google_crawler.js -s
```

**Bruno Duarte Brito - 2017**
