import React from 'react';
import './OfferBanner.css';

const offers = [
  { name: 'Lenovo Ideapad Laptop 15s', price: '₹32,999' },
  { name: 'Dell Inspiron 3511', price: '₹38,499' },
  { name: 'Lenovo ThinkPad E14', price: '₹44,990' },
  { name: 'Asus VivoBook 14', price: '₹29,999' },
  { name: 'Acer Aspire 7', price: '₹41,500' },
  { name: 'Canon Printer G3010', price: '₹13,499' },
  { name: 'Quick Heal Antivirus', price: '₹799' },
  { name: 'Tally Prime', price: '₹24,999' },
  { name: 'CCTV 4 Cam Kit', price: '₹8,999' },
  { name: 'Microsoft Office 365 5 User', price: '₹8,199' },
  { name: '64 Gb Hikvision Pendrive', price: '₹ 599' },
  { name: '32 Gb Hikvision Pendrive', price: '₹ 549' },
  { name: '32 Gb Hikvision Pendrive Usb 3.2', price: '₹ 749' },
  { name: '64 Gb Hikvision Pendrive', price: '₹ 900' },
];

export default function OfferBanner() {
  // Duplicate the offers for seamless scrolling
  const allOffers = [...offers, ...offers];
  return (
    <div className="offer-banner">
      <div className="offer-scroll">
        {allOffers.map((offer, idx) => (
          <span className="offer-item" key={idx}>
            <span className="offer-product">{offer.name}</span>
            <span className="offer-price">{offer.price}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
