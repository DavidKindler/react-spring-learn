import React from 'react';
// import MainPanel from './components/MainPanel';
// import LeftNav from './components/LeftNav';
import styles from './MobileMenu.module.css';

import { ProductsMenu, ApplicationsMenu, SupportMenu, AboutMenu } from './data/NXP_mobilemenu.en';

const NXP = { megaMenuUrl: '//foobar' };

// const NXP = { megaMenuUrl: '//foobar.com' }; // needs to be fixed- obviously
const MobileMenuNav = props => {
  const { leftnav, category } = props;

  const Products =
    category === 'MMenu-products' ? (
      // <LeftNav title="PRODUCTS" category={category} leftnav={leftnav}>
      <ProductsMenu megaMenuUrl={NXP.megaMenuUrl} category={category} leftnav={leftnav} />
    ) : (
      // </LeftNav>
      <ProductsMenu megaMenuUrl={NXP.megaMenuUrl} />
    );

  const Applications =
    category === 'MMenu-applications' ? (
      // <LeftNav title="APPLICATIONS" category={category} leftnav={leftnav}>
      <ApplicationsMenu megaMenuUrl={NXP.megaMenuUrl} category={category} leftnav={leftnav} />
    ) : (
      // </LeftNav>
      <ApplicationsMenu megaMenuUrl={NXP.megaMenuUrl} />
    );

  const Support =
    category === 'MMenu-support' ? (
      // <LeftNav title="SUPPORT" category={category} leftnav={leftnav}>
      <SupportMenu megaMenuUrl={NXP.megaMenuUrl} category={category} leftnav={leftnav} />
    ) : (
      // </LeftNav>
      <SupportMenu megaMenuUrl={NXP.megaMenuUrl} />
    );

  const About =
    category === 'MMenu-about' ? (
      // <LeftNav title="ABOUT" category={category} leftnav={leftnav}>
      <AboutMenu megaMenuUrl={NXP.megaMenuUrl} category={category} leftnav={leftnav} />
    ) : (
      // </LeftNav>
      <AboutMenu megaMenuUrl={NXP.megaMenuUrl} />
    );

  return (
    <ul className={styles['mobile-main']}>
      {Products}
      {Applications}
      {Support}
      {About}
    </ul>

    // <MainPanel>
    //   {Products}
    //   {Applications}
    //   {Support}
    //   {About}
    // </MainPanel>
  );
};

export default MobileMenuNav;
