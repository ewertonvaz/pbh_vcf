# Guia de Engines

Neste guia vamos mostrar como selecionar os Engines de chatbot que serão utilizados em conjunto com o frontend. Este engines / motores implementam localmente a "inteligência" do chatbot ou então fazem a interface com os serviços e frameworks que a implementam.

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

Assim, para ativar um dos engines basta retirar da linha de código as barras duplas que marcam os comentários e deixar os demais comentados, ou seja com as duas barras de comentários. No código acima vemos que está ativo o enigne **pbah_bot**, este é o padrão que tem sido usado até agora em nossas interações com o chatbot.

### Acessando uma API

Para demonstrar como o chatbot pode ser usado para acessar uma API codifiquei o engine **pbah_api_bot**. A implementação atual faz acesso a [PokeAPI](https://pokeapi.co/) para obter algumas imagens do Pokemon que você escolher. Partindo deste código você pode criar seu próprio engine para acessar outras API de seu interesse.

***Prática 01:***

Altere o código do arquivo *src\components\chatbot\ChatAreaComponent.vue* para deixar ativo somente o engine **pbah_api_bot**, de forma que o código fique semelhante ao trecho abaixo:

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

Após esta alteração vá até o chatbot e digite o nome de um Pokemon e veja que serão buscadas na PokeAPI as imagens correspondentes. 

### Engine DialogFlow

Com esta biblioteca de chatbot foi fornecido um para o engine **dialogflow**. Com ele é possível acesso aos agentes criados no serviço DialogFlow do Google usado para criar chtabot conversacionais. 

Este é um trabalho em andamento e o código fornecido um pontod e partida que implementa apenas a comunicação por mensagens de texto através dos intents do agente DialogFlow.

***Prática 02:***

Para usar este engine você deverá previamente: criar um agente no DialogFlow; criar uma conta de serviços no Google IAM; e gerar uma chave para esta conta. 

Durante o processo de gerar a chave será criado um arquivo contdo as informações é neste arquivo que estão as informações necessárias a executar os próximos paasos.

Agora mude o nome do arquivo *.env.sample* que está na pasta raiz para *.env*, e neste arquivo altere os seguintes parâmetros:

```
VUE_APP_DIALOGFLOW_CLIENT_ID=client_id@project_id.iam.gserviceaccount.com
VUE_APP_DIALOGFLOW_SECRET_KEY="-----BEGIN PRIVATE KEY-----\nYOUR SECRET KEY GOES HERE COPY AND PASTE IT\n-----END PRIVATE KEY-----\n"
VUE_APP_DIALOGFLOW_PROJECT_ID=project_id
```

**VUE_APP_DIALOGFLOW_CLIENT_ID**: insira aqui o valor do campo *client_email* que está no arquivo de chaves.

**VUE_APP_DIALOGFLOW_SECRET_KEY**: Neste campo deverá ser inserido o valor do campo *private_key* que também está no arquivo de chaves. Este é o valor da chave privada e, mesmo que fique um linha muito grande, deverá ser inserido, sem quebra de linhas, todo seu conteúdo, incluíndo as tags *-----BEGIN PRIVATE KEY-----\n* e *\n-----END PRIVATE KEY-----\n*

**VUE_APP_DIALOGFLOW_PROJECT_ID**: deverá conter o valor do campo project_id que está no mesmo arquivo de chaves gerado durante a criação da conte de serviços.

Por último, altere o código do arquivo *src\components\chatbot\ChatAreaComponent.vue* para deixar ativo somente o engine **dialogflow**, de forma que o código fique semelhante ao trecho abaixo:

```
....
<script>
import MessageTime from './mixins/MessageGetTimeMixin.vue';
import Message from './ChatMessageComponent.vue'
import engine from '../../engines/dialogflow.js';
// import engine from '../../engines/qnamaker';
// import engine from '../../engines/pbah_bot';
// import engine from '../../engines/pbah_api_bot';
....
```

Caso o servidor esteja ativo (*npm run serve*), será necessário parar e iniciar novamente para que as mudanças no arquivo *.env* tenham efeito. Após esta alteração vá até o chatbot e teste seu agente DialogFlow digitando algumas perguntas que você já deve ter criado anteriormente. 

### Engine Microsoft QnA Maker

O serviços da Microsoft [QnA Maker](https://www.qnamaker.ai/) faz do pacote Azure Cognitive Service e pode ser utilizado para criar um chatbot que funciona nos moldes de pergunta / resposta apropriado para implementar um FAQ, por exemplo. Nesta biblioteca foi implementado também um engine para demonstrar um chatbot com o **qnamaker**.

***Prática 03:***

Para usar este engine você deverá previamente: acessar / criar uma conta no Azure; criar uma knowledge base (**KB**) no QnA Maker; publicar o **KB**; e em seguida, usando o View Code, ober os parâmetros que serão informados no arquivo *.env* conforme descrito abaixo.

Primeiro, caso ianda não tenha feito isto, deve mudar o nome do arquivo *.env.sample* que está na pasta raiz para *.env*, e neste arquivo alterar os seguintes parâmetros:

```
VUE_APP_QNAMAKER_KB_KEY=qnamaker_key
VUE_APP_QNAMAKER_KB_URL=url_qnamaker_kb
VUE_APP_QNAMAKER_KB_ENDPOINT=kb_endpoint
```

**VUE_APP_QNAMAKER_KB_KEY**: Informar a chave de acesso ao **KB**, normalmente referenciada como *EndpointKey*.

**VUE_APP_QNAMAKER_KB_URL**: Corresponde ao valor do campos *Host* e representa a URL de acesso ao servidor 

**VUE_APP_QNAMAKER_KB_ENDPOINT**: É possível criar vários **KB** e cda um deles corresponderá a um endpoint, informe aqui o endpoint do KB que deseja acessar usando o chatbot.

Por último, altere o código do arquivo *src\components\chatbot\ChatAreaComponent.vue* para deixar ativo somente o engine **qnamaker**, de forma que o código fique semelhante ao trecho abaixo:

```
....
<script>
import MessageTime from './mixins/MessageGetTimeMixin.vue';
import Message from './ChatMessageComponent.vue'
// import engine from '../../engines/dialogflow.js';
import engine from '../../engines/qnamaker';
// import engine from '../../engines/pbah_bot';
// import engine from '../../engines/pbah_api_bot';
....
```

Caso o servidor esteja ativo (*npm run serve*), será necessário parar e iniciar novamente para que as mudanças no arquivo *.env* tenham efeito. Após esta alteração vá até o chatbot e digite algumas perguntas que você já deve ter criado anteriormente no seu KB do QnA Maker. 

Concluímos aqui este guia, tenha em mente que esta biblioteca é um trabalho em andamento e que em novos releases podem trazer outros recursos.



[Voltar ao início](../../README.md)