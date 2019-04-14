import React from 'react';
import styles from './MobileMenu.css';
import { Transition, animated } from 'react-spring/renderprops';
import classNames from 'classnames/bind';
import MobileMenuNav from './MobileMenuNav';
let cx = classNames.bind(styles);

// import MobileMenuNav from '../../data/NXP_en_mobilemenu';
// import MenuTest from './MenuTest';

class MobileMenu extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = { visible: false };
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
      // const hamburgerOpen = this.state.visible ? 'navbar-toggle open' : 'navbar-toggle';
      // domNode.className = hamburgerOpen;
      if (this.state.visible) {
        document.documentElement.style.overflow = 'hidden';
      } else {
        document.documentElement.style.overflow = '';
      }
    }
  }
  render() {
    const { visible } = this.state;
    return (
     
    //  <div className={cx({ mmMain: true, open: visible })}> 
<div style={{position: 'absolute', top: '0px', zIndex: '999 '}}>
        <Transition
          items={visible}
          from={{ opacity: 0, transform: 'translateY(110%)' }}
          enter={{ opacity: 1, transform: 'translateY(0%)',
        
          position: 'fixed',
          top: '0px',  
          height: '100%',
          width: '100%',
  backgroundColor: '#eee',
  margin: '24px 0 0 0'
           }}

          leave={{ opacity: 0, transform: 'translateY(110%)'        }}
        >
          {visible =>
            visible &&
            (props =>
              visible && (
            <div style={props} >
                <MobileMenuNav  />
            </div>
                 
            
              ))
            }
        </Transition>
        </div>
    );
  }
}

export default MobileMenu;


//  {/* <MobileMenuNav /> */}

//         {/* <MenuTest items={MobileMenuNav} /> */}
//         {/* {this.state.visible && <MobileMenuNav />} */}