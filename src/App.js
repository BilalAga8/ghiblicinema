import axios from 'axios';
import HeroSection from './Components/HeroSection/HeroSection';
import MoviesList from './Components/MoviesList/MoviesList';
import Navbar from './Components/Navbar/Navbar';
import './index.css';
import { useState, useEffect  } from 'react';


function App() {
  
  const [post, setPost] = useState();

  useEffect(() => {
    axios.get("https://ghibliapi.vercel.app/films").then((response) => {
      setPost(response.data);
    });
  }, []);
  console.log("post",post)
  
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div style={{display:"flex"}}>
      {post&&post.map(n=><MoviesList key={n.id} title={n.title} image={n.image} original_title={n.original_title} />)}</div>
    </div>
  );
}


export default App;
