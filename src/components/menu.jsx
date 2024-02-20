import '../styles/menu.css'

const Menu = () => {
  return (
    <div className="menu-wrapper">
      <h2>MENU</h2>
      <div className="menus-box">
        <div className="stews">
          <div className="image-container">
            <div className="image-circle">
              <img src="https://images.unsplash.com/photo-1569058242252-623df46b5025?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="stew-image" />
            </div>
          </div>
          <h4 className="title-menu">Rice Meals</h4>
          <div className="stew-list">
            <p className="stew-item">+ Garden Eggs Stew</p>
            <p className="stew-item">+ Palava Sauce</p>
            <p className="stew-item">+ Beans Stew</p>
            <p className="stew-item">+ Egg Stew</p>
            <p className="stew-item">+ Tomato Sauce</p>
          </div>
        </div>
        <div className="stews">
          <div className="image-container">
          <div className="image-circle">
            <img src="https://images.unsplash.com/photo-1561043433-b0bb121aacef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="stew-image" />
          </div>
          </div>
          <h4 className="title-menu">Yam & Plantain</h4>
          <div className="stew-list">
            <p className="stew-item">+ Garden Eggs Stew</p>
            <p className="stew-item">+ Palava Sauce</p>
            <p className="stew-item">+ Beans Stew</p>
            <p className="stew-item">+ Egg Stew</p>
            <p className="stew-item">+ Tomato Sauce</p>
          </div>
        </div>
        <div className="stews">
          <div className="image-container">
          <div className="image-circle">
            <img src="https://images.unsplash.com/photo-1584689070416-6fa78dd07fc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="stew-image" />
          </div>
          </div>
          <h4 className="title-menu">Others</h4>
          <div className="stew-list">
            <p className="stew-item">Jollof Rice + Chicken</p>
            <p className="stew-item">Yam Chips + Chicken Wings</p>
            <p className="stew-item">Fufu ( Sunday Special )</p>
            <p className="stew-item">Random Saturdays</p>
            {/* <p className="stew-item">+ Beans Stew</p>
            <p className="stew-item">+ Egg Stew</p>
            <p className="stew-item">+ Tomato Sauce</p> */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Menu