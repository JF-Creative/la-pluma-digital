import './CombeimaHistoria.css'
import Header from "./components/header/Header"
import Footer from './components/footer/Footer'
import Statistics from "./components/statistics/Statistics"
import Media from './components/media/Media'
export default function CombeimaHistoria() {


  return (
    <div className='infograph'>
      <Header/>
      <div className='infContent'>
        <div className='dataContainer'>
          <h3>El Cañón visto por sus habitantes</h3>
          <Statistics/>
        </div>
        <div className='mediaContainer'>
          <h3>Casi un siglo de historias...</h3>
          <Media/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}


