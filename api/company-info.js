export default function handler(req, res) {
  res.status(200).json({
    name: 'Hari Tech Solutions',
    location: 'Bhuj, Kutch, Gujarat',
    established: 1993,
    tagline: 'Your Trusted Technology Partner Since 1993',
    phone: '+91-XXXXXXXXXX',
    email: 'info@haritechsolutions.com',
    address: 'Bhuj, Kutch, Gujarat, India',
    coordinates: {
      lat: 23.252617,
      lng: 69.6733174
    },
    googleMapsUrl:
      'https://www.google.com/maps/place/HARI+TECH+SOLUTIONS/@23.2526169,69.6684465,17z/data=!3m1!4b1!4m6!3m5!1s0x3950e3f714547545:0x34dc6f86bb0a6913!8m2!3d23.252617!4d69.6733174!16s%2Fg%2F1thvwp0x',
    googlePlaceId: '0x3950e3f714547545:0x34dc6f86bb0a6913',
    rating: 4.8,
    totalReviews: 125
  });
}
