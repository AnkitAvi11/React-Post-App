import React, {Component} from 'react';

import {connect} from 'react-redux';
import {fetchPostAction} from '../actions/posts';
import UserHeader from './User';

class Posts extends Component {

    componentDidMount = () => {
        this.props.fetchPost();
    }

    renderPosts = () => {
        return this.props.posts.map((post, index) => {
            return (
                <div className="card" key={index} style={{marginBottom:"10px"}}>
                    <div className="card-header"><b>{post.title}</b></div>
                    <div className="card-body">{post.body}</div>
                    <div className="card-body">
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            )
        });
    }

    render = () => {
        return  (
            <div className="container">
                {this.renderPosts()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps, {fetchPost : fetchPostAction})(Posts);