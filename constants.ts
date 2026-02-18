import { Product, Testimonial, BlogPost, Service } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'AquaEnrich',
    description: 'Premium copper-enriched RO water purifier for health-conscious families.',
    price: '₹16,499',
    features: ['Copper Technology', '7-Stage Purification', 'Smart LED Display', 'Auto Flush'],
    category: 'Home',
    images: [
      '/assets/AquaEnrich_1.jpeg',
      '/assets/AquaEnrich_2.jpeg',
      '/assets/AquaEnrich_3.jpeg',
      '/assets/AquaEnrich_4.jpeg',
      '/assets/AquaEnrich_5.jpeg'
    ],
    capacity: '12 Liters/Hour',
    filtrationStages: 'RO + UV + UF + TDS Control',
    warranty: '1 Year Comprehensive'
  },
  {
    id: '2',
    name: 'AquaInnovica',
    description: 'Innovative design with advanced alkalization technology.',
    price: '₹18,999',
    features: ['Alkaline Boost', 'Touch Interface', 'Energy Saving Mode', 'Child Lock'],
    category: 'Home',
    images: [
      '/assets/AquaInnovica_1.jpeg',
      '/assets/AquaInnovica_2.jpeg',
      '/assets/AquaInnovica_3.jpeg',
      '/assets/AquaInnovica_4.jpeg',
      '/assets/AquaInnovica_5.jpeg'
    ],
    capacity: '15 Liters/Hour',
    filtrationStages: '8 Stages Alkaline RO',
    warranty: '1 Year + 1 Service Free'
  },
  {
    id: '3',
    name: 'AquaJade',
    description: 'Compact and stylish purifier suitable for modern kitchens.',
    price: '₹14,499',
    features: ['Compact Design', 'Taste Enhancer', 'High Recovery Rate', 'Detachable Tank'],
    category: 'Home',
    images: ['/assets/AquaJade_1.jpeg'],
    capacity: '10 Liters/Hour',
    filtrationStages: '6 Stages RO+UV',
    warranty: '1 Year'
  },
  {
    id: '4',
    name: 'AquaLXOne',
    description: 'High-performance purifier with mineral guard technology.',
    price: '₹20,999',
    features: ['Mineral Guard', 'Zero Water Wastage', 'Stainless Steel Tank', 'Hot & Cold Water'],
    category: 'Home',
    images: ['/assets/AquaLXOne_1.jpeg'],
    capacity: '15 Liters/Hour',
    filtrationStages: 'RO + UV + UF + Mineralizer',
    warranty: '1 Year Comprehensive'
  },
  {
    id: '5',
    name: 'AquaMagna',
    description: 'Robust purification for large families with high storage capacity.',
    price: '₹22,499',
    features: ['Large Storage', 'High Flow Rate', 'Digital Purity Sensor', 'Overvoltage Protection'],
    category: 'Home',
    images: [
      '/assets/AquaMagna_1.jpeg',
      '/assets/AquaMagna_2.jpeg',
      '/assets/AquaMagna_3.jpeg',
      '/assets/AquaMagna_4.jpeg',
      '/assets/AquaMagna_5.jpeg',
      '/assets/AquaMagna_6.jpeg'
    ],
    capacity: '18 Liters/Hour',
    filtrationStages: '7 Stages RO+UV+MTDS',
    warranty: '2 Years'
  },
  {
    id: '6',
    name: 'BlueShell',
    description: 'Economical and efficient RO system for everyday use.',
    price: '₹12,999',
    features: ['Cost Effective', 'Easy Maintenance', 'Food Grade Plastic', 'Wall Mountable'],
    category: 'Home',
    images: [
      '/assets/BlueShell_1.jpeg',
      '/assets/BlueShell_2.jpeg',
      '/assets/BlueShell_3.jpeg'
    ],
    capacity: '12 Liters/Hour',
    filtrationStages: '5 Stages RO',
    warranty: '1 Year'
  },
  {
    id: '7',
    name: 'BlueShell Commercial',
    description: 'Heavy-duty commercial RO system for offices and small businesses.',
    price: '₹35,999',
    features: ['High Capacity', 'Continuous Duty Cycle', 'Pressure Gauge', 'Sturdy Frame'],
    category: 'Commercial',
    images: [
      '/assets/BlueShell_Commercial.jpeg',
      '/assets/BlueShell_Commercial_2.jpeg'
    ],
    capacity: '50 Liters/Hour',
    filtrationStages: '5 Stages Commercial RO',
    warranty: '1 Year On-site'
  },
  {
    id: '8',
    name: 'Brio',
    description: 'Sleek tabletop purifier with instant dispensing.',
    price: '₹15,499',
    features: ['Tabletop Design', 'Instant Hot Water', 'Touch Controls', 'Filter Change Alert'],
    category: 'Home',
    images: ['/assets/Brio.jpeg'],
    capacity: '12 Liters/Hour',
    filtrationStages: '6 Stages RO+UV',
    warranty: '1 Year'
  },
  {
    id: '9',
    name: 'Brio WaterShell',
    description: 'Advanced under-sink model for minimalist kitchens.',
    price: '₹24,999',
    features: ['Under-Sink Installation', 'Silent Operation', 'Smart Faucet', 'Leak Detection'],
    category: 'Home',
    images: [
      '/assets/BrioWaterShell_1.jpeg',
      '/assets/BrioWaterShell_2.jpeg',
      '/assets/BrioWaterShell_3.jpeg',
      '/assets/BrioWaterShell_4.jpeg',
      '/assets/BrioWaterShell_5.jpeg',
      '/assets/BrioWaterShell_6.jpeg'
    ],
    capacity: '15 Liters/Hour',
    filtrationStages: '7 Stages RO+UV',
    warranty: '1 Year Comprehensive'
  },
  {
    id: '10',
    name: 'CleanWater HiFlo',
    description: 'High flow rate purifier for areas with low water pressure.',
    price: '₹17,999',
    features: ['Booster Pump', 'High Flow Membrane', 'Large Tank', 'Auto-Shutoff'],
    category: 'Home',
    images: [
      '/assets/CleanWater_HiFlo_1.jpeg',
      '/assets/CleanWater_HiFlo_2.jpeg',
      '/assets/CleanWater_HiFlo_3.jpeg'
    ],
    capacity: '20 Liters/Hour',
    filtrationStages: '6 Stages RO+UF',
    warranty: '1 Year'
  },
  {
    id: '11',
    name: 'LXTW20',
    description: 'Next-gen purifier with IoT connectivity and mobile app control.',
    price: '₹28,999',
    features: ['IoT Enabled', 'Mobile App Monitoring', 'Voice Alerts', 'Customizable Minerals'],
    category: 'Home',
    images: [
      '/assets/LXTW20_1.jpeg',
      '/assets/LXTW20_2.jpeg',
      '/assets/LXTW20_3.jpeg',
      '/assets/LXTW20_4.jpeg',
      '/assets/LXTW20_5.jpeg',
      '/assets/LXTW20_6.jpeg',
      '/assets/LXTW20_7.jpeg'
    ],
    capacity: '15 Liters/Hour',
    filtrationStages: '8 Stages Smart RO',
    warranty: '2 Years Comprehensive'
  },
  {
    id: '12',
    name: 'Lexzon',
    description: 'Durable purifier designed for hard water conditions.',
    price: '₹13,499',
    features: ['Hard Water Specialist', 'Long Life Membrane', 'Pre-Filter Included', 'Easy Installation'],
    category: 'Home',
    images: [
      '/assets/Lexzon_1.jpeg',
      '/assets/Lexzon_2.jpeg',
      '/assets/Lexzon_3.jpeg',
      '/assets/Lexzon_4.jpeg',
      '/assets/Lexzon_5.jpeg'
    ],
    capacity: '12 Liters/Hour',
    filtrationStages: '6 Stages RO+UV',
    warranty: '1 Year'
  },
  {
    id: '13',
    name: 'Lily',
    description: 'Elegant purifier with floral pattern aesthetics.',
    price: '₹15,999',
    features: ['Designer Look', 'Mood Lighting', 'One-Touch Dispensing', 'Child Safe'],
    category: 'Home',
    images: ['/assets/Lily_1.jpeg'],
    capacity: '12 Liters/Hour',
    filtrationStages: '7 Stages RO+UV+MTDS',
    warranty: '1 Year'
  },
  {
    id: '14',
    name: 'Water Softener',
    description: 'Whole house water softener to protect appliances and skin.',
    price: 'Call for Quote',
    features: ['Whole House System', 'Automatic Regeneration', 'Salt Efficient', 'High Flow'],
    category: 'Home',
    images: ['/assets/Water_Softener.jpeg'],
    capacity: '1000 Liters/Hour',
    filtrationStages: 'Ion Exchange',
    warranty: '3 Years'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'The installation was quick and the water tastes amazing. The service team is very responsive.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Dr. Emily Chen',
    role: 'Clinic Manager',
    content: 'We use their commercial unit in our dental clinic. Reliable performance and excellent maintenance service.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Mark Davis',
    role: 'Restaurant Owner',
    content: 'Switched to Vishali Enterprises Aqua Jade last year. The water quality consistency has helped our beverages taste better.',
    rating: 4
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '5 Signs You Need an RO Water Purifier',
    excerpt: 'Is your tap water safe? Here are the key indicators that suggest you need a reverse osmosis system for your home.',
    content: `
      <p>Water quality is a major concern for households today. While municipal water is treated, it often picks up contaminants on its way to your tap. Here are 5 signs you need an RO purifier:</p>
      <h3>1. Water tastes strange</h3>
      <p>If your water has a metallic, chlorine, or salty taste, it indicates high TDS (Total Dissolved Solids) or chemical contamination.</p>
      <h3>2. Visible particles</h3>
      <p>Sediment, rust, or cloudiness in your water glass is a clear sign that physical filtration is needed.</p>
      <h3>3. Frequent stomach issues</h3>
      <p>Recurring digestive problems in the family can often be traced back to waterborne pathogens that simple boiling might miss.</p>
      <h3>4. Hard water stains</h3>
      <p>If you see white scaling on your utensils or taps, your water has high hardness, which an RO system can treat effectively.</p>
      <h3>5. High TDS reading</h3>
      <p>A TDS meter reading above 200 ppm usually suggests that the water requires advanced purification like Reverse Osmosis.</p>
    `,
    author: 'Dr. Alan Grant',
    date: 'Oct 15, 2023',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=800',
    category: 'Water Quality'
  },
  {
    id: '2',
    title: 'Understanding RO vs. UV Purification',
    excerpt: 'Confused between RO and UV? We break down the differences to help you choose the right one for your water source.',
    content: `
      <p>Choosing a water purifier depends largely on the source of your water. Let's compare the two most popular technologies.</p>
      <h3>Reverse Osmosis (RO)</h3>
      <p>RO uses a semi-permeable membrane to remove dissolved salts, heavy metals, and chemicals. It is essential for water with high TDS (usually from borewells or tankers).</p>
      <h3>Ultraviolet (UV)</h3>
      <p>UV purification uses UV light to kill bacteria and viruses. It does not remove dissolved solids. It is best suited for low TDS water (like treated municipal water) that is biologically unsafe.</p>
      <h3>Which one do you need?</h3>
      <p>If your water tastes salty (High TDS), go for RO. If it tastes sweet but you are worried about germs, UV is sufficient. Modern systems often combine RO+UV for complete protection.</p>
    `,
    author: 'Sarah Connor',
    date: 'Nov 02, 2023',
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&q=80&w=800',
    category: 'Technology'
  },
  {
    id: '3',
    title: 'Maintenance Tips for Your Water Purifier',
    excerpt: 'Extend the life of your RO system and ensure pure water everyday with these simple maintenance practices.',
    content: `
      <p>A water purifier is an investment in health. To keep it running efficiently, follow these tips:</p>
      <ul>
        <li><strong>Change filters regularly:</strong> Sediment and carbon filters should be changed every 6-8 months.</li>
        <li><strong>Sanitize the storage tank:</strong> Clean the storage tank periodically to prevent algae growth.</li>
        <li><strong>Check for leaks:</strong> A small drip can waste gallons of water and damage the machine.</li>
        <li><strong>Professional Service:</strong> Schedule an annual maintenance check-up with a certified technician to test the membrane and pump pressure.</li>
      </ul>
    `,
    author: 'Mike Ross',
    date: 'Dec 10, 2023',
    image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&q=80&w=800',
    category: 'Maintenance'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Installation',
    description: 'Expert installation of all RO systems with zero mess guarantee.',
    icon: 'wrench',
    features: ['Professional Tools', 'Cleanup Included', 'Demo & Training']
  },
  {
    id: 's2',
    title: 'Annual Maintenance (AMC)',
    description: 'Comprehensive maintenance plans to keep your purifier running like new.',
    icon: 'shield',
    features: ['3 Free Services/Year', 'Filter Replacement', 'Priority Support']
  },
  {
    id: 's3',
    title: 'Repair & Upgrade',
    description: 'Quick diagnostics and repair for any brand of water purifier.',
    icon: 'settings',
    features: ['Genuine Spares', '4-Hour Response', 'Warranty on Repairs']
  },
  {
    id: 's4',
    title: 'Commercial Solutions',
    description: 'Scalable water purification plants for offices, schools, and factories.',
    icon: 'building',
    features: ['Custom Capacity', 'Site Analysis', 'Compliance Certification']
  }
];

export const CONTACT_PHONE = "+919042534013"; // Dummy number for WhatsApp
export const CONTACT_PHONE_DISPLAY = "+91 90425 34013";
export const CONTACT_EMAIL = "sales@vishalienterprises.com";
