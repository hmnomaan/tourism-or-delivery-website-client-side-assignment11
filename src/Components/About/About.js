import React from 'react';
import './About.css'
import AboutImage from '../../Images/about.jpg';

const About = () => {
    return (
        // ----------------------   About Section    -----------------------
        <div className="about my-5 container">
            <h1 className="text-center">About Us</h1>
            <p className="about-text px-3">The success story of our family-owned company started over 30 years ago, at that time under the name of “Tirol Hotels”.
                <div className="text-center">
                    <img className="img-fluid " src={AboutImage} alt="" />
                </div>
                Today, Travel China is one of Beijing’s most successful tour operators, offering group travels all over Asia. We are very proud of this evolution, which is based on many years of practical experience, on a profound know-how of the travel sector and on our motivated employees. In the future, we would like to become even more service-orientated towards our clients. Optimum cooperation and support, combined with a broad yet flexible product offering are the key ingredients to continuously grow and improve. Look and see!</p>

            {/* // ----------------------   About Section Image    ----------------------- */}
            <div className="text-center">
                <img className="img-fluid " src={AboutImage} alt="" />
            </div>
            <p className="about-text px-3">High-quality offers, a good quality-price ratio and the best service are the cornerstones of our constantly growing company.
                Satisfied customers and a variety of individually customizable programs make Travel China one of the most successful tour
                operators in China. We constantly strive to provide our clients with a perfect service and, thanks to our 16 affiliates,
                we can also act on site and thus guarantee the quality of our offers. Flexibility, friendliness and well thought-out offers
                from charter to coach tours are the strengths of our company.
            </p>
        </div>
    );
};

export default About;