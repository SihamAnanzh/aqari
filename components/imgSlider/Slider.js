import React ,{useState,useEffect} from 'react'
import onClickOutside from 'react-onclickoutside';
import Carousel from "react-elastic-carousel";


function Slider({imgs,setShowImg ,currentInedx,showImg}) {
  const [index, setIndex] = useState(currentInedx)
  const [bg, setBg] = useState(false)
  // Slider.handleClickOutside = () => {
  //   setShowImg(false)
  //   }
 

  useEffect(() => {
    setIndex(currentInedx)
  }, [])

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  
  return (
 
     <>
  <div className={showImg?"overlay":""} id='overlay' onClick={(e)=>{
    e.target.id !== 'overlay'?
    setShowImg(true):setShowImg(false)
  }}>
    <div className="slideshow-two">
    
    <div id='next' className="nextBtn" onClick={next}><img id='next' src="/assets/img/arr.svg" alt="" /></div>
    <img className="currentImg" src={imgs[index].logo_url}/>
     <div id='pre' className="preBtn"onClick={prev}><img  id='pre' src="/assets/img/arr2.svg" alt="" /></div>
    </div>
  </div>

  </>

  );
}


// const clickOutsideConfig = {
//   handleClickOutside: () => Slider.handleClickOutside,
// };

// export default onClickOutside(Slider,clickOutsideConfig);
export default Slider

