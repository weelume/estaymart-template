'use client';
import type {SiteTemplatePageProps} from '../../../types';
import {Layout} from '../components/Layout';
import {PageHeading} from '../components/PageHeading';
import {Services} from '../components/Explorer';
import {copy} from '../content/data';
export default function ServicesPage({locale='zh',basePath}:SiteTemplatePageProps){return <Layout locale={locale} basePath={basePath}><PageHeading locale={locale} title={copy('从生活想法\n到家的每一处细节','From your vision\nto every detail of home')} intro={copy('规划、室内、景观与建造，在一致的设计语言中协同。选择图片可放大探索。','Planning, interiors, landscapes, and construction in one considered design language. Open an image to explore details.')}/><Services locale={locale}/></Layout>}
