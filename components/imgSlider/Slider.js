import React ,{useState,useEffect} from 'react'
import onClickOutside from 'react-onclickoutside';


function Slider({imgs,setShowImg}) {
  const [index, setIndex] = useState(0)
  Slider.handleClickOutside = () => setShowImg(false)

  useEffect(() => {
    setIndex(0)
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
    <div className="slideshow-two" >
    
      <div className="nextBtn" onClick={next}><img src="/assets/img/arr.svg" alt="" /></div>
      <img className="currentImg" src={imgs[index]}/>
       <div className="preBtn"onClick={prev}><img src="/assets/img/arr2.svg" alt="" /></div>
      </div>

  
  );
}


const clickOutsideConfig = {
  handleClickOutside: () => Slider.handleClickOutside,
};

export default onClickOutside(Slider,clickOutsideConfig);


