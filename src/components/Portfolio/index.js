import React from 'react'
import './style.css'

import Img1 from '../images/portfolio-img1.jpg'
import Img2 from '../images/portfolio-img2.jpg'
import Img3 from '../images/portfolio-img3.jpg'
import Img4 from '../images/portfolio-img4.jpg'
import Img5 from '../images/portfolio-img5.jpg'
import Img6 from '../images/portfolio-img6.jpg'
import Img7 from '../images/portfolio-img7.jpg'
import Img8 from '../images/portfolio-img8.jpg'


const Portfolio = () =>{
    return(
        <div className="portfolio" id="portfolio"> 
            <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
            <ul className="portfolio-list">
                <li className="portfolio-item active">All</li>
                <li className="portfolio-item">HTML</li>
                <li className="portfolio-item">Photoshop</li>
                <li className="portfolio-item">Wordpress</li>
                <li className="portfolio-item">Mobile</li>
            </ul>
            
            <div className="box">
                
                <div>
                    <img src={Img1} alt=""/>
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                    <img src={Img2} alt=""/>
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                    <img src={Img3} alt=""/>
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                    <img src={Img4} alt=""/>
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                    <img src={Img5} alt=""/>
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                    <img src={Img6} alt=""/>
                    <p className="overlay">}
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                    <img src={Img7} alt=""/>
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
                <div>
                    <img src={Img8} alt=""/>
                    <p className="overlay">
                        <span>
                            Show Image
                        </span>
                    </p>
                </div>
                
            </div>
            
        </div>
    )
}


export default Portfolio;