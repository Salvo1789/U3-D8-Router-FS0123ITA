import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NetflixNav from "./components/NetflixNav";
import TVShows from "./components/TVShows";
import NetflixFooter from "./components/NetflixFooter";
import NetflixProfile from "./components/NetflixProfile";
import NetflixHome from "./components/NetflixHome";


function App() {
  const [showLink, setShowLink] = useState(true);
  const [secondaryBar, setSecondaryBar] = useState(true);
  const [searchPlaceHolder, setSearchPlaceHolder] = useState("Cerca Film");

  const updateNav = (showLink, secondaryBar, searchPlaceHolder) => {
    setShowLink(showLink);
    setSecondaryBar(secondaryBar);
    setSearchPlaceHolder(searchPlaceHolder);
  }

  return (
    <div className="text-bg-dark">
      <BrowserRouter>
        <NetflixNav showLink={showLink} secondaryBar={secondaryBar} searchPlaceHolder={searchPlaceHolder} />
        <Routes>
          <Route path="/" element={<NetflixHome setNav={updateNav} />} /> 
          <Route path="/tv-shows" element={<TVShows setNav={updateNav} />} />
          <Route path="/profile" element={<NetflixProfile setNav={updateNav} />} />
        </Routes>
        <NetflixFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
