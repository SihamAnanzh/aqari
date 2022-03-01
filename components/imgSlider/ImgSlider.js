import React ,{useState,useEffect} from 'react'
import Carousel from "react-elastic-carousel";
import Item from './Item';
import Slider from './Slider';

  

const Thumbnail = ({ arr, image, index }) => {

    return (
    
    <div className="tumbnail">
              <Carousel pagination={false}  showArrows={false} enableMouseSwipe verticalMode   itemPadding={[10, 50]} itemsToShow={5} >
      {
        arr.map((imgsrc, i) => (
            <Item key={i} style={{
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
       </Item>
        ))
      }
           </Carousel>
 
    </div>

 
    )
  }

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0)
  const [showImg, setShowImg]=useState(false)
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
    <Thumbnail arr={imgs} image={setIndex} index={index} />

    </div>
      </div>

      {
        showImg &&  <Slider imgs={imgs} setShowImg={setShowImg}/>
                }
      </>
  )
}



// const clickOutsideConfig = {
//   handleClickOutside: () => Slideshow.handleClickOutside,
// };

// export default onClickOutside(Slideshow,clickOutsideConfig);

export default Slideshow
