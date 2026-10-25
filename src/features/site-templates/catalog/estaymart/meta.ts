import type {SiteTemplate} from '../../types';
export const estaymartTemplate:SiteTemplate={
  "id": "estaymart",
"gitUrl":"https://github.com/weelume/estaymart-template",
  "name": "EstayMart · 自然理想居所",
  "localizedNames": {
    "en": "EstayMart · Sustainable Living"
  },
  "sceneId": "corporate-site",
  "listed": false,
  "tags": [
    "房产",
    "建筑",
    "自然",
    "视频",
    "360°",
    "中英文"
  ],
  "summary": "自然住宅双语整站，包含分层山景揭示、碎片轮播、服务图片探索器、住宅切换与360°拖拽体验。",
  "accentColor": "#322720",
  "cover": "/templates/estaymart/screenshots/desktop-home.webp",
  "screenshots": [
    {
      "src": "/templates/estaymart/screenshots/desktop-home.webp",
      "alt": "EstayMart desktop home",
      "device": "desktop",
      "width": 1440,
      "height": 1000
    },
    {
      "src": "/templates/estaymart/screenshots/desktop-properties.webp",
      "alt": "EstayMart desktop properties",
      "device": "desktop",
      "width": 1440,
      "height": 1000
    },
    {
      "src": "/templates/estaymart/screenshots/desktop-blog.webp",
      "alt": "EstayMart desktop blog",
      "device": "desktop",
      "width": 1440,
      "height": 1000
    },
    {
      "src": "/templates/estaymart/screenshots/desktop-contact.webp",
      "alt": "EstayMart desktop contact",
      "device": "desktop",
      "width": 1440,
      "height": 1000
    },
    {
      "src": "/templates/estaymart/screenshots/tablet-home.webp",
      "alt": "EstayMart tablet home",
      "device": "tablet",
      "width": 834,
      "height": 1180
    },
    {
      "src": "/templates/estaymart/screenshots/tablet-properties.webp",
      "alt": "EstayMart tablet properties",
      "device": "tablet",
      "width": 834,
      "height": 1180
    },
    {
      "src": "/templates/estaymart/screenshots/tablet-blog.webp",
      "alt": "EstayMart tablet blog",
      "device": "tablet",
      "width": 834,
      "height": 1180
    },
    {
      "src": "/templates/estaymart/screenshots/tablet-contact.webp",
      "alt": "EstayMart tablet contact",
      "device": "tablet",
      "width": 834,
      "height": 1180
    },
    {
      "src": "/templates/estaymart/screenshots/mobile-home.webp",
      "alt": "EstayMart mobile home",
      "device": "mobile",
      "width": 390,
      "height": 844
    },
    {
      "src": "/templates/estaymart/screenshots/mobile-properties.webp",
      "alt": "EstayMart mobile properties",
      "device": "mobile",
      "width": 390,
      "height": 844
    },
    {
      "src": "/templates/estaymart/screenshots/mobile-blog.webp",
      "alt": "EstayMart mobile blog",
      "device": "mobile",
      "width": 390,
      "height": 844
    },
    {
      "src": "/templates/estaymart/screenshots/mobile-contact.webp",
      "alt": "EstayMart mobile contact",
      "device": "mobile",
      "width": 390,
      "height": 844
    }
  ]
,surfaces:[{id:'site',name:'住宅官网',platform:'pc',locales:['zh','en'],pages:[{slug:"",title:"理想居所",localizedTitles:{en:"Sustainable living"},load:()=>import('./pages/HomePage')},{slug:"about",title:"关于我们",localizedTitles:{en:"About Us"},load:()=>import('./pages/AboutPage')},{slug:"properties",title:"精选住宅",localizedTitles:{en:"Residences"},load:()=>import('./pages/PropertiesPage')},{slug:"services",title:"设计与建造",localizedTitles:{en:"Services"},load:()=>import('./pages/ServicesPage')},{slug:"gallery",title:"空间图库",localizedTitles:{en:"Gallery"},load:()=>import('./pages/GalleryPage')},{slug:"contact",title:"联系我们",localizedTitles:{en:"Contact"},load:()=>import('./pages/ContactPage')},{slug:"blog",title:"生活志",localizedTitles:{en:"Journal"},load:()=>import('./pages/BlogPage')},{slug:"faq",title:"常见问题",localizedTitles:{en:"FAQs"},load:()=>import('./pages/FaqPage')},{slug:"careers",title:"加入我们",localizedTitles:{en:"Careers"},load:()=>import('./pages/CareersPage')},{slug:"properties/modern-villa",title:"现代山景别墅",localizedTitles:{en:"Modern villa"},load:()=>import('./pages/Property0')},{slug:"properties/sky-residence",title:"云端顶层住宅",localizedTitles:{en:"Sky residence"},load:()=>import('./pages/Property1')},{slug:"properties/modernist-home",title:"现代主义居所",localizedTitles:{en:"Modernist home"},load:()=>import('./pages/Property2')},{slug:"properties/botanical-sanctuary",title:"绿意私境",localizedTitles:{en:"Botanical sanctuary"},load:()=>import('./pages/Property3')},{slug:"blog/designing-with-nature",title:"让自然成为家的日常",localizedTitles:{en:"Designing with nature"},load:()=>import('./pages/Article0')},{slug:"blog/a-considered-home",title:"选择一处经得起时间的居所",localizedTitles:{en:"A considered home"},load:()=>import('./pages/Article1')},{slug:"blog/spaces-for-better-living",title:"为更好的生活留白",localizedTitles:{en:"Spaces for better living"},load:()=>import('./pages/Article2')},{slug:"sustainable-living",title:"可持续生活",localizedTitles:{en:"Sustainable Living"},load:()=>import('./pages/SustainableLivingPage')},{slug:"buying-guide",title:"置业指南",localizedTitles:{en:"Buying Guide"},load:()=>import('./pages/BuyingGuidePage')},{slug:"investment",title:"投资说明",localizedTitles:{en:"Investment"},load:()=>import('./pages/InvestmentPage')},{slug:"market-insights",title:"市场观察",localizedTitles:{en:"Market Insights"},load:()=>import('./pages/MarketInsightsPage')},{slug:"privacy",title:"隐私政策",localizedTitles:{en:"Privacy Policy"},load:()=>import('./pages/PrivacyPage')},{slug:"terms",title:"服务条款",localizedTitles:{en:"Terms of Service"},load:()=>import('./pages/TermsPage')}]}]};
