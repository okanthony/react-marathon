import './styles.css';
import React from 'react'

import { AppConsumer } from '../Context';

const numbers = [1, 2, 3, 4, 5];

const TitleBar = () => {
    return (
        <AppConsumer>
            {({currentPage}) =>
                <div className="title-bar">
                    {currentPage}
                    <div className="progress-meter">
                        <div className="progress-meter-bar">
                            {
                                numbers.map((number) => {
                                    return (
                                        <div className="progress-bullet" key={number} />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            }
        </AppConsumer>
    );
}

export { TitleBar };
