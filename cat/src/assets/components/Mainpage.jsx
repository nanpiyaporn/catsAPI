import './Mainpage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
//import catOption  from './catOption';

const Mainpage = () => {

  const [catsData, setCatsData] = useState([null]);

  const fetchData = () => {
    axios.get('https://api.thecatapi.com/v1/images/search?api_key=live_KRlJiuUrksU0Hpq6JmbLSsA9SKpQwUyzs6dEFIkOqTp4ycRXZ3KvGEqnfskWWr9v')
      .then((response) => {
        setCatsData(response.data[0]);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
console.log(catsData);

  return (
    <div className="mainpage">
      <h1>Welcome to a Cat World!</h1>
      <p>🐱*😸*😹*😻*😾*🐱*😸*😹*😻</p>
      <button onClick={fetchData}>Get a new cat</button>
      <p></p>
      <div className = "cat-info">
        <button>Id: {catsData.id}</button>
        <button>Url: {catsData.url}</button>
        <button>Width: {catsData.width}</button>
        <button>Height: {catsData.height}</button>
      </div>
      <p></p>
      <div className = "image-container"><img src={catsData.url} alt="Cat" /></div>
      
    </div>
  )
}
export default Mainpage;