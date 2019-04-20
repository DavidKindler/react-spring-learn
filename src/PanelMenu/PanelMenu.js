import React, { Component } from 'react';
import Panels from './Panels';
import styles from './PanelMenu.module.css';
import { x, LeftNavJSX, menu } from './convertMobileMenu';

function Test() {
  return <div>{LeftNavJSX(x)}</div>;
}
class PanelMenu extends Component {
  constructor(props) {
    super(props);

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.navButton = this.navButton.bind(this);
    this.state = { visible: false, active: 0 };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleClickOutside(event) {
    let domNode = document.getElementById('hamburger');
    if (domNode && domNode.contains(event.target)) {
      this.setState({
        visible: !this.state.visible
      });

      if (this.state.visible) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = '';
      }
    }
  }

  navButton(event, panelcount) {
    const comp = this.state.active + event;
    if (comp < panelcount && comp >= 0) {
      this.setState({ active: this.state.active + event });
    }
  }

  render() {
    return (
      <div style={{ display: this.state.visible ? 'block' : 'none' }} className={styles['panel-open']}>
        <Test />
        {/* <Panels active={this.state.active} navButton={this.navButton} /> */}
      </div>
    );
  }
}

export default PanelMenu;
