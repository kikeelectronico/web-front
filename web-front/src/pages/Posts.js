import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DateRangeIcon from '@mui/icons-material/DateRange';
import "./posts.css"

import SectionTitle from "../components/SectionTitle"

const API = process.env.REACT_APP_API_URL;

export default function Posts() {

    const [posts, setPosts] = useState([])
    const [max_cards, setMaxCards] = useState(3)

    useEffect(() => {
        fetch(API + "/posts/")
        .then((response) => response.json())
        .then((data) => {setPosts(data)})
        .catch((error) => console.log(error))
      }, [])
    

    return (
        <div className="page">
            <SectionTitle title="Artículos" image="book.png"/>
            {
                posts.length === 0
                ?
                <section className="posts-loading-container" >
                    <h2>Cargando...</h2>
                </section>
                :
                <section className="posts-section" >
                    <div className="posts-container">
                    {
                        posts.slice(0,max_cards).map((post) => {
                            return (
                                <Link to={"/blog/" + post.id} key={post.id}  style={{ textDecoration: 'none' }}>
                                    <div className="post-card">
                                        <div>
                                            <img className="post-image" src={post.thumbnail_image}/>
                                        </div>
                                        <div className="post-data-container">
                                            <h3 className="post-title">
                                                {post.title}
                                            </h3>
                                            <p className="post-description">
                                                {post.description}
                                            </p>
                                            <p className="post-data">
                                                <DateRangeIcon/><span>{post.date}</span> <AutoStoriesIcon/> <span>{post.reading_time} {post.reading_time === 1 ? "minuto" : "minutos"} de lectura</span>
                                            </p>
                                        </div>                                    
                                    </div>
                                </Link>
                            )
                        })
                    }
                    {
                        max_cards !== posts.length && posts.length > max_cards ?
                        <div key="plus" className="post-card-plus" onClick={() => {setMaxCards(posts.length)}}>
                        <span className="post-plus">+</span>
                        <span className="post-plus-text">Ver más publicaciones</span>
                        </div>
                        : <></>
                    }
                    </div>            
                </section> 
            }
        
        </div>
    )
}