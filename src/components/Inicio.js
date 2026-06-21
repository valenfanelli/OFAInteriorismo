import { Link } from 'react-router-dom';
import bgImage from '../img/background.jpeg';
import heroLogo from '../img/logo-cream.png';

function Inicio() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero-overlay">
        <img className="hero-logo" src={heroLogo} alt="OFA Interiorismo" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Espacios que inspiran, disenos que transforman.</p>
        <Link to="/proyectos" className="hero-cta">Ver Proyectos</Link>
      </div>
    </section>
  );
}

export default Inicio;