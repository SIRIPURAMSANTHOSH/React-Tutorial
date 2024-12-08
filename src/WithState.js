import React, { useState } from 'react';

const WithState = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{ border: '1px solid blue', padding: '20px', margin: '10px' }}>
            <h2>Component With useState</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment Count
            </button>
        </div>
    );
};

export default WithState;
