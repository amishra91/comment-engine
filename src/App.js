import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class CommentBox extends Component {
  constructor () {
    super();
    this.state =  {
      showComments: false,
      comments: [
        {
          id: 1, author: 'Abhishek Mishra', body: 'Great Job'
        }
      ]
    };
  }
  render() {
    const comments = this._getComments();
    let commentNodes;
    if (this.state.showComments) {
      commentNodes = <div className="comment-list"> {comments} </div>;
    }
    let buttonText = 'Show Comments';
    if (this.state.showComments) {
      buttonText = 'Hide Comments';
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="comment-box">
              <h4 className="comment-count">{this._getCommentsTitle(comments.length)}</h4>
              <button className="btn btn-primary pull-right" onClick={this._handleClick.bind(this)}>{buttonText}</button>
              <CommentForm addComment={this._addComment.bind(this)} />
              {commentNodes}
            </div>
          </div>
        </div>
      </div>
    );
  }
  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }
  _getComments() {
    
    return this.state.comments.map((comment) => {
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
  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
    this.setState({ comments: this.state.comments.concat([comment])});
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

class CommentForm extends Component {
  render() {
    return (
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <label>Join the discussion</label>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Name" ref={(input) => this._author = input} />
        </div>
        <div className="form-group">
          <textarea className="form-control" placeholder="Comment" ref={(textarea) => this.body = textarea}/>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">Comment</button>
        </div>
      </form>
    );
  }
  _handleSubmit(event) {
    event.preventDefault();
    let author = this._author;
    let body = this.body;
    this.props.addComment(author.value, body.value);
  }
}

export default CommentBox;
