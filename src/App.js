import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class CommentBox extends Component {
  render() {
    const comments = this._getComments();
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="comment-box">
              <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
              <div className="comment-list">
                {comments}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  _getComments() {
    const commentList = [
      {
        id: 1, author: 'Abhishek Mishra', body: 'Great Job'
      },
      {
        id: 2, author: 'Vishnu Sharma', body: 'Excellent Work'
      },
      {
        id: 3, author: 'Vishnu Khandal', body: 'Excellent Work'
      }
    ];
    return commentList.map((comment) => {
      return (<Comment author={comment.author} body={comment.body} key={comment.id} />);
    });
  }
  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No Comments Yet';
    }
    else if (commentCount === 1) {
      return '1 Comment';
    }
    else {
      return `${commentCount} Comments`;
    }
  }
}

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">{this.props.body}</p>
        <div className="comment-footer">
          <button className="btn btn-danger">Delete Comment</button>
        </div>
      </div>
    );
  }
}

export default CommentBox;
