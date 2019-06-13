import React, { Component } from 'react';
import './App.css';
import Posts from './Posts';
import Postform from './Postform';

export default class App extends Component {
  render() {
    return (
      <>
        <Postform />
        <Posts />
      </>
    )
  }
}