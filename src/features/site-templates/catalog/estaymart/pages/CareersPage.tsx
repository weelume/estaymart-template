'use client';
import type {SiteTemplatePageProps} from '../../../types';
import {Layout,href} from '../components/Layout';
import {PageHeading} from '../components/PageHeading';
import {copy} from '../content/data';
import {Action} from '../components/Motion';
export default function CareersPage({locale='zh',basePath}:SiteTemplatePageProps){return <Layout locale={locale} basePath={basePath}><PageHeading locale={locale} title={copy('一起设计更好的日常','Help shape better everyday living')} intro={copy('以下岗位仅用于展示团队方向，不代表真实招聘；演示表单不会收集简历。','These illustrative roles describe possible team disciplines, not real vacancies. Demo forms do not collect CVs.')}/><div className="em-page-content">{[copy('建筑设计','Architectural design'),copy('室内与材料研究','Interiors and material research'),copy('景观与环境设计','Landscape and environmental design')].map(t=><div key={t.en} className="em-career-item em-glass"><div><h2>{t[locale]}</h2><p>{locale==='zh'?'关注设计品质、团队协作与长久价值。':'A focus on design quality, collaboration, and lasting value.'}</p></div><Action href={href(basePath,'contact')}>{locale==='zh'?'了解团队方向':'Explore our approach'}</Action></div>)}</div></Layout>}
