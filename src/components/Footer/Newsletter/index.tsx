import React from 'react'

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="container">
        <div className="newsletter-wrapper">
          <h5 className="newsletter-title">Recebe Nossa Newsletter</h5>

          <form className="newsletter-form">
            <label className="newsletter-label" htmlFor="email" >
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Digite seu e-mail"
                className="newsletter-input"
                required={true}
              />
            </label>

            <button className="newsletter-btn-submit" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
