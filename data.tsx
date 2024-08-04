import {
  BookText,
  FileText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Youtube,
  Github,
  FileCode,
  SwatchBook,
  Computer,
  FolderCode,
  Rocket,
  Mail,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Youtube size={20} strokeWidth={1} />,
    src: "https://www.youtube.com/@emaleona6031",
  },
  {
    id: 2,
    logo: <Linkedin size={20} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/carlos-j-7b552513a/",
  },
  {
    id: 3,
    logo: <Github size={20} strokeWidth={1} />,
    src: "https://github.com/carlosjavejapan",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "About",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Curriculum",
    icon: <FileText size={25} color="#fff" strokeWidth={1} />,
    link: "/curriculum-vitae",
  },
  {
    id: 4,
    title: "Skill",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/skills",
  },
  {
    id: 5,
    title: "works",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 6,
    title: "contact",
    icon: <Mail size={25} color="#fff" strokeWidth={1} />,
    link: "/contact-me",
  },
];

export const dataCurriculumPage = [
  {
    id: 1,
    title: "Frontend Developer, Frontend Enginer and UI/UX designer",
    subtitle: "株式会社DONUTS ジョブカン労務HR　(個人事業主)",
    description:
      "ジョブカン事業部　労務開発チームのフロントエンド開発とUI/UXデザイン担当、勤怠管理のスペイン語翻訳対応",
    dateIn: "2021年4月",
    dateOut: "2024年6月",
  },
  {
    id: 2,
    title: "請負仕事",
    subtitle: "フリー　(個人事業主)",
    description:
      "LPサイト作成、システム管理サイト、Youtube動画作成",
    dateIn: "2020年7月",
    dateOut: "2021年3月",
  },
  {
    id: 3,
    title: "Frontend Developer, Design",
    subtitle: "株式会社EPARK人間ドック",
    description:
      "EPARK人間ドックのホームページデザインおよび、修正、LPサイトのデザイン、コーディング",
    dateIn: "2020年4月",
    dateOut: "2020年6月",
  },
  {
    id: 4,
    title: "Frontend Developer, Design",
    subtitle: "エンパワーヘルスケア株式会社",
    description:
      "EPARK歯科の特集サイトデザイン、コーディングおよび、修正",
    dateIn: "2016年1月",
    dateOut: "2020年3月",
  },
  {
    id: 5,
    title: "Frontend Developer, Web Designer",
    subtitle: "株式会社KDDIテクノロジー(出向)",
    description:
      "au oneサイトチェックおよび修正、社内用のサイト作成、作業内容サイトの不具合修正＊JS使用、ロゴデザイン【社内app】、端末検証【android-iPhone】",
    dateIn: "2015年12月",
    dateOut: "2015年4月",
  },
  {
    id: 6,
    title: "Frontend Developer, Web Designer",
    subtitle: "ダイアモンドヘッド株式会社(出向)",
    description:
      "ECサイトのコーディング",
    dateIn: "2015年1月",
    dateOut: "2015年3月",
  },
  {
    id: 7,
    title: "Frontend Developer, Web Designer",
    subtitle: "フレックスエージェント株式会社(正社員)",
    description:
      "各サイトの作成、デザイン作成",
    dateIn: "2015年12月",
    dateOut: "2014年6月",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 10,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 80,
    text: "Clientes satisfechos",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 220,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 30,
    text: "Premios ganadores",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <FileCode />,
    title: "Front-end engineer",
    description:
      "ReactやTypeScriptを用いてモダンなウェブアプリケーションを開発。",
  },
  {
    icon: <SwatchBook />,
    title: "UI/UX designer",
    description:
      "直感的で使いやすいインターフェースと優れたユーザー体験を提供。",
  },
  {
    icon: <FolderCode />,
    title: "Web development",
    description:
      "HTML、CSS、JavaScriptで高品質なフロントエンドを実装。",
  },
  {
    icon: <Computer />,
    title: "Web designer",
    description:
      "ユーザビリティとデザインの調和を重視したウェブサイトを作成。",
  },
  {
    icon: <Rocket />,
    title: "Challenging",
    description:
      "リーダーシップ、ディレクション、マネジメント、WEBマーケティング etc.",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "ジョブカン労務HRシステム",
    image: "/images/work_1.png",
    description: "労務HRの開発チームで実装、デザインも行なった。",
    warning: "※ジョブカンは会員制の管理システムのでおもては見れません！",
    languages: "Javascript, React.js, TypeScript, SCSS, VScode, Sketch, Zeplin, Git, Github, Docker",
    period: "期間 3年3ヶ月（業務委託）2021/04~2024/06",
    urlDemo: "",
  },
  {
    id: 2,
    title: "EPARK人間ドック予約サイト",
    image: "/images/work_2.png",
    description: "人間ドックと検診予約サイトLPサイト、LPテンプレートサイトのコーディングやデザイン",
    warning: "※画像とデザインが変更になっている場合がございます、または閉鎖さている可能性があります。",
    languages: "JHTML5, CSS3, Javascript, Laravel, Dreamweaver, VScode, Illustrator, Photoshop, Adobe XD ,Git, Github",
    period: "期間 3ヶ月（業務委託）2020/04~2020/06",
    urlDemo: "https://www.docknet.jp/",
  },
  {
    id: 3,
    title: "EPARK歯科予約サイト",
    image: "/images/work_3.png",
    description: "歯医者探しをサポートする検索・予約サイトのコーディングやデザイン",
    warning: "※画像とデザインが変更になっている場合がございます、または閉鎖さている可能性があります。",
    languages: "HTML5, CSS3, JavaScript(jquery), Pug, Sass, Dreamweaver, SublimeText3, Atom, Illustrator, Prepros, TortoiseSVN, A/Bテスト(VWO,Optimizely)",
    period: "期間 4年3ヶ月（業務委託）2016/01~2020/03",
    urlDemo: "https://haisha-yoyaku.jp/",
  },
  {
    id: 9,
    title: "2021~2023 Portfolio",
    image: "/images/work_9.png",
    description: "個人ポートフォリオ２０２１〜２０２３",
    languages: "HTML5, CSS3, JavaScript & (jquery),SublimeText3, Illustrator",
    urlDemo: "https://carlosjavejapan.github.io/2021-portfolio/",
  },
  {
    id: 4,
    title: "AUポータルサイト",
    image: "/images/work_4.png",
    description: "AUポータルサイトのJSエラー確認修正、端末でページ確認、コーディング、一部デザイン",
    warning: "※画像とデザインが変更になっている場合がございます、または閉鎖さている可能性があります。",
    languages: "HTML5, CSS3, JavaScript(jquery),SublimeText3, Illustrator",
    period: "期間 8ヶ月（正社員）2015/04~2015/012",
    urlDemo: "https://portal.auone.jp/",
  },
  {
    id: 5,
    title: "ECサイト",
    image: "/images/work_5.png",
    description: "ECサイトのコーディング",
    warning: "※画像とデザインが変更になっている場合がございます、または閉鎖さている可能性があります。",
    languages: "HTML5, CSS3, javascript(jquery), sublimeText3, Illustrator, photoshop",
    period: "期間 3ヶ月（正社員）2015/01~20215/03",
    urlDemo: "https://www.nicoleonlineshop.com/",
  },
  {
    id: 6,
    title: "コーポレートサイト",
    image: "/images/work_6.png",
    description: "コーポレートサイト作製、コーディング",
    warning: "※画像とデザインが変更になっている場合がございます、または閉鎖さている可能性があります。",
    languages: "HTML5, CSS3, javascript(jquery), sublimeText3, Illustrator, photoshop, wordPress, PHP",
    period: "期間 6ヶ月（正社員）2014/06~2014/12",
    urlDemo: "https://www.asahiglassplaza.net/products/attoch/",
  },
  {
    id: 7,
    title: "コーポレート、ブログのサイト",
    image: "/images/work_7.png",
    description: "会社採用ページ、個人モデルさんページコーディング、一部デザイン、スーパーマーケットのサイト（外国）コーディング",
    warning: "※画像とデザインが変更になっている場合がございます、または閉鎖さている可能性があります。",
    languages: "HTML5, CSS3, javascript(jquery), sublimeText3, Illustrator, photoshop, wordPress, PHP",
    period: "期間 6ヶ月（正社員）2014/06~2014/12",
    urlDemo: "http://tokyo-mart.net/",
  },
  {
    id: 8,
    title: "コーポレートサイト",
    image: "/images/work_8.png",
    description: "コーポレートサイトのデザイン、コーディング、公開まで",
    warning: "※画像とデザインが変更になっている場合がございます、または閉鎖さている可能性があります。",
    languages: "HTML5, CSS3, javascript(jquery), sublimeText3, Illustrator, photoshop",
    period: "フリー",
    urlDemo: "",
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile1.png",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile2.png",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile3.png",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile4.png",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile5.png",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile6.png",
  },
];
