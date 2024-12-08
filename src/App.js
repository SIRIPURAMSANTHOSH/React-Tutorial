import React from 'react';
import Footer from './Footer';

const Header = () => <header><h2>This is the Header</h2></header>;

const App = () => {
    return (
        <div>
            <Header />
            <h1>Welcome to My Website</h1>
            <Footer />
        </div>
    );
};

export default App;