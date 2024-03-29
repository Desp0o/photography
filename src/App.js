import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage";
import Gallery1 from "./components/gallery/gallery";
import Contact from "./components/contact/contact";

function App() {
  return (
    <Routes>
      <Route exact path="*" element={<HomePage />} />
      <Route exact path="/components/gallery/gallery" element={<Gallery1 />} />
      <Route exact path="/components/contact/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
