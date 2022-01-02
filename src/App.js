import { AnimatePresence } from "framer-motion";
import React from "react";
import "./App.css";
import Loader from "./components/loader";
import Homepage from "./pages";

function App() {
  const [loaded, setLoaded] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 8000);
  }, []);
  return (
    <AnimatePresence>
      <div className='App'>{loaded ? <Loader /> : <Homepage />}</div>
    </AnimatePresence>
  );
}

export default App;
