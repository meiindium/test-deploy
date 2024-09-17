// const API = {
//   GetChatbotResponse: async (message) => {
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         if (message === "hi" || message === "hello")
//           resolve("Welcome to chatbot!");
//         else resolve("echo : " + message);
//       }, 2000);
//     });
//   },
// };

// export default API;


// const API = {
//   GetChatbotResponse: async (message) => {
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         switch (message.toLowerCase()) {
//           case 'hello':
//           case 'hi':
//             case 'i':
//             resolve('sollu bro');
//             break;
//           case '.':
//             case ' ':
//             resolve('ethana type pannu bro');
//             break;
//           case 'how are you':
//             case 'how are you?':
//             resolve('Ena bro Soldra ne');
//             break;
//           case 'what is your name':
//             case 'what is your name?':
//               case 'name':
//                 case 'name?':
//                   case 'name ?':
//                     case 'your name':
//             resolve('ni-hey sollu bro');
//             break;
//           default:
//             resolve('Bro na onnu solla va bro');
//         }
//       }, 2000); // Adjust timeout as needed
//     });
//   },
// };

// export default API;

const API = {
  GetChatbotResponse: async (message) => {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        switch (message.toLowerCase()) {
          case 'hello':
          case 'hi':
          case 'i':
            resolve('sollu bro');
            break;
          case '.':
          case ' ':
            resolve('ethana type pannu bro');
            break;
          case 'how are you':
          case 'how are you?':
            resolve('Ena bro Soldra ne');
            break;
          case 'what is your name':
          case 'what is your name?':
          case 'name':
          case 'name?':
          case 'name ?':
          case 'your name':
            resolve('ni-hey sollu bro');
            break;
          case 'balaji':
          case 'babaji':
          case 'who is balaji':
          case 'who is babaji':
          case 'who is balaji?':
          case 'who is babaji?':
            resolve('Founder of Babaji-GPT');
            break;
          case 'niharika':
            case 'niha':
            resolve('VJ fav');
            break;
          case 'calculator':
          case 'calc':
          case 'math':
            resolve('Enter the expression you want to calculate.');
            break;
          default:
            if (/^[0-9+\-*/.() ]+$/.test(message)) {
              try {
                const result = eval(message);
                resolve(` ${result} bro`);
              } catch (error) {
                resolve('Sorry, I couldn\'t calculate that.');
              }
            } else {
              resolve('Bro na onnu solla va bro');
            }
        }
      }, 2000);
    });
  },
};

export default API;
