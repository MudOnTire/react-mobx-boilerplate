import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import postStore from '../stores/PostStore';

@observer
export default class Postform extends Component {

  @observable title = '';
  @observable body = '';

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, body } = this;
    const post = { title, body };
    postStore.createPost(post).catch(err => {
      console.log(err);
    });
  }

  render() {
    const { title, body } = this;
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title: </label><br />
            <input
              name="title"
              value={title}
              onChange={e => {
                this.title = e.target.value;
              }}
            />
          </div>
          <br />
          <div>
            <label>Body: </label><br />
            <textarea
              name="body"
              value={body}
              onChange={e => {
                this.body = e.target.value;
              }}
            />
          </div>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}