import './styles.css';
import React from 'react';

import { AppProvider } from '../Context';
import { TitleBar } from '../TitleBar';
import { Instructions } from '../Instructions';

const App = () => {
    return (
        <AppProvider>
            <div className="app-container">
                <TitleBar />
                <div className="app-body">
                    <Instructions />
                    <div className="app-content">
                        Foobas
                    </div>
                </div>
            </div>
        </AppProvider>
    );
}

export { App };
