import React, { useState, useEffect } from 'react';

export default function MyComponent() {

    const [word, setWord] = useState('Default');

    const handleChange = ({target}) => setWord(target.value);

    return (
        <input value={word} onChange={handleChange}></input>
    )
}