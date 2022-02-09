# Guia de Customização

Neste guia vamos alterar a aparência do chatbot, estas alterações serão feitas diretamente no código fonte dos componetes do Vue.js. Assim, dividi este guia em seções cada uma correspondendo a um componente.

As seções com o título ***Prática xx*** correspondem às alterações no código original que serão feitas durante este guia. Assim, caso queira ir diretamente ao código basta procurar as seções com este título.

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

Atributo: **position**

Este parâmetro controle a posição em que o chatbot será exibido na tela do navegador e consiste em um cadeia de caractere contendo um dos seguintes valores: 'top-left', 'top-right', 'bottom-left', 'bottom-right'. 

O valor padrão é : '*top-left*', ou seja, caso você não informe este parâmetro o chatbot será, por padrão, exibido no canto superior esquerdo da tela.

### Título

Atributo: **title**

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

Após estas alterações verifique no navegador que agora o chatbot está localizado no canto inferior esquerdo e o título exibe o texto "Meu assistente Virtual".

## ChatBot

O componente de ChatBot é composto por dois sub componentes um deles é o avatar, também chamado de **Bubble**, e a outra a área de mensagens denominada **ChatArea**.

Assim, vamos examinar a customização destas duas áreas de forma separada.

O arquivo de código fonte correspondente está em: *src\components\chatbot\ChatBot.vue* e as alterações descritas devem ser feitas neste arquivo.

### Bubble

Atributos:

* **background_color**: define a cor de fundo do Bubble, seu valor é uma string e pode ser qualquer valor aceito pela especificação do CSS. Em caso de dúvida nos valores das cores consulte esta [Referência](https://developer.mozilla.org/pt-BR/docs/Web/CSS/color_value).
* **border**: especifica o tipo borda que circundará o Bubble, também é uma string e pode definir de uma só vez os atributos: largura, estilo e cor da borda, p.ex: "4px dashed rgb(170, 50, 220)", definirá uma borda de 4px, tracejada e com a com RBG que corresponde aos valores red:170, green:50 e blue: 220. Para saber mais consulte esta [Referência](https://developer.mozilla.org/en-US/docs/Web/CSS/border).
* **avatar**: consiste em uma string que representa a URL da imagem que será exibida no Buble, ou seja, o avatar ou ícone do chatbot.

***Prática 02:***

No arquivo *src\components\chatbot\ChatBot.vue* procure a seção *Bubble* do componente, e altere *apenas* os valores dos atributos *background_color*, *border* e *avatar*  para que fiquem da seguinte forma:

```
<Bubble
  ....
  background_color="#F5F5FF"
  border="none"
  ....
  avatar="https://github.com/ewertonvaz/pbh_vcf/raw/main/public/img/rect6094-5-9.png"
/>
```

Após fazer as alterações verifique no navegador que o ícone do chatbot é uma outra imagem e que foi retirada a borda que existia antes.

Atributos:

* **Largura, Altura e Margens**: correspondem aos valores de *bubbleWidth*, *bubbleHeight* e *bubbleMargin*. Este atributos, diferente dos outros que vimos até aqui, são valores numéricos pois serão usados em cálculos internos deste chatbot. Por este motivo a alteração de seus valores é feita em outra parte do código. Veja abaixo como alterar os valores deste atributos.

***Prática 03:***

No arquivo *src\components\chatbot\ChatBot.vue* procure a seção *data()* do componente, e altere *apenas* os valores dos atributos *bubbleWidth*, *bubbleHeight* e *bubbleMargin* para que fiquem da seguinte forma:

```
 data() {
    return {
      ....
      bubbleWidth: 100,
      bubbleHeight: 100,
      bubbleMargin: 10,
    }
  },
```

**Observação**: Os valores devem ser especificado em *pixels*, pois é esta a unidade padrão utilizada neste chatbot.

Após fazer as alterações verifique no navegador que o avatar está maior e mais afastado das bordas lateriais e inferior do browser.

Concluímos as alterações no Bubble e vamos agora customizar a área de mensagens, denominada *ChatArea*.

### ChatArea

Atributos:

* **width**: define a **largura** da área de mensagens. Deve conter uma string que corresponda a um valor e uma unidade de medida, p.ex: '15rem' ou '256px'. Contudo, é recomendado o uso da medida em pixels, apesar de poderem ser usadas unidade diferentes. Caso não seja informado assumirá o valor padrão de '240px'.
* **height**: define a **altura** da área de mensagens, represntada por uma string contendo um valor e uma unidade de medida, p.ex: '25rem' ou '400px'. Contudo, é recomendado o uso da medida em pixels, apesar de poderem ser usadas unidade diferentes. Caso não seja informado assumirá o valor padrão de '400px'.
* **margin**: consiste em uma string que representa a margem, ou melhor, a distância entre área de mensagens e a borda do navegador.
* **border**: especifica o tipo borda que envolverá a área de mensagens, também é uma string e pode definir de uma só vez os atributos: largura, estilo e cor da borda, p.ex: "4px dashed rgb(170, 50, 220)", definirá uma borda de 4px, tracejada e com a com RBG que corresponde aos valores red:170, green:50 e blue: 220. Para saber mais consulte esta [Referência](https://developer.mozilla.org/en-US/docs/Web/CSS/border).
* **title_text_color**: define a cor do texto da área do título, seu valor é uma string e pode ser qualquer valor aceito pela especificação do CSS. Em caso de dúvida nos valores das cores consulte esta [Referência](https://developer.mozilla.org/pt-BR/docs/Web/CSS/color_value).
* **title_background_color**: define a cor de fundo da área do título.Segue as mesmas regras do item *title_text_color* descrito acima.
* **text_area_color**: define a cor do texto da área de input onde o usuário digita suas mensagens. Segue as mesmas regras do item *title_text_color* descrito acima.
* **text_area_background**: define a cor de fundo da área de input onde o usuário digita suas mensagens. Segue as mesmas regras do item *title_text_color* descrito acima.

***Prática 04:***

No arquivo *src\components\chatbot\ChatBot.vue* procure a seção *ChatArea* do componente, e altere *apenas* os valores dos atributos, inserindo os que não constarem no código, para que fiquem da seguinte forma:

```
<ChatArea 
      width="420px"
      height="600px"
      margin="10px"
      border="none"
      title_text_color="white"
      title_background_color="#800080"
      text_area_color="black"
      text_area_background="rgba(170, 50, 190, .6)"
      ....
 />
```

Após fazer as alterações verifique no navegador as alterações no tamanho da áes de mensagens, nas cores do título e na área onde os usuários digitam as suas perguntas.

Atributos:

* **Mensagem de boas vindas**: é possível definir a mensagem de boas vindas que será exibida pelo chatbot. Para fazer isto siga as instruções práticas abaixo.

***Prática 05:***

No arquivo *src\components\chatbot\ChatBot.vue* procure a seção *mounted()* do componente, e altere *apenas* os valores do atributo *html* para que fique da seguinte forma:

```
 mounted(){
    this.$refs.chat_area.setWelcomeMessage({
      html: "Olá! Receba as boas vindas. Meu nome é <strong>Parabot</strong> e estou aqui para ajudar. Digite sua pergunta abaixo ou <strong>menu</strong> para ver as opções."
    })
  }
```

Após fazer esta última alteração verifique no navegador que a mensagem inicial exibida pelo chatbot foi alterada.

Com isso concluímos este guia básico, porém existem ainda muitas possibilidade de customização neste chatbot para aqueles que conhecem um pouco de Vue.js e CSS. Se este é o seu caso recomendo que examine os códigos dos componentes.

Encerramos aqui as configurações básicas na aparência do chatbot.

Uma outra personalização que é necessário fazer é a do **Engine** que vai ser utilizado pelo chatbot. Para entender como fazer isto consulte o [Guia de Engines](Engines.md).



[Voltar ao início](../../README.md)