import { useState } from 'react';
import {
    FaAnchor,
    FaFish,
    FaWater,
    FaPhoneAlt,
    FaEnvelope,
    FaInstagram,
    FaWhatsapp,
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa';
import heroBg from './assets/images/herobg.png'
import pic1 from './assets/images/tuna.jpg'
import pic2 from './assets/images/yebok.jpg'
import './App.css';

const images = [pic1, pic2, heroBg];

const App = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const getImageIndex = (offset: number) => {
        return (currentImageIndex + offset + images.length) % images.length;
    };

    return (
        <div className="app">
            {/* Hero Section */}
            <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroBg})` }}>
                <div className="hero-content">
                    <h1>Spearfishing Tour</h1>
                    <p className="subtitle">Погрузитесь в мир подводной охоты</p>
                    <a href="#contact" className="cta-button">Связаться с нами</a>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="section-title">
                    <h2>Почему мы?</h2>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <FaAnchor className="feature-icon"/>
                        <h3>Опытный гид</h3>
                        <p>Профессиональный инструктор с ??-летним опытом</p>
                    </div>
                    <div className="feature-card">
                        <FaFish className="feature-icon"/>
                        <h3>Богатые угодья</h3>
                        <p>Лучшие места для подводной охоты в Индонезии</p>
                    </div>
                    <div className="feature-card">
                        <FaWater className="feature-icon"/>
                        <h3>Снаряжение</h3>
                        <p>Предоставляем всё необходимое оборудование под аренду</p>
                    </div>
                </div>
            </section>

            <section className="carousel-section">
                <div className="carousel-container">
                    <div className="carousel-wrapper">
                        {/* Предыдущее изображение */}
                        <div
                            className="carousel-image prev"
                            style={{ backgroundImage: `url(${images[getImageIndex(-1)]})` }}
                            onClick={handlePrev}
                        />

                        {/* Активное изображение */}
                        <div
                            className="carousel-image active"
                            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
                        />

                        {/* Следующее изображение */}
                        <div
                            className="carousel-image next"
                            style={{ backgroundImage: `url(${images[getImageIndex(1)]})` }}
                            onClick={handleNext}
                        />

                        {/* Кнопки навигации */}
                        <button className="nav-button prev-button" onClick={handlePrev}>
                            <FaChevronLeft />
                        </button>
                        <button className="nav-button next-button" onClick={handleNext}>
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <div className="section-title">
                    <h2>Свяжитесь с нами</h2>
                </div>
                <div className="contact-grid">
                    <a href="tel:+4916097313042" className="contact-card">
                        <FaPhoneAlt className="contact-icon"/>
                        <h3>Позвонить</h3>
                        <p>+49 160 97313042</p>
                    </a>

                    <a href="mailto:.com" className="contact-card">
                        <FaEnvelope className="contact-icon"/>
                        <h3>Email</h3>
                        <p>.com</p>
                    </a>

                    <a href="https://wa.me/4916097313042" className="contact-card" target="_blank" rel="noreferrer">
                        <FaWhatsapp className="contact-icon"/>
                        <h3>WhatsApp</h3>
                        <p>Написать сообщение</p>
                    </a>

                    <a href="https://instagram.com" className="contact-card" target="_blank" rel="noreferrer">
                        <FaInstagram className="contact-icon"/>
                        <h3>Instagram</h3>
                        <p>Наш профиль</p>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default App;