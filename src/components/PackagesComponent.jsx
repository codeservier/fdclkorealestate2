import React, { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 ">
      <h5
        className="cursor-pointer flex justify-between items-center p-4 font-semibold text-gray-700"
        onClick={toggleAccordion}
      >
        {title}
        <span className="toggle-icon">{isOpen ? "-" : "+"}</span>
      </h5>
      <div className={`toggle-content p-4 ${isOpen ? "block" : "hidden"}`}>
        {children}
      </div>
    </div>
  );
};

const PackagesComponent = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
        <AccordionItem title="Budget Package - ₹1,600/sq.ft (Incl GST)">
          <p>Details about the budget package can be added here.</p>
        </AccordionItem>
        <AccordionItem title="Design & Drawings">
          <ul>
            <li>2D Floor Plan</li>
            <li>3D Elevation</li>
            <li>Structural Design</li>
            <li>Furniture Plan</li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Your Title Goes Here">
          <p>
            Your content goes here. Edit or remove this text inline or in the
            module Content settings.
          </p>
        </AccordionItem>
        <AccordionItem title="Structure">
          <ul>
            <li>Aggregates – 20mm & 40mm</li>
            <li>Blocks – Standard Solid Concrete blocks. 6 inch 4 inch</li>
            <li>M sand for Blockwork & Plastering</li>
            <li>
              RCC Design Mix As per the structural designer’s recommendation
            </li>
            <li>Dr.Fixit Waterproofing</li>
            <li>Ceiling Height – 10 feet</li>
            <li>Steel – Meenakshi, Kamdhenu, RD or equivalent</li>
            <li>Cement – Maha, Penna or Zuari or equivalent</li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Kitchen">
          <ul>
            <li>
              Ceramic Wall Tiles, 2 feet above kitchen slab – Upto Rs.40 per
              Sqft.
            </li>
            <li>Main Sink Faucet – Upto Rs.1300</li>
            <li>Any Other Faucet & Accessories – ISI Marked</li>
            <li>Kitchen Sink – Stainless Steel Single Sink – worth Rs.3000</li>
            <li>Kitchen Granite Countertop – Upto Rs.120 per Sqft</li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Bathroom">
          <ul>
            <li>
              Bathroom Ceramic Wall Tiles with 7 feet height – Upto Rs.40 per
              Sqft
            </li>
            <li>
              Sanitary ware & CP Fittings – Upto Rs.30000 per 1000 sqft of
              construction
            </li>
            <li>CPVC Pipe – Astral or equivalent</li>
            <li>
              Bathroom Accessories – EWC, Health Faucet, Wash Basin with
              accessories, 2 in 1 wall mixer, Overhead Shower.
            </li>
            <li>Bathroom doors – WPVC Waterproof doors Worth Rs.8000</li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Doors & Windows">
          <ul>
            <li>
              Main Door – Flush Door With Veneer, Sal wood frame worth Rs.13000.
            </li>
            <li>
              Internal Doors - Membrane doors / Flush Door with Laminates up to
              Rs.8000.
            </li>
            <li>
              Windows - Aluminium Windows with glass shutters and mesh shutters.
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Painting">
          <ul>
            <li>
              Interior Painting – JK Putty-2 Coat, Tractor Emulsion or
              equivalent
            </li>
            <li>
              Exterior Painting – Asian Exterior Primer, Ace Exterior Emulsion
              Paint or equivalent.
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Flooring">
          <ul>
            <li>
              Living and Dining Flooring – Tiles of value up to Rs.50 per sqft
            </li>
            <li>Rooms and Kitchen Flooring – Tiles Rs.50 per sqft</li>
            <li>
              Balcony and Open Areas Flooring – Anti-skid tiles of value up to
              Rs.40 per sqft
            </li>
            <li>
              Staircase Flooring – Sadarahalli Granite of value up to Rs.70 per
              sqft
            </li>
            <li>
              Parking Tiles – Anti-skid tiles of value up to Rs.40 per sqft
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Electrical">
          <ul>
            <li>Wires – Fireproof wires by V-Guard</li>
            <li>Switches & Sockets - Elleys/Hi-Fi Entry Model</li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Miscellaneous">
          <ul>
            <li>Overhead Tank – Sintex Double Layered 1000 ltrs</li>
            <li>Underground Sump – 4000 litres</li>
            <li>Staircase Railing – MS Railing</li>
            <li>
              Railing Grills – Basic MS Grills with Enamel Paint at Rs.110 per
              sqft
            </li>
          </ul>
        </AccordionItem>
      </div>
    </div>
  );
};

export default PackagesComponent;
