import React from 'react';
import styles from './PanelMenu.module.css';

export default props => {
  let panels = [
    <div className={styles['panel-open']} style={{ backgroundColor: 'pink', height: '200px', width: '100%' }}>
      <p>Panel 1</p>
      <button onClick={() => props.navButton(-1, panelcount)}>Back</button> <br />
      <button onClick={() => props.navButton(1, panelcount)}>Next</button> <br />
    </div>,
    <div className={styles['panel-open']} style={{ backgroundColor: 'yellow', height: '200px', width: '100%' }}>
      <p>Panel 2</p>
      <button onClick={() => props.navButton(-1, panelcount)}>Back</button> <br />
      <button onClick={() => props.navButton(1, panelcount)}>Next</button> <br />
    </div>,
    <div className={styles['panel-open']} style={{ backgroundColor: 'limegreen', height: '200px', width: '100%' }}>
      <p>Panel 3</p>
      <button onClick={() => props.navButton(-1, panelcount)}>Back</button> <br />
      <button onClick={() => props.navButton(1, panelcount)}>Next</button> <br />
    </div>
  ];

  const panelcount = React.Children.count(panels);

  return <>{panels[props.active]}</>;
};
