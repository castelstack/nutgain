import React, { Suspense } from "react";
import "./App.css";
import Loader from "./components/loader";
// import Homepage from "./pages";

const Homepage = React.lazy(() => import("./pages"));

function App() {
  const [loaded, setLoaded] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 3000);
  }, []);
  return (
    <Suspense fallback={<Loader />}>
      <Homepage />
    </Suspense>
  );
}

export default App;
