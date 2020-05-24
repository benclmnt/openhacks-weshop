import React from 'react';
import data from './stores.json';
import '../css/storesearch.css';
import StoreSearchCard from './StoreSearchCard';

function StoreSearch() {
  const [state, setState] = React.useState({
    lat: "",
    lon: "",
    radius: 50,
  })

  const [stores, setStores] = React.useState([]);

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('searching for stores with data: ');
    console.log(state);
    if(state.lat !== '' && state.lon !== ''){
      setStores(data);
    }
  };

  const getLocation = () => {
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    const osmMap = document.querySelector('#osm-map');

    mapLink.href = '';
    mapLink.textContent = '';

    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;

      setState({
        ...state,
        lat: latitude,
        lon: longitude
      })

      status.textContent = '';;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
      osmMap.innerHTML = `<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=103.77382993698122%2C1.2963833805430944%2C103.7788510322571%2C1.3001321461852606&amp;layer=mapnik&amp;marker=1.2982577640590016%2C103.77634048461914" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=${latitude}&amp;mlon=${longitude}#map=18/1.29826/103.77634">View Larger Map</a></small>`
    }

    function error() {
      status.textContent = 'Unable to retrieve your location';
    }

    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  const storesList = stores.map((store, index) => <StoreSearchCard key={index} store={store} />)

  return (
    <div className="container">
      <div className="ss-container">
        <form className="ss-form" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Search stores</h5>
          <button className="btn" onClick={getLocation}>Get Location</button>
          <p className="range-field">
            <label htmlFor="test5">Range</label>
            <input type="range" id="test5" min="0" max="50" name="radius" step="5" onChange={handleChange}/>
          </p>
          <p>
            Searching all stores that are <b>{ state.radius }</b> miles away around you
          </p>

          <input type="submit" className= "btn" value="search"/>
        </form>
        <div className="ss-map">
          <div id="status"></div>
          <div id="map-link"></div>
          <div id="osm-map"></div>
        </div>
      </div>


      <div className="row">
        { storesList }
      </div>
    </div>
  );
}

export default StoreSearch;
