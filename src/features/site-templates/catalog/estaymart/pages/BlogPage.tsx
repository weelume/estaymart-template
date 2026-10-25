'use client';
import Link from 'next/link';
import type {SiteTemplatePageProps} from '../../../types';
import {Layout,href} from '../components/Layout';
import {PageHeading} from '../components/PageHeading';
import {articles,copy} from '../content/data';
import {Action,Reveal} from '../components/Motion';
export default function BlogPage({locale='zh',basePath}:SiteTemplatePageProps){return <Layout locale={locale} basePath={basePath}><PageHeading locale={locale} title={copy('关于家与生活的思考','Notes on home and living')} intro={copy('建筑、自然与日常的灵感笔记。所有文章为模板演示内容。','Ideas for architecture, nature, and everyday life. All articles are illustrative editorial content.')}/><div className="em-page-content"><div className="em-page-grid">{articles.map((a,i)=><Reveal key={a.slug} delay={i*.15} className="em-article-card em-glass"><Link href={href(basePath,`blog/${a.slug}`)}><img src={a.image} alt={a.title[locale]}/></Link><div className="em-item-body"><h2>{a.title[locale]}</h2><p>{a.intro[locale]}</p><Action href={href(basePath,`blog/${a.slug}`)}>{locale==='zh'?'阅读全文':'Read article'}</Action></div></Reveal>)}</div></div></Layout>}
