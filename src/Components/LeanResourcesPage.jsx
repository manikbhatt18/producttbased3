import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./lean-resources.css";
import img1 from '../images/Lean-Resources-1024x556.webp'


//  change the yt ids
const VIDEOS = [
  { title: "Introducing More…", youtubeId: "MiQ5eOvolow" },
  { title: "Maximizing Eff…", youtubeId: "itXNhuLUs3Y" },
  { title: "Introducing More… (Part 2)", youtubeId: "poDf56erACQ" },
{ title: "High performance…", youtubeId: "Xxy2xBZM1LY" },
  { title: "Turning Mistakes into Improvements", youtubeId: "LnAqsDim0D4" },
  { title: "Unlock Productivity – Red Card Technique", youtubeId: "DeTCgcudxXA" },
  { title: "Enhancing Safety Performance", youtubeId: "0Dgcfmj0oHs" },
  { title: "Video Placeholder", youtubeId: "XHOmBV4js_E" },
];

export default function LeanResourcesPage() {
  return (
    <div className="lean-page">
      {/* Hero */}
      <header className="lean-hero py-5">
        <Container className="text-center">
          <h1 className="display-4 fw-bold">Lean Resources</h1>
          {/* Big collage image */}
          <div className="lean-hero-image mt-4">
            <img
              src={img1}
              alt="Lean Resources Collage"
              className="img-fluid rounded shadow"
            />
          </div>
        </Container>
      </header>

      {/* Videos */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {VIDEOS.map((v) => (
              <Col key={v.title} xs={12} md={6} lg={3}>
                <VideoCard {...v} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

/* ---------------- components ---------------- */

function VideoCard({ youtubeId, title }) {
  return (
    <div className="video-card">
      <div className="ratio ratio-16x9">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="small text-muted mt-2">{title}</div>
    </div>
  );
}
