import dynamic from 'next/dynamic';

const ArrowClockwise = dynamic(() => import('phosphor-react').then(mod => mod.ArrowClockwise), { ssr: false });
const ChartPie = dynamic(() => import('phosphor-react').then(mod => mod.ChartPie), { ssr: false });
const ClipboardText = dynamic(() => import('phosphor-react').then(mod => mod.ClipboardText), { ssr: false });
const CodeSimple = dynamic(() => import('phosphor-react').then(mod => mod.CodeSimple), { ssr: false });
const CreditCard = dynamic(() => import('phosphor-react').then(mod => mod.CreditCard), { ssr: false });
const FilePlus = dynamic(() => import('phosphor-react').then(mod => mod.FilePlus), { ssr: false });
const Gear = dynamic(() => import('phosphor-react').then(mod => mod.Gear), { ssr: false });
const MagicWand = dynamic(() => import('phosphor-react').then(mod => mod.MagicWand), { ssr: false });
const MagnifyingGlass = dynamic(() => import('phosphor-react').then(mod => mod.MagnifyingGlass), { ssr: false });
const Rocket = dynamic(() => import('phosphor-react').then(mod => mod.Rocket), { ssr: false });
const Wheelchair = dynamic(() => import('phosphor-react').then(mod => mod.Wheelchair), { ssr: false });


const ServicesData = [
  {
    id: 1,
    name: "Website Design & Development",
    icon: <CodeSimple size={40} />,
  },
  {
    id: 2,
    name: "Landing Page Development",
    icon: <FilePlus size={40} />,
  },
  {
    id: 3,
    name: "E-commerce Development",
    icon: <CreditCard size={40} />,
  },
  {
    id: 4,
    name: "Single Page Applications (SPAs)",
    icon: <ArrowClockwise size={40} />,
  },
  {
    id: 5,
    name: "Performance Optimization",
    icon: <Rocket size={40} />,
  },
  {
    id: 6,
    name: "SEO-Friendly Development",
    icon: <MagnifyingGlass size={40} />,
  },
  {
    id: 7,
    name: "Maintenance and Support",
    icon: <Gear size={40} />,
  },
  {
    id: 8,
    name: "Content Management System (CMS) Integration",
    icon: <ClipboardText size={40} />,
  },
  {
    id: 9,
    name: "Web Animations and Interactions",
    icon: <MagicWand size={40} />,
  },
  {
    id: 10,
    name: "Accessibility Compliance",
    icon: <Wheelchair size={40} />,
  },
  {
    id: 11,
    name: "Conversion Rate Optimization (CRO)",
    icon: <ChartPie size={40} />,
  },
];

export default ServicesData;
