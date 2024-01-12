import React, { useState } from 'react';

function ConcatenateForm() {
    const [word1, setWord1] = useState('');
    const [word2, setWord2] = useState('');

    const concatenateWords = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:3001/concatenate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ word1, word2 }),
        });

        const data = await response.text();
        console.log(data);
    };

    return (
        <form onSubmit={concatenateWords}>
            <input
                type="text"
                value={word1}
                onChange={(e) => setWord1(e.target.value)}
                placeholder="First word"
            />
            <input
                type="text"
                value={word2}
                onChange={(e) => setWord2(e.target.value)}
                placeholder="Second word"
            />
            <button type="submit">Concatenate</button>
        </form>
    );
}

export default ConcatenateForm;