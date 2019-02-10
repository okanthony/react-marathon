import React from 'react';

const { Provider, Consumer } = React.createContext();

class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.onNextButtonClick = this.onNextButtonClick.bind(this);
    }

    onNextButtonClick() {
        console.log('NEXXXT');
    }

    render() {
        return (
            <Provider value={{
                currentPage: 1,
                onNextButtonClick: this.onNextButtonClick
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export { AppProvider, Consumer as AppConsumer };
