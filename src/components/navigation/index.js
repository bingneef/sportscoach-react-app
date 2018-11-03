import React, { memo } from 'react';
import { useImmer } from 'use-immer';
import { Link } from 'react-router-dom';

export const Navigation = memo((props) => {
  const [nav, updateNav] = useImmer({
    open: false,
  });

  const toggleNav = () => {
    updateNav(draft => {
      draft.open = !draft.open
    });
  }

  const closeNav = () => {
    updateNav(draft => {
      draft.open = false
    });
  }

  return (
    <nav className='navbar is-fixed-top' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='https://bulma.io'>
          <img alt='logo' src='https://bulma.io/images/bulma-logo.png' width='112' height='28' />
        </a>
        <span onClick={toggleNav} className={`navbar-burger burger ${nav.open && 'is-active'}`}>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </span>
      </div>

      <div className={`navbar-menu ${nav.open && 'is-active'}`}>
        <div className='navbar-start'>
          <Link onClick={closeNav} className='navbar-item' to='/'>Home</Link>
          <Link onClick={closeNav} className='navbar-item' to='/about'>About</Link>
          <Link onClick={closeNav} className='navbar-item' to='/users'>Users</Link>
        </div>

        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='buttons'>
              <Link className='button is-primary' to='/sign-up'>
                <strong>Sign up</strong>
              </Link>
              <Link className='button is-light' to='/login'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
});

export default Navigation;
