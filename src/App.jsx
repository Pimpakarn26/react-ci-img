import { useState } from 'react'
import './App.css'
import { FaShoppingCart, FaBell, FaChevronDown } from 'react-icons/fa'
import waterImage from './assets/images/water.jpg';
// import fishImage from './assets/images/fish.jpg';
// import cheetosImage from './assets/images/cheetos.jpg';
import breadImage from './assets/images/bread.jpg';
import codomoImage from './assets/images/codomo.jpg';
import yasrifunImage from './assets/images/yasrifun.jpg';
function ProductCard({ name, price, stock, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3>{name}</h3>
        <p className="price">฿ {price}</p>
        <p className="stock">มีอยู่ {stock}</p>
      </div>
    </div>
  )
}

function App() {
  const products = [
    {
      name: 'คริสตัล น้ำดื่ม',
      price: '14.00',
      stock: 40,
      image: waterImage,
    },
    {
      name: 'แป้ง โคโดโมะ',
      price: '15.00',
      stock: 20,
      image: codomoImage,
    },
    {
      name: 'ยาสีฟันคอเกต',
      price: '20.00',
      stock: 20,
      image: yasrifunImage,
    },
    {
      name: 'ฟาร์มเฮ้าส์ ขนมปังโฮลวีต',
      price: '46.00',
      stock: 20,
      image: breadImage,
    }
  ]

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <span className="logo-text">POSSIBLE</span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="ค้นหาสินค้า" />
        </div>
        <div className="user-info">
          <div className="notification">
            <FaBell size={20} />
            <span className="notification-badge">1</span>
          </div>
          <div className="cart">
            <FaShoppingCart size={20} />
          </div>
          <div className="user-profile">
            <img src="avatar.png" alt="Admin" />
            <div className="user-details">
              <span className="user-name">มานะ มานี</span>
              <span className="user-role">Admin</span>
            </div>
            <FaChevronDown size={12} />
          </div>
        </div>
      </header>

      <div className="main-content">
        <nav className="sidebar">
          <ul>
            <li>แดชบอร์ด</li>
            <li className="active">ออเดอร์ขาย</li>
            <li>สินค้า</li>
            <li>จัดการ</li>
          </ul>
        </nav>

        <main className="product-grid">
          <div className="product-header">
            <h2>เลือกสินค้า</h2>
            <div className="filter-button">
              <span>ตัวกรองสินค้า</span>
              <FaChevronDown size={12} />
            </div>
          </div>
          <div className="products-container">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
