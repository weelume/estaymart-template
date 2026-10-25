'use client';
import type {SiteTemplatePageProps} from '../../../types';
import {Layout} from '../components/Layout';
import {About} from '../components/About';
import {PageHeading} from '../components/PageHeading';
import {copy,services} from '../content/data';
import {Reveal} from '../components/Motion';
export default function AboutPage({locale='zh',basePath}:SiteTemplatePageProps){return <Layout locale={locale} basePath={basePath}><PageHeading compact locale={locale} title={copy('为理想而筑\n为生活而设计','Built with purpose.\nDesigned for life.')} intro={copy('我们相信，一处好的居所，应让建筑、自然与日常彼此成就。','We believe a considered home connects architecture, nature, and everyday life.')}/><About locale={locale} basePath={basePath}/><div className="em-page-content em-section"><div className="em-page-grid">{services.slice(0,3).map((s,i)=><Reveal key={s.id} delay={i*.15} className="em-glass em-item-body"><h2>{s.title[locale]}</h2><p>{s.description[locale]}</p></Reveal>)}</div></div></Layout>}
