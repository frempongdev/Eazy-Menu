import '../styles/top.css'
import ezImage from '../assets/ez-image.png'

const Top = () => {
  return (
    <div className="top-wrapper">
        <div className="logo-line">
          <img src={ezImage} alt="topp image" className="top-image" />
          <div className="contact">
            <div className="order-box">
              <p className="order">ORDER NOW</p>
            </div>
            <div className="numbers">
              <a href='tel:0201875762' className="number"><h2>0201875762</h2></a>
              <a href='tel:0241689066' className="number"><h2>0241689066</h2></a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Top