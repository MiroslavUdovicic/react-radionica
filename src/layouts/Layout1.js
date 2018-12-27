import React, { Component } from 'react';

class Layout1 extends Component {
  render() {
    return (
      <div>
        <header>React Radionica</header>
        <main>{this.props.children}</main>
        <footer>Quantox Technology</footer>
      </div>
    );
  }
}

export default Layout1;
