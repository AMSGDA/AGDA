import React, {Component} from 'react';
import {Link} from 'react-router';
import {debounce} from 'underscore';
import css from './menu.css';
import MobileMenu from './MobileMenu.jsx';
import {isMobile} from '../utility.js';
import {CLUBLOGO} from '../CloudLinks.js';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: isMobile()
    };
    this.toggleDevice = this.toggleDevice.bind(this);
  }

  toggleDevice() {
    this.setState({isMobile: isMobile()});
  }

  componentDidMount() {
    const debounceToggle = debounce(this.toggleDevice, 500);
    window.addEventListener('resize', debounceToggle);
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
  }

  render() {
    return this.state.isMobile ? <MobileMenu /> : desktopMenu();
  }
}

function desktopMenu() {
  return (
    <div>
      <div className={css.placeholder}></div>
      <div className={css.wrapper}>
        <Link to="/" className={css.homeMenuItem}>
          <img className={css.logo} src={CLUBLOGO} />
        </Link>
        <div className={css.itemWrapper}>
          <Link to="about" className={css.menuItem}>About</Link>
          <Link to="calendar" className={css.menuItem}>Calendar</Link>
          <Link to="members" className={css.menuItem}>Member Resources</Link>
          <Link to="vr" className={css.menuItem}>VR Division</Link>
        </div>
      </div>
    </div>
  );
}
