// Backend ishlamay qolsa, sayt shu zaxira ma'lumotlar bilan ishlaydi.
const U = 'https://images.unsplash.com/'
const Q = '?auto=format&fit=crop&w=800&q=80'

export const HERO_IMAGE = U + 'photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&w=1800&q=80'

export const fallbackProducts = [
  { id: 1, name: 'Shokoladli Tort', category: 'Tort', description: 'Uch qavatli nam biskvit, qora shokolad kremi va ganash.', price: 180000, image: U + 'photo-1578985545062-69928b1d9587' + Q },
  { id: 2, name: "Sariyog'li Kruassan", category: 'Kruassan', description: 'Har tongda yangi pishiriladigan qatlamli kruassan.', price: 25000, image: U + 'photo-1555507036-ab1f4038808a' + Q },
  { id: 3, name: "Yong'oqli Pechenye", category: 'Pechenye', description: "Qovurilgan yong'oq va asal bilan yumshoq pechenye.", price: 45000, image: U + 'photo-1499636136210-6f4ee915583e' + Q },
  { id: 4, name: 'Vanilli Keks', category: 'Keks', description: 'Qaymoqli vanil krem bilan bezatilgan mayin keks.', price: 20000, image: U + 'photo-1486427944299-d1955d23e34d' + Q },
  { id: 5, name: 'Mevali Tort', category: 'Tort', description: "Yangi rezavorlar va yengil qaymoq bilan to'ldirilgan.", price: 210000, image: U + 'photo-1464349095431-e9a21285b5f3' + Q },
  { id: 6, name: 'Shokoladli Brauni', category: 'Desert', description: 'Ichi yumshoq, usti tilla qobiqli brauni.', price: 35000, image: U + 'photo-1606313564200-e75d5e30476c' + Q },
  { id: 7, name: "Makaron to'plami", category: 'Desert', description: "Olti xil ta'mdagi nozik fransuz makaronlari.", price: 90000, image: U + 'photo-1569864358642-9d1684040f43' + Q },
  { id: 8, name: 'Hunarmand non', category: 'Non', description: "Tosh pechida pishirilgan g'ovak ichli non.", price: 18000, image: U + 'photo-1509440159596-0249088772ff' + Q },
]
