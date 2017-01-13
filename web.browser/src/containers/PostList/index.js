import PostListContainer from './PostListContainer'
import PostList from './PostList'

export default PostListContainer;

// import React, { Component, PropTypes } from 'react';
// import Post from './../../components/Post'
// import { data } from './../../mock-data'
// import FlatButton from 'material-ui/FlatButton';
// import styles from "./styles.css"
// import PostToolbar from './../../components/PostToolbar'
// import Posts from './../../components/Posts'

// // for css make an object with the css in it and just add to where you need it.
// class PostList extends Component {
//     constructor() {
//         super();
//         this.state = {
//             posts: data.posts,
//             orderBy: "newest",
//         }
//         this.updateVote = this.updateVote.bind(this);
//         this.sortPopular = this.sortPopular.bind(this);
//         this.sortNewest = this.sortNewest.bind(this);
//         // 
//     }
//     getPosts(){
//         const retrievedPosts = data.posts;
//         const sortPosts = this.sortNewest(retrievedPosts)
//         this.setState({posts:sortPosts}) ;
//     }
//     componentdidMount(){
//         this.getPosts();
//     }

//     sortPopular(){
//         const descending = (this.state.posts.sort((a, b) => b.votes - a.votes));
//         this.setState({ posts: descending,
//                         orderBy: "popular"
//         })
//     }
//     sortNewest(){
//         const ascending = (this.state.posts.sort((a, b) => parseInt(a.id) - parseInt(b.id)));
//         this.setState({ posts: ascending,
//                         orderBy: "newest"
//         })
//     }
//     updateVote(post) {
        
//         const newposts = this.state.posts.map(((datapost) => {
//             if (datapost.id === post.id) {
//                 datapost.votes += 1
//                 // console.log("this")
//             }
//             console.log(datapost.votes)
//             console.log(post.id)
//             return datapost
//         })) 
//         this.setState({ post: newposts })
//     }

//     render() {
//         return (
            
//         )
//     }
// }
// Post.propTypes = {
//     author: PropTypes.string.isRequired,
//     votes: PropTypes.number.isRequired,
//     categories: PropTypes.array.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     link: PropTypes.string.isRequired
// }
// export default PostList;