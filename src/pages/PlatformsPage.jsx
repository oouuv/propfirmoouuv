import { Link } from 'react-router-dom';
import { platforms } from '../data/platforms';

function PlatformsPage() {
  return (
    <div className="platforms-page">
      <section className="hero-card">
        <p className="eyebrow">PLATFORMS</p>
        <h1>平台规则导航</h1>
        <p>点击任意平台进入详情页，查看完整规则、关键指标和注意事项。</p>
      </section>

      <section className="platform-grid">
        {platforms.map((platform) => (
          <article className="platform-card" key={platform.slug}>
            <p className="card-kicker">{platform.name}</p>
            <h3>{platform.tagline}</h3>
            <div className="metric-list">
              <span>分成：{platform.summary.split}</span>
              <span>回撤：{platform.summary.drawdown}</span>
              <span>出金：{platform.summary.payoutCycle}</span>
            </div>
            <Link to={`/platforms/${platform.slug}`} className="cta">进入规则页</Link>
          </article>
        ))}
      </section>
    </div>
  );
}

export default PlatformsPage;
