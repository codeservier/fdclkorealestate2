import React, { useState } from 'react';
// import './index.css';

const App = () => {
    const [content, setContent] = useState('Welcome to the Admin Page');

    const showContent = (page) => {
        switch (page) {
            case 'home':
                setContent('This is the home page.');
                break;
            case 'about':
                setContent('This is the about page.');
                break;
            case 'services':
                setContent('This is the services page.');
                break;
            case 'contact':
                setContent('This is the contact page.');
                break;
            default:
                setContent('Welcome to the Admin Page');
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="w-64 bg-white shadow-lg p-5">
                <h2 className="text-2xl font-bold text-center mb-6">Admin Menu</h2>
                <ul className="list-none p-0">
                    {['home', 'about', 'services', 'contact'].map((item) => (
                        <li 
                            key={item} 
                            className="py-3 px-4 mb-2 text-gray-700 bg-gray-100 rounded-lg cursor-pointer transition duration-200 hover:bg-blue-500 hover:text-white" 
                            onClick={() => showContent(item)}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex-1 p-10">
                <h2 className="text-3xl font-semibold text-gray-800">{content}</h2>
                <p className="mt-4 text-gray-600">
                    This section displays the content related to the selected menu item.
                </p>
            </div>
        </div>
    );
};

export default App;
