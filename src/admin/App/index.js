import './styles.css';
import React from 'react';

import { TitleBar } from '../TitleBar';
import { Instructions } from '../Instructions';

const App = () => {
    return (
        <div className="app-container">
            <TitleBar />
            <div className="app-body">
                <Instructions />
                <div className="app-content">
                    Foobas
                </div>
            </div>
        </div>
    );
}

export { App };
