# Guia de Customização

Neste guia vamos altera a aparência do chatbot, estas alterações serão feitas diretamene no código fonte dos componetes do Vue.js. Assim, dividi este guia em seções cada uma correspondendo a um componente.

## ChatApp

Este componente codifica a poisção global do chatbot e o seu título. Seu arquivo de código fonte está em: *src\ChatApp.vue* e foi, em parte, transcrito abaixo:

```
<template>
  <div id="chat-app">
  <ChatBot 
   position="bottom-left"
   title="Um chat bot"
  />
 </div>
</template>
```

### Posição na Tela

Parâmetro: **position**

Este parâmetro controle a posição em que o chatbot será exibido na tela do navegador e consiste em um cadeia de caractere contendo um dos seguintes valores: 'top-left', 'top-right', 'bottom-left', 'bottom-right'. 

O valor padrão é : '*top-left*', ou seja, caso você não informe este parâmetro o chatbot será, por padrão, exibido no canto superior esquerdo da tela.

### Título

Parâmetro: **title**

Este parâmetro define o título que será exibido na janela do chatbot. O valor padrão é '*Título*', ou seja, caso você não informe este parâmetro o chatbot exibirá a palavra "Título".

***Prática 01:***

Altere o código do arquivo *src\ChatApp.vue* para que os atibutos *position* e *title* fiquem da seguinte forma:

```
<template>
  <div id="chat-app">
  <ChatBot 
   position="bottom-left"
   title="Meu assistente Virtual"
  />
 </div>
</template>
```

Após estas alterações verifique no navegador que agora o chatbot está localizado no canto inferior esquero e o título exibe o texto "Meu assistente virtual".

## ChatBot

O componente de ChatBot é composto por dois sub componentes um delas é o avatar, também chamado de Bubble, e a outra a área de mensagens denominada ChatArea.

Assim, vamos examinar a customização destas duas áreas de forma separada.

O arquivo de código fonte correspondente está em: *src\components\chatbot\ChatBot.vue* e as alterações abaixo devem ser feitas neste arquivo.

```
<template>
  <div id="chat-app">
  <ChatBot 
   position="bottom-left"
   title="Um chat bot"
  />
 </div>
</template>
```

### Posição na Tela

Parâmetro: **position**

Este parâmetro controle a posição em que o chatbot será exibido na tela do navegador e consiste em um cadeia de caractere contendo um dos seguintes valores: 'top-left', 'top-right', 'bottom-left', 'bottom-right'. 

O valor padrão é : '*top-left*', ou seja, caso você não informe este parâmetro o chatbot será, por padrão, exibido no canto superior esquerdo da tela.