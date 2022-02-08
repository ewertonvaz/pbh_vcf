# Guia de Engines

Neste guia vamos mostrar como selecionar os Engines de chatbot que serão utilizados em conjunto com o frontend. Este engines / motores implementam localmente a "inteligência" do chatbot e/ou fazem a interface com os serviços e frameworks que a implementam.

As seções com o título ***Prática xx*** correspondem às alterações no código original que serão feitas durante este guia. Assim, caso queira ir diretamente ao código basta procurar as seções com este título.

## Engines

Esta bibloteca contém inicialmente quatro engines todos localizados na pasta *src\engines*, são eles: 

- **pbah_bot.js** : é o engine default, implementa um chatbot com acesso ao servidor local e contém a demonstração dos recursos, como tipos de mensagens, disponíveis atualmente neste projeto.
- **pbah_api_bot.js** : este engine contém um exemplo de como acessar uma API usando esta bibloteca.
- **dialogflow.js** : contém o código necessário para acessar o Google Dialogflow.
- **qnamaker.js** : contém o código necessário para acessar o Microsoft Q&A Maker.

Tenha em mente que estes engines são exemplos simplificados e meu objetivo foi fornecer a você um ponto de partida a partir do qual possa desenvolver aplicativos de chatbot mais sofisticados conforme sua necessidade.

Na atual implementação desta biblioteca é possível utilziar a cada vez somente um engine e a definição de qual estará ativo é feita no código fonte que fica no arquivo: *src\components\chatbot\ChatAreaComponent.vue* que está, em parte, transcrito abaixo:

```
....
<script>
import MessageTime from './mixins/MessageGetTimeMixin.vue';
import Message from './ChatMessageComponent.vue'
// import engine from '../../engines/dialogflow.js';
// import engine from '../../engines/qnamaker';
import engine from '../../engines/pbah_bot';
//import engine from '../../engines/pbah_api_bot';
....
```

### Posição na Tela

Atributo: **position**

Este parâmetro controle a posição em que o chatbot será exibido na tela do navegador e consiste em um cadeia de caractere contendo um dos seguintes valores: 'top-left', 'top-right', 'bottom-left', 'bottom-right'. 

O valor padrão é : '*top-left*', ou seja, caso você não informe este parâmetro o chatbot será, por padrão, exibido no canto superior esquerdo da tela.

### Título

Atributo: **title**

Este parâmetro define o título que será exibido na janela do chatbot. O valor padrão é '*Título*', ou seja, caso você não informe este parâmetro o chatbot exibirá a palavra "Título".

***Prática 01:***

Altere o código do arquivo *src\components\chatbot\ChatAreaComponent.vue* para que os atibutos *position* e *title* fiquem da seguinte forma:

```
....
<script>
import MessageTime from './mixins/MessageGetTimeMixin.vue';
import Message from './ChatMessageComponent.vue'
// import engine from '../../engines/dialogflow.js';
// import engine from '../../engines/qnamaker';
// import engine from '../../engines/pbah_bot';
import engine from '../../engines/pbah_api_bot';
....
```

Após estas alterações verifique no navegador que agora o chatbot está localizado no canto inferior esquerdo e o título exibe o texto "Meu assistente Virtual".