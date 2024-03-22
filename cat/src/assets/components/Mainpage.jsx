import './Mainpage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import catOption  from './catOption';

const Mainpage = () => {

  const [catsData, setCatsData] = useState([null]);

  const fetchData = () => {
    axios.get('https://api.thecatapi.com/v1/images/search?limit=1',catOption)
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
      <div><img src={catsData.url} alt="Cat" /></div>

    </div>
  )
}
export default Mainpage;