import { Carusel } from '../components/carusel/Carusel.js';
import { InterfaceCard } from '../components/carusel/Interface.js';
import { TestimonialsCard } from '../components/carusel/testimonials.js';
import { interfaceData } from '../data/interfaceData.js';

new Carusel('#interface_carusel', TestimonialsCard, interfaceData, {
  size: {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  },
  previousNext: true,
  dots: true,
});
