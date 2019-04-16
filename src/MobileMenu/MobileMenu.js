/* global $, jQuery */
import React from 'react';
import { Transition } from 'react-spring/renderprops';
import MobileMenuNav from './MobileMenuNav';
import BottomNav from './components/BottomNav';

// import MobileMenuNav from '../../data/NXP_en_mobilemenu';
// import MenuTest from './MenuTest';
class MobileMenu extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = { visible: false, leftnav: {}, category: null };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
    var leftNavDomNode = document.getElementsByClassName('leftnav');
    if (leftNavDomNode.length) {
      let selected = document.querySelector('li.mm-selected');
      let cloneHTML = selected.outerHTML;

      let clone = leftNavDomNode[0].cloneNode(true);
      let q = [];
      clone.classList.forEach(c => q.push(c));
      let category = q.filter(i => i.indexOf('MM') > -1)[0];

      this.setState({ leftnav: cloneHTML, category: category });
    }
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
  render() {
    const { visible } = this.state;
    return (
      <div style={{ position: 'absolute', top: '0px', zIndex: '999 ' }}>
        <Transition
          items={visible}
          from={{ opacity: 0, transform: 'translateY(110%)' }}
          enter={{
            opacity: 1,
            transform: 'translateY(0%)',

            position: 'fixed',
            top: '0px',
            height: '100%',
            width: '100%',
            backgroundColor: '#eee',
            margin: '24px 0 0 0'
            // overflow: 'scroll'
          }}
          leave={{ opacity: 0, transform: 'translateY(110%)' }}
        >
          {visible =>
            visible &&
            (props =>
              visible && (
                <div style={props}>
                  <MobileMenuNav category={this.state.category} leftnav={this.state.leftnav} />
                  <BottomNav />
                </div>
              ))
          }
        </Transition>
      </div>
    );
  }
}

export default MobileMenu;
