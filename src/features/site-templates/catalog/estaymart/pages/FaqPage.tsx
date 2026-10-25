'use client';
import {useState} from 'react';
import {AnimatePresence,motion} from 'framer-motion';
import type {SiteTemplatePageProps} from '../../../types';
import {Layout} from '../components/Layout';
import {PageHeading} from '../components/PageHeading';
import {faq,copy} from '../content/data';
export default function FaqPage({locale='zh',basePath}:SiteTemplatePageProps){const [open,setOpen]=useState<number|null>(0);return <Layout locale={locale} basePath={basePath}><PageHeading locale={locale} title={copy('关于理想生活的常见问题','Questions about your next home')}/><div className="em-page-content"><div className="em-faq">{faq.map(([q,a],i)=><div className="em-faq-item" key={q.en}><button aria-expanded={open===i} aria-controls={`em-faq-${i}`} onClick={()=>setOpen(open===i?null:i)}>{q[locale]}<span>{open===i?'−':'+'}</span></button><AnimatePresence>{open===i&&<motion.div className="em-faq-answer" id={`em-faq-${i}`} initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.3}}><p>{a[locale]}</p></motion.div>}</AnimatePresence></div>)}</div></div></Layout>}
