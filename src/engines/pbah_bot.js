function detectIntent(text){
  if (/oi|olá|bem/.test(text)) {
    return 'greetings'
  }
  if (/menu|opç|ajuda/.test(text)) {
    return 'menu'
  }
  return 'unkown';
}

var responses = [];

export default {
  async receive (question) {
    const intent = detectIntent(question);
    console.log(intent);
    responses = [];
    switch (intent) {
      case 'greetings':
        responses.push( {
          type: 'text',
          text: await getGreeting()
        });
        break;
      case 'menu':
        responses.push( {
          type: 'menu',
          text: 'As opções disponíveis são :',
          options: await this.getMenu(),
          callback: this.callBack
        });
        break;          
      default:
        responses = Array({ text: 'Desculpe, não entendi! Para saber as opções disponíveis digite: menu'});
        break;
    }
    return responses;
  },
  
  async getMenu(){
    return Array(
      { text: "Exibir imagem", callback: this.getImage },
      { text: "Tocar audio", callback: this.getAudio },
      { text: "Assitir video", callback: this.getVideo }
    );
  },

  async getImage(){
    return {
      type: 'image',
      url: '/img/pug-g2da52a857_1920.jpg',
    };
  },

  async getAudio(){
    return {
      type: 'audio',
      url: '/media/coin.wav',
      format: 'wav'
    };
  },

  async getVideo(){
    console.log('Video');
  }
}

async function getGreeting(){
  const phrases = Array(
    "Oi",
    "Saudações !",
    "Olá",
    "Estou aqui para ajudar.",
    "Como posso ser útil?", 
    "Seja bem vindo(a)!"
  );
  const i = Math.floor(Math.random() * phrases.length);
  return phrases[i];
}