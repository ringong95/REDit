import React, { PropTypes } from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import styles from './styles.css'
import FlatButton from 'material-ui/FlatButton';
import {
    Link,
} from 'react-router';

const PostToolbar = ({ sortNewest, sortPopular, orderBy }) => {
    const flatbuttonCSS = {
        margin: 0,
        height: "100%"
    }
    return (

        <Toolbar className={styles.postListbar}>
            <h2> Posts </h2>
            <ToolbarGroup className={styles.sorting}>
                <Link to="/posts/fafa?sort=newest" query>
                    <FlatButton onClick={sortPopular}
                        label="Popular"
                        style={flatbuttonCSS}
                        backgroundColor={orderBy == "popular" ? "#ffffff" : "rgb(232, 232, 232)"} />
                </Link>
                <FlatButton onClick={sortNewest}
                    label="Newest"
                    style={flatbuttonCSS}
                    backgroundColor={orderBy == "newest" ? "#ffffff" : "rgb(232, 232, 232)"} />
            </ToolbarGroup>
        </Toolbar>
    )
}
PostToolbar.propTypes = {
    sortNewest: PropTypes.func.isRequired,
    sortPopular: PropTypes.func.isRequired,
    orderBy: PropTypes.string.isRequired,
    posts: PropTypes.shape({
        id: PropTypes.string,
        author: PropTypes.string,
        votes: PropTypes.number,
        categories: PropTypes.array,
        title: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.string
    })
}
export default PostToolbar;