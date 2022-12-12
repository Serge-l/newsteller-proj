import "./App.css";
import React, {useState} from 'react';
import Tinker from "./components/WeatherComp/Tinker";
import Weather from "./components/WeatherComp/Weather";
import NewsList from "./components/NewsComps/NewsList";
import Modal from "./components/Modal/Modal";
import Loader from "./components/Loader/Loader";

export default function App() {
  const [modalActive, setModalActive] = useState(true);
  const [loading, setLoading] = useState(true)


  return (
    <div className="App">
           <button className="btn open-btn" onClick={() => setModalActive(true)}>
        Widgets
        <svg
          className="light"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          width="20px"
          height="20px"
          fill="gold"
        >
          <path d="M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM192 0C90.02 .3203 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.8 289.2 .0039 192 0zM288.4 260.1c-15.66 17.85-35.04 46.3-49.05 75.89h-94.61c-14.01-29.59-33.39-58.04-49.04-75.88C75.24 236.8 64 206.1 64 175.1C64 113.3 112.1 48.25 191.1 48C262.6 48 320 105.4 320 175.1C320 206.1 308.8 236.8 288.4 260.1zM176 80C131.9 80 96 115.9 96 160c0 8.844 7.156 16 16 16S128 168.8 128 160c0-26.47 21.53-48 48-48c8.844 0 16-7.148 16-15.99S184.8 80 176 80z" />
        </svg>
      </button>
      <Tinker />
      <Modal active={modalActive} setActive={setModalActive}>
        <p>There will be a widget :-)</p>
        <button>Dismiss</button>
      </Modal>
      <Weather />
      {/* {loading && <Loader/>} */}
      <NewsList />
    </div>
  );
}