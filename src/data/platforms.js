export const platforms = [
  {
    slug: 'yrm',
    name: 'YRM',
    tagline: '适合希望低成本启动并追求稳定出金节奏的交易者',
    registerUrl: 'https://yrmprop.com/ref/oouuv/',
    updatedAt: '2026-04-18',
    summary: {
      split: '最高 90%',
      drawdown: 'EOD 回撤，按账户规模变化',
      payoutCycle: '满足条件后可申请出金'
    },
    highlights: [
      '账户分为 Starter 与 Instant 两类，适配不同风险偏好。',
      '对交易活跃度有最低要求，避免长期闲置导致账户失效。',
      '建议先从小规模账户验证策略一致性，再考虑扩容。'
    ],
    caution: [
      '所有规则以平台官网最新公告为准。',
      '高杠杆与高频策略需重点关注回撤规则触发边界。',
      '出金审核通常需要完整交易记录与一致性表现。'
    ],
    ruleTables: [
      {
        title: 'Starter 规则概览',
        period: '适用于 Starter 评估账户',
        columns: ['项目', '50K Starter', '150K Starter'],
        rows: [
          ['价格', '$65', '$132'],
          ['最大回撤（EOD）', '$2,000', '$4,500'],
          ['盈利目标', '$3,000', '$9,000'],
          ['最低交易天数', '通常 6 天以上', '通常 6 天以上'],
          ['分成比例', '最高 90%', '最高 90%']
        ]
      },
      {
        title: 'Instant 规则概览',
        period: '适用于 Instant 免考账户',
        columns: ['项目', '50K Instant', '100K Instant'],
        rows: [
          ['价格', '$299', '$374'],
          ['最大回撤（EOD）', '$2,000', '$4,000'],
          ['首次出金目标', '$3,000', '$5,000'],
          ['后续出金目标', '$2,000', '$3,500'],
          ['分成比例', '最高 90%', '最高 90%']
        ]
      }
    ]
  }
];

export function getPlatformBySlug(slug) {
  return platforms.find((platform) => platform.slug === slug);
}
