# Parabah Vue Chatbot Frontend

This is a front-end project which implements easily and quickly a chatbot interface. It was made using **Vue.js** with the purpose to gives you a starting point to implements your own chatbot web apllication.

From the code supplied here on it's possbile to construct complexer chatbots as well as integrate the sample chatbot with services and frameworks like Google DialogfFlow, Microsoft Q&A maker, IBM Watson and others.

Despite it gives you a good codebase wich already contain the minimal tools to implement a simple chatbot this is a work in progress so comments, pull requests or any other feedback will be much appreciated.

**Features**

- Customizable, it permits you to change: screen position, colors, bubble image (avatar), title, welcome message and other attributes.
- Developed in **Vue.js** as a frontend (browser) application.
- With code samples that helps you to easily adapt to a server implementation, Express and Node.js for instance, with access to the API endpoints.
- With two out of the box supplied driver / engines witch implements *basic access* to the chatbot frameworks:  **Google Dialogflow** and **Microsoft Q&A Maker**.
- A codebase that possibilities you to develop your own engines to access other frameworks or chatbots services.

## Requeriments

You will need the followings to use this library:

- Node.js (https://nodejs.org/en/download/)
- An code editor or IDE, VSCode is recommended (https://code.visualstudio.com/download)

This documentation was structured to permit that this project is used for non-programmers as so the library can be used for lowcode users too.

As a result in principle it's not necessary previous knowledge of Vue.js or JavaScript. However, of course, the most you know about this two tools the more you will benefit from the code contained in this project.

## Installation

To install use you favorite shell, cli or terminal (GitBash for instance) and run the following commands:

```
git clone https://github.com/ewertonvaz/pbh_vcf.git chatbot
cd chatbot
npm install
npm run serve
```

The last command will compile the project and puts it into hot-reload state which is adequate to **developer** mode. Now your sample chatbot  is accessible from the URL:

http://localhost:8080

In the build / deploy section of this documentation will be supplied instructions on how to compile this project to production. Recomendations and suggestions on how to deploy this app will be given too.

## Decking out the chatbot

When you access the running project for the very first time maybe you find odd the initial chatbot appearence. This was on purpose to show you in the [Customization Guide](docs/en-en/Customize.md) instructions on how to change the chatbot appearence so it looks the way you prefer it to.

Following this guide you will learn how to change the chatbot: avatar, title, screen position, color, border line, width, height, and other, so the application looks a more modern chatbot.

## Choosing the Engine

The Parabah Vue Chatbot Frontend library implements a generic interface which communicates through messages with another piece of software that I called in this project as chatbot **Engines**.

Neste projeto a interface foi mantida, o máximo possível, desacoplada dos engines, de forma que é possível, alterando apenas uma linha de código, implementar a comunicação com vários serviços de chatbot diferentes.

Além disso, seguindo as instruções e respeitando a interface é plenamente possível desenvolver seu próprio engine ou aprimorar os que são fornecidos com esta bibloteca.

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