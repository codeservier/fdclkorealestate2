import React, { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <h5
        className="cursor-pointer flex justify-between items-center p-4 font-semibold text-gray-700 hover:bg-gray-100 transition duration-200"
        onClick={toggleAccordion}
      >
        {title}
        <span className="toggle-icon text-lg">{isOpen ? "-" : "+"}</span>
      </h5>
      <div className={`toggle-content p-4 ${isOpen ? "block" : "hidden"}`}>
        {children}
      </div>
    </div>
  );
};

const PackagesComponent = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Construction Packages</h2>
      <div className="space-y-4">
        <AccordionItem title="Budget Package - ₹1,600/sq.ft (Incl GST)">
          <p>Details about the budget package can be added here.</p>
        </AccordionItem>
        <AccordionItem title="Design & Drawings">
          <ul className="list-disc pl-6">
            <li>2D Floor Plan</li>
            <li>3D Elevation</li>
            <li>Structural Design</li>
            <li>Furniture Plan</li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Structure">
          <ul className="list-disc pl-6">
            <li>Aggregates – 20mm & 40mm</li>
            <li>Standard Solid Concrete Blocks – 6 inch & 4 inch</li>
            <li>M Sand for Blockwork & Plastering</li>
            <li>RCC Design Mix as per recommendation</li>
            <li>Dr. Fixit Waterproofing</li>
            <li>Ceiling Height – 10 feet</li>
            <li>Steel – Meenakshi, Kamdhenu, RD or equivalent</li>
            <li>Cement – Maha, Penna or Zuari or equivalent</li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Kitchen">
          <ul className="list-disc pl-6">
            <li>Ceramic Wall Tiles, 2 feet above kitchen slab – Upto ₹40/sq.ft</li>
            <li>Main Sink Faucet – Upto ₹1300</li>
            <li>Any Other Faucet & Accessories – ISI Marked</li>
            <li>Kitchen Sink – Stainless Steel Single Sink – worth ₹3000</li>
            <li>Kitchen Granite Countertop – Upto ₹120/sq.ft</li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Bathroom">
          <ul className="list-disc pl-6">
            <li>Bathroom Ceramic Wall Tiles with 7 feet height – Upto ₹40/sq.ft</li>
            <li>Sanitary ware & CP Fittings – Upto ₹30,000 per 1000 sq.ft</li>
            <li>CPVC Pipe – Astral or equivalent</li>
            <li>Bathroom Accessories – EWC, Health Faucet, Wash Basin, etc.</li>
            <li>Bathroom doors – WPVC Waterproof doors Worth ₹8000</li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Doors & Windows">
          <ul className="list-disc pl-6">
            <li>Main Door – Flush Door With Veneer, Sal wood frame worth ₹13000</li>
            <li>Internal Doors - Membrane doors / Flush Door with Laminates up to ₹8000</li>
            <li>Windows - Aluminium Windows with glass shutters and mesh shutters</li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Painting">
          <ul className="list-disc pl-6">
            <li>Interior Painting – JK Putty-2 Coat, Tractor Emulsion or equivalent</li>
            <li>Exterior Painting – Asian Exterior Primer, Ace Exterior Emulsion Paint or equivalent</li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Flooring">
          <ul className="list-disc pl-6">
            <li>Living and Dining Flooring – Tiles of value up to ₹50/sq.ft</li>
            <li>Rooms and Kitchen Flooring – Tiles ₹50/sq.ft</li>
            <li>Balcony and Open Areas Flooring – Anti-skid tiles of value up to ₹40/sq.ft</li>
            <li>Staircase Flooring – Sadarahalli Granite of value up to ₹70/sq.ft</li>
            <li>Parking Tiles – Anti-skid tiles of value up to ₹40/sq.ft</li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Electrical">
          <ul className="list-disc pl-6">
            <li>Wires – Fireproof wires by V-Guard</li>
            <li>Switches & Sockets - Elleys/Hi-Fi Entry Model</li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Miscellaneous">
          <ul className="list-disc pl-6">
            <li>Overhead Tank – Sintex Double Layered 1000 ltrs</li>
            <li>Underground Sump – 4000 litres</li>
            <li>Staircase Railing – MS Railing</li>
            <li>Railing Grills – Basic MS Grills with Enamel Paint at ₹110/sq.ft</li>
          </ul>
        </AccordionItem>
      </div>
    </div>
  );
};

export default PackagesComponent;
