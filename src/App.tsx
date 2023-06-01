import './App.css'
import Navbar from './components/header/Navbar';
import Slider from './components/header/Slider'
import Promo from './components/home/Promo';
function App() {
 

  return (
    <div className='transition-all ease-in-out duration-200 scroll-smooth'>
      <Navbar />
      <Slider />
      <Promo />
    </div>
  )
}

export default App
