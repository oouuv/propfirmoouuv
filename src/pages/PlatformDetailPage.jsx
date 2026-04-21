import { Link, Navigate, useParams } from 'react-router-dom';
import { getPlatformBySlug } from '../data/platforms';

function RulesTable({ table }) {
  return (
    <section className="rules-panel">
      <header>
        <h3>{table.title}</h3>
        <p>{table.period}</p>
      </header>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {table.columns.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, idx) => (
                  <td key={`${row[0]}-${idx}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function PlatformDetailPage() {
  const { slug } = useParams();
  const platform = getPlatformBySlug(slug);

  if (!platform) {
    return <Navigate to="/platforms" replace />;
  }

  return (
    <div className="rules-page">
      <section className="hero-card">
        <p className="eyebrow">{platform.name} RULES</p>
        <h1>{platform.name} 平台规则介绍</h1>
        <p>{platform.tagline}</p>
        <div className="hero-actions">
          <a href={platform.registerUrl} target="_blank" rel="noreferrer" className="cta">前往官网</a>
          <Link to="/platforms" className="cta secondary">返回平台列表</Link>
        </div>
        <p className="small-meta">更新时间：{platform.updatedAt}</p>
      </section>

      <section className="tips-card">
        <h2>核心亮点</h2>
        <ul>
          {platform.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {platform.ruleTables.map((table) => (
        <RulesTable key={table.title} table={table} />
      ))}

      <section className="tips-card caution">
        <h2>风险提示</h2>
        <ul>
          {platform.caution.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default PlatformDetailPage;
