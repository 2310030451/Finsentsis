import { FeatureCard } from "../../components/Features/FeatureCard1";
import type { FeatureData } from "../../components/Features/FeatureCard1";
import glowLine from "../../assets/glowline.png";
import finsentsis from "../../assets/logos/finsentsis.png";

import {
  Speedometer,
  GearWidget,
  DashboardWidget,
  RiskChart,
  AuditReportsWidget,
  MapWidget,
} from "../../components/Features/GraphCard1";

const features: FeatureData[] = [
  {
    number: "01",
    title: "Regulatory Intelligence Engine",
    description:
      "Tracks and analyzes global laws using AI to ensure organizations always stay updated with the latest regulatory requirements across all jurisdictions.",
    widget: <Speedometer />,
  },
  {
    number: "02",
    title: "Policy-to-Task Automation",
    description:
      "Converts policies into real-time workflows, reducing human effort and ensuring consistent compliance execution across the organization.",
    widget: <GearWidget />,
  },
  {
    number: "03",
    title: "Unified Governance Dashboard",
    description:
      "A single view of ESG, tax, labor, and data compliance metrics, providing complete visibility into your organization's compliance posture.",
    widget: <DashboardWidget />,
  },
  {
    number: "04",
    title: "Predictive Risk Alerts",
    description:
      "Machine learning models detect anomalies and forecast compliance risks before they become violations, enabling proactive mitigation.",
    widget: <RiskChart />,
  },
  {
    number: "05",
    title: "Audit-Ready Reports",
    description:
      "Auto-generates compliant, standardized reports for regulators and auditors on demand, eliminating manual report preparation.",
    widget: <AuditReportsWidget />,
  },
  {
    number: "06",
    title: "Multi-Region Coverage",
    description:
      "Supports compliance frameworks across multiple countries and industries, enabling seamless global expansion and regulatory management.",
    widget: <MapWidget />,
  },
];

export default function Features() {

  return (
    <div className="page">
      {/* ── Hero Section ── */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-heading">
            Intelligent Features That Power Autonomy
          </h1>
          <p className="hero-sub">
            Finsentsis OS combines AI-powered intelligence, real-time monitoring, and autonomous automation to deliver comprehensive compliance management across all regulatory domains.
          </p>
        </div>

        {/* Large background "Core Features" text */}
        <div className="hero-bg-text">
          <span>Core Features</span>
        </div>
      </section>

{/* Sun Rays */}
<div className="sun-rays">
  <span className="ray ray1"></span>
  <span className="ray ray2"></span>
  <span className="ray ray3"></span>
  <span className="ray ray4"></span>
</div>


      {/* ── Feature Cards ── */}
      <section className="features-section">
        {features.map((f, i) => (
          <FeatureCard key={f.number} feature={f} index={i} />
        ))}
      </section>

      {/* ── CTA Section ── */}
      <section className="cta-section">

{/* LEFT beams */}
<img src={glowLine} className="cta-glow-line glow-left glow-layer1" />
<img src={glowLine} className="cta-glow-line glow-left glow-layer2" />
<img src={glowLine} className="cta-glow-line glow-left glow-layer3" />
<img src={glowLine} className="cta-glow-line glow-left glow-layer4" />
<img src={glowLine} className="cta-glow-line glow-left glow-layer5" />

{/* RIGHT beams */}
<img src={glowLine} className="cta-glow-line glow-right glow-layer1" />
<img src={glowLine} className="cta-glow-line glow-right glow-layer2" />
<img src={glowLine} className="cta-glow-line glow-right glow-layer3" />
<img src={glowLine} className="cta-glow-line glow-right glow-layer4" />
<img src={glowLine} className="cta-glow-line glow-right glow-layer5" />


  <div className="cta-content">
  <h2 className="cta-heading">
    Ready to<br />
    Transform Your<br />
    Compliance?
  </h2>
  </div>
  <p className="cta-sub">
    Join forward-thinking enterprises that are already using Finsentsis OS to simplify compliance and reduce risk.
  </p>

  <div className="cta-buttons">
    <a href="#" className="btn-primary">Start free trial ↗</a>
    <a href="#" className="btn-secondary">Schedule Demo ↗</a>
  </div>

</section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-top">
          <div>
            <div className="footer-brand-logo">
              <div className="footer-brand-icon">
  <img src={finsentsis} alt="Finsentsis Logo" className="footer-logo-img" />
</div>
              Finsentsis
            </div>
            <p className="footer-newsletter-label">Stay Updated</p>
            <p className="footer-newsletter-sub">
              Get the latest updates on compliance trends, product features, and industry insights.
            </p>
            <div className="footer-input-row">
              <input className="footer-input" type="email" placeholder="Enter your email id" />
              <button className="footer-input-btn" aria-label="Subscribe">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <p className="footer-col-title">Product</p>
            <ul className="footer-links">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Why Finsentsis</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Company</p>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Legal</p>
            <ul className="footer-links">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 Finsentsis OS · An AI-Powered Compliance &amp; Governance Operating System
          </span>
          
          <div className="footer-socials">

  {/* Facebook */}
  <div className="footer-social-icon">
    <svg viewBox="0 0 24 24">
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h2.5l.5-3H13v-2c0-.6.4-1 1-1z"/>
    </svg>
  </div>

  {/* Instagram */}
<div className="footer-social-icon">
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor"/>
    <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none"/>
  </svg>
</div>

  {/* YouTube */}
  <div className="footer-social-icon">
    <svg viewBox="0 0 24 24">
      <path d="M23 7s-.2-1.6-.8-2.3c-.7-.9-1.5-.9-1.9-1C17.6 3.5 12 3.5 12 3.5h0s-5.6 0-8.3.2c-.4.1-1.2.1-1.9 1C1.2 5.4 1 7 1 7S.8 8.9.8 10.7v1.6C.8 14.1 1 16 1 16s.2 1.6.8 2.3c.7.9 1.6.9 2 .9 1.5.2 6.2.2 8.2.2s6.7 0 8.3-.2c.4 0 1.2 0 1.9-.9.6-.7.8-2.3.8-2.3s.2-1.9.2-3.7v-1.6C23.2 8.9 23 7 23 7z"/>
      <polygon points="10 9 16 12 10 15" fill="#0a0a0a"/>
    </svg>
  </div>

  {/* X */}
  <div className="footer-social-icon">
    <svg viewBox="0 0 24 24">
      <path d="M18.9 2H22l-7.4 8.5L23 22h-6.8l-5.3-6.9L4.7 22H1.6l7.9-9.1L1 2h6.9l4.8 6.3L18.9 2z"/>
    </svg>
  </div>

</div>
        </div>
      </footer>



      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          background: #0d0d0d;
          color: #e8e8e8;
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
        }

      
        

        /* ── Hero Section ── */
       .hero-section {
  position: relative;
  padding: 100px 24px 0;
  overflow: hidden;

  background:
    radial-gradient(
      ellipse at 50% 0%,
      rgba(60,60,60,0.45) 0%,
      #0d0d0d 60%
    ),
    linear-gradient(
      120deg,
      rgba(255,255,255,0.12) 0%,
      rgba(255,255,255,0.05) 15%,
      transparent 40%
    ),
    linear-gradient(
      110deg,
      rgba(255,255,255,0.08) 0%,
      transparent 35%
    );

  background-repeat: no-repeat;
  background-position: right top;
  background-size: cover;
}
    
        .hero-content {
          position: relative; z-index: 2;
          max-width: 761px;
          left: 43.69px;
        }
        .hero-heading {
          font-family: 'Inter Display', 'Inter', sans-serif;
          font-size: 55px;
          font-weight: 500;
          font-style: normal;
          color: #FFFFFF;
          line-height: 1.0;
          letter-spacing: 0;
          width: 761px;
          max-width: 100%;
          margin-bottom: 46px;
        }
        .hero-sub {
          font-family: 'Inter Display', 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 400;
          font-style: normal;
          line-height: 1.5;
          letter-spacing: 0;
          color: #999999;
          width: 779px;
          max-width: 100%;
        }

      /* Sun Rays Effect */
          .sun-rays {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000px;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}  
.ray {
  position: absolute;
  top: -200px;

  width: 100px;
  height: 1000px;

  background: linear-gradient(
    to bottom,
    rgba(255,255,255,0.35),
    rgba(255,255,255,0.18),
    rgba(255,255,255,0.05),
    transparent
  );

  filter: blur(60px);
  transform-origin: top;

  left: var(--left);
  transform: rotate(var(--angle));
  opacity: var(--opacity, 1);

  mix-blend-mode: screen; 
}

/* Position and rotate rays to fan out across the hero section */


.ray1 { --left: 40%; --angle: 30deg; --opacity: 1.0; }
.ray2 { --left: 70%; --angle: 30deg;  --opacity: 1.0; }
.ray3 { --left: 100%; --angle: 30deg; --opacity: 1.0; }
.ray4 { --left: 10%; --angle: 30deg; --opacity: 1.0; }

  .sun-rays {
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,0.9) 30%,
    rgba(0,0,0,0.5) 60%,
    transparent 90%
  );
}


       /* Large "Core Features" text */
.hero-bg-text {
  position: relative;
  margin-top: 10px;
  margin-bottom: -75px; /* overlap cards slightly */
  z-index: 1;
  pointer-events: none;
  user-select: none;
  overflow: visible;
  width: 100%;
  height: 260px;
}

.hero-bg-text span {
  font-family: 'Inter', sans-serif;
  font-size: clamp(80px, 16vw, 250px);
  font-weight: 500;
  letter-spacing: -0.07em;
  line-height: 1;
  white-space: nowrap;
  display: block;
  text-align: center;
  mix-blend-mode: lighten;
  

  /* white → transparent fade */
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255,255,255,0.9) 30%,
    rgba(255,255,255,0.4) 65%,
    rgba(255,255,255,0) 100%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  /* glow */
  text-shadow:
    0 0 25px rgba(255,255,255,0.35),
    0 0 45px rgba(255,255,255,0.2);
}

        /* ── Feature Cards Grid ── */
        .features-section {
          padding: 0 37px 0;
          display: flex; flex-direction: column; gap: 20px;
        }
          
       .feature-card {
  position: relative;
  overflow: hidden;

  height: 552px;

  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.18);

  /* exact matte gradient like image */
  background: linear-gradient(
    90deg,
    #050505 0%,
    #111111 20%,
    #1a1a1a 40%,
    #2a2a2a 65%,
    #3a3a3a 100%
  );

  transition: border-color 0.3s ease;
}
        .feature-card--split {
          display: grid;
          grid-template-columns: 50% 50%;
          align-items: stretch;
          gap: 0;
        }
        .feature-card:hover { border-color: rgba(61,255,143,0.4); }

        /* Left side */
        .feature-card__left {
          position: relative; z-index: 1;
          padding: 184px 36px 36px 66px;
          display: flex; flex-direction: column;
          justify-content: space-between;
          background: transparent;
          border-right: 1px solid rgba(255,255,255,0.08);
        }
        .feature-card__left-top {
          display: flex; flex-direction: column;
        }
        .feature-card__left-bottom {
          display: flex; flex-direction: column; gap: 16px;
        }

        /* Right side — widget bleeds fully */
        .feature-card__right {
          position: relative; z-index: 1;
          background: transparent;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
          padding: 0;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
          border: 3px solid #000;
          border-left: none;
        }

   

        /* Number box — 109x109px, border-radius 10px */
        .feature-number-box {
          display: inline-flex; align-items: center; justify-content: center;
          width: 109px; height: 109px;
          border: 1px solid rgba(255,255,255,0.1); border-radius: 10px;
          background: #1a1a1a;
          font-family: 'Inter Display', 'Inter', sans-serif; font-size: 32px; font-weight: 500;
          color: #fff; letter-spacing: 0;
          align-self: flex-start;
        }
        .feature-title {
          font-family: 'Inter Display', 'Inter', sans-serif;
          font-size: 40px;
          font-weight: 500;
          font-style: normal;
          color: #FFFFFF;
          line-height: 1.0;
          letter-spacing: 0;
          width: 450px;
          max-width: 100%;
          margin-bottom: 12px;
        }
        .feature-desc {
          font-family: 'Inter Display', 'Inter', sans-serif;
          font-size: 20px;
          font-weight: 400;
          font-style: normal;
          color: #FFFFFF;
          line-height: 1.0;
          letter-spacing: 0;
          width: 516px;
          max-width: 100%;
        }

       

        /* ── CTA Section ── */
       .cta-section{
  position:relative;
  overflow:hidden;
  
  padding:40px 40px 160px;
  text-align:center;
  background:#0d0d0d;
}

.cta-content{
  margin-top:180px;
  position:relative;
  z-index:1;
}

/* glow images */
.cta-glow-line{
  position:absolute;
  width:925px;

  pointer-events:none;
  mix-blend-mode:screen;
  opacity:0.75;

  transform:scaleX(1.3);

  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 25%,
    black 75%,
    transparent 100%
  );
}

/* layer depth */

.glow-layer1{
  filter: blur(6px);
  opacity:1;
}

.glow-layer2{
  filter: blur(280px);
  opacity:0.55;
}

.glow-layer3{
  filter: blur(320px);
  opacity:0.35;
}

.glow-layer4{
  filter: blur(160px);
  opacity:0.25;
}

.glow-layer5{
  filter: blur(200px);
  opacity:0.15;
}


/* LEFT beams */

.glow-left.glow-layer1 { top:-120px; left:-380px; transform:rotate(-2deg); }
.glow-left.glow-layer2 { top:-150px; left:-340px; transform:rotate(-2deg); }
.glow-left.glow-layer3 { top:-180px; left:-300px; transform:rotate(-2deg); }
.glow-left.glow-layer4 { top:-210px; left:-260px; transform:rotate(-2deg); }
.glow-left.glow-layer5 { top:-240px; left:-220px; transform:rotate(-2deg); }


/* RIGHT beams */

.glow-right.glow-layer1 { bottom:-120px; right:-380px; transform:rotate(-82deg) scaleX(-1); }
.glow-right.glow-layer2 { bottom:-150px; right:-340px; transform:rotate(22deg) scaleX(-1); }
.glow-right.glow-layer3 { bottom:-180px; right:-300px; transform:rotate(22deg) scaleX(-1); }
.glow-right.glow-layer4 { bottom:-210px; right:-260px; transform:rotate(22deg) scaleX(-1); }
.glow-right.glow-layer5 { bottom:-240px; right:-220px; transform:rotate(22deg) scaleX(-1); }



/* gradient overlay to fade out glows at edges */
.cta-section::before{
  content:"";
  position:absolute;
  inset:0;

  background:
    linear-gradient(
      to bottom,
      rgba(13,13,13,0) 0%,
      rgba(13,13,13,0.35) 40%,
      rgba(13,13,13,0.75) 70%,
      rgba(13,13,13,1) 100%
    ),
    linear-gradient(
      to right,
      rgba(13,13,13,0) 60%,
      rgba(13,13,13,0.6) 85%,
      rgba(13,13,13,1) 100%
    );

  pointer-events:none;
}

.cta-section::after{
  content:"";
  position:absolute;

  right:-250px;
  bottom:-250px;

  width:520px;
  height:520px;

  background: radial-gradient(
    circle,
    rgba(154,255,46,0.35) 0%,
    rgba(154,255,46,0.15) 40%,
    transparent 75%
  );

  filter: blur(140px);
  pointer-events:none;
}

.glow-soft{
  opacity:0.35;
  filter: blur(60px);
}


.cta-heading {
  font-family: 'Syne', sans-serif;
  font-size: clamp(44px, 8vw, 100px);
  font-weight: 700; 
  color: #fff;
  line-height: 1.0; 
  letter-spacing: -0.02em;
  position: relative; 
  z-index: 1; 
  margin-bottom: 24px;
}

.cta-sub {
  font-size: 14px; 
  color: rgba(255,255,255,0.45);
  line-height: 1.65; 
  max-width: 340px;
  margin: 0 auto 40px; 
  position: relative; 
  z-index: 1;
}

.cta-buttons {
  display: flex; 
  align-items: center; 
  justify-content: center;
  gap: 12px; 
  position: relative; 
  z-index: 1; 
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex; 
  align-items: center; 
  gap: 6px;
  padding: 12px 24px; 
  border-radius: 999px;
  background: #9AFF2E; 
  color: #0a0a0a;
  font-family: 'DM Sans', sans-serif; 
  font-size: 14px; 
  font-weight: 600;
  border: none; 
  cursor: pointer; 
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;
}

.btn-primary:hover { 
  opacity: 0.88; 
  transform: translateY(-1px); 
}

.btn-secondary {
  display: inline-flex; 
  align-items: center; 
  gap: 6px;
  padding: 12px 24px; 
  border-radius: 999px;
  background: transparent; 
  color: #fff;
  font-family: 'DM Sans', sans-serif; 
  font-size: 14px; 
  font-weight: 500;
  border: 1px solid rgba(255,255,255,0.18); 
  cursor: pointer;
  text-decoration: none; 
  transition: border-color 0.2s, transform 0.2s;
}

.btn-secondary:hover { 
  border-color: rgba(255,255,255,0.4); 
  transform: translateY(-1px); 
}


        /* ── Footer ── */
        .footer {
          background: #131313;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 52px 48px 28px;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 48px; margin-bottom: 48px;
        }
        .footer-brand-logo {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 15px; color: #fff; margin-bottom: 18px;
        }
        .footer-logo-img{
  width:30px;
  height:30px;
  object-fit:contain;
}
        .footer-newsletter-label {
          font-size: 16px; font-weight: 700; color: #fff;
          font-family: 'Syne', sans-serif; margin-bottom: 6px;
        }
        .footer-newsletter-sub {
          font-size: 12.5px; color: rgba(255,255,255,0.38);
          line-height: 1.6; margin-bottom: 16px;
        }
        .footer-input-row {
          display: flex; align-items: center;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px; overflow: hidden;
          padding: 4px 4px 4px 16px;
        }
        .footer-input {
          flex: 1; background: transparent; border: none; outline: none;
          font-size: 13px; color: #fff;
          font-family: 'DM Sans', sans-serif;
        }
        .footer-input::placeholder { color: rgba(255,255,255,0.28); }
        .footer-input-btn {
          width: 32px; height: 32px; border-radius: 50%;
          background: #9AFF2E; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: opacity 0.2s;
        }
        .footer-input-btn:hover { opacity: 0.85; }
        .footer-col-title {
          font-size: 13px; font-weight: 600; color: #ffff;
          font-family: 'inter', sans-serif; margin-bottom: 16px;
        }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .footer-links a {
          font-size: 13px; color: rgba(255,255,255,0.42);
          text-decoration: none; transition: color 0.2s;
        }
        .footer-links a:hover { color: #ffff; }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 20px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        .footer-copy { font-size: 11.5px; color: rgba(255,255,255,0.25); }
        .footer-socials{
  display:flex;
  align-items:center;
  gap:12px;
}

.footer-social-icon{
  width:36px;
  height:36px;
  

  display:flex;
  align-items:center;
  justify-content:center;

  border-radius:6px;

  background:#121212;

  border:1px solid rgba(255,255,255,0.06);

  transition:all .25s ease;
  cursor:pointer;
}

.footer-social-icon svg{
  width:20px;
  height:20px;

  color:#9AFF2E;
}

.footer-social-icon svg path{
  fill:#9AFF2E;
}

.footer-social-icon svg rect,
.footer-social-icon svg circle{
  stroke:#9AFF2E;
  fill:none;
}

.footer-social-icon:hover{
  background:#1a1a1a;

  box-shadow:
    0 0 10px rgba(154,255,46,0.35);
}

        

        /* ── Scrollbar ── */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0d0d0d; }
        ::-webkit-scrollbar-thumb { background: #9AFF2E; border-radius: 2px; }

        @media (max-width: 768px) {
          .footer-top { grid-template-columns: 1fr 1fr; }
          .nav-center { display: none; }
        }
        @media (max-width: 640px) {
          .feature-card--split { grid-template-columns: 1fr; }
          .feature-card { height: auto; }
          .feature-card__left { padding: 20px 18px; }
          .feature-card__right { min-height: 260px; }
          nav { padding: 0 16px; }
          .nav-center { display: none; }
          .hero-section { padding: 90px 16px 0; }
          .features-section { padding: 0 16px 60px; gap: 12px; }
          .footer { padding: 40px 16px 24px; }
          .footer-top { grid-template-columns: 1fr; gap: 28px; }
          .hero-heading { font-size: 32px; }
          .hero-sub { font-size: 14px; }
        }

  

  
`}</style>


    </div>
  );
}
