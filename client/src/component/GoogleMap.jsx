import React from 'react'

const GoogleMap = () => {

    return (
        <section className='google_map'>
            <div className='container_fluid' >
                <iframe defer
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d844.9798031393167!2d74.87843344836276!3d32.09846903087432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391954747c4c568d%3A0xc7ac76022c894153!2sWahla%20St%2C%20Narowal%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1707031319517!5m2!1sen!2s"
                    style={{ border: "0", width: "100%", height: "400px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
            </div>
        </section>

    )
}

export default React.memo(GoogleMap);
