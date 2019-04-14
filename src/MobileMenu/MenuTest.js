import React from 'react';

const MenuUl = props => {
  // console.log('menuUl', props);
  return (
    <div id={props.id}>
      <div>Back</div>
      <ul id={props.id} count={props.count}>
        {props.children}
      </ul>
    </div>
  );
};

const MenuLi = props => {
  // console.log('menuli', props);
  return <li id={props.id}>{props.children}</li>;
};

class MenuTest extends React.Component {
  render() {
    console.log('MenuTest children', this.props);
    const { items } = this.props;
    let idx = 1;
    let newChild;
    return (
      <div className="Menu__Test">
        {mapRecursive(items, child => {
          if (child.type === 'ul') {
            return (
              <MenuUl id={idx++} count={child.props.children.length}>
                {child.props.children}
              </MenuUl>
            );
          }
          if (child.type === 'li') {
            return <MenuLi id={idx++}>{child.props.children}</MenuLi>;
          }

          return child;
        })}
      </div>
    );
  }
}

var idx = 1;
function mapRecursive(children, fn) {
  return React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return child;
    }

    if (child.props.children) {
      child = React.cloneElement(child, {
        children: mapRecursive(child.props.children, fn)
      });
    }

    return fn(child);
  });
}

//--------------------------------------------------------
// class MenuTest extends React.Component {
//   renderSubMenu(children) {
//     if (children && children.length > 0) {
//       return (
//         <div className="menu_submenu">{this.renderMenuItems(children)}</div>
//       );
//     }
//   }
//   renderMenuItems(items) {
//     return items.props.children.map((item, idx) => {
//       console.log('item', item);
//       return (
//         <div className="menu_item" key={idx}>
//           {item}
//           {this.renderSubMenu(item)}
//         </div>
//       );
//     });
//   }
//   render() {
//     console.log(this.props.children);
//     return (
//       <div className="menu_mobile">
//         {this.renderMenuItems(this.props.children)}
//       </div>
//     );
//   }
// }

export default MenuTest;
