/**
 * General data loading with redux
 * 
 * component gets rendered onto screen
 * 
 * componets didmount lifecycle method called
 * 
 * we call action creator from lifecycle method
 * 
 * action creator runs code to make an api request
 * 
 * api responds with data
 * 
 * action creator returns an action with the fetched data on the payload property
 * 
 * some reducer sees the action, returns the data off the 'payload'
 * 
 * 
 */
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions/index';
import UserHeader from './UserHeader';

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }
    renderList() {
      return this.props.posts.map(post =>
        {
          /**
           * Map posts into html
           */
          return (
            <div className="item" key={post.id}>
              <i className="large middle aligned icon user"></i>
              <div className="content">
                <div className="description">
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </div>
              </div>
              <UserHeader userId={post.userId} />
            </div>
          )
        })
    }
  render() {
    console.log(this.props.posts);
    return (
      <div className="ui relaxed divided list">
          {this.renderList()}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);