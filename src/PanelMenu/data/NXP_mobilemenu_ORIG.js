var self = { megaMenuUrl: '/foobar.com' };

function a() {
  return `
	<div>
	<ul>
		<li>Product1</li>
		<li>Product2</li>
		<li>Product3</li>
		<li>Product4</li>
	</ul>
	</div>`;
}
// export default function() {
function b() {
  return `
	<ul>
		<li class="productsmenu" data-dtmname="PRODUCTS"> 
			<span>PRODUCTS</span> 
			<ul> 
				<li> 
					<a href="${self.megaMenuUrl}/products/arm-processors:ARM-ARCHITECTURE"> 
						ARM<sup>&reg;</sup> PROCESSORS 
					</a> 
					<ul> 
						<li> 
							<a href="${self.megaMenuUrl}/products/arm-processors/kinetis-cortex-m:KINETIS"> 
								Kinetis Cortex<sup>&reg;</sup>-M Microcontrollers 
							</a> 
						</li> 
						<li> 
							<a href="${self.megaMenuUrl}/products/arm-processors/lpc-arm-cortex-m-mcus:LPC-ARM-CORTEX-M-MCUS "> 
								LPC Cortex-M Microcontrollers 
							</a> 
						</li> 
						<li> 
							<a href="${self.megaMenuUrl}/products/arm-processors/i.mx-applications-processors-based-on-arm-cores:IMX_HOME"> 
								i.MX Applications Processors 
							</a> 
						</li> 
						<li> 
							<a href="${self.megaMenuUrl}/products/power-architecture-processors/qoriq-platforms:QORIQ_HOME"> 
								QorIQ Multicore Processors 
							</a> 
						</li> 
					</ul> 
				</li> 
				<li><a href="${
          self.megaMenuUrl
        }/products/power-architecture-processors:POWER-ARCHITECTURE">POWER ARCHITECTURE<sup>&reg;</sup> PROCESSORS</a> 
				</li> 
				<li> <a href="${self.megaMenuUrl}/products/more-processors:MORE-PROCESSORS">MORE PROCESSORS</a> 
				</li> 
				<li > 
					<a href="${self.megaMenuUrl}/products/automotive-products:MC_50802">AUTOMOTIVE PRODUCTS</a> 
					<ul> 
						<li> 
							<a href="${self.megaMenuUrl}/products/automotive-products:MC_50802?tid=sbmenu#vehicle">In-Vehicle Network</a> 
						</li> 
						<li> 
							<a href="${
                self.megaMenuUrl
              }/products/automotive-products:MC_50802?tid=sbmenu#MCUMPU">Microcontrollers and Processors</a> 
						</li>
						<li>
							<a href="${self.megaMenuUrl}/products/automotive-products:MC_50802?tid=sbmenu#energy"> Safety and Power Management </a>
						</li>
						<li>
							<a href="${self.megaMenuUrl}/products/automotive-products:MC_50802?tid=sbmenu#smart"> Smart Power Drivers </a>
						</li>
					</ul> 
				</li> 		
				<li><a href="${self.megaMenuUrl}/products/analog:ANALOG"> 
						ANALOG</a> 
				</li> 
				<li><a href="${self.megaMenuUrl}/products/identification-and-security:MC_53420 "> 
						IDENTIFICATION &amp; SECURITY</a> 
					<ul> 
						<li> 
							<a href="${self.megaMenuUrl}/products/identification-and-security/smart-card-ics/mifare-ics:MC_53422"> 
								MIFARE 
							</a> 
						</li> 
						<li> 
							<a href="${self.megaMenuUrl}/products/identification-and-security/nfc-and-reader-ics:MC_71110"> 
								NFC 
							</a> 
						</li>  
						<li>
							<a href="${self.megaMenuUrl}/products/identification-and-security/smart-label-and-tag-ics:MC_71109"> RFID </a>
						</li>
					</ul> 
				</li> 
				<li> 
					<a href="${self.megaMenuUrl}/products/media-and-audio-processing:MEDIA-AND-AUDIO-PROCESSING"> 
						MEDIA AND AUDIO</a>     
				</li> 
				<li> 
					<a href="${self.megaMenuUrl}/products/power-management:POWER-MANAGEMENT"> 
						POWER MANAGEMENT</a>    
				</li> 
				<li> 
					<a href="${self.megaMenuUrl}/products/rf:RF_HOME"> 
						RF</a> 
				</li> 
				<li> 
					<a href="${self.megaMenuUrl}/products/sensors:SNSHOME"> 
						SENSORS</a>    
				</li> 
				<li> 
					<a href="${self.megaMenuUrl}/products/wireless-connectivity:WIRELESS-CONNECTIVITY"> 
						WIRELESS CONNECTIVITY</a>    
				</li> 
				<li> 
					<a href="${self.megaMenuUrl}/products/reference-designs:REFDSGNHOME" >REFERENCE DESIGNS</a> 
				</li> 
				<li> 
					<a href="${self.megaMenuUrl}/products/developer-resources:DEVELOPER_HOME"> 
						DEVELOPER RESOURCES</a> 
				</li> 
				<li> 
					<a href="${self.megaMenuUrl}/support/developer-resources/software-center:SOFTWARE-CENTER"> 
						SOFTWARE CENTER</a> 
				</li> 
				<li> 
					<span>MORE PRODUCT INFORMATION</span> 
					<ul> 
						<li> 
							<a href="${self.megaMenuUrl}/products/products:PCPRODCAT "> 
								All Products 
							</a> 
						</li> 
						<li> 
							<a href="${self.megaMenuUrl}/packages "> 
								Packages 
							</a> 
						</li> 
						<li> 
							<a href="${self.megaMenuUrl}/about/technology-programs/product-longevity:PRDCT_LONGEVITY_HM"> 
								Product Longevity Program 
							</a> 
						</li> 
						<li> 
							<a href="${self.megaMenuUrl}/products/product-selector:PRODUCT-SELECTOR"> 
								Product Selector 
							</a> 
						</li>     
					</ul> 
				</li> 
			</ul> 
		
		<li class="applicationsmenu" data-dtmname="APPLICATIONS"> 
			<span>APPLICATIONS</span> 
			<ul> 
				<li><a href="${self.megaMenuUrl}/applications/secure-connected-vehicle:SECURE-CONNECTED-VEHICLE">AUTOMOTIVE</a> 
					<ul>
						<li>
							<a href="${self.megaMenuUrl}/applications/automotive/connectivity:AUTOMOTIVE-CONNECTIVITY-1"> Connectivity </a>
						</li>
						<li>
							<a href="${
                self.megaMenuUrl
              }/applications/automotive/driver-replacement:ADAS-AND-AUTONOMOUS-DRIVING"> Driver Replacement </a>
						</li>
						<li>
							<a href="${
                self.megaMenuUrl
              }/applications/automotive/powertrain-vehicle-dynamics:POWERTRAIN-VEHICLE-DYNAMICS"> Powertrain & Vehicle Dynamics </a>
						</li>
						<li>
							<a href="${self.megaMenuUrl}/applications/automotive/body-comfort:BODY-COMFORT"> Body & Comfort </a>
						</li>
						<li>
							<a href="${self.megaMenuUrl}/applications/automotive/in-vehicle-experience:INFOTAINMENT-TMP"> In-Vehicle Experience </a>
						</li>
						<li>
							<a href="${
                self.megaMenuUrl
              }/applications/automotive/secure-gateway-in-vehicle-networking:SECURE-GATEWAY-IN-VEHICLE-NETWORKING"> Secure Gateway & In-Vehicle Networking </a>
						</li>
					</ul>
				</li>							
				<li><a href="${self.megaMenuUrl}/applications/industrial:INDUSTRIAL">INDUSTRIAL</a> 
					<ul>
						<li>
							<a href="${self.megaMenuUrl}/applications/industrial/factory-automation:FACTORY-AUTOMATION"> Factory Automation </a>
						</li>
						<li>
							<a href="${
                self.megaMenuUrl
              }/applications/industrial/human-machine-interfaces-hmi:HUMAN-MACHINE-INTERFACE-HMI"> Human Machine Interfaces (HMI) </a>
						</li>
						<li>
							<a href="${
                self.megaMenuUrl
              }/applications/industrial/home-and-building-control:SMART-BUILDINGS"> Home and Building Control </a>
						</li>
						<li>
							<a href="${
                self.megaMenuUrl
              }/applications/industrial/industrial-connectivity:INDUSTRIAL-CONNECTIVITY"> Industrial Connectivity </a>
						</li>
						<li>
							<a href="${
                self.megaMenuUrl
              }/applications/industrial/motion-and-motor-control:MOTOR-CONTROL"> Motion and Motor Control </a>
						</li>
						<li>
							<a href="${self.megaMenuUrl}/applications/industrial/power-and-energy:SMART-ENERGY"> Power and Energy </a>
						</li>
					</ul>
				</li>			
				<li><a href="${
          self.megaMenuUrl
        }/applications/solutions-for-the-iot-and-adas/internet-of-things:Internet-of-Things-IoT">INTERNET OF THINGS</a> 
					<ul>
						<li>
							<a href="${
                self.megaMenuUrl
              }/applications/solutions/internet-of-things/ai-machine-learning:MACHINE-LEARNING"> AI & Machine Learning </a>
						</li>
						<li>
							<a href="${
                self.megaMenuUrl
              }/applications/solutions-for-the-iot-and-adas/internet-of-things/connected-things:Connected-Things"> Connected Things </a>
						</li>
						<li>
							<a href="${self.megaMenuUrl}/applications/internet-of-things/edge-computing:EDGE-COMPUTING"> Edge Computing </a>
						</li>
						<li>
							<a href="${
                self.megaMenuUrl
              }/applications/solutions-for-the-iot-and-adas/internet-of-things/secure-things:Secure-Things"> Secure Things </a>
						</li>
						<li>
							<a href="${
                self.megaMenuUrl
              }/applications/solutions-for-the-iot-and-adas/internet-of-things/smart-things:Smart-Things"> Smart Things </a>
						</li>
					</ul>
				</li>
				<li><a href="${
          self.megaMenuUrl
        }/products/developer-resources/reference-designs:REFDSGNHOME">NXP REFERENCE DESIGN LIBRARY</a></li> 
			</ul> 
		</li> 
		<li class="supportmenu" data-dtmname="SUPPORT"> 
			<span>SUPPORT</span> 
			<ul> 
				<li> 
					<a href="${self.megaMenuUrl}/support/support:SUPPORTHOME">SUPPORT</a> 
					<ul>  
						<li>
							<a href="https://community.nxp.com/" target="_blank" class="ext"> Technical Support Communities </a>
						</li>
						<li>
							<a href="${
                self.megaMenuUrl
              }/support/support/nxp-professional-services:PROFESSIONAL-SERVICE"> NXP Professional Services </a>
						</li>
						<li>
							<a href="${
                self.megaMenuUrl
              }/support/developer-resources/software-support-and-services:SW-SUPPORT"> Software Support and Services </a>
						</li>
						<li>
							<a href="${self.megaMenuUrl}/support/support/nxp-partner-directory:PARTNER-DIRECTORY"> Partner Directory </a>
						</li>
						<li>
							<a href="${self.megaMenuUrl}/support/support:SUPPORTHOME?tid=sbmenu"> All Support Options</a>
						</li>
					</ul> 
				</li> 
				<li><a href="${self.megaMenuUrl}/support/developer-resources:DEVELOPER_HOME">DEVELOPER RESOURCES</a> 
					<ul>  
						<li>
							<a href="${
                self.megaMenuUrl
              }/support/developer-resources/evaluation-development-boards:EVDEBRDSSYS"> Evaluation and Development Boards</a>
						</li>
						<li> 
							<a href="${self.megaMenuUrl}/support/developer-resources/software-center:SOFTWARE-CENTER"> 
								Software Center 
							</a> 
						</li> 
						<li>
							<a href="${self.megaMenuUrl}/support/developer-resources/reference-designs:REFDSGNHOME"> NXP Designs </a>
						</li>
						<li> 
							<a href="${self.megaMenuUrl}/support/support/documentation:DOCUMENTATION"> 
								Documentation 
							</a> 
						</li> 
						<li>
							<a href="${self.megaMenuUrl}/support/developer-resources:DEVELOPER_HOME?tid=sbmenu"> All Developer Resources </a>
						</li> 
					</ul> 
				</li> 
				<li><a href="${self.megaMenuUrl}/support/training-events:TRAINING-EVENTS">TRAINING & EVENTS</a> 
					<ul>  
						<li>
							<a href="${self.megaMenuUrl}/support/training-events/industry-events:EVENTS_HOME"> Events </a>
						</li>
						<li>
							<a href="${
                self.megaMenuUrl
              }/support/training-events/classroom-training-events/nxp-connects:NXP-CONNECTS"> NXP Connects </a>
						</li>
						<li>
							<a href="${
                self.megaMenuUrl
              }/support/training-events/classroom-training-events/nxp-technology-days:NXP-TECH-DAYS"> NXP Technology Days </a>
						</li>
						<li>
							<a href="${self.megaMenuUrl}/support/training-events:TRAINING-EVENTS"> All Training and Events </a>
						</li>     
					</ul> 
				</li> 
				<li><a href="${self.megaMenuUrl}/support/sample-buy:SAMPLE-BUY">SAMPLE & BUY</a> 
					<ul> 
						<li> 
							<a href="${self.megaMenuUrl}/support/sample-buy/buy-direct:WTOBUY_BUYDIRECT"> 
								Buy Direct 
							</a> 
						</li> 
						<li> 
							<a href="${self.megaMenuUrl}/support/sample-buy/order-samples:ORDER_SAMPLES"> 
								Order Samples 
							</a> 
						</li> 
						<li> 
							<a href="${self.megaMenuUrl}/support/sample-buy/distributor-network:DISTRIBUTORS"> 
								Distributor Network 
							</a> 
						</li> 
					</ul> 
				</li> 
			</ul> 
		</li> 
		<li class="aboutmenu" data-dtmname="ABOUT"> 
			<span>ABOUT</span> 
			<ul> 
				<li>
					<a href="${self.megaMenuUrl}/about/about-nxp:ABOUT-NXP"> ABOUT NXP
					</a>
					<ul>
						<li>
							<a href="${self.megaMenuUrl}/about/our-customers:ABOUT_CUSTOMERS"> Customers </a>
						</li>
						<li>
							<a href="http://investors.nxp.com"> Investor Relations </a>
						</li>
						<li>
							<a href="http://media.nxp.com"> Media Center </a>
						</li>
						<li>
							<a href="${self.megaMenuUrl}/about/worldwide-locations:GLOBAL_SITES"> NXP Worldwide </a>
						</li>
						<li>
							<a href="https://blog.nxp.com/" target="_blank" class="ext"> Blogs </a>
						</li>
						<li>
							<a href="${self.megaMenuUrl}/about/about-nxp/contact-us:CONTACTUS"> Contact Us </a>
						</li>
						<li>
							<a href="${self.megaMenuUrl}/about/about-nxp/about-nxp/quality:QUALITY_HOME"> Quality </a>
						</li>
					</ul>
				</li>
				<li>
					<a href="${self.megaMenuUrl}/about/corporate-responsibility:CORP_SOCIAL_RESP"> CORPORATE RESPONSIBILITY
					</a>
					<ul>
						<li>
							<a href="${
                self.megaMenuUrl
              }/about/technology-leadership/environmentally-preferred-products:ABUENVPRFPRDX"> Environmental Compliance Organization </a>
						</li>
						<li>
							<a href="${
                self.megaMenuUrl
              }/about/about-nxp/corporate-responsibility/ethics/statement-on-slavery-and-human-trafficking:RESPECTING-HUMAN-RIGHTS"> Statement on Slavery and Human Trafficking </a>
						</li>
						<li>
							<a href="${
                self.megaMenuUrl
              }/about/about-nxp/corporate-responsibility:CORP_SOCIAL_RESP"> Corporate Responsibility Report </a>
						</li>
					</ul>
				</li>
				<li>
					<a href="${self.megaMenuUrl}/about/careers-at-nxp:CAREERS"> CAREERS
					</a>
				</li>
			</ul> 
		</li> 
	</ul> 
	
		`;
}

export { a, b };
