import React from 'react';
import SlidePanel from './SlidePanel';
import renderHtml from '../../util/renderHTML';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.handlePanelToggle = this.handlePanelToggle.bind(this);
  }

  handlePanelToggle(e) {
    this.setState({ active: !this.state.active });
  }
  render() {
    return (
      <li className={this.props.class} data-dtmname={this.props.dtmname}>
        {this.props.href ? (
          <div style={{ paddingLeft: '10px' }}>
            <a href={this.props.href} dangerouslySetInnerHTML={renderHtml(this.props.title)} />{' '}
            <span style={{ float: 'right', paddingRight: '10px' }} onClick={this.handlePanelToggle}>
              {this.props.children.length} >>
            </span>
          </div>
        ) : (
          <div style={{ paddingLeft: '10px' }}>
            <span dangerouslySetInnerHTML={renderHtml(this.props.title)} />
            <span onClick={this.handlePanelToggle} style={{ float: 'right', paddingRight: '10px' }}>
              {this.props.children.length} >>
            </span>
          </div>
        )}
        <SlidePanel active={this.state.active}>
          <div onClick={this.handlePanelToggle} dangerouslySetInnerHTML={renderHtml('<< ' + this.props.title)} />
          {this.props.children}
        </SlidePanel>
      </li>
    );
  }
}

export default Panel;
