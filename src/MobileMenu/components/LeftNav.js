import React from 'react';
import SlidePanel from './SlidePanel';
// import Panel from './Panel';

import renderHtml from '../../util/renderHTML';
import HtmlToReact from 'html-to-react';
const HtmlToReactParser = new HtmlToReact.Parser();
var processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.handlePanelToggle = this.handlePanelToggle.bind(this);
  }

  handlePanelToggle(e) {
    this.setState({ active: !this.state.active });
  }
  render() {
    const {  leftnav } = this.props;
    // console.log('leftnav title', title);
    // console.log('leftnav category', category);
    // console.log('leftnav leftnav', leftnav);

    return (
      <li className={this.props.class} data-dtmname={this.props.dtmname}>
        <div style={{ paddingLeft: '10px' }}>
          <span dangerouslySetInnerHTML={renderHtml(this.props.title)} />
          {/* <button onClick={this.handlePanelToggle} style={{ float: 'right', padding: '3px 10px' }}>
            {this.props.children.length} >>
          </button>  */}

          <div>LeftNav list here2</div>
          <LeftNavJSX leftnavmenu={leftnav} />
          {/* <button onClick={this.handlePanelToggle} style={{ float: 'right', padding: '3px 10px' }}>
              children.length here >>
            </button> */}
        </div>

        <SlidePanel active={this.state.active}>
          <button onClick={this.handlePanelToggle} dangerouslySetInnerHTML={renderHtml('<< ' + this.props.title)} />
          {this.props.children}
        </SlidePanel>
      </li>
    );
  }
}

export default LeftNav;

function LeftNavJSX(props) {
  // const { active } = props;

  const isValidNode = function(node) {
    // console.log('node', node);
    return true;
  };

  var processingInstructions = [
    {
      // this needs to go first!!!
      shouldProcessNode: function(node) {
        if (
          node.name === 'ul' &&
          node.prev &&
          node.prev.parent &&
          node.prev.parent.attribs &&
          node.prev.parent.attribs.class &&
          node.prev.parent.attribs.class.indexOf('mm-selected') !== -1
        ) {
          return node;
        }
      },
      processNode: function(node, children, index) {
        // console.log('pink node', node);
        return (
          <ul key={index} style={{ backgroundColor: 'pink' }}>
            {children}
          </ul>
        );
      }
    },
    {
      // this needs to go first!!!
      shouldProcessNode: function(node) {
        if (
          node.name === 'li' &&
          node.attribs &&
          node.attribs.class &&
          node.attribs.class.indexOf('mm-selected') !== -1
        ) {
          return node;
        }
      },
      processNode: function(node, children, index) {
        // console.log('yellow node', node);
        return (
          <div key={index} style={{ backgroundColor: 'yellow' }}>
            {/* <Panel title={'title here'} key={index} style={{ backgroundColor: 'yellow' }}> */}
            {children}
            {/* </Panel> */}
          </div>
        );
      }
    },
    // {
    //   shouldProcessNode: function(node) {
    //     return node;
    //   },
    //   processNode: function(node, children, index) {
    //     return <div key={index}>wtf></div>;
    //   }
    // },

    {
      // Anything else
      shouldProcessNode: function(node) {
        // console.log(node);
        return true;
      },
      processNode: processNodeDefinitions.processDefaultNode
    }
  ];

  let leftnavmenu = props.leftnavmenu;

  var reactComponent = HtmlToReactParser.parseWithInstructions(leftnavmenu, isValidNode, processingInstructions);

  return reactComponent;
}
