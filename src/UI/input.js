import React from 'react';

export const Input = props => {
    const { name, onChange } = props;
    return <input name={name} onChange={onChange} {...props} />
}
