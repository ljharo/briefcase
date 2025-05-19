import "../css/Contact.css";

export function Contact() {
  return (
    <>
      <section id="contact" className="section">
        <h2 className="section-title">Contact</h2>
        <div className="section-content contact-container">
          <div className="contact-info">
            <h3>Get in touch</h3>
            <p className="contact-description">
              Whether you have a question or just want to greet, I will do my
              best to answer!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
                  />
                </svg>
                <a href="mailto:haroomg@gmail.com" target="_blank">
                  haroomg@gmail.com
                </a>
              </div>

              <div className="contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                  />
                </svg>
                <a href="tel:+584241234567">+58 424 1234567</a>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/ljharo"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
              >
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/luis-haro-bba6b522a/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            action="https://formspree.io/f/your-form-id"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
