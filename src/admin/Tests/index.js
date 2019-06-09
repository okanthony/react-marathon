import React from 'react';

class Tests extends React.Component {
  componentDidMount() {
    if (module.hot) {
      this.testContext = require.context('mocha-loader!../../tests', false, /\.test.js$/);
      this.runCurrentTestSuite();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentPage !== this.props.currentPage) {
      const $mocha = document.getElementById('mocha');
      $mocha.innerHTML = '';
      this.runCurrentTestSuite();
    }
  }

  runCurrentTestSuite = () => {
    const currentTestSuite = this.testContext
      .keys()
      .find(key => key.includes(`page${this.props.currentPage}`));
    this.testContext(currentTestSuite);
  };

  render() {
    return <div id="mocha" />;
  }
}

export { Tests };
