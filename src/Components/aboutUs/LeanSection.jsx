import React from 'react';
import './LeanSection.css';

function LeanSection() {
  return (
    <section className="lean-section py-5 text-center">
      <div className="container">
        <h2 className="fw-bold">
          We Follow 2 Second Lean<br />
          <span className="highlight-yellow">Inspired by Toyota’s Lean</span><br />
          Management Practices
        </h2>
        <p className="mt-4">
          At IOTAFLOW, we are proud to introduce ourselves as specialists in flow measurement solutions in India.
        </p>
        <p>
          With over 34 years of experience in the flow meter industry, IOTAFLOW is led by a mechanical engineer, Mr. Pankaj Malik,
          and supported by a skilled team of engineers and professionals. Our sales and service engineers are strategically
          located throughout India to provide comprehensive support throughout the entire sales cycle—pre-sales, sales,
          and post-sales service.
        </p>
        <p>
          At IOTAFLOW, we proudly trace our roots back to 1999, when we began as a distributor of process instruments under the name Universal Engineers.
          In 2009, we decided to focus exclusively on flow meters and rebranded ourselves as IOTAFLOW Systems Pvt. Ltd.
        </p>
      </div>
    </section>
  );
}

export default LeanSection;
