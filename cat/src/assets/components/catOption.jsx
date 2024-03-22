//import apiKey from '/src/.env';
// catOption.js

const apiKey = process.env.REACT_APP_API_KEY;

const catOption = {
  method: 'GET',
  headers: {
    "Content-Type": "application/json",
    "x-api-key": apiKey,
  }
};

export default catOption;
