const url = "https://pokeapi.co/api/v2/"
const endpoints = {
  types: 'type/',
  habitat: 'pokemon-habitat/',
  ability: 'ability/',
  color: 'pokemon-color/',
  pokemon: 'pokemon/'
}
import axios from 'axios';

function detectIntent(text){
  if (/tipo/.test(text)) {
    return 'type'
  }
  if (/ambient/.test(text)) {
    return 'habitat'
  }
  if (/habilid/.test(text)) {
    return 'ability'
  }
  if (/cor/.test(text)) {
    return 'color'
  }
  return 'unkown';
}

export default {
    types: [],
    habitats: [],
    color: [],
    abilities: [], 
    responses: [],
    async receive (question) {
        this.responses = [];
        const intent = detectIntent(question)
        switch (intent) {
          case 'type':
            this.responses.push( {
              type: 'menu',
              html: 'Escolha o <strong>tipo</strong> do Pokemon',
              options: await this.getTypes()
            });
            break;
          case 'habitat':
              this.responses.push( {
                type: 'menu',
                html: 'Escolha o <strong>ambiente</strong> do Pokemon',
                options: await this.getHabitats()
              });
              break;
          case 'ability':
                this.responses.push( {
                  type: 'menu',
                  html: 'Escolha o <strong>habilidade</strong> do Pokemon',
                  options: await this.getAbilities()
                });
                break;
          case 'color':
            this.responses.push( {
              type: 'menu',
              html: 'Escolha a <strong>cor</strong> do Pokemon',
              options: await this.getColors()
            });
            break;      
          default:
            this.responses = await this.getPokemon(question);
            break;
        }
        return this.responses;
    },

    async getPokemon(name) {
      let result = [];
      try {
        const pokemon = await axios.get(url+endpoints.pokemon + name);
        console.log(pokemon);
        if (pokemon.status == 404) {
          result.push({ text: 'Desculpe, não encontrei! Vamos tentar de novo? Digite o nome de um Pokemon'});
        } else {
          const { front_default, front_shiny, back_default, back_shiny, other  } = pokemon.data.sprites;
          const officialArtWork = other['official-artwork']['front_default'];
          if (front_default) { result.push({ type: 'image', url: front_default }) }
          if (front_shiny) { result.push({ type: 'image', url: front_shiny }) }
          if (back_default) { result.push({ type: 'image', url: back_default }) }
          if (back_shiny) { result.push({ type: 'image', url: back_shiny }) }
          if (officialArtWork) { result.push({ type: 'image', url: officialArtWork }) }

          if ( result.length > 0 ) {
            return result;
          } else {
            result.push({
              type: 'text',
              text: `O nome do Pokemon escolhido é ${pokemon.data.name}, mas não encontrei nenhum sprite para ele 😞`
            });
          }
        }
      } catch(e) {
        console.log(e.toString())
        result.push({ text: 'Desculpe, não encontrei! Vamos tentar de novo? Digite o nome de um Pokemon'});
      }
      return result;
    },

    async getTypes(){
      const result = await axios.get(url+endpoints.types);
      return result.data.results.map( arr => { return { text: arr.name, url: arr.url  } });
    },
    
    async getHabitats(){
      const result = await axios.get(url+endpoints.habitat);
      return result.data.results.map( arr => { return { text: arr.name, url: arr.url } } );
    },

    async getAbilities(){
      const result = await axios.get(url+endpoints.ability);
      console.log(result);
      return result.data.results.map( arr => { return { text: arr.name, url: arr.url } } );
    },

    async getColors(){
      const result = await axios.get(url+endpoints.color);
      return result.data.results.map( arr => { return { text: arr.name, id: arr.id } } );
    }
}