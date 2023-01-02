import React from 'react'
import './Homepage.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Homepage() {
    //const [data, setData] = useState();
    const [tweet, setNewtweet] = useState('');
    const [file, setFile] = useState();
    const [tweets, setTweets] = useState([])
    const navigate = useNavigate();



    const handleFileChange = (e) => {
        setFile(e.target.files)
    }

    useEffect(() => {
        axios.get("http://localhost:5000/")
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    setTweets(res.data)
                } else {
                    navigate('/login')
                }

            }).catch((err) => console.log(err, "An error occur"))

    }, []);

    ////// Tweet submit //////

    const handleSubmit = (event) => {
        event.preventDefault()
        if (file) {
            console.log("Image is there");
            //let formData = new FormData();
            //formData.append('Image', image);

            event.preventDefault();
            const formData = new FormData();
            formData.append('tweet', tweet)

            for (var x = 0; x < file.length; x++) {
                formData.append('file', file[x])

            }

            axios({
                method: "post",
                url: "http://localhost:5000/imgtweet",
                data: formData
            })
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => console.log(err, "An error has occurred"))
        } else {
            console.log("No image");
            axios({
                method: "post",
                url: "http://localhost:5000/tweet",
                data: {
                    tweet
                }
            })
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err, "An error occured in tweeting");
                })
        }

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
                            <input className='tweet-input' onChange={(e) => setNewtweet(e.target.value)} type="text" value={tweet} name="tweet" placeholder="What's Happening?" />
                            <div className="tweet-icons">
                                <div className='icon-div'>
                                    <label>
                                        <input hidden

                                            type="file" id="file"
                                            onChange={handleFileChange}
                                        />
                                        <i class="fa-regular fa-image"> </i>
                                    </label>


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
                                {tweets.imageId && <img className='tweet-img' src={require(`../public/images/${tweets._id}.jpg`)}></img> }
                                

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

export default Homepage;

