export const SITE = {
  domain: 'udenrofusdanskcasinos.com',
  url: 'https://udenrofusdanskcasinos.com',
  brand: 'Uden ROFUS Dansk Casinos',
  brandShort: 'URDC',
  brandTagline: 'Din guide til udenlandske casinoer',
  email: 'kontakt@udenrofusdanskcasinos.com',
  locale: 'da-DK',
  ogLocale: 'da_DK',
  datePublished: '2026-06-01',
  dateModified: '2026-07-14',
  dateModifiedHuman: '14. juli 2026',
  author: {
    name: 'Sofie Lindholm',
    role: 'Casino-analytiker & redaktør',
    initials: 'SL',
    bio:
      'Sofie har testet internationale online casinoer siden 2017 og skriver om dansk spillelovgivning, bonusvilkår og sikre betalingsmetoder. Alle anbefalinger er baseret på egne indbetalinger, udbetalinger og kundeservice-tests.',
    knowsAbout: [
      'Casino uden ROFUS',
      'Udenlandske casinoer',
      'Casino uden MitID og NemID',
      'Casinobonusser',
      'Ansvarligt spil',
    ],
  },
} as const;

export interface PageMeta {
  path: string;
  navLabel: string;
  title: string;
  h1: string;
  description: string;
  keywords: string[];
}

export const CLUSTER_PAGES: PageMeta[] = [
  {
    path: '/',
    navLabel: 'Casino uden ROFUS',
    title: 'Casino uden ROFUS 2026 – 9 Bedste Udenlandske Casinoer for Danskere',
    h1: 'Casino uden ROFUS: De bedste udenlandske casinoer i 2026',
    description:
      'Casino uden ROFUS ✔️ Vi har testet 9 udenlandske casinoer for danskere i 2026. Store bonusser, hurtige udbetalinger og spil uden MitID. Se listen og få din bonus.',
    keywords: ['casino uden rofus', 'bedste udenlandske casino', 'udenlandsk casino', 'spil uden rofus'],
  },
  {
    path: '/udenlandske-casinoer/',
    navLabel: 'Udenlandske casinoer',
    title: 'Bedste Udenlandske Casino 2026 – Top 9 Uden Dansk Licens | URDC',
    h1: 'Bedste udenlandske casino: Sammenlign top 9 i 2026',
    description:
      'Leder du efter et udenlandsk casino? ✔️ Sammenlign de 9 bedste udenlandske casinoer uden dansk licens: bonusser, licenser, skat og udbetalinger for danskere.',
    keywords: ['bedste udenlandske casino', 'udenlandsk casino', 'udenlandske casinoer danmark'],
  },
  {
    path: '/spil-uden-rofus/',
    navLabel: 'Spil uden ROFUS',
    title: 'Spil uden ROFUS 2026 – Slots, Live Casino & Jackpots Uden Grænser',
    h1: 'Spil uden ROFUS: Slots, live casino og jackpots i 2026',
    description:
      'Spil uden ROFUS hos internationale casinoer ✔️ Tusindvis af spilleautomater, live dealer og progressive jackpots uden indskudsgrænser. Se hvor du spiller sikkert.',
    keywords: ['spil uden rofus', 'casino uden rofus', 'spilleautomater uden rofus'],
  },
  {
    path: '/casino-uden-mitid/',
    navLabel: 'Casino uden MitID',
    title: 'Casino uden MitID 2026 – Spil Uden Dansk Verifikation',
    h1: 'Casino uden MitID: Opret konto på 2 minutter',
    description:
      'Casino uden MitID ✔️ Registrér dig med e-mail hos udenlandske casinoer. Ingen dansk ID-verifikation, større bonusser og hurtige udbetalinger i 2026.',
    keywords: ['casino uden mitid', 'udenlandsk casino uden mitid', 'spil uden mitid'],
  },
  {
    path: '/casino-uden-nemid/',
    navLabel: 'Casino uden NemID',
    title: 'Casino uden NemID 2026 – Guide til Spil Uden Dansk Login',
    h1: 'Casino uden NemID: Den komplette guide for 2026',
    description:
      'Casino uden NemID ✔️ NemID er lukket, men udenlandske casinoer kræver hverken NemID eller MitID. Se de 9 bedste sider med nem registrering og store bonusser.',
    keywords: ['casino uden nemid', 'spil uden nemid', 'casino uden dansk login'],
  },
];

export const INFO_PAGES: PageMeta[] = [
  {
    path: '/om-os/',
    navLabel: 'Om os',
    title: 'Om Os – Hvem Står Bag Uden ROFUS Dansk Casinos?',
    h1: 'Om Uden ROFUS Dansk Casinos',
    description:
      'Mød redaktionen bag udenrofusdanskcasinos.com. Læs om vores testmetode, uafhængige anmeldelser og hvordan affiliate-links finansierer indholdet.',
    keywords: ['om os', 'casino guide danmark'],
  },
  {
    path: '/ansvarligt-spil/',
    navLabel: 'Ansvarligt spil',
    title: 'Ansvarligt Spil – Værktøjer, Grænser & Hjælp | URDC',
    h1: 'Ansvarligt spil: Beskyt dig selv',
    description:
      'Spil skal være underholdning. Få værktøjer til ansvarligt spil, lær faresignalerne at kende, og find hjælp hos StopSpillet, Ludomani.dk og ROFUS.',
    keywords: ['ansvarligt spil', 'spilleproblem hjælp'],
  },
  {
    path: '/privatlivspolitik/',
    navLabel: 'Privatlivspolitik',
    title: 'Privatlivspolitik & Annoncøroplysning | URDC',
    h1: 'Privatlivspolitik',
    description:
      'Læs hvordan udenrofusdanskcasinos.com behandler data, cookies og affiliate-links. Transparent information om finansiering og redaktionel uafhængighed.',
    keywords: ['privatlivspolitik', 'cookies'],
  },
];

export const ALL_PAGES = [...CLUSTER_PAGES, ...INFO_PAGES];

export const FAQ_ITEMS = [
  {
    q: 'Er det sikkert at spille på casino uden ROFUS?',
    a: 'Ja, når du vælger licenserede operatører. Casinoer uden ROFUS opererer typisk under Malta Gaming Authority, Curaçao eGaming eller Gibraltar Regulatory Authority. Disse myndigheder kræver fair spil, sikre transaktioner og uafhængig RNG-test. Vi anbefaler kun operatører med dokumenteret erfaring i hurtige udbetalinger.',
  },
  {
    q: 'Kan jeg spille på casino uden ROFUS, selv om jeg er selvudelukket i Danmark?',
    a: 'Ja. Internationale casinoer er ikke tilknyttet det danske ROFUS-register. Hvis du har registreret dig i ROFUS, kan du stadig oprette konto hos udenlandske operatører. Vi opfordrer dog altid til ansvarligt spil og at sætte egne grænser.',
  },
  {
    q: 'Hvad er forskellen på udenlandsk casino og dansk casino?',
    a: 'Danske casinoer har Spillemyndighedens licens, kræver MitID og er koblet til ROFUS. Udenlandske casinoer tilbyder større bonusser, flere spil, ingen obligatoriske indskudsgrænser og registrering med e-mail — men de har ikke dansk licens.',
  },
  {
    q: 'Skal jeg betale skat af gevinster fra udenlandsk casino?',
    a: 'Gevinster fra casinoer uden for EU/EØS kan være skattepligtige i Danmark. Casinoer med licens i Malta (EU) er typisk skattefrie for danske spillere. Tjek altid operatørens licens og konsulter Skattestyrelsen ved tvivl.',
  },
  {
    q: 'Hvilke betalingsmetoder accepterer casino uden MitID?',
    a: 'De fleste accepterer Visa, Mastercard, e-wallets (Skrill, Neteller), bankoverførsel, Paysafecard og kryptovaluta (Bitcoin, USDT). Krypto giver ofte hurtigste udbetalinger — typisk inden for timer.',
  },
  {
    q: 'Hvor hurtigt kan jeg få udbetalt fra udenlandsk casino?',
    a: 'E-wallet og krypto-udbetalinger behandles ofte inden for 0–24 timer. Bankoverførsler tager 1–3 hverdage. Alle casinoer på vores liste er testet for hurtige udbetalinger med rigtige indbetalinger.',
  },
  {
    q: 'Hvilke velkomstbonusser kan jeg få på casino uden ROFUS?',
    a: 'Typisk 100–550% matchbonus, hundredvis af free spins og VIP-cashback. Bonusserne er generelt langt større end på dansklicenserede sider, fordi operatørerne konkurrerer internationalt om spillere.',
  },
  {
    q: 'Kan jeg spille casino uden NemID i 2026?',
    a: 'Ja. NemID er erstattet af MitID på danske sider, men udenlandske casinoer kræver hverken NemID eller MitID. Registrering sker med e-mail og adgangskode på under 2 minutter.',
  },
];
