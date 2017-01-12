import React, { Component, PropTypes } from 'react';
import Post from './../../components/Post'
import { data } from './../../mock-data'
import FlatButton from 'material-ui/FlatButton';


// for css make an object with the css in it and just add to where you need it.
class PostList extends Component {
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
    sortPopular(){
        const descending = (this.state.posts.sort((a, b) => parseInt(b.votes) - parseInt(a.votes)));
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
            }
            return datapost
        })) 
        this.setState({ post: newposts })
    }

    render() {
        return (
            <div>
            <div className="postListbar"> 
            <h2> Posts </h2>
            <div className="sorting"> 
                 <FlatButton onClick={this.sortPopular} label={"Popular"} />
                 <FlatButton onClick={this.sortNewest} label={"Newest"} />
            </div>
            </div>
            <div className="PostList ">
                {data.posts.map((post) => {
                    return (
                        <Post key={post.id}
                            author={post.author}
                            votes={post.votes}
                            categories={post.categories}
                            title={post.title}
                            description={post.description}
                            link={post.link}
                            updateVote={this.updateVote.bind(this, post)}
                            />)
                    })
                }
            </div>
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
    link: PropTypes.string.isRequired
}
export default PostList;