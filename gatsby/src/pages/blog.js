import React, { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DateRangeIcon from '@mui/icons-material/DateRange';

import Layout from "../components/Layout"
import SectionTitle from "../components/SectionTitle"
import "./blog.css"

const Blog = () => {

    const [max_cards, setMaxCards] = useState(3)

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
                nodes {
                    frontmatter {
                        title
                        date(formatString: "YYYY-MM-DD")
                        reading_time
                        summary
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    `);

    const posts = data?.allMarkdownRemark?.nodes || [];

    // const posts = []

    return (
        <Layout>
            <div className="page">
                <SectionTitle title="Artículos" image="book.png"/>
                    <>
                    {
                        posts.length === 0
                        ?
                            <section className="posts-loading-container" >
                                <h2>Sin resultados</h2>
                            </section>
                        :
                            <section className="posts-section" >
                                <div className="posts-container">
                                {
                                    posts.slice(0,max_cards).map((post) => {
                                        return (
                                            <Link to={post.fields.slug} key={post.fields.slug}  style={{ textDecoration: 'none' }}>
                                                <div className="post-card">
                                                    <div>
                                                        <img className="post-image" src={post.thumbnail_image}/>
                                                    </div>
                                                    <div className="post-data-container">
                                                        <h3 className="post-title">
                                                            {post.frontmatter.title}
                                                        </h3>
                                                        <p className="post-description">
                                                            {post.frontmatter.summary}
                                                        </p>
                                                        <p className="post-data">
                                                            <DateRangeIcon/><span>{post.frontmatter.date}</span> <AutoStoriesIcon/> <span>{post.frontmatter.reading_time} {post.frontmatter.reading_time === 1 ? "minuto" : "minutos"}</span>
                                                        </p>
                                                    </div>                                    
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                                {
                                    max_cards !== posts.length && posts.length > max_cards ?
                                        <button key="plus" className="post-card-plus" onClick={() => {setMaxCards(posts.length)}}>
                                            <span className="post-plus">+</span>
                                            <span className="post-plus-text">Ver más publicaciones</span>
                                        </button>
                                    : <></>
                                }
                                </div>            
                            </section> 
                    }
                    </>
            </div>
        </Layout>
    )
}

export default Blog

export const Head = () => <title>Enrique Gómez</title>