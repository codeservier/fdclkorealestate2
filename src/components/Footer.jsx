import React from 'react';
import logo from '../assets/svg/logo.svg'

const Footer = () => {
  return (
    <div className="footer-2">
    <div className="section-56 bg-primary  py-8">
      <div className="container mx-auto">
        <div className="flex flex-col  items-center justify-center p-4 text-center sm:text-left">
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4 bg-white rounded-full p-4 ">
            <img
              src={logo}
              loading="lazy"
              width="50"
              height="50"
              alt="Attentive logo"
            />
          </div>
         
            <div className="supporting-text mb-2 text-white">
              Built with love for outdoor field service professionals.
            </div>
         
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 bg-green-600/20 p-4 rounded-2xl  lg:grid-cols-5 gap-8   text-center">
          {footerLinks.map((column, index) => (
            <div key={index} className="footer-links-column ">
              <div className="heading-81 text-xl text-white underline font-bold mb-2">{column.title}</div>
              {column.links.map((link, idx) => (
                <div key={idx} className="button-base-12 mb-1">
                  <a href={link.href} target={link.target} className="link-14 text-white hover:underline">
                    {link.label}
                  </a>
                  {link.badge && (
                    <span className="badge bg-green-500 text-white text-xs rounded-full ml-2">{link.badge}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="section-57 bg-primary border-t border-gray-500 py-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="footer-text text-mywhite mb-2">
            Copyright © 2024, <a href="/" className="text-mywhite hover:underline">Attentive</a> Inc. All Rights Reserved
          </div>
          <div className="flex space-x-4">
            <a href="/privacy-policy" className="text-mywhite hover:underline">Privacy Policy</a>
            <a href="/security" className="text-mywhite hover:underline">Security</a>
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} target="_blank" className="w-inline-block">
                <social.icon className="w-6 h-6 fill-current text-mywhite hover:text-mywhite" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Accelerate', href: '/accelerate' },
      { label: 'Automeasure', href: '/automeasure' },
      { label: 'Beam AI', href: 'https://www.ibeam.ai', target: '_blank' },
      { label: 'Beam AI', href: 'https://www.ibeam.ai', target: '_blank' },
      { label: 'Beam AI', href: 'https://www.ibeam.ai', target: '_blank' },
      { label: 'Beam AI', href: 'https://www.ibeam.ai', target: '_blank' },
      { label: 'Beam AI', href: 'https://www.ibeam.ai', target: '_blank' },
      { label: 'Beam AI', href: 'https://www.ibeam.ai', target: '_blank' },
      { label: 'Beam AI', href: 'https://www.ibeam.ai', target: '_blank' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Landscaping', href: '/industries/landscape-maintenance-and-construction' },
      { label: 'Paving', href: '/industries/paving-maintenance-and-construction' },
      { label: 'Snow Management', href: '/industries/snow-management' },
      { label: 'Facilities Maintenance', href: '/industries/facilities-maintenance' },
      { label: 'General Construction', href: 'https://www.ibeam.ai', target: '_blank' },
      { label: 'General Construction', href: 'https://www.ibeam.ai', target: '_blank' },
      { label: 'General Construction', href: 'https://www.ibeam.ai', target: '_blank' },
      { label: 'General Construction', href: 'https://www.ibeam.ai', target: '_blank' },
      { label: 'General Construction', href: 'https://www.ibeam.ai', target: '_blank' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blogs', href: 'https://attentive.ai/blog' },
      { label: 'Customer Stories', href: '/resources/customer-stories' },
      { label: 'Webinars', href: '/resources/webinars', target: '_blank' },
      { label: 'Templates', href: '/resources/templates', target: '_blank' },
      { label: 'Help Center', href: '/resources/help-center', target: '_blank' },
      { label: 'Help Center', href: '/resources/help-center', target: '_blank' },
      { label: 'Help Center', href: '/resources/help-center', target: '_blank' },
      { label: 'Help Center', href: '/resources/help-center', target: '_blank' },
      { label: 'Help Center', href: '/resources/help-center', target: '_blank' },
  
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about-us' },
      { label: 'Careers', href: '/careers', badge: 'Hiring' },
      { label: 'Contact us', href: '/contact' },
      { label: 'Contact us', href: '/contact' },
      { label: 'Contact us', href: '/contact' },
      { label: 'Contact us', href: '/contact' },
      { label: 'Contact us', href: '/contact' },
      { label: 'Contact us', href: '/contact' },
      { label: 'Contact us', href: '/contact' },
    ],
  },
  {
    title: 'Comparison',
    links: [
      { label: 'Accelerate', href: '/accelerate' },
      { label: 'vs Aspire', href: '/accelerate/vs-aspire' },
      { label: 'vs LMN', href: '/accelerate/vs-lmn' },
      { label: 'vs Asset', href: '/accelerate/vs-asset' },
      { label: 'Automeasure', href: '/automeasure' },
      { label: 'vs Siterecon', href: '/automeasure/vs-siterecon' },
      { label: 'vs PropertyIntel', href: '/automeasure/vs-propertyintel' },
      { label: 'vs GoiPave', href: '/automeasure/vs-goipave' },
      { label: 'vs StackCT', href: '/automeasure/vs-stackct' },
    ],
  },
];

const socialLinks = [
  {
    href: 'https://www.linkedin.com/company/attentive.ai/',
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
      </svg>
    ),
  },
  // Add other social icons similarly
];

export default Footer;
