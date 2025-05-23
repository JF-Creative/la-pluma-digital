import './CombeimaTurismo.css'
import Header from "./components/header/Header"
import Footer from './components/footer/Footer'
import Statistics from "./components/statistics/Statistics"
import Media from './components/media/Media'
export default function CombeimaHistoria() {


  return (
    <div className='infograph1'>
      <Header/>
      <div className='infContent1'>
        <div className='mediaContainer1'>
          <h3>VOCES DEL TURISMO</h3>
          <Media/>
        </div>
        <div className='dataContainer1'>
          <h3>CIFRAS DEL TURISMO</h3>
          <Statistics/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}


