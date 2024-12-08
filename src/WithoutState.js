import React from 'react';

const WithoutState = () => {
    let count = 0;

    const handleClick = () => {
        count += 1;
        console.log('Count (not visible in UI):', count);
    };

    return (
        <div style={{ border: '1px solid red', padding: '20px', margin: '10px' }}>
            <h2>Component Without useState</h2>
            <p>Count: {count}</p>
            <button onClick={handleClick}>
                Try to Increment (won't update UI)
            </button>
        </div>
    );
};

export default WithoutState;
