import React from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext();
const { Provider } = AppContext;

class AppProvider extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  state = {
    currentPage: 1
  };

  onNextButtonClick = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1
    }));
  };

  render() {
    return (
      <Provider
        value={{
          currentPage: this.state.currentPage,
          onNextButtonClick: this.onNextButtonClick
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { AppProvider, AppContext };
