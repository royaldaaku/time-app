import React from 'react';

export const Timer = props => {
    const { time } = props;
    const {min, sec} = time;
    return (
        <div>
            <span>{min}:{sec}</span>
        </div>
    )
}
