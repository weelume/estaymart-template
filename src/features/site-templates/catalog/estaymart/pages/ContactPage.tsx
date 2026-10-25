'use client';
import type {SiteTemplatePageProps} from '../../../types';
import {Layout} from '../components/Layout';
import {Contact} from '../components/Contact';
export default function ContactPage({locale='zh',basePath}:SiteTemplatePageProps){return <Layout locale={locale} basePath={basePath}><Contact locale={locale} page/></Layout>}
