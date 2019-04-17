import React from 'react';
import SlidePanel from './SlidePanel';
import renderHtml from '../../util/renderHTML';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { active: false };
    this.state = { active: this.props.active };
    this.handlePanelToggle = this.handlePanelToggle.bind(this);
  }

  handlePanelToggle(e) {
    this.setState({ active: !this.state.active });
  }
  render() {
    console.log('props active', this.props.active, this.props.category);

    let x = React.Children.map(this.props.children, (child) => {
      // This is support for non-node elements (eg. pure text), they have no props
      if (!child.props) {
        return child
      }
      if (child.props.active) { 
      console.log('child' , child)
      return (<div> 
        <button onClick={this.handlePanelToggle} dangerouslySetInnerHTML={renderHtml('<< ' + this.props.title)} />
      {child}
      </div>)
      }
    })
    return (
      <li className={this.props.class} data-dtmname={this.props.dtmname}>
        {this.props.href ? (
          <div style={{ paddingLeft: '10px' }}>
            {this.state.active}
            <a href={this.props.href} dangerouslySetInnerHTML={renderHtml(this.props.title)} />{' '}
            <button style={{ float: 'right', padding: '3px 10px' }} onClick={this.handlePanelToggle}>
              {this.props.children.length} >>
            </button>
          </div>
        ) : (
          <div style={{ paddingLeft: '10px' }}>
            <span dangerouslySetInnerHTML={renderHtml(this.props.title)} />
            <button onClick={this.handlePanelToggle} style={{ float: 'right', padding: '3px 10px' }}>
              {this.props.children.length} >>
            </button>
          </div>
        )}

{  x  }
        <SlidePanel active={this.state.active} >
          <button onClick={this.handlePanelToggle} dangerouslySetInnerHTML={renderHtml('<< ' + this.props.title)} />
          {this.props.children}

        </SlidePanel>
      </li>
    );
  }
}

export default Panel;
