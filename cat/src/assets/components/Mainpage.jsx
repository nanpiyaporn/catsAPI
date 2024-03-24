import './Mainpage.css';
import { useEffect, useState } from 'react';

import axios from 'axios';

//import catOption  from './catOption';

const Mainpage = () => {

  const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
  console.log(ACCESS_KEY);

  const [catsData, setCatsData] = useState([null]);

  // Fetch data from the API

  const fetchData = () => {
    axios.get('https://api.thecatapi.com/v1/images/search?api_key=')
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
      <button onClick={fetchData}>Get a new </button>
      <p>Hello my name is {catsData.name}</p>
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




// axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
// axios.defaults.headers.common['x-api-key'] = 'apiKey';

// class App extends Component {

//   async getBreeds() {
//       const res = await axios('/breeds');
//       return res.data;
//   }
//   async getCatsImagesByBreed(breed_id, amount) {
//       const res = await axios('/images/search?breed_ids='+breed_id + "&limit="+ amount);
      
//       console.table(res.data)
//       return res.data;
//   }

//   async loadBreedImages() {
//     console.log('Load Breed Images:', this.state.selected_breed)

//     let breed_images = await this.getCatsImagesByBreed(this.state.selected_breed, 5)

//     this.setState({ images: breed_images });
//   }

//   constructor(...args) {

//       super(...args);
//       this.state = {
//         images: [],
//         breeds: [], 
//         selected_breed: 0
//       };

//     this.onBreedSelectChange = this.onBreedSelectChange.bind(this);
//   }
//   async onBreedSelectChange(e) {
//     console.log("Breed Selected. ID:",e.target.value)
//     await this.setState({selected_breed:e.target.value});
//     await this.loadBreedImages();
//   }
//   componentDidMount() {
//       if (this.state.breeds.length===0) {
//           (async () => {
//               try {
//                   this.setState({breeds: await this.getBreeds()});
//               } catch (e) {
//                   //...handle the error...
//                   console.error(e)
//               }
//           })();
//       }
//   }
//   render() {
//       return (
//         <div>

//       <select value={this.state.selected_breed} 
//               onChange={this.onBreedSelectChange}>
//         {this.state.breeds.map((breed) => <option key={breed.id} value={breed.id}>{breed.name}</option>)}
//       </select>

//       <div>
//      {this.state.images.map((image) => <img className="cat-image" alt="" src={image.url}></img>)}
//      </div>

//      </div>
//       );
//   }
// }

// export default App;
export default Mainpage;