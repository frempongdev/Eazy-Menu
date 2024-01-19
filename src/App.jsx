import './App.css'
import ezImage from './assets/ez-image.png'

function App() {

  return (
    <>
        <div>
          <img src={ezImage} alt="topp image" className="top-image" />
          <h1 className="notice">
            OUR MENU WILL BE AVAILABLE SOON
          </h1>
        </div>
    </>
  )
}

export default App
