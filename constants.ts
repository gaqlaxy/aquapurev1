import { Product, Testimonial, BlogPost, Service } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'AquaGuard Elite RO+UV',
    description: 'Advanced 7-stage purification with active copper technology suitable for municipal water.',
    price: '₹15,999',
    features: ['Active Copper Tech', 'UV e-boiling', '7L Storage', 'Smart LED Indicators'],
    category: 'Home',
    image: 'https://picsum.photos/id/119/600/600',
    capacity: '12 Liters/Hour',
    filtrationStages: '7 Stages (RO+UV+MTDS)',
    warranty: '1 Year Comprehensive'
  },
  {
    id: '2',
    name: 'PureStream Alkaline Pro',
    description: 'Maintains pH balance of water while removing dissolved impurities. Perfect for health-conscious families.',
    price: '₹18,999',
    features: ['Alkaline Cartridge', 'Mineral Guard', 'Zero Water Wastage Tech', 'Compact Design'],
    category: 'Home',
    image: 'https://picsum.photos/id/180/600/600',
    capacity: '15 Liters/Hour',
    filtrationStages: '8 Stages (RO+UV+Alkaline)',
    warranty: '1 Year + 2 Free Services'
  },
  {
    id: '3',
    name: 'Commercial Max 50L',
    description: 'High capacity heavy-duty RO system for offices, schools, and restaurants.',
    price: '₹45,999',
    features: ['High Flow Rate', 'Stainless Steel Body', 'Automatic Flush', 'Pressure Gauge'],
    category: 'Commercial',
    image: 'https://picsum.photos/id/400/600/600',
    capacity: '50 Liters/Hour',
    filtrationStages: '5 Stages Commercial RO',
    warranty: '2 Years Comprehensive'
  },
  {
    id: '4',
    name: 'EcoSoft Under-Sink',
    description: 'Space-saving under-the-counter design that keeps your kitchen aesthetic clean.',
    price: '₹22,999',
    features: ['Hidden Installation', 'Silent Operation', 'High TDS Removal', 'Lead Free Faucet'],
    category: 'Home',
    image: 'https://picsum.photos/id/201/600/600',
    capacity: '10 Liters/Hour',
    filtrationStages: '6 Stages',
    warranty: '1 Year'
  },
  {
    id: '5',
    name: 'Industrial Plant 250LPH',
    description: 'Robust industrial solution for large scale water purification needs.',
    price: 'Call for Quote',
    features: ['Industrial Membranes', 'PLC Control Panel', 'Sand Filter', 'Carbon Filter'],
    category: 'Industrial',
    image: 'https://picsum.photos/id/60/600/600',
    capacity: '250 Liters/Hour',
    filtrationStages: 'Customizable',
    warranty: '1 Year On-site'
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
    content: 'Switched to AquaPure last year. The water quality consistency has helped our beverages taste better.',
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

export const CONTACT_PHONE = "15550123456"; // Dummy number for WhatsApp
export const CONTACT_PHONE_DISPLAY = "+1 (555) 012-3456";
export const CONTACT_EMAIL = "sales@aquapure-example.com";
