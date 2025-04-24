import { useState } from 'react'
import './App.css'
import { FaShoppingCart, FaBell, FaChevronDown } from 'react-icons/fa'

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
      name: 'สิงห์ น้ำดื่ม',
      price: '29.00',
      stock: 40,
      image: '/images/water.jpg'
    },
    {
      name: 'ปุ้มปุ้ย ปลาแมคเคอเรลทอด',
      price: '27.00',
      stock: 20,
      image: '/images/fish.jpg'
    },
    {
      name: 'ชีโตส รสสไปซี่',
      price: '20.00',
      stock: 20,
      image: '/images/cheetos.jpg'
    },
    {
      name: 'ฟาร์มเฮ้าส์ ขนมปังโฮลวีต',
      price: '46.00',
      stock: 20,
      image: '/images/bread.jpg'
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
            <img src="/images/avatar.png" alt="Admin" />
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
            <li>โปรโมชั่น</li>
            <li>ประวัติการขาย</li>
            <li>จัดการ</li>
          </ul>
        </nav>

        <main className="product-grid">
          <div className="product-header">
            <h2>เลือกสินค้า</h2>
            <div className="filter-button">
              <span>ตัวกรอง</span>
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
