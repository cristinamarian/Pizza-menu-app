import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../assets/pizza.jpg';
import '../styles/Home.css';
function Home() {
  return (
    <div className="home"  style={{backgroundImage:`url(${BannerImage})` }}>
     <div className="headerContainer"> 
     <h1>Quatro Pizza</h1>
     <p>From Rome with love!</p>
     <Link to ="/menu">
     <button>ORDER HERE</button>
     </Link>
     </div>
    </div>
  );
}

export default Home;
