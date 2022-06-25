import Navbar from "../navbar/Navbar";
import About from "../about/About";
import About2 from "../about2/About2";
import Destination from "../popular-destinations/Destination";
import Started from "../started/Started";
import { useEffect , useState } from "react";
import { getTourPlaces } from "../Firebase/Queries";
import { useNavigate } from "react-router-dom";
function Home() {
  let navigate = useNavigate();
  const [allTours , setallTours] = useState([])
  
  let uid = sessionStorage.getItem('uid')
  console.log(uid);
  if (!uid){
    navigate('/login')
  } 


  useEffect( () => {
  getTourPlaces().then(result => {
    setallTours(result);

  }).catch(error => {
    console.log(error);
  })
  }, []);

  return (
    <div className="App">
      <Navbar />
      <About />
      <About2 />
      <Destination tours={allTours}/>
      <Started />
    </div>
  );
}

export default Home;
