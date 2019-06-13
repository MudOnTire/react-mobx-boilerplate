import { observable, action, computed } from 'mobx';

class PostStore {

  @observable posts = [];

  @action refreshPosts = (posts) => {
    this.posts = posts;
  }

  @action unshiftPost = (post) => {
    this.posts.unshift(post);
  }

  @computed get postCount() {
    return this.posts.length;
  }

  fetchPosts = () => {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
          this.refreshPosts(posts);
          resolve(this.posts);
        })
        .catch(reject);
    });
  }

  createPost = (post) => {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(post)
      })
        .then(res => res.json())
        .then(data => {
          this.unshiftPost({
            ...data,
            id: Date.now()
          });
          resolve(post);
        })
        .catch(reject);
    });
  }
}

export default new PostStore();