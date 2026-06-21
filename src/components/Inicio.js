import bgImage from '../img/background.jpeg';
import heroLogo from '../img/logo-cream.png';

function Inicio() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero-overlay">
        <img className="hero-logo" src={heroLogo} alt="OFA Interiorismo" />
      </div>
    </section>
  );
}

export default Inicio;