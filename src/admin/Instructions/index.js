import './styles.css';
import React, { useContext } from 'react'

import { AppContext } from '../Context';
import { Button } from '../Button';

const Instructions = () => {
    const { onNextButtonClick } = useContext(AppContext);

    return (
        <div className="instructions-bar">
            Instructions Bar
            <Button onClick={onNextButtonClick}>Next Page</Button>
        </div>
    );
}

export { Instructions };
