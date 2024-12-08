import React from 'react';
import Footer from './Footer';
import WithState from './WithState';
import WithoutState from './WithoutState';

const Header = () => <header><h2>This is the Header</h2></header>;

const App = () => {
    return (
        <div>
            <Header />
            <h1>Understanding State in React</h1>
            
            {/* Component using useState */}
            <WithState />
            
            {/* Component without useState */}
            <WithoutState />
            
            <Footer />
        </div>
    );
};

export default App;