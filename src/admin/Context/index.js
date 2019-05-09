import React from 'react';

let AppContext;
const { Provider } = AppContext = React.createContext();

class AppProvider extends React.Component {
    state = {
        currentPage: 1,
        foo: null,
        bar: null,
    };

    onNextButtonClick = () => {
        this.setState((prevState) => ({
            currentPage: prevState.currentPage + 1
        }))
    }

    render() {
        return (
            <Provider value={{
                currentPage: this.state.currentPage,
                onNextButtonClick: this.onNextButtonClick
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export { AppProvider, AppContext };
