import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Loading from './components/Loading';


function App() {
  const [apiImage, setApiImage] = useState();
  const [render, setRender] = useState(<Loading />)

  const apiKey = "K47gU4mwIfmUyOoWVw94AhCMEzmJ4YJfwtWmgaDy";
  const potdUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

  let image;

  const fetchData = (url) => {
    axios.get(url)
      .then(res => setApiImage(res.data)) // .then setApiImage  
      .catch(err => console.error(err));
  }

  // set event listener (useEffect) to listen to the apiImage state and then trigger the app visuals to change from
  // loading anim to the actual image with the data displays, 
  // I can then handle the rest of the site from there. Lets get this homepage done first

  useEffect(() => {
    fetchData(potdUrl);
  }, []);

  useEffect(() => {
    console.log(apiImage);
  }, [apiImage]);

  return (
    <>
      <div className='w-screen 
                      h-screen
                      flex
                      bg-gradient-to-br
                      from-blue-900
                      to-blue-500'> {/* Change this to blue-900 */}
        {/* {render} */}
        <img className='w-screen
                        fixed'
              src={apiImage.url} 
              alt={apiImage.title} />
        <div className='w-1/2 h-1/2 m-auto p-4 flex flex-col text-slate-900 rounded-lg border-4 border-slate-400 text-justify justify-center items-center bg-slate-500 bg-opacity-60 z-10'>
          <p className='underline underline-offset-4 text-lg'>{apiImage.title}</p>
          <br/>
          <p>{apiImage.explanation}</p>
          <p>(Click to reveal image)</p>
        </div>
      </div>
    </>
  )
}

export default App
