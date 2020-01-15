import React, { Component } from 'react';

class ContactComponent extends Component{
    render() {
        return (
		<div>
	        <section className="contact-container md-padding-top">
                <span className="full-width center-center x-lg-margin-bottom x-lg-margin-top">
                    <h2 className="section-title font-white">Contactanos :)</h2>
                </span>
                <div id="form-contact">
                    <div className="content-input">
                        <input placeholder="Nombre" className="input-small-contact" />
                        <input placeholder="Email" className="input-small-contact" />
                        <input placeholder="Num contacto" className="input-small-contact" />
                    </div>
                    <div className="content-input">
                        <input placeholder="Mensaje" className="input-small-contact input-large-contact" />
                    </div>
                </div>

            </section>
		</div>
        )
    }
}
export default ContactComponent;