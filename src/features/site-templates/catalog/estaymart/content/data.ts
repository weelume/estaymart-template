export type Locale='zh'|'en';
export type Copy={zh:string;en:string};
export const copy=(zh:string,en:string):Copy=>({zh,en});
export const media=(name:string)=>'/templates/estaymart/media/'+name;
export const catalogImage=(n:number)=>media(`catalog-img-img-${n}.png`);
export const categories=[{id:'cottages',name:copy('自然别墅','Cottages'),images:[1,2,3,4,5]},{id:'townhouses',name:copy('联排住宅','Townhouses'),images:[4,5,6,7,1]},{id:'settlements',name:copy('生活社区','Settlements'),images:[7,4,2,6,3]},{id:'investing-spaces',name:copy('投资空间','Investing spaces'),images:[6,1,3,2,7]}];
export const services=[
 {id:'home-planning',title:copy('定制住宅规划','Custom home planning'),description:copy('让住宅回应你的生活方式，在美感、功能与长久价值之间取得平衡。','Every home is tailored to your lifestyle, balancing beauty, functionality, and long-term value.'),image:catalogImage(1)},
 {id:'interior-architecture',title:copy('室内建筑设计','Interior architecture'),description:copy('以宽敞的现代空间引入自然光，让室内外生活自由衔接。','Crafting modern, spacious interiors that maximize natural light and seamless indoor-outdoor transitions.'),image:catalogImage(2)},
 {id:'landscape-curation',title:copy('自然景观营造','Landscape curation'),description:copy('私人花园、无边泳池与户外餐厅，在自然中找到各自的位置。','Designing private botanical gardens, infinity pools, and elegant outdoor dining lounges in harmony with nature.'),image:catalogImage(3)},
 {id:'premium-construction',title:copy('高品质建造','Premium construction'),description:copy('选择可持续材料与成熟工程标准，构筑经得起时间考验的居所。','Constructing structures of enduring quality using sustainable materials and advanced engineering standards.'),image:catalogImage(4)}
];
export const rooms=[
 {name:copy('起居空间','Living Room'),image:media('photo-1600210492486-724fe5c67fb0.jpg')},
 {name:copy('主卧套房','Master Suite'),image:media('photo-1505691938895-1758d7feb511.jpg')},
 {name:copy('主厨厨房','Chef Kitchen'),image:media('photo-1556911220-e15b29be8c8f.jpg')},
 {name:copy('水疗浴室','Wellness Bath'),image:media('photo-1552321554-5fefe8c9ef14.jpg')},
 {name:copy('可持续别墅','Sustainable Villa'),image:media('photo-1512917774080-9991f1c4c750.jpg')}
];
export const residences=[
 {id:'modern-villa',tab:copy('居所','Home'),title:copy('现代山景别墅','Luxury residence'),heading:copy('开阔空间与自然光交织的现代别墅','Modern villa with open spaces and natural light'),image:media('card-img-1.png'),price:'$2,450',area:'3200 sq ft',beds:4,baths:3,rating:'4.9 (8,839)',features:[copy('山景环绕','Hillside'),copy('当代建筑','Contemporary')],descriptions:[copy('静谧山坡上的开阔视野','Peaceful hillside setting with panoramic views'),copy('自然材料与简洁建筑相融','Sleek architecture with natural materials')]},
 {id:'sky-residence',tab:copy('住宅','Residences'),title:copy('云端顶层住宅','Exclusive penthouse'),heading:copy('拥抱天际线的全景住宅','Panoramic sky residence with infinity edge views'),image:catalogImage(2),price:'$3,800',area:'4500 sq ft',beds:5,baths:4,rating:'4.8 (4,120)',features:[copy('城市天际','Skyline'),copy('私人礼宾','Private Concierge')],descriptions:[copy('落地玻璃将城市尽收眼底','Breathtaking floor-to-ceiling skyline views'),copy('贴合日常所需的专属服务','24/7 dedicated service and custom requests')]},
 {id:'modernist-home',tab:copy('特色','Features'),title:copy('现代主义居所','Modernist design'),heading:copy('为舒适生活而雕琢的建筑细节','Sleek architectural details crafted for comfort'),image:catalogImage(3),price:'$1,950',area:'2800 sq ft',beds:3,baths:3,rating:'4.95 (5,210)',features:[copy('智慧生活','Smart Home'),copy('舒适温控','Thermal Control')],descriptions:[copy('集成自动化与语音控制','Fully integrated automation and voice control'),copy('地热温控与空气净化系统','Geothermal climate control and air filtration')]},
 {id:'botanical-sanctuary',tab:copy('区位','Location'),title:copy('绿意私境','Botanical sanctuary'),heading:copy('藏在私人热带花园里的生活','Tucked inside lush tropical private estate'),image:catalogImage(4),price:'$2,100',area:'1.2 Acres',beds:3,baths:4,rating:'4.9 (2,940)',features:[copy('自然步道','Nature Trails'),copy('海岸微风','Coastal Breeze')],descriptions:[copy('徒步与骑行从家门口开始','Direct access to private hiking and bike trails'),copy('伴随海浪的清新自然风','Refreshing winds with sound of ocean waves')]}
];
export const links=[
 ['about','关于我们','About Us'],['properties','精选住宅','Residences'],['services','设计与建造','Services'],['gallery','空间图库','Gallery'],['sustainable-living','可持续生活','Sustainable Living'],['contact','联系我们','Contact'],
 ['buying-guide','置业指南','Buying Guide'],['investment','投资说明','Investment'],['faq','常见问题','FAQs'],['blog','生活志','Blog'],['market-insights','市场观察','Market Insights'],['careers','加入我们','Careers'],['privacy','隐私政策','Privacy Policy'],['terms','服务条款','Terms of Service']
] as const;
export const articles=[
 {slug:'designing-with-nature',title:copy('让自然成为家的日常','Designing a home around nature'),intro:copy('自然光、在地材料与庭院，如何共同塑造长久舒适的居住体验。','How daylight, local materials, and gardens shape lasting comfort.'),image:catalogImage(5),sections:[copy('从阳光开始设计','Start with daylight'),copy('选择能够优雅老去的材料','Choose materials that age gracefully'),copy('给自然留下空间','Leave room for nature')]},
 {slug:'a-considered-home',title:copy('选择一处经得起时间的居所','Choosing a considered home'),intro:copy('从区位、空间到日常维护，用长期视角理解一处住宅。','A long-term view of location, space, and everyday maintenance.'),image:catalogImage(6),sections:[copy('理解真实的生活需求','Understand your everyday needs'),copy('查看建筑和使用成本','Review construction and running costs'),copy('亲自体验空间','Experience the space in person')]},
 {slug:'spaces-for-better-living',title:copy('为更好的生活留白','Spaces for better living'),intro:copy('在开放与私密、室内与户外之间，找到属于自己的生活节奏。','Finding your rhythm between openness and privacy, inside and outside.'),image:catalogImage(7),sections:[copy('流动的公共空间','Connected shared spaces'),copy('安静的私人角落','Quiet personal retreats'),copy('随生活变化的布局','Layouts that grow with you')]}
];
export const faq=[
 [copy('可以预约实地看房吗？','Can I arrange an in-person viewing?'),copy('可以通过联系页了解预约所需信息。本模板只演示表单校验，不发送或保存预约。','Use the contact page to explore a viewing enquiry. This demo only validates locally; it does not send or save bookings.')],
 [copy('是否提供定制设计？','Do you offer custom design?'),copy('演示服务覆盖住宅规划、室内建筑、景观和建造。实际服务范围应由项目团队另行确认。','The demonstration covers home planning, interior architecture, landscapes, and construction. Confirm actual scope with your project team.')],
 [copy('360° 看房是真实全景吗？','Is the 360° viewer a measured panorama?'),copy('此处沿用参考站的镜像拼接图片拖拽体验，用于空间演示，并非实测全景或户型数据。','Like the reference, this is a draggable mirrored image experience, rather than a measured panorama or floor plan.')],
 [copy('展示价格可以用于交易吗？','Can I transact at the displayed prices?'),copy('所有房源、价格、评分及市场信息仅作演示，不构成真实房源或报价。','All properties, prices, ratings, and market information are illustrative and are not real listings or offers.')]
];
