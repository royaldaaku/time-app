import React from 'react';

export const Button = props => {
    const {label, onClick} = props;
    return <button {...props} onClick={onClick} >{label}</button>
}