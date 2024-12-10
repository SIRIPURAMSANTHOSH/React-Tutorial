import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer2 from './Footer';
import WithState from './WithState';
import WithoutState from './WithoutState';
import './App.css';
import Calculator from './Calculator';




// Home component
const Home = () => (
    <div>
        <h2>Welcome to Our App</h2>
        <p>This is the home page of our application.</p>
    </div>
);

// About component
const About = () => (
    <div>
        <h2>About Us</h2>
        <p>Learn more about our application and its features.</p>
    </div>
);


const Contact = () => (
    <div>
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us with any questions or feedback.</p>
    </div>
); 




const Header = () => <header><h2>This is the Header</h2></header>;


function App() { 

    const [isDarkTheme, setIsDarkTheme] = useState(false); // Define state

    const theme = {
        light: {
            background: '#ffffff',
            text: '#333333',
            border: '#ccc',
            buttonBg: '#4CAF50',
            buttonText: 'white',
            inputBg: '#ffffff',
            inputBorder: '#ccc',
        },
        dark: {
            background: '#333333',
            text: '#ffffff',
            border: '#555555',
            buttonBg: '#1a8a1f',
            buttonText: '#ffffff',
            inputBg: '#444444',
            inputBorder: '#666666',
        },
    };

    const currentTheme = isDarkTheme ? theme.dark : theme.light;

    return (
        <div>
        
        <div
            style={{
                border: `1px solid ${currentTheme.border}`,
                padding: '65px',
                borderRadius: '8px',
                maxWidth: '100%',
                marginTop:'-100px',
                backgroundColor: currentTheme.background,
                color: currentTheme.text,
                transition: 'all 0.3s ease',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '20px',
                    marginTop:'0px'
                }}
            >
                <h2 style={{ margin:0 }}></h2>
                <button
                    onClick={() => setIsDarkTheme(!isDarkTheme)}
                    style={{
                        padding: '8px 15px',
                        backgroundColor: currentTheme.buttonBg,
                        color: currentTheme.buttonText,
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginTop:'50px'
                    }}
                >
                    {isDarkTheme ? '🌞 Light' : '🌙 Dark'}
                </button>
            </div>
            <Router>
        <div className="App">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/state-example">State Example</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/state-example" element={
                    <div>
                        <Header />
                      
                        
                        <h1>Understanding State in React</h1>
                        
                        {/* Component using useState */}
                        <WithState />
                        
                        {/* Component without useState */}
                        <WithoutState />
                        <Calculator/>
                       
                        
                        
                    </div>
                } />
                <Route path="/Contact" element={
                    <div>
                        <Contact/>
                        <Footer2/> 
                    </div>
                }/>
            </Routes>
           <Footer2/> 
        </div>
        </Router>
       
    </div>
    </div>
    );
}

export default App;
