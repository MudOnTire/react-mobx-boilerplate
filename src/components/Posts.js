import React, { Component } from 'react';
import { observer } from 'mobx-react';
import postStore from '../stores/PostStore';
import { observable } from 'mobx';

@observer
export default class Posts extends Component {

  componentWillMount() {
    postStore.fetchPosts().catch(err => {
      console.log(err);
    });
  }

  render() {
    const { posts } = postStore;
    const postItems = posts.map(p => {
      return (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.body}</p>
        </div>
      )
    })
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}