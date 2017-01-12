import React, { Component, PropTypes } from 'react';
import Post from './../../components/Post'
import {data} from './../../mock-data'


// for css make an object with the css in it and just add to where you need it.
class PostList extends Component{
    constructor(){
        super();
        this.state = {
            data:{data},
            orderBy:"newest"
        }
        // 
    }
    sortPopular(){

    }
    updateVote(post){
        const newposts = this.state.data.posts.map((datapost)=>{
            if (datapost.id === post.id){
                datapost.votes =+ 1
            }
        })
        const newdata  = this.state.data.pop()
            newdata.concat(newposts)
            this.setState({data: newdata})
    }

    render(){
        return(
            <div className="PostList ">
            {data.posts.map((post) => {
                return(
                <Post key={post.id} 
                      author={post.author} 
                      votes={post.votes} 
                      categories={post.categories}
                      title={post.title}
                      description={post.description}
                      link={post.link}
                      />)

            })}
           
            }
            </div>
        )
    }
}
Post.propTypes = {
  author: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  categories: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link:PropTypes.string.isRequired
}
export default PostList;