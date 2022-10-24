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
                            <div className='icon-div'>
                                <i class="fa-regular fa-image"></i>
                            </div>
                            <div className='icon-div'>
                                <i class="fa-solid fa-gift"></i>
                            </div>


                            <div className='icon-div'>
                                <i class="fa-solid fa-list-ol"></i>
                            </div>
                            <div className='icon-div'>
                                <i class="fa-regular fa-face-smile"></i>
                            </div>
                            <div className='icon-div'>
                            <i class="fa-regular fa-calendar-days"></i>
                            </div>
                            <div className='btn-div-tweet'>
                        <button class="btn-tweet">
                            Tweet
                        </button>
                        </div>
                       
                    </div>




                    

                    </div>

                </div>



            </div>
        </div>

    )
}

export default Homepage

