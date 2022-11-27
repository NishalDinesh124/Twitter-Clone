import React from 'react'
import './Homepage.css'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios';

function Homepage() {
    const [tweets, setTweets] = useState([]);
    const [newTweet,setNewtweet] = useState('');
    const [image,setImage] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000")
            .then((res) => {
                setTweets(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }, []);


   const handleSubmit=(e)=>{
    console.log("Working");
    e.preventDefault()
    axios({
        method : "post",
        url : "http://localhost:5000/tweet",
        data : {
            tweet : newTweet,
            postImage : image
        }
    })
    .then((res)=>{
        console.log("DAta");
    }).catch((err)=>{
        console.log(err);
    })
   }
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
                        <form onSubmit={handleSubmit}>
                        <input onChange={(e)=>setNewtweet(e.target.value)} type="text" value={newTweet} name="tweet" placeholder="What's Happening?" />
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
                                <button type='submit' class="btn btn-tweet" >Tweet</button>
                                    
                            </div>

                        </div>
                        </form>






                    </div>

                </div>



            </div>
            {tweets.map((tweets) => {
                return (


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
                                    <p>{tweets.tweet}</p>
                                </div>
                                <div className="reaction-section">
                                    <div className="reactions comment">


                                        <i class="fa-regular fa-comment"></i>
                                        <p>30k</p>

                                    </div>
                                    <div className="reactions retweet">
                                        <i class="fa-solid fa-retweet"></i>
                                        <p>26k</p>

                                    </div>
                                    <div className="reactions like">
                                        <i class="fa-regular fa-heart"></i>
                                        <p>20k</p>
                                    </div>
                                    <div className="reactions share">
                                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                )

            })}



        </div>

    )
}

export default Homepage

