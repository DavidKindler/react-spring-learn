import React from 'react';
import PanelItem from '../components/PanelItem';
import Panel from '../components/Panel';
// import LeftNav from '../components/LeftNav';

const ProductsMenu = props => {
  const { leftnav, category } = props;
  let leftNav = leftnav && category === 'MMenu-products' ? leftnav : <div>No Left Nav</div>;
  return (
    <Panel title="PRODUCTS" class="productsmenu" dtmname="PRODUCTS" href={`${props.megaMenuUrl}/parametricSearch`}>
      <Panel
        active={true}
        category={category}
        title="ARM<sup>&reg;</sup> PROCESSORS"
        href={`${props.megaMenuUrl}/products/arm-processors:ARM-ARCHITECTURE`}
      >
        <PanelItem>
          <a href={`${props.megaMenuUrl}/products/arm-processors/kinetis-cortex-m:KINETIS`}>
            Kinetis Cortex<sup>&reg;</sup>-M Microcontrollers
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/products/arm-processors/lpc-arm-cortex-m-mcus:LPC-ARM-CORTEX-M-MCUS`}>
            LPC Cortex-M Microcontrollers
          </a>
        </PanelItem>
        <PanelItem>
          <a
            href={`${
              props.megaMenuUrl
            }/products/arm-processors/i.mx-applications-processors-based-on-arm-cores:IMX_HOME`}
          >
            i.MX Applications Processors
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/products/power-architecture-processors/qoriq-platforms:QORIQ_HOME`}>
            QorIQ Multicore Processors
          </a>
        </PanelItem>
      </Panel>
      <PanelItem>
        <a href={`${props.megaMenuUrl}/products/power-architecture-processors:POWER-ARCHITECTURE`}>
          POWER ARCHITECTURE<sup>&reg;</sup> PROCESSORS
        </a>
      </PanelItem>
      <PanelItem>
        <a href={`${props.megaMenuUrl}/products/more-processors:MORE-PROCESSORS`}>MORE PROCESSORS</a>
      </PanelItem>
      <Panel title=" AUTOMOTIVE PRODUCTS" href={`${props.megaMenuUrl}/products/automotive-products:MC_50802`}>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/products/automotive-products:MC_50802?tid=sbmenu#vehicle`}>
            In-Vehicle Network
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/products/automotive-products:MC_50802?tid=sbmenu#MCUMPU`}>
            Microcontrollers and Processors
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/products/automotive-products:MC_50802?tid=sbmenu#energy`}>
            Safety and Power Management
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/products/automotive-products:MC_50802?tid=sbmenu#smart`}>
            Smart Power Drivers
          </a>
        </PanelItem>
      </Panel>
      <PanelItem>
        <a href={`${props.megaMenuUrl}/products/analog:ANALOG`}>ANALOG</a>
      </PanelItem>
      <Panel
        title=" IDENTIFICATION &amp; SECURITY"
        href={`${props.megaMenuUrl}/products/identification-and-security:MC_53420 `}
      >
        <PanelItem>
          <a href={`${props.megaMenuUrl}/products/identification-and-security/smart-card-ics/mifare-ics:MC_53422`}>
            MIFARE
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/products/identification-and-security/nfc-and-reader-ics:MC_71110`}>NFC</a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/products/identification-and-security/smart-label-and-tag-ics:MC_71109`}>
            RFID
          </a>
        </PanelItem>
      </Panel>
      <PanelItem>
        <a href={`${props.megaMenuUrl}/products/media-and-audio-processing:MEDIA-AND-AUDIO-PROCESSING`}>
          MEDIA AND AUDIO
        </a>
      </PanelItem>
      <PanelItem>
        <a href={`${props.megaMenuUrl}/products/power-management:POWER-MANAGEMENT`}>POWER MANAGEMENT</a>
      </PanelItem>
      <PanelItem>
        <a href={`${props.megaMenuUrl}/products/rf:RF_HOME`}>RF</a>
      </PanelItem>
      <PanelItem>
        <a href={`${props.megaMenuUrl}/products/sensors:SNSHOME`}>SENSORS</a>
      </PanelItem>
      <PanelItem>
        <a href={`${props.megaMenuUrl}/products/wireless-connectivity:WIRELESS-CONNECTIVITY`}>WIRELESS CONNECTIVITY</a>
      </PanelItem>
      <PanelItem>
        <a href={`${props.megaMenuUrl}/products/reference-designs:REFDSGNHOME`}>REFERENCE DESIGNS</a>
      </PanelItem>
      <PanelItem>
        <a href={`${props.megaMenuUrl}/products/developer-resources:DEVELOPER_HOME`}>DEVELOPER RESOURCES</a>
      </PanelItem>
      <PanelItem>
        <a href={`${props.megaMenuUrl}/support/developer-resources/software-center:SOFTWARE-CENTER`}>SOFTWARE CENTER</a>
      </PanelItem>
      <Panel title="MORE PRODUCT INFORMATION">
        <PanelItem>
          <a href={`${props.megaMenuUrl}/products/products:PCPRODCAT `}>All Products</a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/packages `}>Packages</a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/about/technology-programs/product-longevity:PRDCT_LONGEVITY_HM`}>
            Product Longevity Program
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/products/product-selector:PRODUCT-SELECTOR`}>Product Selector</a>
        </PanelItem>
      </Panel>
    </Panel>
  );
};

const ApplicationsMenu = props => {
  const { leftnav, category } = props;
  if (leftnav && category == 'MMenu-applications') {
    console.log('applications leftnav here');
  }
  return (
    <Panel
      title="APPLICATIONS"
      class="applicationsmenu"
      dtmname="APPLICATIONS"
      href={`${props.megaMenuUrl}/applications/solutions-for-the-iot-and-adas:IFINDSTRYFCS`}
    >
      <Panel
        title="AUTOMOTIVE"
        href={`${props.megaMenuUrl}/applications/secure-connected-vehicle:SECURE-CONNECTED-VEHICLE`}
      >
        <PanelItem>
          <a href={`${props.megaMenuUrl}/applications/automotive/connectivity:AUTOMOTIVE-CONNECTIVITY-1`}>
            Connectivity
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/applications/automotive/driver-replacement:ADAS-AND-AUTONOMOUS-DRIVING`}>
            Driver Replacement
          </a>
        </PanelItem>
        <PanelItem>
          <a
            href={`${
              props.megaMenuUrl
            }/applications/automotive/powertrain-vehicle-dynamics:POWERTRAIN-VEHICLE-DYNAMICS`}
          >
            Powertrain & Vehicle Dynamics
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/applications/automotive/body-comfort:BODY-COMFORT`}>Body & Comfort</a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/applications/automotive/in-vehicle-experience:INFOTAINMENT-TMP`}>
            In-Vehicle Experience
          </a>
        </PanelItem>
        <PanelItem>
          <a
            href={`${
              props.megaMenuUrl
            }/applications/automotive/secure-gateway-in-vehicle-networking:SECURE-GATEWAY-IN-VEHICLE-NETWORKING`}
          >
            Secure Gateway & In-Vehicle Networking
          </a>
        </PanelItem>
      </Panel>
      <Panel title="INDUSTRIAL" href={`${props.megaMenuUrl}/applications/industrial:INDUSTRIAL`}>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/applications/industrial/factory-automation:FACTORY-AUTOMATION`}>
            Factory Automation
          </a>
        </PanelItem>
        <PanelItem>
          <a
            href={`${
              props.megaMenuUrl
            }/applications/industrial/human-machine-interfaces-hmi:HUMAN-MACHINE-INTERFACE-HMI`}
          >
            Human Machine Interfaces (HMI)
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/applications/industrial/home-and-building-control:SMART-BUILDINGS`}>
            Home and Building Control
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/applications/industrial/industrial-connectivity:INDUSTRIAL-CONNECTIVITY`}>
            Industrial Connectivity
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/applications/industrial/motion-and-motor-control:MOTOR-CONTROL`}>
            Motion and Motor Control
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/applications/industrial/power-and-energy:SMART-ENERGY`}>Power and Energy</a>
        </PanelItem>
      </Panel>
      <Panel
        title="INTERNET OF THINGS"
        href={`${
          props.megaMenuUrl
        }/applications/solutions-for-the-iot-and-adas/internet-of-things:Internet-of-Things-IoT`}
      >
        <PanelItem>
          <a
            href={`${props.megaMenuUrl}/applications/solutions/internet-of-things/ai-machine-learning:MACHINE-LEARNING`}
          >
            AI & Machine Learning
          </a>
        </PanelItem>
        <PanelItem>
          <a
            href={`${
              props.megaMenuUrl
            }/applications/solutions-for-the-iot-and-adas/internet-of-things/connected-things:Connected-Things`}
          >
            Connected Things
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/applications/internet-of-things/edge-computing:EDGE-COMPUTING`}>
            Edge Computing
          </a>
        </PanelItem>
        <PanelItem>
          <a
            href={`${
              props.megaMenuUrl
            }/applications/solutions-for-the-iot-and-adas/internet-of-things/secure-things:Secure-Things`}
          >
            Secure Things
          </a>
        </PanelItem>
        <PanelItem>
          <a
            href={`${
              props.megaMenuUrl
            }/applications/solutions-for-the-iot-and-adas/internet-of-things/smart-things:Smart-Things`}
          >
            Smart Things
          </a>
        </PanelItem>
      </Panel>
      <PanelItem>
        <a href={`${props.megaMenuUrl}/products/developer-resources/reference-designs:REFDSGNHOME`}>
          NXP REFERENCE DESIGN LIBRARY
        </a>
      </PanelItem>
    </Panel>
  );
};

const SupportMenu = props => {
  const { leftnav, category } = props;
  if (leftnav && category == 'MMenu-support') {
    console.log('support leftnav here');
  }
  return (
    <Panel title="SUPPORT" class="supportmenu" dtmname="SUPPORT">
      <Panel title="SUPPORT" href={`${props.megaMenuUrl}/support/support:SUPPORTHOME`}>
        <PanelItem>
          <a href="https://community.props.com/" target="_blank" className="ext">
            Technical Support Communities
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/support/support/nxp-professional-services:PROFESSIONAL-SERVICE`}>
            NXP Professional Services
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/support/developer-resources/software-support-and-services:SW-SUPPORT`}>
            Software Support and Services
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/support/support/nxp-partner-directory:PARTNER-DIRECTORY`}>Partner Directory</a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/support/support:SUPPORTHOME?tid=sbmenu`}>All Support Options</a>
        </PanelItem>
      </Panel>
      <Panel title="DEVELOPER RESOURCES" href={`${props.megaMenuUrl}/support/developer-resources:DEVELOPER_HOME`}>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/support/developer-resources/evaluation-development-boards:EVDEBRDSSYS`}>
            Evaluation and Development Boards
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/support/developer-resources/software-center:SOFTWARE-CENTER`}>
            Software Center
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/support/developer-resources/reference-designs:REFDSGNHOME`}>NXP Designs</a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/support/support/documentation:DOCUMENTATION`}>Documentation</a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/support/developer-resources:DEVELOPER_HOME?tid=sbmenu`}>
            All Developer Resources
          </a>
        </PanelItem>
      </Panel>
      <Panel title="TRAINING & EVENTS" href={`${props.megaMenuUrl}/support/training-events:TRAINING-EVENTS`}>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/support/training-events/industry-events:EVENTS_HOME`}>Events</a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/support/training-events/classroom-training-events/nxp-connects:NXP-CONNECTS`}>
            NXP Connects
          </a>
        </PanelItem>
        <PanelItem>
          <a
            href={`${
              props.megaMenuUrl
            }/support/training-events/classroom-training-events/nxp-technology-days:NXP-TECH-DAYS`}
          >
            NXP Technology Days
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/support/training-events:TRAINING-EVENTS`}>All Training and Events</a>
        </PanelItem>
      </Panel>
      <Panel title="SAMPLE & BUY" href={`${props.megaMenuUrl}/support/sample-buy:SAMPLE-BUY`}>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/support/sample-buy/buy-direct:WTOBUY_BUYDIRECT`}>Buy Direct</a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/support/sample-buy/order-samples:ORDER_SAMPLES`}>Order Samples</a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/support/sample-buy/distributor-network:DISTRIBUTORS`}>Distributor Network</a>
        </PanelItem>
      </Panel>
    </Panel>
  );
};

const AboutMenu = props => {
  const { leftnav, category } = props;
  if (leftnav && category == 'MMenu-about') {
    console.log('about leftnav here');
  }
  return (
    <Panel title="ABOUT" class="aboutmenu" dtmname="ABOUT">
      <Panel title="ABOUT NXP" href={`${props.megaMenuUrl}/about/about-nxp:ABOUT-NXP`}>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/about/our-customers:ABOUT_CUSTOMERS`}>Customers</a>
        </PanelItem>
        <PanelItem>
          <a href="http://investors.props.com"> Investor Relations </a>
        </PanelItem>
        <PanelItem>
          <a href="http://media.props.com"> Media Center </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/about/worldwide-locations:GLOBAL_SITES`}>NXP Worldwide</a>
        </PanelItem>
        <PanelItem>
          <a href="https://blog.props.com/" target="_blank" className="ext">
            Blogs
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/about/about-nxp/contact-us:CONTACTUS`}>Contact Us</a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/about/about-nxp/about-nxp/quality:QUALITY_HOME`}>Quality</a>
        </PanelItem>
      </Panel>
      <Panel
        title="CORPORATE RESPONSIBILITY"
        href={`${props.megaMenuUrl}/about/corporate-responsibility:CORP_SOCIAL_RESP`}
      >
        <PanelItem>
          <a href={`${props.megaMenuUrl}/about/technology-leadership/environmentally-preferred-products:ABUENVPRFPRDX`}>
            Environmental Compliance Organization
          </a>
        </PanelItem>
        <PanelItem>
          <a
            href={`${
              props.megaMenuUrl
            }/about/about-nxp/corporate-responsibility/ethics/statement-on-slavery-and-human-trafficking:RESPECTING-HUMAN-RIGHTS`}
          >
            Statement on Slavery and Human Trafficking
          </a>
        </PanelItem>
        <PanelItem>
          <a href={`${props.megaMenuUrl}/about/about-nxp/corporate-responsibility:CORP_SOCIAL_RESP`}>
            Corporate Responsibility Report
          </a>
        </PanelItem>
      </Panel>
      <PanelItem>
        <a href={`${props.megaMenuUrl}/about/careers-at-nxp:CAREERS`}>CAREERS</a>
      </PanelItem>
    </Panel>
  );
};
export { ProductsMenu, ApplicationsMenu, SupportMenu, AboutMenu };
