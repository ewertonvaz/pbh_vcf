# Parabah Vue Chatbot Frontend

Este projeto é um front end para implementar a interface de um chatbot de forma rápida e simples. Foi desenvolvido em **Vue.js** e construído com o objetivo de ser um ponto de partida para o desenvolvimento de chatbots em websites.

Partindo do código fornecido aqui é possível construir chatbots mais complexos e também integrar com serviços e frameworks de chatbots de mercado, como por exemplo: Google DialogfFlow, Microsoft Q&A maker, IBM Watson e outros.

**Características:**

- Aparência customizável, podendo alterar: a localização na tela, as cores, o avatar, o título, a mensagem de boas-vindas e outros parâmetros.
- Escrito em **Vue.js** e, portanto, funcionando como um front-end que é executado no browser.
- Com exemplos de código que permitem a migração de forma fácil para um servidor Node.js com acesso por meio de uma API.
- Fornece dois drivers / engines que implementam o *acesso básico* aos frameworks de chatbot: **Google Dialogflow** e **Microsoft Q&A Maker**.
- Possibilidade de acesso a outros serviços através de programação de novo Engines.

## Pré-requisitos

Para utilizar esta biblioteca você necessitará instalar em seu ambiente de desenvolvimento:

- Node.js (https://nodejs.org/en/download/)
- Uma IDE ou editor de código, recomendo o VSCode (https://code.visualstudio.com/download)

A documentação está sendo estruturada de maneira a permitir que este projeto seja utilizado também por não programadores, de forma que a princípio não é necessário conhecimento prévio de Vue.js ou Javascript . 

Entretanto, você irá  se beneficiar mais deste projeto caso conheça pelo menos o básico de Vue.js e Javascript.

## Instalação

Para realizar a instalação entre em um shell, linha de comando, ou terminal e execute os comandos abaixo:

```
git clone https://github.com/ewertonvaz/pbh_vcf.git chatbot
cd chatbot
npm install
npm run serve
```

O último comando acima irá compilar o projeto e ativar o mesmo no modo hot-reload que é o mais apropriado para **desenvolvimento**. Seu chatbot estará, então, disponível acessando a seguinte URL:

http://localhost:8080

Na seção de build / deploy abaixo serão fornecidas instruções de como compilar o projeto para produção e sugestões de como fazer o deploy do aplicativo.

## Customizando a aparência

Quando acessar a aplicação exemplo pela primeira vez é possível que você estranhe a aparência inicial do chatbot. Deixei assim de propósito para que você siga as instruções do [Guia de Customização](docs/pt-br/Customizar.md) e possa alterar a aparência do chatbot de forma a que ele fique com a aparência que você desejar.

Seguindo as instruções do guia acima você poderá alterar o avatar, o título, a posição na tela, as cores, linhas e tamanhos do seu chatbot.

## Escolhendo o Engine

O Parabah Vue Chatbot Frontend implementa uma interface genérica que se comunica através de mensagens com **Engines**, ou motores, de chatbot. Desta forma, é possível, alterando apenas uma linha de código, implementar a comunicação com vários serviços de chatbot.

Neste projeto estão contido 4 engines padrão localizados na pasta *src\engines*, são eles: 

- **pbah_bot.js** : é o engine default, implementa um chatbot com acesso ao servidor local e contém a demonstração dos recursos, como tipos de mensagens, disponíveis atualmente neste projeto.
- **pbah_api_bot.js** : este engine contém um exemplo de como acessar uma API usando esta bibloteca.
- **dialogflow.js** : contém o código necessário para acessar o Google Dialogflow.
- **qnamaker.js** : contém o código necessário para acessar o Microsoft Q&A Maker.

Tenha em mente que estes engines são exemplos simplificados e meu objetivo foi fornecer a você um ponto de partida a partir do qual possa desenvolver aplicativos de chatbot mais sofisticados conforme sua necessidade.

Você poder acessar o [Guia de Engines](docs/pt-br/Engines.md) para aprender como alternar entre os motores acima e os princípios básicos para desenvolver os seus próprios engines a partir dos exemplos desta biblioteca.

## Build e Deploy para produção

Após realizar as alterações que você deseja e escolher o engine desejado, execute o comando abaixo para compilar, minificar e gerar os arquivos do chatbot que poderão ser usados em produção:

```
npm run build
```

Após executar o comando acima será criada na pasta do projeto a subpasta *chatbot* na qual estarão armazenados os arquivos a serem usados no deploy. Leia o [Guia do Deploy](docs/pt-br/Deploy.md) para saber como colocar em produção o chatbot.

## Agradecimento

Já agradeço por ter baixado e experimentado este projeto, espero que tenha sido útil de alguma forma, e peço que, se por acaso você gostar dele, me ajude dando uma estrela ⭐aqui no GitHub.

Agora se você gostou muito pode também, mas só se quiser mesmo, clicar na xícara ao lado e me pagar um café. [☕](https://www.buymeacoffee.com/ewertonvazb)