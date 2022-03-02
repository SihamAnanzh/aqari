import React ,{useState,useEffect} from 'react'
import Carousel from "react-elastic-carousel";
// import Item from './Item';
import Slider from './Slider';

  

const Thumbnail = ({ arr, image, index ,setCurrentIndex}) => {


    return (
    
    <div className="tumbnail">
              <Carousel pagination={false}  showArrows={false} enableMouseSwipe verticalMode   itemPadding={[10, 50]} itemsToShow={5} >
      {
        arr.map((imgsrc, i) => (
            <div key={i}
             onClick={()=>setCurrentIndex(i)}
            style={{
              height:"66px",
              backgroundColor:"#fff",
              margin:"0",
              marginTop:"0",
              padding:'0'
            
            }}>
          <img
          
            key={i}
           src={imgsrc}
            onClick={() => image(i)}
            className='thumbail-img'
    
          />
       </div>
        ))
      }
           </Carousel>
 
    </div>

 
    )
  }

const Slideshow = ({ imgs,setOverlay }) => {
  const [index, setIndex] = useState(0)
  const [showImg, setShowImg]=useState(false)
  const [currentInedx,setCurrentIndex]=useState(0)
  // Slideshow.handleClickOutside = () => setShowImg(false)

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
<>
      <div className="slid-container">
       <div className="slideshow" onClick={()=>setShowImg(!showImg)}>
      <img className="mainImg" src={imgs[index]} width="200px" height='200px' />
    </div>
    <div className="">
    <Thumbnail arr={imgs} image={setIndex} index={index} setCurrentIndex={setCurrentIndex} />

    </div>
      </div>

      {
        showImg &&  <Slider imgs={imgs} setShowImg={setShowImg} currentInedx={currentInedx} showImg={showImg} />
                }
      </>
  )
}



// const clickOutsideConfig = {
//   handleClickOutside: () => Slideshow.handleClickOutside,
// };

// export default onClickOutside(Slideshow,clickOutsideConfig);

export default Slideshow
