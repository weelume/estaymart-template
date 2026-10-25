# EstayMart 自然住宅模板

React + Next.js + Framer Motion 双语响应式整站，默认中文、英文 /en。共22个页面、44条语言路由：首页、关于、房源与4个详情、服务、图库、联系、博客与3篇文章、FAQ、招聘、可持续生活、置业指南、投资、市场观察与政策。内页为演示补充，参考站公开预览为单页。

## 环境与运行

Node 24.16.0、pnpm 9.15.4。pnpm install --frozen-lockfile；pnpm dev 默认 http://127.0.0.1:43570。生产 pnpm build 后 pnpm start，PORT 可覆盖端口。停止使用 Ctrl+C。无数据库、无外部发送、无业务持久化。运行素材全部本地托管。

## 修改与验证

先读 .tpl/template.json、project.json、customization.json 与 docs/。品牌位于 config/brand.ts；双语内容 content/；主题 theme.css；组件 components/；页面 pages/；注册 meta.ts；路由 src/app/[[...slug]]/page.tsx。业务目录为 src/features/site-templates/catalog/estaymart。pnpm typecheck、pnpm lint、pnpm test、pnpm build；截图与运行验收另按 VERIFICATION.md。共享包导出 ./template、./host，宿主可注入自身品牌与页脚。

## 限制

表单仅本地校验，不发送或保存。房源、价格、评分、地址、招聘和文章均为演示。360°沿用参考站镜像拼接交互，并非实测全景。不保证投资收益。素材与设计商业再分发权利未完整核实，保持未上架。Git、截图、动效实际验证结果以验收记录为准；不能将构建通过等同完整复刻。
