
import header from './components/header'
import './App.css'
import React, { useState, useEffect } from 'react';
import hrt from "./img/hrt.png";
import zoom from "./img/zoom.png";
import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";




 
gsap.registerPlugin(ScrollTrigger);
function LandingPageScrollTrigger() {

    gsap.to('body', { 
        opacity: 1, duration: 1.3,
    })


    let LandingPageScrollTrigger = gsap.timeline({
        scrollTrigger: {
            trigger: "#zoom",
            start: "0% 0%",
            end: "100% 0%",
            pin: "#zoom",
            scrub: 2.2,
        }
    })
    LandingPageScrollTrigger
       
        .to('#zoom #img1', { transform: 'translateZ(2200px)', }, 0)
        
}


window.onload = () => {
    LandingPageScrollTrigger()
}
function App() {

   useEffect(()=>{
    document.addEventListener("scroll",()=>{
let header = document.querySelector('.Header');

      if (window.scrollY > 650) {header?.classList.add('scrolled');} 
      
      else {header?.classList.remove('scrolled');}

    })

   });
  

  return (
    <main id="main">    
      
      <div id="zoom"><img id="img1" src={zoom}/><div id="gradient"></div></div>
      


    <div id="wrapper">
      <div className='Header' id="header">Nika <svg fill="red"  src={hrt}/> Marsel</div>
        <article id="article">
          
        <div id="block" className='a'>
           <div id="polaroid" className="one"><img src={img3}/><p>Percocet <img id="per"src={hrt}/></p></div>
          <div id="div">Draga Nika,<br/><br/>Došli smo do naše polu-godišnjice. Od prvog puta kada sam procitao tvoju objavu, osjetio sam kao da me nešto jako snažno privlači prema tebi, nešto poput crne rupe... I kao crna rupa, dok sam s tobom,osjećam vrijeme kao da stane.Tako i ovih 6 mjeseci mi djeluje kao milisekunda u vremenu.</div>
        </div>

        <div id="block" className='b'>
           
          <div id="div">Kroz sve turbulentno što smo prošli, izašli smo još jači nego ikada.Vjerujem da ćemo biti još jači i smireniji i šašaviji jer jedno drugog upotpunjujemo i podržavamo u svemu i kroz sve.</div>
          <div id="polaroid" className="two"><img src={img2}/><p>Maženje *.*</p></div>
        </div>

        <div id="block" className='c'>
           <div id="polaroid" className="three"><img src={img1}/><p>Roštiljčić xD</p></div>
          <div id="div">Ti nisi samo crna rupa koja me privlači, ti si cijeli planet i sve zvijezde i čitav moj svemir.Naučila si me kako izgleda biti voljen,ranjiv i šašav.Jedino s tobom osjećam da mogu biti opušten i onaj pravi ja.</div>
        </div>

         <div id="block" className='d'>
           
          <div id="div">Da još 6 desetljeća provedemo, bilo bi mi malo. Imamo još puno toga što ćemo zajedno proći, ali za sad ti samo želim reći da...</div>
          <div id="polaroid" className="four"><img src={img4}/><p>Slatkica <img id="per"src={hrt}/><img id="per"src={hrt}/><img id="per"src={hrt}/></p></div>
        </div>

         
      <footer id="footer"><p>VOLIM TE<img src={hrt}/></p></footer>
        </article>
  </div>  
    
    </main>
    
    
  )
}

export default App
