import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Helmet } from "react-helmet";
import "./post.css"

import Image from "../components/Image";

const API = process.env.REACT_APP_API_URL;

export default function Post() {

    const { id } = useParams()
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)
    const [overlay_image, setOverlayImage] = useState(null)

    useEffect(() => {
        fetch(API + "/posts/?id=" + id)
        .then((response) => response.json())
        .then((data) => {setPost(data); setLoading(false)})
        .catch((error) => console.log(error))
      }, [id])
    

    return (
        <div className="page">
            {
                loading ?
                    <>
                        <section className="post-loading-container" >
                            <h2>Cargando...</h2>
                        </section>
                    </>
                :
                    <>
                         <Helmet>
                            <title>{post.title} - Enrique Gomez</title>
                            <meta name="description" content={post.description}/>
                            <meta property="og:title" content={post.title + " - Enrique Gomez"}/>
                            <meta property="og:image" content={post.header_image}/>
                            <meta property="og:description" content={post.description}/>
                            <meta property="twitter:title" content={post.title + " - Enrique Gomez"}/>
                            <meta property="twitter:image" content={post.header_image}/>
                            <meta property="twitter:description" content={post.description}/>
                            <link rel="preload" fetchpriority="high" as="image" href={post.header_image.url} type="image/webp"/>
                        </Helmet>
                        <div className="header_image_container">
                            <img className="header_image" src={post.header_image.url} alt={post.header_image.alt}/>
                        </div>
                        <div className="title_container">
                            <h1>{post.title}</h1>
                        </div>
                        <div className="data_container">
                            <DateRangeIcon/><span>{post.date}</span> <AutoStoriesIcon/> <span>{post.reading_time} {post.reading_time === 1 ? "minuto" : "minutos"}</span>
                        </div>
                        <div className="content_container">
                            {
                                post.body.map(element => {
                                    if (element.type === "text") {
                                        return (<p>{element.text}</p>)
                                    } else if (element.type === "title-level-2") {
                                        return (<h2>{element.text}</h2>)
                                    } else if (element.type === "title-level-3") {
                                        return (<h3>{element.text}</h3>)
                                    } else if (element.type === "image") {
                                        return (<img fetchpriority="low" src={element.url} alt={element.alt} onClick={() => setOverlayImage(element)}/>)
                                    } else return ""
                                })
                            }
                        </div>
                        <div className="author_container">
                            Enrique Gómez
                        </div>
                        <Image image={overlay_image} setUrl={setOverlayImage}/>
                    </>

            }
        
        </div>
    )
}