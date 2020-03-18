import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const [zip, setZip] = useState(94512);

  let inputRef = useRef(null);

  useEffect(() => {
    let zipcode = zip;
    const URL = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=6adb0f716ff7fb53d89de609621f9f6c`;
    const fetchData = async URL => {
      await Axios.get(URL)
        .then(item => setData(item.data))
        .catch(err => console.log(err));
    };
    fetchData(URL);
  }, [zip]);

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enter zipcode" />
      <button onClick={() => setZip(inputRef.current.value)}>Click</button>
      {data ? (
        <h4>
          Temperature: {data.main.temp}
          <div />
          City: {data.name}
        </h4>
      ) : null}
    </div>
  );
};

export default App;
