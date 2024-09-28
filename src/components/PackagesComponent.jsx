import React, { useState } from "react";

const PackagesComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Budget Package - ₹1,600/sq.ft (Incl GST)",
      content: <p>Details about the budget package can be added here.</p>,
    },
    {
      title: "Design & Drawings",
      content: (
        <ul className="list-disc pl-6">
          <li>2D Floor Plan</li>
          <li>3D Elevation</li>
          <li>Structural Design</li>
          <li>Furniture Plan</li>
        </ul>
      ),
    },
    {
      title: "Structure",
      content: (
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
      ),
    },
    {
      title: "Kitchen",
      content: (
        <ul className="list-disc pl-6">
          <li>Ceramic Wall Tiles, 2 feet above kitchen slab – Upto ₹40/sq.ft</li>
          <li>Main Sink Faucet – Upto ₹1300</li>
          <li>Any Other Faucet & Accessories – ISI Marked</li>
          <li>Kitchen Sink – Stainless Steel Single Sink – worth ₹3000</li>
          <li>Kitchen Granite Countertop – Upto ₹120/sq.ft</li>
        </ul>
      ),
    },
    {
      title: "Bathroom",
      content: (
        <ul className="list-disc pl-6">
          <li>Bathroom Ceramic Wall Tiles with 7 feet height – Upto ₹40/sq.ft</li>
          <li>Sanitary ware & CP Fittings – Upto ₹30,000 per 1000 sq.ft</li>
          <li>CPVC Pipe – Astral or equivalent</li>
          <li>Bathroom Accessories – EWC, Health Faucet, Wash Basin, etc.</li>
          <li>Bathroom doors – WPVC Waterproof doors Worth ₹8000</li>
        </ul>
      ),
    },
    {
      title: "Doors & Windows",
      content: (
        <ul className="list-disc pl-6">
          <li>Main Door – Flush Door With Veneer, Sal wood frame worth ₹13000</li>
          <li>Internal Doors - Membrane doors / Flush Door with Laminates up to ₹8000</li>
          <li>Windows - Aluminium Windows with glass shutters and mesh shutters</li>
        </ul>
      ),
    },
    {
      title: "Painting",
      content: (
        <ul className="list-disc pl-6">
          <li>Interior Painting – JK Putty-2 Coat, Tractor Emulsion or equivalent</li>
          <li>Exterior Painting – Asian Exterior Primer, Ace Exterior Emulsion Paint or equivalent</li>
        </ul>
      ),
    },
    {
      title: "Flooring",
      content: (
        <ul className="list-disc pl-6">
          <li>Living and Dining Flooring – Tiles of value up to ₹50/sq.ft</li>
          <li>Rooms and Kitchen Flooring – Tiles ₹50/sq.ft</li>
          <li>Balcony and Open Areas Flooring – Anti-skid tiles of value up to ₹40/sq.ft</li>
          <li>Staircase Flooring – Sadarahalli Granite of value up to ₹70/sq.ft</li>
          <li>Parking Tiles – Anti-skid tiles of value up to ₹40/sq.ft</li>
        </ul>
      ),
    },
    {
      title: "Electrical",
      content: (
        <ul className="list-disc pl-6">
          <li>Wires – Fireproof wires by V-Guard</li>
          <li>Switches & Sockets - Elleys/Hi-Fi Entry Model</li>
        </ul>
      ),
    },
    {
      title: "Miscellaneous",
      content: (
        <ul className="list-disc pl-6">
          <li>Overhead Tank – Sintex Double Layered 1000 ltrs</li>
          <li>Underground Sump – 4000 litres</li>
          <li>Staircase Railing – MS Railing</li>
          <li>Railing Grills – Basic MS Grills with Enamel Paint at ₹110/sq.ft</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Construction Packages</h2>
      <div className="space-y-4">
        {accordionItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <h5
              className="cursor-pointer flex justify-between items-center p-4 font-semibold text-gray-700 hover:bg-gray-100 transition duration-200"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span className="toggle-icon text-lg">{openIndex === index ? "-" : "+"}</span>
            </h5>
            <div className={`toggle-content p-4 ${openIndex === index ? "block" : "hidden"}`}>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesComponent;
