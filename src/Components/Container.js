import React, { useContext } from 'react';
import { CityContext } from '../Context/CityContext';
import { SearchContext } from '../Context/SearchContext';
import { Card, Button } from 'react-bootstrap';
import scattered from '../Clouds/scattered.png'
import broken from '../Clouds/broken_clouds.png';
import overcast from '../Clouds/overcast.png';
import clear from '../Clouds/clear.png';
import rain from '../Clouds/rainy.png';
import shower from '../Clouds/shower.png';
import few from '../Clouds/few.png';
import undefined from '../Clouds/undefined.png';
import storm from "../Clouds/storm.png";
import unknown from "../Clouds/unknown.png"


const Container = () => {
  const { cityData, loading, loadMoreCities } = useContext(CityContext);
  const { searchTerm, searchResults, handleSearchChange, handleSearch } = useContext(SearchContext);
  const renderWeatherData = (data) => {
    if(data.weather[0].id === 802){
      return(
        <div className='Clouds'>
        <img className='CloudImg' src={scattered} alt='scattered' />
        <h6>{data.weather[0].description}</h6>
        <Button variant="info">Details</Button>
      </div>
      );
    }else if (data.weather[0].id === 803) {
      return(
        <div className='Clouds'>
        <img className='CloudImg' src={broken} alt='broken' />
        <h6>{data.weather[0].description}</h6>
        <Button variant="info">Details</Button>
      </div>
      );
    }else if(data.weather[0].id === 804){
      return(
        <div className='Clouds'>
        <img className='CloudImg' src={overcast} alt='overcast' />
        <h6>{data.weather[0].description}</h6>
        <Button variant="info">Details</Button>
      </div>
      );
    }else if (data.weather[0].id === 800) {
      return(
        <div className='Clouds'>
        <img className='CloudImg' src={clear} alt='clear' />
        <h6>{data.weather[0].description}</h6>
        <Button variant="info">Details</Button>
      </div>
      );
    }else if (data.weather[0].id === 500){
      return(
        <div className='Clouds'>
        <img className='CloudImg' src={rain} alt='rain' />
        <h6>{data.weather[0].description}</h6>
        <Button variant="info">Details</Button>
      </div>
      );
    }else if (data.weather[0].id === 520){
      return(
        <div className='Clouds'>
        <img className='CloudImg' src={shower} alt='shower' />
        <h6>{data.weather[0].description}</h6>
        <Button variant="info">Details</Button>
      </div>
      );
    }else if(data.weather[0].id === 801){
      return(
        <div className='Clouds'>
        <img className='CloudImg' src={few} alt='few' />
        <h6>{data.weather[0].description}</h6>
        <Button variant="info">Details</Button>
      </div>
      );
    }else if(data.weather[0].id === 701){
      return(
        <div className='Clouds'>
        <img className='CloudImg' src={undefined} alt='undefined' />
        <h6>{data.weather[0].description}</h6>
        <Button variant="info">Details</Button>
      </div>
      );
    }else if (data.weather[0].id === 200){
      return(
        <div className='Clouds'>
        <img className='CloudImg' src={storm} alt='storm' />
        <h6>{data.weather[0].description}</h6>
        <Button variant="info">Details</Button>
      </div>
      );
    }else{
      return(
        <div className='Clouds'>
        <img className='CloudImg' src={unknown} alt='unknown' />
        <h6>{data.weather[0].description}</h6>
        <Button variant="info">Details</Button>
      </div>
      );
    }
  }


  return (
    <>
      <div className="container">
        <div className="mb-3">
          <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Şehir giriniz.." />
          <button className="btn btn-danger ms-2" onClick={handleSearch}>Ara</button>
        </div>
        <div className="row">
          {searchTerm && searchResults.length === 0 && (
            <p>No matching cities found</p>
          )}
          {searchResults.length > 0 ? (
            searchResults.map((data, index) => (
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-12 mb-2" key={index}>
                <Card>
                  <Card.Body className='cardFull'>
                    <Card.Title>{data.name.split(' ')[0]}</Card.Title>
                    <Card.Text>
                      Temperature: {Math.round(data.main.temp-273)}°C
                      <br />
                      Humidity: {data.main.humidity}%
                    </Card.Text>
                    
                    {renderWeatherData(data)}
                    
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            cityData.map((data, index) => (
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2" key={index}>
                <Card>
                  <Card.Body className='cardFull'>
                    <Card.Title>{data.name.split(' ')[0]}</Card.Title>
                    <Card.Text>
                      Temperature: {Math.round(data.main.temp-273)}°C
                      <br />
                      Humidity: {data.main.humidity}%
                    </Card.Text>

                    {console.log(data)}
                    {renderWeatherData(data)}
                  </Card.Body>
                </Card>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="text-center mt-3">
        {loading && <p>Loading...</p>}
        {!loading && (
          <button className="btn btn-danger" onClick={loadMoreCities}>Load More</button>
        )}
      </div>
    </>
  );
};

export default Container;
