import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

function ArticlesPage() {
  return (
    <div className="articles-page">
      <section className="hero-card">
        <p className="eyebrow">TRADING ARTICLES</p>
        <h1>交易文章模块</h1>
        <p>用于承接自然流量和用户教育，支持持续发布策略、风控和账户管理内容。</p>
      </section>

      <section className="article-list">
        {articles.map((article) => (
          <article className="article-card" key={article.slug}>
            <p className="card-kicker">{article.category}</p>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <div className="article-meta">
              <span>{article.readTime}</span>
              <span>{article.publishedAt}</span>
            </div>
            <Link to={`/articles/${article.slug}`} className="inline-link">阅读全文</Link>
          </article>
        ))}
      </section>
    </div>
  );
}

export default ArticlesPage;
