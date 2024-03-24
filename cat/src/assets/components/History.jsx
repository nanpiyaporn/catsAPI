import './History.css';

const History = ({ images }) => {

  return (
    
    <div>
      <h2> Cats Gallery!</h2>
      <div className="image-container">
      {images && images.length > 0 ? (
      images.map((pic, index) => (
        <li className="gallery" key={index}>
          <img
            className="gallery-screenshot"
            src={pic}
            alt="Undefined cat image query"
            width="500"
          />
        </li>
      )
      
      )
    ) : (
      <div>
        <h3></h3>
      </div>
    )}
  </div>
      </div>
    );
  };

export default History;