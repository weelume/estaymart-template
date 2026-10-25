# 架构

采用 Next App Router、React、TypeScript strict 与 Framer Motion。config 集中品牌，content 保存双语与集合，theme.css 管理主题，components 各自维护公共区块与交互，pages 组合页面。meta.ts 提供统一注册，App Router 按 slug 加载。host.tsx 通过 Context 注入可选品牌和页脚；独立运行使用自身品牌。所有运行素材位于 public/templates/estaymart。
