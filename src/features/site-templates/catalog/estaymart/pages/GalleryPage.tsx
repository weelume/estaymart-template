'use client';
import {useState} from 'react';
import type {SiteTemplatePageProps} from '../../../types';
import {Layout} from '../components/Layout';
import {PageHeading} from '../components/PageHeading';
import {ImageExplorer,Panorama} from '../components/Explorer';
import {copy,catalogImage,rooms} from '../content/data';
export default function GalleryPage({locale='zh',basePath}:SiteTemplatePageProps){const [selected,setSelected]=useState<number|null>(null),[tab,setTab]=useState(0);const images=tab===0?Array.from({length:7},(_,i)=>({image:catalogImage(i+1),name:copy(`建筑空间 ${i+1}`,`Architecture ${i+1}`)})):rooms;return <Layout locale={locale} basePath={basePath}><PageHeading locale={locale} title={copy('空间里的生活之美','The art of living spaces')} intro={copy('从建筑外观到室内细节。点击图片可拖拽、缩放查看。','From architecture to interior details. Open any image to pan and zoom.')}/><div className="em-page-content"><div className="em-filter-row">{[copy('建筑外观','Architecture'),copy('室内空间','Interiors')].map((t,i)=><button key={i} aria-pressed={tab===i} onClick={()=>setTab(i)}>{t[locale]}</button>)}</div><div className="em-gallery-grid">{images.map((img,i)=><button key={img.image} onClick={()=>setSelected(i)} aria-label={locale==='zh'?`查看${img.name.zh}`:`View ${img.name.en}`}><img src={img.image} alt={img.name[locale]}/></button>)}</div>{selected!==null&&<ImageExplorer locale={locale} image={images[selected].image} title={images[selected].name[locale]} onClose={()=>setSelected(null)}/>}</div><Panorama locale={locale}/></Layout>}
