import {Reveal} from './Motion';
import type {Locale,Copy} from '../content/data';
export function PageHeading({locale,title,intro,eyebrow}:{locale:Locale;title:Copy;intro?:Copy;eyebrow?:Copy}){return <div className="em-page-heading"><Reveal from="left">{eyebrow&&<span className="em-eyebrow">{eyebrow[locale]}</span>}<h1>{title[locale]}</h1>{intro&&<p>{intro[locale]}</p>}</Reveal></div>}
