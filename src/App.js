import axios from 'axios';
import HeroSection from './Components/HeroSection/HeroSection';
import MoviesList from './Components/MoviesList/MoviesList';
import Navbar from './Components/Navbar/Navbar';
import './index.css';
import { useState, useEffect  } from 'react';


function App() {
  
  const [post, setPost] = useState();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    axios.get("https://ghibliapi.vercel.app/films").then((response) => {
      setPost(response.data);
    });
  }, []);
  console.log("post",post)
  console.log("cartData",cartData)
  
  return (
    <div className="App">
      <Navbar cartData={cartData}/>
      <HeroSection />
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:15}}>
      {post&&post.map(n=><MoviesList setCartData={setCartData} id={n.id} key={n.id} title={n.title} image={n.image} original_title={n.original_title} />)}</div>
    </div>
  );
}


export default App;
