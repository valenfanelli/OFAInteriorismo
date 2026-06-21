function Contacto() {
  return (
    <section className="contacto section-padding page-section">
      <div className="container">
        <div className="section-header-left">
          <h2 className="section-title-left">Contacto</h2>
          <p className="section-subtitle-left">Lorem ipsum dolor sit amet</p>
        </div>

        <div className="contacto-info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="contacto-details">
            <li><strong>Telefono:</strong> +1 (111) 111-1111</li>
            <li><strong>Email:</strong> info@ofainteriorismo.com</li>
            <li><strong>Instagram:</strong> <a href="#" target="_blank" rel="noopener noreferrer" className="contacto-link">@ofainteriorismo</a></li>
          </ul>
        </div>

        <div className="contacto-form-wrapper">
          <form className="contacto-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" placeholder="Lorem ipsum" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="lorem@ipsum.com" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="asunto">Asunto</label>
              <input type="text" id="asunto" placeholder="Lorem ipsum dolor sit amet" />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."></textarea>
            </div>
            <button type="submit">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacto;