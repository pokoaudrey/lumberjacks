
import saw from './assets/CircularSawBlade.svg'
import loader from './Loading.css'
import font from './assets/WoodenLog.ttf'
const Loading=()=>{
  return(
    <div className='maincontainer'>
     <img className="loader" src={saw} alt="saw"></img>
      <p className="textloader" >
      <span>Loading...</span>
      </p>
    </div>
    )
  }
  export default Loading;