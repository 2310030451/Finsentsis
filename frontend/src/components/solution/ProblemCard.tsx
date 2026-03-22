interface Problem {
  id: number;
  title: string;
  desc: string;
}

const problems: Problem[] = [
  {
    id: 1,
    title: "Complex, Ever-Changing Regulatory Landscapes",
    desc: "Tracking regulations across multiple countries and compliance domains is nearly impossible with manual processes.",
  },
  {
    id: 2,
    title: "High Cost of Compliance",
    desc: "Manual audits, multiple tools, and large compliance teams drain resources without improving outcomes.",
  },
  {
    id: 3,
    title: "Lack of Unified Visibility",
    desc: "Data is fragmented across systems, leading to compliance gaps and missed regulatory changes.",
  },
  {
    id: 4,
    title: "Risk of Penalties",
    desc: "Fragmented systems and human oversight lead to compliance failures, penalties, audits, and reputational damage.",
  },
];

export default function ProblemCard() {
  return (
    <>
      <div className="wrapper">
        {problems.map((p) => (
          <div key={p.id} className="card">
            <div className="content">
              <h3 className="card-title">{p.title}</h3>
              <p className="card-desc">{p.desc}</p>
              <span className="badge">Problem</span>
            </div>

            <div className="number-box">
              <div className="number">
                {p.id.toString().padStart(2, "0")}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .wrapper {
          max-width: 1404px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        @media (max-width: 768px) {
          .wrapper {
            grid-template-columns: 1fr;
          }
        }

        .card {
          position: relative;
          width: 100%;
          aspect-ratio: 688 / 491;
          border-radius: 18px;
          overflow: hidden;
          border: 1.21px solid #3b3b3b;

          background:
            radial-gradient(
              390px 317px at 78% 72%,
              rgba(135, 222, 43, 0.28) 0%,
              rgba(135, 222, 43, 0.18) 30%,
              rgba(135, 222, 43, 0.08) 55%,
              rgba(135, 222, 43, 0.02) 70%,
              transparent 85%
            ),
            linear-gradient(180deg, #0d0f0d 0%, #060807 100%);
        }

        .content {
          position: relative;
          z-index: 2;
          padding: 32px;
          max-width: 621px;
        }

        /* 🔥 TITLE (FIXED) */
        .card-title {
          font-family: "Inter Display", sans-serif;
          font-size: 36px;
          font-weight: 500;
          line-height: 1.06;
          color: #ffffff;

          margin-bottom: 12px;
        }

        /* 🔥 DESCRIPTION */
        .card-desc {
          font-family: "Inter Display", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5;
          color: #8a8a8a;
          margin-bottom: 18px;
        }

        /* 🔥 BADGE */
        .badge {
          display: inline-block;
          font-size: 13px;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #cfcfcf;
        }

        /* 🔥 NUMBER CONTAINER (FIGMA LAYOUT) */
        .number-box {
          position: absolute;
          width: 390px;
          height: 317px;
          bottom: 0;
          right: 0;

          display: flex;
          align-items: flex-end;
          justify-content: flex-end;

          pointer-events: none;
        }

        /* 🔥 NUMBER */
        .number {
          font-size: 160px;
          font-weight: 700;
          line-height: 1;

          transform: translate(10%, 10%);

          background: linear-gradient(
            180deg,
            #EEFFDB 0%,
            #87DE2B 55%,
            rgba(22, 22, 22, 0) 100%
          );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;

          opacity: 0.95;
        }
      `}</style>
    </>
  );
}