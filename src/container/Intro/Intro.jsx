import React,{useState, useRef} from 'react'
import './intro.css'
import {AiOutlinePlayCircle, AiOutlinePauseCircle} from 'react-icons/ai'
import meal from '../../assets/meal.mp4'
const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const videoRef = useRef()
  
  const handleVideo = () =>{
    setPlayVideo((prev)=>!prev)
    if(playVideo){
      videoRef.current.pause()
    }
    else {
      videoRef.current.play()
    }
  }
  
  
  
  return (
    <div className='app__intro'>
      <video
      src={meal}
      type="video/mp4"
      ref={videoRef}
      loop
      controls={false}
      muted
      />
      <div className='app__intro-button'>     
        {playVideo 
        ? <AiOutlinePauseCircle size={50} color="#999" onClick={handleVideo}/>
        :<AiOutlinePlayCircle size={50} color="#fff" onClick={handleVideo}/>}
      </div>
    </div>
  )
}

export default Intro