'use client';
import type {SiteTemplatePageProps} from '../../../types';
import {Layout} from '../components/Layout';
import {Hero} from '../components/Hero';
import {About} from '../components/About';
import {Catalog} from '../components/Catalog';
import {Services,Panorama} from '../components/Explorer';
import {Residences} from '../components/Residences';
import {Contact} from '../components/Contact';
export default function HomePage({locale='zh',basePath}:SiteTemplatePageProps){const props={locale,basePath};return <Layout {...props} hero><Hero {...props}/><About {...props}/><Catalog {...props}/><Services locale={locale}/><Residences {...props}/><Panorama locale={locale}/><Contact locale={locale}/></Layout>}
