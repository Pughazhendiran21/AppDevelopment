import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Components/Layout';
import "../assets/css/Home.css";
import NavbarHome from '../Components/NavbarHome';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
    <div>
        <NavbarHome/>
    </div>
  
  <div className="MainContainer">
      <div className="Right">
        <div className="MainTitle">
           <h5>MOBILE SERVICE CENTER </h5>
        </div>
        <div className='SubContent'>
          <br>
            </br>
        <h4> <br></br>Welcome to Your Service,where you can find a wide range of services for your products.</h4>
        </div>
        <div className='Start'>
          <button class="button-54" role="button"  onClick={()=>navigate("/Login")}>JOIN US</button>
        </div>
      </div>
      <div className='Right'>
        <br></br>
        <br></br>
        <img src="https://911phonerepairokc.com/wp-content/uploads/2022/03/Android-Phone-Repair.jpg" width="1000vw" height="500" ></img>
      </div>
      
  </div>
  </>
  )
}

export default Home;