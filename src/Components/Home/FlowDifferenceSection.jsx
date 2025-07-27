import React from 'react';

const FlowMetersPage = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <style>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css');
        
        .main-heading {
          font-size: clamp(3rem, 8vw, 5.5rem);
          font-weight: 900;
          line-height: 0.9;
          color: #2d2d2d;
          letter-spacing: -0.02em;
        }
        
        .description-text {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #666;
          max-width: 500px;
        }
        
        .stat-bubble {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .stat-bubble:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }
        
        .stat-bubble::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 50%;
          border: 2px dotted #bbb;
          z-index: -2;
          opacity: 1;
        }
        
        .stat-bubble::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 50%;
          z-index: -1;
        }
        
        .stat-bubble:nth-child(1)::after {
          background: conic-gradient(from 180deg, 
            transparent 0deg,
            transparent 60deg,
            #ffc107 60deg,
            #ffc107 120deg,
            transparent 120deg,
            transparent 360deg
          );
          mask: radial-gradient(circle, transparent 86px, black 86px, black 92px, transparent 92px);
          -webkit-mask: radial-gradient(circle, transparent 86px, black 86px, black 92px, transparent 92px);
          animation: slowRotate 8s linear infinite;
        }
        
        .stat-bubble:nth-child(2)::after {
          background: conic-gradient(from 270deg, 
            transparent 0deg,
            transparent 45deg,
            #ffc107 45deg,
            #ffc107 105deg,
            transparent 105deg,
            transparent 360deg
          );
          mask: radial-gradient(circle, transparent 86px, black 86px, black 92px, transparent 92px);
          -webkit-mask: radial-gradient(circle, transparent 86px, black 86px, black 92px, transparent 92px);
          animation: slowRotate 8s linear infinite;
        }
        
        .stat-bubble:nth-child(3)::after {
          background: conic-gradient(from 90deg, 
            transparent 0deg,
            transparent 75deg,
            #ffc107 75deg,
            #ffc107 135deg,
            transparent 135deg,
            transparent 360deg
          );
          mask: radial-gradient(circle, transparent 86px, black 86px, black 92px, transparent 92px);
          -webkit-mask: radial-gradient(circle, transparent 86px, black 86px, black 92px, transparent 92px);
          animation: slowRotate 8s linear infinite;
        }
        
        @keyframes slowRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .stat-number {
          font-size: 3.5rem;
          font-weight: 900;
          color: #ffc107;
          margin-bottom: 0.5rem;
          z-index: 1;
          position: relative;
        }
        
        .stat-label {
          font-size: 1rem;
          font-weight: 600;
          color: #666;
          text-align: center;
          line-height: 1.2;
          z-index: 1;
          position: relative;
        }
        
        .stats-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 30px;
          width: 450px;
          height: 400px;
          align-items: center;
          justify-items: center;
        }
        
        .stat-bubble:nth-child(1) {
          grid-column: 1;
          grid-row: 1 / 3;
          align-self: center;
        }
        
        .stat-bubble:nth-child(2) {
          grid-column: 2;
          grid-row: 1;
        }
        
        .stat-bubble:nth-child(3) {
          grid-column: 2;
          grid-row: 2;
        }
        
        @media (max-width: 768px) {
          .stats-container {
            width: 350px;
            height: 350px;
            gap: 25px;
          }
          
          .stat-bubble {
            width: 140px;
            height: 140px;
          }
          
          .stat-number {
            font-size: 2.2rem;
          }
          
          .stat-label {
            font-size: 0.85rem;
          }
        }
      `}</style>
      
      <div className="container-fluid">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-7 col-md-12 px-5">
            <div className="mb-4">
              <h1 className="main-heading mb-4">
                Your Flow Matters, Our Meters Make the Difference!
              </h1>
              <p className="description-text">
                Iota means minuscule or minute, which we take as inspiration to design and deliver flow meters that have an iota of an error. flow word is there to keep us focused on the fact that we shall design and deliver flow meters for everything that flows
              </p>
            </div>
          </div>
          
          <div className="col-lg-5 col-md-12 d-flex justify-content-center">
            <div className="stats-container">
              <div className="stat-bubble">
                <div className="stat-number">10K</div>
                <div className="stat-label">Products Delivered</div>
              </div>
              
              <div className="stat-bubble">
                <div className="stat-number">10+</div>
                <div className="stat-label">Exports</div>
              </div>
              
              <div className="stat-bubble">
                <div className="stat-number">10+</div>
                <div className="stat-label">Global Partnerships</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowMetersPage;