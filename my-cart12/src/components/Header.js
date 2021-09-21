import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Stock Management System</h1>
        </a>
      </div>
      <div>
        
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
       
        <button onClick={() => prompt('Sign in to email!')}>
                Sign In</button>


      </div>
    </header>
  );
}
