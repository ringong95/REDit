import React, { PropTypes } from 'react';
import Post from './../Post'
const Posts = ({ posts, updateVote }) => {
    let content;
    if ( !posts.length ) {
        content = <p> Loading </p>
    } else {
       content = posts.map((post) => {
            return (
                <Post key={post.id}
                    author={post.author}
                    votes={post.votes}
                    categories={post.categories}
                    title={post.title}
                    description={post.description}
                    link={post.link}
                    updateVote={updateVote.bind(this, post)}
                    />)
        })
    }
    return (
        <div>
            {content}
        </div>
    )
}
export default Posts