import axios from 'axios';
import showdown from 'showdown';

const chat_kb_url =  process.env.VUE_APP_QNAMAKER_KB_URL;
const chat_kb_endpoint = process.env.VUE_APP_QNAMAKER_KB_ENDPOINT;
const endpointKey = process.env.VUE_APP_QNAMAKER_KB_KEY;
const converter = new showdown.Converter();

axios.defaults.headers.common['Authorization'] = `EndpointKey ${endpointKey}`;
axios.defaults.headers.common['Content-Type'] = `application/json`;

var responses = [];

export default {
  receive : receiveQnA
}

async function receiveQnA (payload) {
  responses = [];
  const data = { 
    question : !payload.qnaId ? payload : undefined,
    qnaId : payload.qnaId ? payload.qnaId : undefined
  };
  const response = await axios.post(
    chat_kb_url + '/' + chat_kb_endpoint,
    data
  );
  console.log(response.data);
  const text = response.data.answers[0].answer;
  const html  = converter.makeHtml(text);
  const options = !response.data.answers[0].context.prompts ? null : response.data.answers[0].context.prompts.map( 
    arr => {
     return { 
      text: arr.displayText,
      callback: arr.qnaId ? receiveQnA : undefined,
      payload: {
        qnaId: arr.qnaId
      }
    }
  } );
  responses.push( {
    type: 'menu',
    text,
    html,
    options
  });
  return responses;
}