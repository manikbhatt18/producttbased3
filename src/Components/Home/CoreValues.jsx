import React, { useEffect, useRef, useState } from 'react';
import coreValuesImg from '../../images/coreVal.png'; // Replace with your actual image

function CoreValues() {
  const headingRef = useRef(null);
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setShowHeading(true);
      },
      { threshold: 0.3 }
    );

    if (headingRef.current) io.observe(headingRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <div className="core-values-section d-flex">
      {/* Left Section */}
      <div className="left-section text-white py-5 px-4 w-50">
        <div className="content-wrapper">
          <h1
            ref={headingRef}
            className={`fw-bold animate-heading ${showHeading ? 'show' : ''}`}
          >
            <span className={`highlight-yellow ${showHeading ? 'animate-underline' : ''}`}>
              Core
            </span>{' '}
            <span className="white-text">Values</span>
          </h1>

          <p className="text-light fs-5">
            Learn more about the ways in which our innovation is helping evolve expectations for businesses and manufacturers alike.
          </p>

          <div className="row mt-4">
            <div className="col-6 mb-4">
              <h5><span className="text-warning me-2">&gt;</span>Empowering Ownership</h5>
              <p className="text-light">
                A culture where our team takes full responsibility and pride in their work, driving excellence in every flow measuring sensor we create.
              </p>
            </div>

            <div className="col-6 mb-4">
              <h5><span className="text-warning me-2">&gt;</span>Thrust for Learning</h5>
              <p className="text-light">
                Continuously expanding our expertise and skills, we harness the power of learning to innovate and lead.
              </p>
            </div>

            <div className="col-6">
              <h5><span className="text-warning me-2">&gt;</span>Innovating Solutions</h5>
              <p className="text-light">
                Embracing every challenge with confidence to provide world-class solutions.
              </p>
            </div>

            <div className="col-6">
              <h5><span className="text-warning me-2">&gt;</span>Team of Problem Solvers</h5>
              <p className="text-light">
                Our team collaborates to solve even the most complex industrial challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section w-50">
        <img
          src={coreValuesImg}
          alt="Core Values"
          className="img-fluid h-100 w-100 object-fit-cover"
        />
      </div>

      {/* Custom Styles */}
      <style>{`
        .left-section {
          background-color: #1a1a1a;
        }

        // .black-text {
        //   color: black;
        // }

        .highlight-yellow {
          position: relative;
          display: inline-block;
          color: white;
        }

        .highlight-yellow::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 6px;
          background-color: #ffcc00;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.8s ease-out;
        }

        .highlight-yellow.animate-underline::after {
          transform: scaleX(1);
        }

        .animate-heading {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .animate-heading.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}

export default CoreValues;
