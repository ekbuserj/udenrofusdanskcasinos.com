export interface Casino {
  slug: string;
  name: string;
  bonus: string;
  bonusSpins: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  logoBg: string;
  url: string;
  badge: 'EDITORS_PICK' | 'TOP_RATED' | 'NONE';
  rating: number;
  reviewCount: number;
  minDeposit: string;
  payoutTime: string;
  license: string;
  games: string;
  paymentMethods: string[];
  highlight: string;
}

const AFF = 'https://birubuo7.com/c3wql9k.php?key=wsp9xlte8ax94hspokdu&bid=2201';

export const CASINOS: Casino[] = [
  {
    slug: 'godz',
    name: 'Godz',
    bonus: '100% op til 2.000 €',
    bonusSpins: '+ 300 free spins',
    logo: '/logos/godz.webp',
    logoWidth: 360,
    logoHeight: 158,
    logoBg: 'linear-gradient(145deg,#0c1018 0%,#1a2235 100%)',
    url: `${AFF}&subid=godz`,
    badge: 'EDITORS_PICK',
    rating: 10.0,
    reviewCount: 4290,
    minDeposit: '10 €',
    payoutTime: '0–24 timer',
    license: 'Curaçao',
    games: '6.500+ spil',
    paymentMethods: ['Visa', 'Mastercard', 'Paysafecard', 'Bitcoin', 'USDT', 'Apple Pay'],
    highlight: 'Bedste samlede pakke: stor bonus, lynhurtige udbetalinger og kæmpe spilkatalog.',
  },
  {
    slug: 'jokery',
    name: 'Jokery',
    bonus: '300% op til 3.000 €',
    bonusSpins: '+ 250 free spins',
    logo: '/logos/jokery.webp',
    logoWidth: 360,
    logoHeight: 145,
    logoBg: 'linear-gradient(145deg,#140d0e 0%,#2a1518 100%)',
    url: `${AFF}&subid=jokery`,
    badge: 'EDITORS_PICK',
    rating: 9.9,
    reviewCount: 3879,
    minDeposit: '10 €',
    payoutTime: '0–24 timer',
    license: 'Curaçao',
    games: '5.000+ spil',
    paymentMethods: ['Visa', 'Mastercard', 'Bitcoin', 'Paysafecard', 'USDT'],
    highlight: 'Markedets højeste bonusprocent — tredobl dit indskud fra dag ét.',
  },
  {
    slug: 'lussurio',
    name: 'Lussurio',
    bonus: '550% op til 25.000 kr.',
    bonusSpins: '+ 400 free spins',
    logo: '/logos/lussurio.svg',
    logoWidth: 130,
    logoHeight: 30,
    logoBg: 'linear-gradient(145deg,#120e16 0%,#221830 100%)',
    url: `${AFF}&subid=lussurio`,
    badge: 'EDITORS_PICK',
    rating: 9.8,
    reviewCount: 2990,
    minDeposit: '10 €',
    payoutTime: '1–24 timer',
    license: 'Curaçao',
    games: '5.500+ spil',
    paymentMethods: ['Visa', 'Mastercard', 'Paysafecard', 'Bitcoin', 'USDT'],
    highlight: 'Største velkomstpakke i kroner — op til 25.000 kr. + 400 spins.',
  },
  {
    slug: 'vipluck',
    name: 'VipLuck',
    bonus: '100% op til 2.000 €',
    bonusSpins: '+ 300 free spins',
    logo: '/logos/vipluck.svg',
    logoWidth: 300,
    logoHeight: 227,
    logoBg: 'linear-gradient(145deg,#0a121c 0%,#142438 100%)',
    url: `${AFF}&subid=vipluck`,
    badge: 'EDITORS_PICK',
    rating: 9.7,
    reviewCount: 2791,
    minDeposit: '10 €',
    payoutTime: '0–24 timer',
    license: 'Curaçao',
    games: '4.500+ spil',
    paymentMethods: ['Visa', 'Mastercard', 'Bitcoin', 'Paysafecard', 'USDT'],
    highlight: 'Stærkt VIP-program med personlig account manager og ugentlig cashback.',
  },
  {
    slug: 'vox',
    name: 'VOX',
    bonus: 'Op til 20.000 kr.',
    bonusSpins: '+ 600 free spins',
    logo: '/logos/vox.svg',
    logoWidth: 256,
    logoHeight: 256,
    logoBg: 'linear-gradient(145deg,#0e0e0e 0%,#1c1c1c 100%)',
    url: `${AFF}&subid=vox`,
    badge: 'TOP_RATED',
    rating: 9.6,
    reviewCount: 1589,
    minDeposit: '100 kr.',
    payoutTime: '0–24 timer',
    license: 'Curaçao',
    games: '5.000+ spil',
    paymentMethods: ['Visa', 'Mastercard', 'Bitcoin', 'Paysafecard', 'USDT'],
    highlight: 'Flest free spins — 600 spins oven i bonussen på op til 20.000 kr.',
  },
  {
    slug: 'kyngs',
    name: 'Kyngs',
    bonus: '100% op til 1.500 €',
    bonusSpins: '+ 300 free spins',
    logo: '/logos/kyngs.webp',
    logoWidth: 360,
    logoHeight: 189,
    logoBg: 'linear-gradient(145deg,#141008 0%,#241e12 100%)',
    url: `${AFF}&subid=kyngs`,
    badge: 'TOP_RATED',
    rating: 9.5,
    reviewCount: 1347,
    minDeposit: '10 €',
    payoutTime: '1–24 timer',
    license: 'Curaçao',
    games: '4.000+ spil',
    paymentMethods: ['Visa', 'Mastercard', 'Paysafecard', 'Bitcoin', 'USDT', 'Apple Pay'],
    highlight: '24/7 live chat med svartid under ét minut — kongelig kundeservice.',
  },
  {
    slug: 'winbeatz',
    name: 'Winbeatz',
    bonus: 'Op til 15.000 kr.',
    bonusSpins: '+ 250 free spins',
    logo: '/logos/winbeatz.svg',
    logoWidth: 186,
    logoHeight: 20,
    logoBg: 'linear-gradient(145deg,#081418 0%,#102228 100%)',
    url: `${AFF}&subid=Winbeatz`,
    badge: 'TOP_RATED',
    rating: 9.4,
    reviewCount: 1326,
    minDeposit: '10 €',
    payoutTime: '0–24 timer',
    license: 'Curaçao',
    games: '4.500+ spil',
    paymentMethods: ['Visa', 'Mastercard', 'Paysafecard', 'Bitcoin', 'USDT'],
    highlight: 'Prisvindende mobiloplevelse — føles som en app uden download.',
  },
  {
    slug: 'thorfortune',
    name: 'ThorFortune',
    bonus: 'Op til 25.000 kr.',
    bonusSpins: '+ 250 free spins',
    logo: '/logos/thorfortune.svg',
    logoWidth: 109,
    logoHeight: 25,
    logoBg: 'linear-gradient(145deg,#0a1018 0%,#162438 100%)',
    url: `${AFF}&subid=ThorFortune`,
    badge: 'TOP_RATED',
    rating: 9.3,
    reviewCount: 1723,
    minDeposit: '10 €',
    payoutTime: '1–24 timer',
    license: 'Curaçao',
    games: '5.000+ spil',
    paymentMethods: ['Visa', 'Mastercard', 'Paysafecard', 'USDT', 'Bitcoin'],
    highlight: 'Nordisk tema med progressive jackpots og op til 25.000 kr. i bonus.',
  },
  {
    slug: 'scored',
    name: 'Scored',
    bonus: '370% op til 3.700 €',
    bonusSpins: '+ 100 free spins',
    logo: '/logos/scored.webp',
    logoWidth: 360,
    logoHeight: 173,
    logoBg: 'linear-gradient(145deg,#061828 0%,#0c2848 100%)',
    url: `${AFF}&subid=scored`,
    badge: 'TOP_RATED',
    rating: 9.2,
    reviewCount: 987,
    minDeposit: '10 €',
    payoutTime: '0–24 timer',
    license: 'Curaçao',
    games: '4.000+ spil + sports',
    paymentMethods: ['Visa', 'Mastercard', 'Bitcoin', 'Paysafecard', 'USDT'],
    highlight: 'Casino og sportsbook i ét — 370% bonus og live odds på dansk sport.',
  },
];

export const TOP_CASINO = CASINOS[0];

export const AVG_RATING = (
  CASINOS.reduce((sum, c) => sum + c.rating, 0) / CASINOS.length
).toFixed(1);

export const TOTAL_REVIEWS = CASINOS.reduce((sum, c) => sum + c.reviewCount, 0);
