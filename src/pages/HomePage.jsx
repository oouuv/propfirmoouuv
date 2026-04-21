import { Link } from 'react-router-dom';
import { platforms } from '../data/platforms';
import { articles } from '../data/articles';

function HomePage() {
  const featuredPlatforms = platforms.slice(0, 3);
  const latestArticles = articles.slice(0, 2);

  return (
    <div className="home-page">
      <section className="hero-card">
        <p className="eyebrow">PROP FIRM DIRECTORY</p>
        <h1>自营平台推广站：一个首页快速进入全部规则与交易文章</h1>
        <p>
          用更清晰的结构整理平台规则、费用与出金机制，帮助用户快速筛选合适的平台。
          支持从首页直达平台详情页，同时提供交易文章模块用于内容运营与转化。
        </p>
        <div className="hero-actions">
          <Link to="/platforms" className="cta">浏览平台</Link>
          <Link to="/articles" className="cta secondary">查看文章</Link>
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <h2>平台导航</h2>
          <Link to="/platforms">查看全部</Link>
        </div>
        <div className="platform-grid">
          {featuredPlatforms.map((platform) => (
            <article className="platform-card" key={platform.slug}>
              <p className="card-kicker">{platform.name}</p>
              <h3>{platform.tagline}</h3>
              <div className="metric-list">
                <span>分成：{platform.summary.split}</span>
                <span>回撤：{platform.summary.drawdown}</span>
              </div>
              <Link to={`/platforms/${platform.slug}`} className="inline-link">查看规则详情</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <h2>交易文章</h2>
          <Link to="/articles">进入专栏</Link>
        </div>
        <div className="article-grid">
          {latestArticles.map((article) => (
            <article className="article-card" key={article.slug}>
              <p className="card-kicker">{article.category}</p>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <div className="article-meta">
                <span>{article.readTime}</span>
                <span>{article.publishedAt}</span>
              </div>
              <Link to={`/articles/${article.slug}`} className="inline-link">阅读全文</Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
