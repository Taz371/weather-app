// Component styles, CSS using JS syntax
import { styled } from 'styled-components';

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    color:'white'
  }
}

const Button = styled.button`
  display:inline-block;
  width:210px;
  height:70px;
  background-color:#ffffff;
  border-radius: 10px;
  margin-top: 2em;
  margin-right:0em;
  margin-left:1em;
  font-size: 1.5em;
  border: 2px solid #eb40f7;
`

const DataContainer = styled.div`
  display: flex;
  flex-direction:column;
`

const ImageContainer = styled.div`
  display: flex;
  width:700px;
  height:600px;
  flex-direction:column;
  margin-left: 5em;
  margin-top:3em;
`

const OverallContainer = styled.div`
  display: flex;
  flex-direction:row;
  margin-top: 6em;
`

const HomeContainer = styled.div`
  display: flex;
  flex-direction:row;
  margin-top:-10.2em;
  margin-right:80em;
`

const HomeButton = styled.button`
  display:inline-block;
  width:200px;
  height:60px;
  background-color:#ffffff;
  border-radius: 10px;
  margin-top: 1em;
  font-size: 1.5em;
  border: 2px solid #eb40f7;
  &:hover{
    background-color:#eb40f7;
    cursor:pointer;
  }
`

// Defining a new React component
const WeatherDisplay = (props) => {
  // Extract variable from the component's props
  const { weatherData, setLocation, setWeatherData } = props;

  // Take data from the weatherData prop and organise into an Object
  const weatherMap = {
    'Temperature (C)': weatherData['temp_c'],
    'Wind Speed (MPH)': weatherData['wind_mph'],
    'Wind Direction': weatherData['wind_dir'],
    'Humidity': weatherData['humidity'],
    'Feels like (C)': weatherData['feelslike_c']
  }

  // Render text rows using the weatherMap variable
  return (
    <>
      {/* uses the .map array method to 'loop' over the keys of the weatherMap Object, and render a row for each one */}
    
    <HomeContainer>
      <HomeButton onClick={()=>{setLocation(''); setWeatherData('')}}>{'Home'}</HomeButton>
    </HomeContainer>

    <OverallContainer>
      <DataContainer>
      {Object.keys(weatherMap).map(wd => (
        <div style={styles.row}>
          <Button>{`${wd}:`}</Button>
          <Button>{`${weatherMap[wd]}`}</Button>
        </div>
      ))}
      </DataContainer>

      <ImageContainer>
        
         <img src={weatherMap['Temperature (C)'] > 20 ? 'https://clipartix.com/wp-content/uploads/2016/04/Sunshine-half-sun-clipart-2.png': weatherMap['Temperature (C)'] < 0 ? 'https://www.freepnglogos.com/uploads/snow-clipart/microsoft-cliparts-snow-download-clip-art-3.png':'https://clipart-library.com/image_gallery/278629.png'} alt='Weather'/>
      </ImageContainer>
    </OverallContainer>
    </>
  );
}

export default WeatherDisplay;