import React from "react";
import './App.css';
import Loader from "./components/loader";
import Homepage from './pages';

function App() {
  const [loaded, setLoaded] = React.useState(true);

  React.useEffect(() => {
  setTimeout(() => {
    setLoaded(false)
    }, 8000);
  },[]);
  return (
    <div className="App">
      {
        loaded ? <Loader /> :
          
      <Homepage/>
      }
    </div>
  );
}

export default App;
