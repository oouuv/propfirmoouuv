import { Link, NavLink } from 'react-router-dom';

function SiteLayout({ children }) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="wrap nav-wrap">
          <Link to="/" className="brand">PropFirm Atlas</Link>
          <nav>
            <NavLink to="/" end>首页</NavLink>
            <NavLink to="/platforms">平台规则</NavLink>
            <NavLink to="/articles">交易文章</NavLink>
          </nav>
        </div>
      </header>

      <main className="wrap site-main">{children}</main>

      <footer className="site-footer">
        <div className="wrap footer-inner">
          <p>PropFirm 自营平台导航与规则整理</p>
          <p>仅作信息整理，实际规则以平台官方最新公告为准。</p>
        </div>
      </footer>
    </div>
  );
}

export default SiteLayout;
