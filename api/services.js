export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: 'Computers & Laptops Service Support',
      description:
        'Comprehensive repair and maintenance for computers and laptops — hardware diagnostics, component repairs and replacements, operating system and software troubleshooting, performance tuning, and reliable on-site or in-shop support.',
      icon: '💻'
    },
    {
      id: 2,
      title: 'CCTV Camera Solutions',
      description: 'Complete surveillance systems with installation and maintenance',
      icon: '📹'
    },
    {
      id: 3,
      title: 'Software Solutions',
      description: 'Licensed software, custom development, and software support',
      icon: '💿'
    },
    {
      id: 6,
      title: 'Server Solutions',
      description: 'Complete server setup, maintenance, and support',
      icon: '🖥️'
    }
  ]);
}
