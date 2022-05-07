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

The chatbot interface was kept at maximum possible decoupled from the engines as so it's possible, cahnging only one line of code, to implements the communication with various chtabot engines.

The chatbot interface was kept at maximum possible decoupled from the engines this way it's possible, changing only one line of code, to implement the communication with various chatbot engines.

Following the docks instructions and programming accordingly to interface definition is fully possible to develop you own engine or improve the ones provide with this library.

In this project there are four default engines located at *src\engines* folder, as described below:

- **pbah_bot.js** : it's the default engine that implements a local server access chatbot and contains a demo of the resources as audio an image messages that are available in this project.
- **pbah_api_bot.js** : this engine contains a sample of how to access an API using this chatbot library.
- **dialogflow.js** : implements a simple engine with the code necessary to access the Google Dialogflow service.
- **qnamaker.js** :  a code sample that demonstrates how to interact with Microsoft QnA Maker.

Keep in mind that this engines are simplified sample and my intention was give to you a starting point from which you can develop chatbot apps more sophisticated accordingly your needs.

You can read th [Engine Guide](docs/en-en/Engines.md) to learn how to change the provided engines above and the basic principles to develop your own engines from the samples provided in this library.

## Build for production and Deploy



Após realizar as alterações que você deseja e escolher o engine desejado, execute o comando abaixo para compilar, minificar e gerar os arquivos do chatbot que poderão ser usados em produção:

```
npm run build
```

Após executar o comando acima será criada na pasta do projeto a subpasta *chatbot* na qual estarão armazenados os arquivos a serem usados no deploy. Leia o [Guia do Deploy](docs/pt-br/Deploy.md) para saber como colocar em produção o chatbot.

## Agradecimento

Já agradeço por ter baixado e experimentado este projeto, espero que tenha sido útil de alguma forma, e peço que, se por acaso você gostar dele, me ajude dando uma estrela ⭐aqui no GitHub.
