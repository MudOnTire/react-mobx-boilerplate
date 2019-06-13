import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('postStore')
@observer
export default class Posts extends Component {

  componentWillMount() {
    console.log(this.props);
    const { postStore } = this.props;
    postStore.fetchPosts().catch(err => {
      console.log(err);
    });
  }

  render() {
    const { posts } = this.props.postStore;
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