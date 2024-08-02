import { useEffect, useState } from "react";
import { LineBreak, Spacer, calculateAge } from "./utils";


const AboutContent = () => {
  const [age, setAge] = useState<number>(0);
  const [daughterAge, setDaughterAge] = useState<number>(0);
  const [stayYears, setStayYears] = useState<number>(0);

  useEffect(() => {
    setAge(calculateAge("23/10/1982"))
    setDaughterAge(calculateAge("16/04/2015"));
    setStayYears(calculateAge("09/06/2001"));
  }, []);

  return (
    <div className="z-10 flex flex-col justify-center h-full mt-5 mb-0 md:mb-20 md:mt-10 text-medium-gray">
      ポートフォリオをご覧いただきありがとうございます。<LineBreak />
      ペルー国籍の Carlos Jave (カルロス・ハベ)と申します、気づいたら<>{age}</>歳になっていました。<Spacer />
      2001年6月に18歳で初めて日本にきました。日本語は全くわかりませんでした　笑<LineBreak />
      日本に来た理由は働いて数年後に帰国つもりでしたが、気ついたら日本が好きになってしましました＾＾何より平和な国と人の優しさに感動しました。<Spacer />

      WEB関係の仕事が始まったのは2014年、その前は2001年〜2003年位お弁当屋さん、工場で組み立てなどの仕事をしてました。その後2012年位まで溶接の仕事をしてました。<LineBreak />
      2013年にバイトをしながら職業訓練のWEBデザインコースに通い、2014年6月から初めてWEBデザイナーとして仕事をしました。<LineBreak />
      その時は社員でしたが色んなお客さん先へ出向し、いろいろな経験をさせていただきました。<Spacer />

      2017年10月から現在まではフリーランスとして仕事をしてます。<LineBreak />
      デザイン側を磨くため2016年にグラフィクデザイン(Graphic Design),クリエイティブデザイン(Creative Design)などのコースを受けました。<LineBreak />
      Web Developer(Back End Development)の仕事にも携わりたいためjavascript、React.js、typescriptなどを習得しました。<LineBreak />
      直近のプロジェクトでは、UI/UXデザイナー担当としてSketchを使ってデザインを行なった後は、フロントエンジニアとして実装を行いました。<LineBreak />
      また、Webに関する事はいつも新情報を調べたり、勉強したりしています。<LineBreak />
      2020年あたりにYoutubeチャンネルを作り、動画の撮影、編集、配信をしてます。そのためPremiere proやAfter Effectをいちから勉強しました。<Spacer />

      コミュニケーションに関しては、今まで問題ありませんでした。逆に「私の強み」だと思います。<LineBreak />
      各部署とも積極的にコミュニケーションを取って雰囲気の良い環境にする事を心かけています。<LineBreak />
      また自分の知識や技術、コツを同僚に教えるのが好きで、それが良い職場の雰囲気や仕事につながってスムーズにできると思います。<LineBreak />
      私は職場でのコミュニケーションが良く、常に楽しく一体感のある職場環境を作ってきたので、同僚や上司とは常に良好な関係を築いてきました。<LineBreak />
      いつも会社の仲間達と懇親会をしていましたし、BBQや忘年会、海遊び、フットサル、ホームパーティーなどを開催してます。<LineBreak />
      毎日顔を合わせることでアイデアや知識、経験、様々なことを共有し、それが良い職場環境にもつながっているので、職場のスタッフも家族だと常々思っています。<Spacer />

      日本に来てから<>{stayYears}</>年になります、現在日本人の奥さんと可愛い<>{daughterAge}</>歳の娘がいます。これからも日本で暮らすつもりです。<Spacer />

      余談ですがサッカー、ダンズ、お酒、釣り、アクアリウムレイアウト、PSゲーム、DIY、観葉植物などが好きです。<Spacer />
    </div>
  );
}
 
export default AboutContent;