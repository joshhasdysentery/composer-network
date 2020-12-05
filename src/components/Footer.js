import React from 'react';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Subscribe to our newsletter for the latest deals on our store and
          concerts to look out for
        </p>
        <p className="footer-subscription-text">
          Feel free to unsubscribe at anytime.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
          </form>
        </div>
      </section>
    </div>
  );
}
