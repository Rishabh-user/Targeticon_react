// src/components/Loader.js
import React from 'react';

const loaderContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40vh',
    flexDirection: 'column',
};

const loaderStyle = {
    border: '6px solid #f3f3f3',
    borderTop: '6px solid #0065b0',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 2s linear infinite',
};

const loadingTextStyle = {
    marginTop: '1rem',
    fontSize: '1.5rem',
    color: '#0065b0',
    textAlign: 'center'
};

const Loader = () => (
    <div style={loaderContainerStyle}>
        <div style={loaderStyle}></div>
        <div style={loadingTextStyle}>Loading...</div>
    </div>
);

// Adding keyframes for animation
const styleSheet = document.styleSheets[0];
const keyframes = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default Loader;
