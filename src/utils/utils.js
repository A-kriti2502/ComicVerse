import MD5 from "crypto-js/md5";

const API_URL = process.env.REACT_APP_BASE_URL;

const getHash = (ts, privateKey, publicKey) => {
    return MD5(ts + privateKey + publicKey).toString();
  };

  const fetchHeroes = async (value) => {
    let baseurl = `${API_URL}/v1/public/characters`;
  
    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
  
    let url = `${baseurl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${value}`;
  
    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data.data.results);
      return data.data.results;
    } catch (err) {
      console.error(err);
      return;
    }
  };
  const fetchHero = async (id) => {
    let baseurl = `${API_URL}/v1/public/characters/${id}`;
  
    let ts = Date.now().toString();
    let apiKey = process.env.REACT_APP_API_KEY;
    let privateKey = process.env.REACT_APP_PRIVATE_KEY;
    let hash = getHash(ts, privateKey, apiKey);
  
    let url = `${baseurl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
  
    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data.data.results);
      return data.data.results;
    } catch (err) {
      console.error(err);
      return;
    }
  };

export {fetchHeroes , fetchHero};