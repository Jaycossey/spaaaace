import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [apiImage, setApiImage] = useState();
  const apiKey = "K47gU4mwIfmUyOoWVw94AhCMEzmJ4YJfwtWmgaDy";
  const potdUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  let image;

  const fetchData = (url) => {
    axios.get(url)
      .then(res => res.data) // .then setApiImage  
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  // set event listener (useEffect) to listen to the apiImage state and then trigger the app visuals to change from
  // loading anim to the actual image with the data displays, 
  // I can then handle the rest of the site from there. Lets get this homepage done first

  useEffect(() => {
    console.log("Hello Console");
    setApiImage(fetchData(potdUrl));
  }, []);

  return (
    <>
      <div className='w-screen 
                      h-screen 
                      bg-blue-400'> {/* Change this to blue-900 */}

      </div>
    </>
  )
}

export default App
