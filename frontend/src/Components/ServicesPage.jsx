import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  ProgressBar,
} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Services.css";

export default function ServicesPage() {
  return (
    <div className="services-page">
      {/* Top spacer so it doesn’t stick to your existing navbar */}
      <section className="py-5">
        <Container>
          <Row className="align-items-start">
          {/* Left: yellow bordered card */}
            <Col lg={5} className="mb-5 mb-lg-0">
              <Breadcrumbs />
              <StatisticalCard />
            </Col>

            {/* Right: main article */}
            <Col lg={7}>
              <h1 className="display-4 fw-bold mb-4">Industrial Construction</h1>
              <p className="lead text-muted mb-4">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative thinking to further the overall value
                proposition.
              </p>

              <ArticleCopy />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Yellow “Open positions” banner & Features list */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={5} className="mb-5 mb-lg-0">
              <OpenPositionsCard />
            </Col>
            <Col lg={7}>
              <FeaturesGrid />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Data table */}
      <section className="py-5">
        <Container>
          <h2 className="h3 fw-bold mb-4">
            Fossil fuel production &amp; consumption
          </h2>
          <FuelTable />
        </Container>
      </section>

      {/* Regional percentage bars */}
      <section className="py-5">
        <Container>
          <Row className="g-5">
            <Col md={6}>
              <RegionBar label="USA" value={74} />
              <RegionBar label="Russia" value={64} />
              <RegionBar label="Europe" value={87} />
            </Col>
            <Col md={6}>
              <RegionBar label="Africa" value={42} />
              <RegionBar label="Asia" value={67} />
              <RegionBar label="Other" value={35} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer mega menu */}
      
    </div>
  );
}

/* ---------------- components ---------------- */

function Breadcrumbs() {
  return (
    <div className="text-end small text-muted mb-4 d-lg-none">
      {/* Visible on mobile if you want. If you already have a global breadcrumb, delete this. */}
      Iota Home <i className="bi bi-chevron-right mx-1" /> Services
    </div>
  );
}

function StatisticalCard() {
  return (
    <div className="stat-card px-4 py-5">
      <h2 className="display-5 fw-bold mb-0">
        Statistical
        <br />
        results for
      </h2>
      <div className="display-3 fw-bold stat-year mt-3 mb-4">2019</div>
      <Button variant="outline-dark" size="lg" className="rounded-0 px-4">
        Find out more <i className="bi bi-chevron-right ms-2" />
      </Button>
    </div>
  );
}

function ArticleCopy() {
  return (
    <>
      <p className="text-muted">
        Fossil fuel production and consumption began with coal – its first
        reported uses date as far back as 4000BC in China where carving took
        place out of black lignite (one of the several forms of coal).
        <sup>1</sup> However, large-scale combustion of coal is typically
        correlated with the period around the beginning of the Industrial
        Revolution. The visualisation shows the global consumption of fossil
        fuels – coal, oil and gas – from 1800 onwards. Overall, we see that
        global consumption of fossil energy has increased more than 1300-fold.
        As shown, coal was the first and only fossil source until the 1860s when
        crude oil consumption began. Natural gas production began a couple of
        decades later, in the 1880–90s.
      </p>
    </>
  );
}

function OpenPositionsCard() {
  return (
    <div className="open-positions-card d-flex flex-column justify-content-between p-5">
      <div>
        <h2 className="display-5 fw-bold text-dark mb-4">Open positions</h2>
      </div>
      <div>
        <Button variant="outline-dark" size="lg" className="rounded-0 px-4">
          Find out more <i className="bi bi-chevron-right ms-2" />
        </Button>
      </div>
    </div>
  );
}

function FeaturesGrid() {
  const list = [
    { title: "Flexible solutions" },
    { title: "No hidden issues" },
    { title: "High performance" },
    { title: "Simple integration" },
  ];

  return (
    <Row xs={1} md={2} className="gy-4">
      {list.map((f) => (
        <Col key={f.title}>
          <FeatureItem title={f.title} text="Leverage agile frameworks to provide a robust synopsis for level." />
        </Col>
      ))}
    </Row>
  );
}

function FeatureItem({ title, text }) {
  return (
    <div className="d-flex">
      <span className="feature-icon me-3">
        <i className="bi bi-chevron-right" />
      </span>
      <div>
        <h5 className="fw-bold mb-2">{title}</h5>
        <p className="text-muted mb-0">{text}</p>
      </div>
    </div>
  );
}

function FuelTable() {
  const rows = [
    ["Bosnia and Herzegovina", "AFG", 1968, 1.01762501, 20.24471],
    ["Botswana", "AFG", 1969, 1.107176011, 24.43576],
    ["Brazil", "AFG", 1970, 1.335124013, 31.10772],
    ["Cambodia", "AFG", 1975, 1.221150012, 35.63598],
  ];

  return (
    <div className="table-responsive">
      <Table bordered hover className="align-middle mb-0">
        <thead className="table-light">
          <tr>
            <th>Country</th>
            <th>Code</th>
            <th>Year</th>
            <th>Production</th>
            <th>Consumption</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, idx) => (
            <tr key={idx}>
              <td>{r[0]}</td>
              <td>{r[1]}</td>
              <td>{r[2]}</td>
              <td>{r[3]}</td>
              <td>{r[4]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

function RegionBar({ label, value }) {
  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between mb-2">
        <h4 className="h5 fw-bold mb-0">{label}</h4>
        <span className="h5 fw-bold mb-0">{value}%</span>
      </div>
      <div className="custom-progress">
        <div
          className="custom-progress-bar"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

