'use client';
import type {SiteTemplatePageProps} from '../../../types';
import {Layout} from '../components/Layout';
import {PageHeading} from '../components/PageHeading';
import {resources,type ResourceId} from '../content/resources';
export function ResourcePage({locale='zh',basePath,id}:SiteTemplatePageProps & {id:ResourceId}){const r=resources[id];return <Layout locale={locale} basePath={basePath}><PageHeading locale={locale} title={r.title} intro={r.intro}/><div className="em-page-content"><article className="em-article">{r.sections.map(s=><section key={s.title.en}><h2>{s.title[locale]}</h2><p>{s.body[locale]}</p></section>)}</article></div></Layout>}
