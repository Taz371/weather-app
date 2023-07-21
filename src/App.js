//FEATURES
//1. Depending on the temperature of the location, a sunny, rainy or snowy picture will be shown
//2. You can press enter instead of clicking the search bar
//3. Home Button
//4. The backgrounds change when the search button is clicked.
//5. AMAZING HOME SCREEN DESIGN
//6. BUTTON HOVER
//7. COLOR THEME

// Module imports - getting stuff from other files to use here
import * as React from 'react';
import { styled } from 'styled-components';
import Header from "./components/header";
import Footer from "./components/footer";
import WeatherDisplay from "./components/weather-display";

// Component styles - CSS in JS syntax
const styles = {
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  white: {
    color: '#ffffff'
  }
}

const Button = styled.button`
  display:inline-block;
  width:200px;
  height:60px;
  background-color:#ffffff;
  border-radius: 10px;
  margin-top: 1em;
  font-size: 1.5em;
  &:hover{
    background-color:#eb40f7;
    cursor:pointer;
  }
  border: 2px solid #eb40f7;
`

const StyledInput = styled.input`
  display:inline-block;
  width:800px;
  color: black;
  font-size: 2em;
  padding: 0.25em 1em;
  border: 2px solid #eb40f7;
  border-radius: 10px;0;
  margin-top:2em;
`

const BgContainer = styled.div`
  background-image: url(${props => props.dataAvailable ? '../NEWNEWBLANK.jpg' : '../Tazindustries.jpg'});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  height:100vh;
`

// Defining a new React component
const App = () => {
  // State fields - like variables, except they persist across the website's renders.
  const [location, setLocation] = React.useState('');
  const [weatherData, setWeatherData] = React.useState('');

  // function which calls an Application Programming Interface (API) to get weather data.
  const getWeather = async () => {
    // Calling the API using the browser's 'fetch' function.
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=eae13357d2224e868b2163728220401&q=${location}&aqi=no`);

    // If the response has an error, log to the console and abort.
    if (!response.ok) {
      console.log('Failed to get weather data');
      return;
    }

    // Convert the response to JavaScript Object Notation (JSON)
    const data = await response.json();

    // Format the data into a flat Object, so it's easier to use
    const formattedData = {
      ...data.current,
      ...data.current.condition
    };

    // Use the special setter method to update the weatherData state field.
    console.log(data)
    setWeatherData(formattedData);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getWeather()
    }
  }

  console.log(weatherData)

  // Render the components user interface (UI)
  return (
    <>
      <BgContainer dataAvailable={weatherData !== ''}>
        {/* Header is an external component - see the imports at the top of the file. 'title' is a prop - a piece of data being passed from this component to 'Header' */}
        <Header title={''} />
        {/* this div contains the main content */}

        <div style={styles.contentContainer}>
          {/* Input and button to allow the user to enter and get data for a given location. value and onChange are examples of HTML attributes */}
          <StyledInput onKeyDown={handleKeyDown} placeholder='Enter A Location' value={location} onChange={(e) => setLocation(e.target.value)} />
          <Button onClick={getWeather}>{'Search'}</Button>
          {/* The length check here ensures there is weather data to display before the WeatherDisplay component is rendered, otherwise, a friendly error message is displayed */}
          {
            Object.keys(weatherData).length ?
              <WeatherDisplay weatherData={weatherData} setLocation={setLocation} setWeatherData={setWeatherData} /> :
              <div>
                <h1 style={styles.white}>{'No weather data available...yet! Try searching for a location and pressing \'Search\''}</h1>
              </div>
          }
        </div>

        <Footer>TAZ</Footer>

      </BgContainer>
    </>
  );
}

export default App;
