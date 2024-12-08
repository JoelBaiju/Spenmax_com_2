import React, { useState } from "react";
import VendorsCard from "../../src/components/VendorsCard"; // Adjust the path to your component
import './VendorsCard.css'
function CustomCarousel({ vendors }){
    const [current, setCurrent] = useState(0); // Track the current active slide

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % vendors.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + vendors.length) % vendors.length);
    };

    return (
        <div className="carousel-container">
            <div className="carousel">
                {vendors.map((vendor, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${
                            index === current ? "active" : "inactive"
                        }`}
                    >
                        <VendorsCard data={vendor} />
                    </div>
                ))}
            </div>
            <button className="carousel-btn prev" onClick={prevSlide}>
                &#8249;
            </button>
            <button className="carousel-btn next" onClick={nextSlide}>
                &#8250;
            </button>
        </div>
    );
};

export default CustomCarousel;
