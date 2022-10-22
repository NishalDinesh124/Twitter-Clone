import React from 'react'
import './Homepage.css'
function Homepage() {
    return (

        <div className="main-section">
            <div className="navbar">
                <div className="nav-icon">
                    <h5>Home</h5>
                </div>
                <div>
                    <i class="fa-solid fa-wand-magic-sparkles"></i>
                </div>

            </div>
            <div className="tweet-section">
                <div className="left-panel">

                    <div className="img-div">

                    </div>

                </div>
                <div className="right-panel">
                    <div className="top-panel">
                        <input type="text" placeholder="What's Happening?" />
                        <div className="tweet-icons">
                            <i class="fa-regular fa-image"></i>
                            <i class="fa-solid fa-gift"></i>
                            <i class="fa-solid fa-list-ol"></i>
                            <i class="fa-regular fa-face-smile"></i>
                            <i class="fa-regular fa-calendar-days"></i>
                            

                        </div>
                       

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Homepage

