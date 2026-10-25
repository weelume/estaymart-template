'use client';
import {createContext,useContext,type ReactNode} from 'react';
type Bilingual = {zh:string;en:string};
export interface EstaymartHost {brandName?:Bilingual;logo?:string;lightLogo?:string;marketplaceHref?:string;marketplaceLabel?:Bilingual;marketplaceAriaLabel?:Bilingual;filing?:ReactNode}
const Context=createContext<EstaymartHost>({});
export function EstaymartHostProvider({children,...value}:EstaymartHost & {children:ReactNode}){return <Context.Provider value={value}>{children}</Context.Provider>}
export function useHost(){return useContext(Context)}
