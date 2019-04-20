import React from 'react';
import HtmlToReact from 'html-to-react';
import { a, b } from './data/NXP_mobilemenu_ORIG';

var temp = document.createElement('div');
var q = a();
temp.innerHTML = q;
var x = temp.firstElementChild;
// var x = menu();
// var x = temp.firstChild;
window.arr = Array.prototype.slice.call(x.children);

x = window.arr[3].innerHTML;

// console.log(arr);
const HtmlToReactParser = new HtmlToReact.Parser();
var processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);

function LeftNavJSX(htmlObject) {
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

export { x, LeftNavJSX, menu };
