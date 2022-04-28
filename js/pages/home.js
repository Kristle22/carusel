import { Carusel } from '../components/carusel/Carusel.js';
import { InterfaceCard } from '../components/carusel/Interface.js';
import { TestimonialCard } from '../components/carusel/testimonials.js';
import { interfaceData } from '../data/interfaceData.js';

const interfaceCarusel = new Carusel(
  '#interface_carusel',
  InterfaceCard,
  interfaceData,
  {
    size: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
    },
    previousNext: true,
    dots: true,
  }
);
console.log(interfaceCarusel);
