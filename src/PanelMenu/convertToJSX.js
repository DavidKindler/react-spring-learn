import React from 'react';
import HtmlToReact from 'html-to-react';

const HtmlToReactParser = new HtmlToReact.Parser();
var processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);

function convertToJSX(htmlObject) {
  const isValidNode = function(node) {
    // console.log('node', node);
    return true;
  };

  var processingInstructions = [
    {
      // this needs to go first!!!
      shouldProcessNode: function(node) {
        if (node.name === 'ul') {
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

    // {
    //   shouldProcessNode: function(node) {
    //     console.log('wtf2', node);
    //     return node;
    //   },
    //   processNode: function(node, children, index) {
    //     return <div key={index}>{children}</div>;
    //   }
    // },

    {
      // Anything else
      shouldProcessNode: function(node) {
        return true;
      },
      processNode: processNodeDefinitions.processDefaultNode
    }
  ];

  var reactComponent = HtmlToReactParser.parseWithInstructions(htmlObject, isValidNode, processingInstructions);

  // var reactComponent = HtmlToReactParser.parse(htmlObject);
  return reactComponent;
}

export default convertToJSX;
