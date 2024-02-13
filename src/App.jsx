import './App.css'
// import ezImage from './assets/ez-image.png'
import Menu from './components/menu'
import Top from './components/top'

function App() {

  return (
    <>
        {/* <div>
          <img src={ezImage} alt="topp image" className="top-image" />
          <h1 className="notice">
            OUR MENU WILL BE AVAILABLE SOON
          </h1>
        </div> */}
        <Top />
        <Menu />
    </>
  )
}

export default App
