'use client';
import type {SiteTemplatePageProps} from '../../../types';
import {Layout} from '../components/Layout';
import {PageHeading} from '../components/PageHeading';
import {ResidenceCard} from '../components/Residences';
import {Panorama} from '../components/Explorer';
import {copy,residences} from '../content/data';
export function PropertyPage({locale='zh',basePath,index}:SiteTemplatePageProps & {index:number}){const r=residences[index];return <Layout locale={locale} basePath={basePath}><PageHeading locale={locale} title={r.title} intro={r.heading} eyebrow={copy('精选示范住宅','Illustrative residence')}/><div className="em-page-content"><div className="em-detail-film"><img src={r.image} alt={r.title[locale]}/></div><ResidenceCard locale={locale} basePath={basePath} index={index}/></div><Panorama locale={locale}/></Layout>}
