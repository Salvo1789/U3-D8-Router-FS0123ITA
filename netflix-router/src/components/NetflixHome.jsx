import NetflixGallery from "./NetflixGallery";
import { useEffect } from "react";

const NetflixHome = (props) => {
  useEffect(() => {
    props.setNav(true, true, "cerca serie TV");
  }, []);
  
  return (
    <main className="container-fluid px-5 text-bg-dark">
      <NetflixGallery title="Dragon Ball" searchString="Dragon Ball" />
      <NetflixGallery title="Bleach" searchString="bleach"/>
      <NetflixGallery title="Gundam" searchString="Gundam"/>
    </main>
  );
};
export default NetflixHome;