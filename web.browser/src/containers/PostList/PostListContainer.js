import React, { Component, PropTypes } from 'react';
import Post from './../../components/Post'
import PostList from './PostList'
import { data } from './../../mock-data'

// for css make an object with the css in it and just add to where you need it.
class PostListContainer extends Component {
    constructor() {
        super();
        this.state = {
            posts: data.posts,
            orderBy: "newest",
        }
        this.updateVote = this.updateVote.bind(this);
        this.sortPopular = this.sortPopular.bind(this);
        this.sortNewest = this.sortNewest.bind(this);
        // 
    }
    getPosts(){
        const retrievedPosts = data.posts;
        const sortPosts = this.sortNewest(retrievedPosts)
        this.setState({posts:sortPosts}) ;
    }
    componentdidMount(){
        this.getPosts();
    }

    sortPopular(){
        const descending = (this.state.posts.sort((a, b) => b.votes - a.votes));
        this.setState({ posts: descending,
                        orderBy: "popular"
        })
    }
    sortNewest(){
        const ascending = (this.state.posts.sort((a, b) => parseInt(a.id) - parseInt(b.id)));
        this.setState({ posts: ascending,
                        orderBy: "newest"
        })
    }
    updateVote(post) {
        
        const newposts = this.state.posts.map(((datapost) => {
            if (datapost.id === post.id) {
                datapost.votes += 1
                // console.log("this")
            }
            console.log(datapost.votes)
            console.log(post.id)
            return datapost
        })) 
        this.setState({ post: newposts })
    }

    render() {
        return (
            <PostList 
                updateVote={this.updateVote} 
                sortNewest={this.sortNewest}
                sortPopular={this.sortPopular}
                orderBy={this.state.orderBy}
                posts={this.state.posts}
                 />
        )
    }
}

export default PostListContainer;