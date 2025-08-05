
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./lean-resources.css";
import banner from "../images/bg1.jpg"
import story from "../images/1.png"
import team1 from "../images/1.png"
import team2 from "../images/1.png"
import team3 from "../images/1.png"

function LeanResourcesPage() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="bg-success text-white py-5 hero-section">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="text-start">
            <h1 className="fw-bold">MY NEW BOOK…</h1>
            <h4>12 Proven Steps for Creating A Vibrant Lean Culture</h4>
            <hr className="bg-white" style={{ width: "50%" }} />
            <p>
              <em>Order online at</em> <br />
              <strong>leanmadesimple.com</strong>
            </p>
          </div>
          <img
            src={banner}
            alt="Lean Made Simple Book"
            className="img-fluid book-img mt-4 mt-md-0"
            style={{ maxHeight: "400px" }}
          />
        </div>
      </section>

      {/* What is Lean Section */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="mb-4">What is Lean?</h2>
          <p className="lead">
            Simply put, lean manufacturing is a method to reduce non value
            added activities from a process so that we can add more value to our
            customer. But lean is not limited to manufacturing, in fact lean is
            a mindset, a way of thinking. 90% of everything we do is waste or
            non value added activity, therefore the task of reducing waste is a
            never ending project! The key to getting Lean to take roots in your
            organisation is to create a culture of continuous improvement where
            every single person is committed to small daily incremental
            improvements. Lean thinking has transformed the performance of
            organisations all over the world and it can do the same for you!
          </p>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={story}
                alt="Story"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <h2>My Story</h2>
              <p>
                Almost a decade ago I went home from work really frustrated, the
                business wasn’t running the way I wanted it to run, we had lots
                of production issues, lots of defects and it was a very
                stressful environment to work in. I said to myself “there has to
                be a better way” I started researching and came across Lean on
                YouTube. I sat up all night and watched videos repeatedly...
              </p>
              <p>
                Today our company is unrecognisable from where it was a decade
                ago, and it is all down to the power of Lean thinking. Since
                discovering Lean, several members of our team have travelled to
                Japan, Canada, USA and Germany to further our understanding and
                brought this knowledge back to our company...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-4">
              <img
                src={team1}
                className="img-fluid rounded"
                alt="Team 1"
              />
            </div>
            <div className="col-md-4">
              <img
                src={team2}
                className="img-fluid rounded"
                alt="Team 2"
              />
            </div>
            <div className="col-md-4">
              <img
                src={team3}
                className="img-fluid rounded"
                alt="Team 3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LeanResourcesPage;
