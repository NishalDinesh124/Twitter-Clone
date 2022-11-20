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
            <div className="creators">
                <div className="left-panel">

                    <div className="img-div">

                    </div>

                </div>
                <div className="right-panel">
                    <div className="contents">
                        <div className="name-section">
                            <h5>Elon Musk </h5><p>@elonmusk</p> <i class="fa-solid fa-ellipsis"></i>
                        </div>
                        <div className="content-section">
                            <p>Fascinating to watch!</p>
                        </div>
                        <div className="reaction-section">
                            <div className="comments">
                              

                                <i class="fa-regular fa-comment"></i>
                                <p>30k</p>
    
                            </div>
                            <div className="comments">
                                <i class="fa-solid fa-retweet"></i>
                                <p>26k</p>

                            </div>
                            <div className="comments">
                                <i class="fa-regular fa-heart"></i>
                                <p>20k</p>
                                </div>
                                <div className="comments">
                                <i class="fa-solid fa-share-nodes"></i>
                                </div>

                        </div>
                    </div>


                </div>
            </div>

        </div>

    )
}

export default Homepage

