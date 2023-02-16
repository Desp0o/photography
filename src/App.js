import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage";
import Gallery1 from "./components/gallery/gallery";


function App() {
        // const response = await fetch('https://desp0o.github.io/dataBase/dataBase.json');

        console.log('https://desp0o.github.io/dataBase/dataBase.json');
  return (
    <Routes>
      <Route exact path="*" element={<HomePage />} />
      <Route exact path="/components/gallery" element={<Gallery1 />} />
    </Routes>
  );
}

export default App;
