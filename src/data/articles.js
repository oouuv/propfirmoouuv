export const articles = [
  {
    slug: 'propfirm-risk-control-checklist',
    title: 'PropFirm 日内风控清单：开仓前必须确认的 7 件事',
    excerpt: '把回撤控制和仓位管理前置，能显著降低挑战期爆仓概率。',
    category: '风险控制',
    readTime: '6 分钟',
    publishedAt: '2026-04-18',
    content: [
      '第一步先确认当日最大允许风险，而不是先找机会。建议把单日可承受亏损拆分到每笔交易中，确保连续亏损时仍有调整空间。',
      '第二步是限制同方向暴露。很多账户违规来自相关品种同时持仓，表面分散，实则叠加风险。',
      '第三步是设置退出条件并写下来，包括止损、止盈和交易失效条件。规则先于情绪，能提升执行一致性。',
      '最后复盘时只关注两件事：是否遵守计划、是否出现重复错误。先追求稳定，再追求收益曲线加速。'
    ]
  },
  {
    slug: 'how-to-choose-propfirm-account',
    title: '如何选择账户规模：预算、回撤与策略容量的平衡',
    excerpt: '账户越大不一定越好，关键是与你当前策略容量是否匹配。',
    category: '账户选择',
    readTime: '5 分钟',
    publishedAt: '2026-04-16',
    content: [
      '选择账户规模时，先算你的真实策略容量。若策略在小资金阶段都无法稳定执行，扩大账户只会放大波动与心理压力。',
      '其次比较规则中的回撤定义与出金门槛。静态回撤、EOD 回撤、跟踪回撤对策略影响完全不同。',
      '最后看出金节奏是否符合预期。短期现金流需求高的交易者，应优先考虑审核清晰、节奏稳定的平台。'
    ]
  }
];

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}
