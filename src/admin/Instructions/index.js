import './styles.css';
import React from 'react'

import { AppConsumer } from '../Context';
import { Button } from '../Button';

const Instructions = () => {
    return (
        <AppConsumer>
            {({ onNextButtonClick }) =>
            <div className="instructions-bar">
                Instructions Bar
                <Button onClick={onNextButtonClick}>Next Page</Button>
            </div>}
        </AppConsumer>
    );
}

export { Instructions };
