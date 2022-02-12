import axios from 'axios'
import jwt from 'jsonwebtoken';

const clientId = process.env.VUE_APP_DIALOGFLOW_CLIENT_ID;
const secretKey = process.env.VUE_APP_DIALOGFLOW_SECRET_KEY;
const projectId =process.env.VUE_APP_DIALOGFLOW_PROJECT_ID;
const langCode = "pt-BR";
var token = null;

export default {
    async receive (question) {
      if (!token) {
        token = await generateJwt();
      }
      // console.log(token);
      try {
        const responses = await this.detectIntent(question);
        return responses;
      } catch(e) {
        console.log(e.toString())
        token = await generateJwt();
        return Array({text : 'Não consigo responder agora, por favor aguarde um pouco e tente novamente.' });
      }
    },

    async detectIntent(text){
       let responses = [];
       let isMenu = false;
       let options = [];
       const url="https://dialogflow.googleapis.com/v2/projects/" + projectId + "/agent/sessions/-:detectIntent";
        let data = {
          "queryInput": {
              "text": {
                  "languageCode": langCode,
                  "text": text
              }
          }
        }

        let headers = {
          'Content-Type' : 'application/json',
          'Authorization' : `${token.data.token_type} ${token.data.access_token}`,
        }
    
        const response = await axios({
          method: 'post',
          url,
          data,
          headers
        })
        const intent = response.data.queryResult;
        console.log(intent);
        const { fulfillmentMessages, fulfillmentText } = intent;
        if (fulfillmentText) {
          responses.push( {
            action: intent.action,
            text: intent.fulfillmentText ? intent.fulfillmentText : intent.action
          });
        } else {
          fulfillmentMessages.forEach(message => {
            // console.log(message)
            let text = '';
            if ( message.text ){
              text = message.text.text[0] ? message.text.text[0] : ''
            } else if (message.quickReplies) {
              isMenu = true;
              text = message.quickReplies.title
              message.quickReplies.quickReplies.forEach( opt => {
                options.push({
                  text : opt,
                  callback: null
                });
              })
            }
            const response = {
              type: isMenu ? 'menu' : 'text',
              action: intent.action,
              options,
              text
            }
            responses.push(response);
          });
        }
        return responses;
      },
}


async function generateJwt() {
  const data = {
    iss: clientId,
    scope: "https://www.googleapis.com/auth/dialogflow",
    aud: "https://oauth2.googleapis.com/token",
    exp : Math.floor(Date.now() / 1000) + 60 * 60,
    iat : Math.floor(Date.now() / 1000)
  }
  const options = {
    header: {"alg":"RS256","typ":"JWT"}
    //algorithm: "HS256",
    // expiresIn: "1h"
   };
  const jwtGenerated = jwt.sign(data, secretKey, options);

  // POST: https://oauth2.googleapis.com/token
  // grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer"
  // assertion: Informar o JWT, incluindo assinatura.
  try {
    const token = await axios({
      method: 'post',
      url: 'https://oauth2.googleapis.com/token',
      data: {
        grant_type: encodeURI("urn:ietf:params:oauth:grant-type:jwt-bearer"),
        assertion: jwtGenerated
      }
    });
    return token;
  } catch (e) {
    console.log(e.toString());
    return null;
  }
}