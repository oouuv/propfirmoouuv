import { Link, Navigate, useParams } from 'react-router-dom';
import { getArticleBySlug } from '../data/articles';

function ArticleDetailPage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  return (
    <article className="article-detail">
      <section className="hero-card">
        <p className="eyebrow">{article.category}</p>
        <h1>{article.title}</h1>
        <div className="article-meta">
          <span>{article.readTime}</span>
          <span>{article.publishedAt}</span>
        </div>
      </section>

      <section className="article-body">
        {article.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <Link to="/articles" className="inline-link">返回文章列表</Link>
    </article>
  );
}

export default ArticleDetailPage;
