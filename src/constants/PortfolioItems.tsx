import { PortfolioPage } from "Pages/PortfolioPage/PortfolioPage";

type SpecificPortfolioPage = Exclude<PortfolioPage, "all">;

export const PortfolioItemKeys = {
  // GENERATED PORTFOLIO ITEM KEYS START - DO NOT CHANGE THIS LINE
  "AContagionOfZombies": "AContagionOfZombies",
  "AFieryFamiliar": "AFieryFamiliar",
  "Alice": "Alice",
  "AliceInWonderland": "AliceInWonderland",
  "AmandaWebsterChristmasFlyer": "AmandaWebsterChristmasFlyer",
  "AmandaWebsterTherapies": "AmandaWebsterTherapies",
  "ArcLabs": "ArcLabs",
  "AutumnLonging": "AutumnLonging",
  "BillBarber": "BillBarber",
  "BirdBooks": "BirdBooks",
  "BirdBooksSocials": "BirdBooksSocials",
  "BusinessCardTemplates": "BusinessCardTemplates",
  "Candid": "Candid",
  "Castle": "Castle",
  "Cat": "Cat",
  "Clara": "Clara",
  "Clive": "Clive",
  "CloseUp": "CloseUp",
  "CopperHollowSocials": "CopperHollowSocials",
  "D&D": "D&D",
  "DetectivesAbode": "DetectivesAbode",
  "Doggy": "Doggy",
  "DoughnutMoon": "DoughnutMoon",
  "EarlyRiser": "EarlyRiser",
  "EnglishBusStop": "EnglishBusStop",
  "Fire": "Fire",
  "FishiesComeToTown": "FishiesComeToTown",
  "FlightOfTheNightLights": "FlightOfTheNightLights",
  "Floras": "Floras",
  "Flumph": "Flumph",
  "Frogging": "Frogging",
  "FutureHomes": "FutureHomes",
  "GetSnuffed": "GetSnuffed",
  "GoldenCity": "GoldenCity",
  "GoodVibes": "GoodVibes",
  "GraveGirls": "GraveGirls",
  "GraveGirlsSocials": "GraveGirlsSocials",
  "HSign": "HSign",
  "ImprobableFutures": "ImprobableFutures",
  "InkantressSocials": "InkantressSocials",
  "Lemons": "Lemons",
  "LetsPlay": "LetsPlay",
  "Lobby": "Lobby",
  "LocalBoast": "LocalBoast",
  "Maggie": "Maggie",
  "Mars": "Mars",
  "MonsterousRegiment": "MonsterousRegiment",
  "Mushman": "Mushman",
  "NightSky": "NightSky",
  "Overwhelmed": "Overwhelmed",
  "PlantSale": "PlantSale",
  "Potters": "Potters",
  "Pride&Prejudice": "Pride&Prejudice",
  "Radios": "Radios",
  "Ranger": "Ranger",
  "Recycle": "Recycle",
  "Remedease": "Remedease",
  "RemedeaseAd": "RemedeaseAd",
  "RoastersFest": "RoastersFest",
  "RoastersFestSocials": "RoastersFestSocials",
  "Rose&Crown": "Rose&Crown",
  "SAI": "SAI",
  "SimonJax": "SimonJax",
  "SlitherinAndShiverin": "SlitherinAndShiverin",
  "Stay": "Stay",
  "StolenRemains": "StolenRemains",
  "SubmAIRine": "SubmAIRine",
  "Sven": "Sven",
  "TastyBakeryDesktop": "TastyBakeryDesktop",
  "TastyBakeryPhone": "TastyBakeryPhone",
  "ThankYouCard": "ThankYouCard",
  "TheBay": "TheBay",
  "TheEnd": "TheEnd",
  "TheHitchhikersGuideToTheGalaxy": "TheHitchhikersGuideToTheGalaxy",
  "TheMill": "TheMill",
  "Thrift&Gift": "Thrift&Gift",
  "Thrift&GiftSocials": "Thrift&GiftSocials",
  "TurnMeOn": "TurnMeOn",
  "Uprooted": "Uprooted",
  "Water": "Water",
  "WayStation": "WayStation",
  "WesternAirTemple": "WesternAirTemple",
  "WhiteCliffsOfVictoria": "WhiteCliffsOfVictoria",
  "WiseOldWorm": "WiseOldWorm",
  "Witch": "Witch",
  "Wonder": "Wonder",
  "Wow": "Wow",
  "XmasBash": "XmasBash"
  // GENERATED PORTFOLIO ITEM KEYS END - DO NOT CHANGE THIS LINE
} as const;
export type PortfolioItem = {
  page: SpecificPortfolioPage;
  name: string;
  height: number;
  width: number;
  extension: string;
  blurHash?: string;
};
const PortfolioItems: Record<keyof typeof PortfolioItemKeys, PortfolioItem> = {
  // GENERATED PORTFOLIO ITEMS START - DO NOT CHANGE THIS LINE
  "AContagionOfZombies": {
    "page": "design",
    "name": "A Contagion of Zombies",
    "blurHash": "|68hK]xZ02M}MxRQM{kVRk00S5-.WBxus,o3xtoM_Nt7RisSRjbaM|RRk9IAkVV_V[tQWEtQRkofM#WEtPkBoxk9WDoeV[%fniM|oeRkWVofa#j@DjV[xubbt7ogofkBj[%gjZRQWCWUWBjZj[j?DjWBxuofbIkCt7ofkC",
    "extension": "jpg",
    "height": 2014,
    "width": 1309
  },
  "AFieryFamiliar": {
    "page": "illustration",
    "name": "A Fiery Familiar",
    "blurHash": "|FFYS*K*IvOGJT%LM{Vta0}X$ME%oMN]R*njbGs99xr]oat3njM|tRtkX9,Cn4jEnispt6buR-Nbtk%1MzRQxto{M|RRWBI;bbxukVjFWCNGoft6RQrrt2xsIpRRt6Set6tRtQjvRRS2X7t6WBRkbuWBNHbckWozofnjR*",
    "extension": "jpg",
    "height": 1200,
    "width": 1200
  },
  "Alice": {
    "page": "illustration",
    "name": "Alice",
    "blurHash": "|IM@7Q_L%LaL_2WC%L?HxuWAxuoyV[t7NGs:fiof_2IVRjxuM{%LkBj[Rj?aRjV[baae%2R*xaWBS1xaRjWBs:R%afWUof~VNGM|xtR*s:bFRkR*-:f6R*t6M|bFafRjayRkxat6WCoeRjt6WBof%LWBf6oyRkWBWBWBWC",
    "extension": "jpg",
    "height": 2000,
    "width": 2000
  },
  "AliceInWonderland": {
    "page": "design",
    "name": "Alice in Wonderland",
    "blurHash": "|6Bo?OMc4o?H03bc$gxtWX9]-owJ9bxuaKt6%0Rk00XA?GIn}?%1EhRkofxb9wIo}=xVNbt7E3oy^j%KM|rrNdNIjFWqjv--n#$*NLE3xuNGs.t7EMt6M|I?%2M{-oxZNGNJxaxFEMoJxZI;t6xFxaE3xt%0NG$%I;afsn",
    "extension": "jpg",
    "height": 2014,
    "width": 1309
  },
  "AmandaWebsterChristmasFlyer": {
    "page": "design",
    "name": "Amanda Webster Christmas Flyer",
    "blurHash": "|35F~|MJ4Ty;Q.%gtlo|pH-;R5NFkWXmxaRjninP8wix%3VtrYafMKjHayc?xFM1bbwKOqt6bvS1umxtJ$RQtkNa%MbbRjH?t7yqR6VFSgrsX8X8IUTI%fs:RjozS}VtjHxaOVs:tkNaxaR*nOt7aeRjx]i_IBxaRPoet7",
    "extension": "jpg",
    "height": 1418,
    "width": 1000
  },
  "AmandaWebsterTherapies": {
    "page": "design",
    "name": "Amanda Webster Therapies",
    "blurHash": "|35~nA%#00TcidL~*I%~t+.lb]Rit7MeVstRX7o|00IB~qv%X5yWMeHsVs8wix.7RQtRtkNFeUZ%-Vx]IUIAt+kWixtkX7%2fkM{eUozR*tRtkRjx]VtMxoztRRjkCt7V@%gofMxV@ozjFf+tknjM{V[x]ozMybHkBRjt7",
    "extension": "jpg",
    "height": 907,
    "width": 1612
  },
  "ArcLabs": {
    "page": "design",
    "name": "Arc Labs",
    "blurHash": "|XRD1XkX-:-p%1-;ozx]of-;RkWCt7f6oeayWVWV~VxaIVbbRkRjV@aeWBogxtoJM{t7WXbIofj[WBWBWVWBWBt7ozt7of-;f6t7t7M{V[oJodofIokCt7ayoLayj?WBj@%MWCRjf5xtxaj[WVRkxuaeWBoyoff6WBayWC",
    "extension": "jpg",
    "height": 932,
    "width": 1101
  },
  "AutumnLonging": {
    "page": "illustration",
    "name": "Autumn Longing",
    "blurHash": "|AC?T0-p00afoKM|a#M|Rj00Io~VWB-pxtaf%2xa-poe%Lxt9ZIVRkWBf7t7t6IoRjoft6-:WBIoWCRjoeRkWB%2RjRjxaofxaWCofxaIoRjs:WBR*NGjas:t6j[Rkxts:%2oeRkjtNGj[xaIoWBE1ofxtRjt6s:Rkt7WC",
    "extension": "jpg",
    "height": 2879,
    "width": 2000
  },
  "BillBarber": {
    "page": "design",
    "name": "Bill Barber",
    "blurHash": "|lPZr%t7-;%M%Mxuxu%Mt7Rjofofj[offQj[ayof~qWBM{ofRjj[Rjj[Rj_3WBWBayWBayWBt7Rjt7t7ayWBj[j[WBWBayxuofWBofWBayj[RjofRjj[j[WBWBj[ofofj[ofj[WBWBt7t7j[ofayRjofofayfQayofWBfQ",
    "extension": "jpg",
    "height": 1080,
    "width": 1095
  },
  "BirdBooks": {
    "page": "design",
    "name": "Bird Books",
    "blurHash": "|mM%S~of~Vxt%2%LRk%1Rkayj[t7j[ayazWBayfQ-oofM|WCWCWCs:WVWC-:oLRkj[R*WBofayWC%LfQR*oLRkayayWVs:xaayWCWCoes:ofj@fQ-ooeM|WCfQWVoeoeoextayayj[j[jtWCofoefQWCj[oLayofayWBay",
    "extension": "jpg",
    "height": 1119,
    "width": 792
  },
  "BirdBooksSocials": {
    "page": "design",
    "name": "Bird Books Socials",
    "blurHash": "|lNmpExaxvWX%gxu%Mxux]V@j@j[WBogj[j[fjj[_NW;aeofM{ofWBj[Rjx]Wpj[j[V@j[ayj[WBRjf7j[ofxuayRkfQbHj[WBj[oft7a{ayf6ayWBj[j[fRt7ayaxj@fjads:j[WBt7ayj[fjoft7j[ayWVayj[aya|ay",
    "extension": "jpg",
    "height": 1540,
    "width": 1617
  },
  "BusinessCardTemplates": {
    "page": "design",
    "name": "Business Card Templates",
    "blurHash": "|MMP|6_NwOD*xuRjxV=|Shn3InIVEf%1$+S%kBWVv}xtELX8%LouE2i_sSx[sXnl$zIo9Fiwo#ocM{$iozR*xutR$%kBay%Nt7XSogtRkCayjYXSM_RkR*xWNGnibFV@V[xGo0R,RjWXt7s,nhbcRkjYjZkCWUoLkDozs.",
    "extension": "jpg",
    "height": 1173,
    "width": 2084
  },
  "Candid": {
    "page": "design",
    "name": "Candid",
    "blurHash": "|eK-qPay~q-;fQxuRjt7fPt7Rjj[t7j[t7ofWBWB?bj[IUj[WBWBt7j[j[%MxuofRjWBM{WBofayxut7RjRjofj[WBayWB-;j[RjayWBoej[j[offQofWBRjofofj[j[j[xuayRjayofoffQj[j[j[WBj[j[ayj[j[ayj[",
    "extension": "jpg",
    "height": 1196,
    "width": 961
  },
  "Castle": {
    "page": "illustration",
    "name": "Castle",
    "blurHash": "|NF6:%OYD5n#WE%2WExabb^jIAS%kBR6t7aes.oy*0b]X2MyMxxui{oekW.SRPn2RkRks.RloLf5%hR-bvWBRjW-aKoIbIyDoIaJWAoHnlWEofWEXnkCs:RjbZWEaye-WBt,jGadR%oKWAaKoLbHt8floLWBoyjGWYWEV@",
    "extension": "jpg",
    "height": 2360,
    "width": 1640
  },
  "Cat": {
    "page": "illustration",
    "name": "Cat",
    "blurHash": "|8Bf30w{FYoz9uTH9vwysp$*~BEMoM%1Nas:I:s:F?Nb-VNGjc$*aexZWBxa-Vt6ELoMn+s-oeW;xZ-Vs:-oIpxZs.EMxaOUS1=|niWBI:I:xZoM9uxaRkR*S1EMWUxHjZs:R*n%I:IpafWBt6t7t6NasoaxWVWUR+s:oe",
    "extension": "jpg",
    "height": 2927,
    "width": 2000
  },
  "Clara": {
    "page": "illustration",
    "name": "Clara",
    "blurHash": "|8BDQU-;009Zxu%M%Mj[WB00M{~W%MM{IVRkt7ay4oRj%MRjt7%MRjM{of~pt7D%oeR*M{xtt7fRxtoffQoMWBM|fRt7of9ZRkxuWBt7xuRjRjayxuayM|j[ofj[ofWBay-;t7RjWBWBfPofWCazRjazj]WBj[WBj[t7WB",
    "extension": "jpg",
    "height": 1086,
    "width": 1086
  },
  "Clive": {
    "page": "illustration",
    "name": "Clive",
    "blurHash": "|BJkAb~p?H9G_2xaxt^+t7?HWBt7RjofxuRjt7jZ_2M{D%-;Rjjt%LWBof?aRkV[xtWBayoet7of-pV[NGoJWBoyjZR+ae?HozM{t7a{jZt7RPWWR+s:%2R*WBR*RjWVWBoKt7ofoKofM{ofWCWB%2ayofayWCt6M|s:fj",
    "extension": "jpg",
    "height": 2000,
    "width": 2000
  },
  "CloseUp": {
    "page": "illustration",
    "name": "Close Up",
    "blurHash": "|9F~2Bt7x]-;Di-;Rj-;.8Ejt7E2kCxabI%Lt7%M00RkIUM{X9NGj]RjD%Q,Rjr=Rj%MjFRje.4.-pM{xuM{s:RjIURjD%~qayozWVIUWCn$R*t7%gxuNGozIUt7xuof%Nnht8M{bHxut6-;t7xu9Ej[D*WBt8WC-:a}M{",
    "extension": "jpg",
    "height": 2048,
    "width": 2048
  },
  "CopperHollowSocials": {
    "page": "design",
    "name": "Copper Hollow Socials",
    "blurHash": "|OEyYyXR%3R6~qyB.7Vt-=w3njo|kpWCixn+XRXR-;oLR*W;WBoMjZbHjZkpbaaLM|kCtQkBV[jI~WjbbaozV[jGWBt6WU%LoeWCsCofW:oeWVja-;j[jsofWBayWCkCWBoyWVjaafoff*Wpn%oL?vofoKkCRkoLaeW;oJ",
    "extension": "jpg",
    "height": 1980,
    "width": 1980
  },
  "D&D": {
    "page": "design",
    "name": "D&D",
    "blurHash": "|7Avd:0#RP=x0#-UIqWCR*^OV[Iqf6oes:kBs:bF0f~AI;EM=_EMoejas.nixZxsoeR+NHR+R+s:-A9u%1juS4t6ocxZR+xZs,bHt6W;WVWCR+M}M|xZR,xZNHs.a#I;s.xtoeR*NHr@jboLW.oxNwxZs.NH$%R+oeR+S2",
    "extension": "jpg",
    "height": 2269,
    "width": 1550
  },
  "DetectivesAbode": {
    "page": "illustration",
    "name": "Detective's Abode",
    "blurHash": "|3AABn^%9HM|9uWURjxHn#?]xtE1WUs:j@W:kCWCxJEMW9s:-UxGozoyR-%yWBVtRQNaR*xat7j?=|%1RRRkNINHoet6s.-pWCNZWVs:jFR*kCWWNyR+WAt6xZj?WWoMaf-oofafoeR+WCoeoLj?%KoeR*RkRkjus:ofj[",
    "extension": "jpg",
    "height": 1000,
    "width": 1000
  },
  "Doggy": {
    "page": "illustration",
    "name": "Doggy",
    "blurHash": "|7C=0XXU0.}XniNsELEg9uoe,@s;Eg$f$*NbELaz1P]-$fAH,=I.Efj@I:skNxxGWBAGxD$gNaWU9]I;s*=xbdjw-BxGxa-CoLW=xGs9S6oIj?I;IpEfWUsos:$+ogw^xFoMWXWBs.-UWWW=w{R*I:fkxHWBs;xH-AW=sA",
    "extension": "jpg",
    "height": 2927,
    "width": 2000
  },
  "DoughnutMoon": {
    "page": "illustration",
    "name": "Doughnut Moon",
    "blurHash": "|HI#7K5P02o$V?%1t2xuRn5hM_N4RjoaofWUxZM|0g~DtLoa%2NHWFWBt6E9ELjpoexZNZRRNH%29aof-ojvt7s,f+jbaeohbHxWS1ELoMt7WAt6E2M{%Ks.M|oMX5s:aet8oLt6t7R-kCjFjHR*NtaeaLM{WXWBniofj@",
    "extension": "jpg",
    "height": 1618,
    "width": 2000
  },
  "EarlyRiser": {
    "page": "design",
    "name": "Early Riser",
    "blurHash": "|QCsp.o#kXtRM}o#IUadNH~Vt7kWt7RjofMxafRj.9ofoff+WBoeWBayafM_ayjYWBjFjZozj[j[MyWBWBaeayWBtQkCofIVWBV@aekCWVtRj?ofW=ayaeayofj[j?fkj@ozj]afj[ofj[WBayazozj[ayj[ofjuWBfka{",
    "extension": "jpg",
    "height": 2012,
    "width": 1309
  },
  "EnglishBusStop": {
    "page": "illustration",
    "name": "English Bus Stop",
    "blurHash": "|78qB2KQE2RPIq%29vt6%1%hSPnhWBbIt7WXt6W=0PsC-TkV%1S4%0oKI=ES%1Rkj?ocNGxFNGt6}?t5EMo2NGe.RkNH-U%KWBRkjtWBjrWWjZofEORk$$a{smocjrxGI;V[Rkxaazayo0WVofRk%0bHWXWCR+jZR*fkni",
    "extension": "jpg",
    "height": 1182,
    "width": 1200
  },
  "Fire": {
    "page": "design",
    "name": "Fire",
    "blurHash": "|9DFoZ|c2r2Y[=,s$5=0o1oLa|SMWp$5wxJlN]sU2YB9|I[=,YwxB9B9sU$PjtSMo1a|SMa|jtsUsUsUwxjtFcFbo1wx$5ODo1wxSMN]sUwxo1WpB9fQ,FSMJlwx,YsUFI$PWpSMsUSMSM$5o1JlFbWp$5o1N]o1o1N]N]",
    "extension": "jpg",
    "height": 1000,
    "width": 1000
  },
  "FishiesComeToTown": {
    "page": "illustration",
    "name": "Fishies Come To Town",
    "blurHash": "|DGkzVE,7ft7KO-.Iq$%jF}YcY67OEbbRkxZn$Iq}kxFvgS~od$%NuoLkB0g+awIRj$%NcxEXSI;8H$gRP$NwJR+%1X8NH-:O?Rkv~WBr?oKs.NHvNbvKPa}NGwcxakCNH}sI:x[OsNbt5ozxFRktRt6WBXSW;NwxZjZNH",
    "extension": "jpg",
    "height": 1200,
    "width": 1200
  },
  "FlightOfTheNightLights": {
    "page": "illustration",
    "name": "Flight of the Night Lights",
    "blurHash": "|DD[#1-rI.x_oJi^WEWB9u0yI:s;g5NGV@nhjEw[N{n2i]-VjYELNHSOof}tIoNFWAs8$+t8oJNd0KV?spIURjxbxabcs:$*xbXTaxoMkDR+s.ofM{T0%3snt7xbofo0oL9Zi_R*NGt8W;s:W=jYskt8S1NGa}adV@n$V@",
    "extension": "jpg",
    "height": 1200,
    "width": 1201
  },
  "Floras": {
    "page": "design",
    "name": "Flora's",
    "blurHash": "|26j]-=|0156I:%1-Vt6xaJ~NGsq-Vs:R*X6S2WB0{I:^Q-VofWBNaWoR*~W-o9a56WBxaxat6s:NaR*ofxaxHNZR*s:R*56NG-p%1WCWBWUfkWB^7xaJPIoNHxasoNHxG#qWBS_s:a}R*njj[ay9aWC%1ofoeWVafs:Rk",
    "extension": "jpg",
    "height": 1339,
    "width": 1000
  },
  "Flumph": {
    "page": "illustration",
    "name": "Flumph",
    "blurHash": "|{MG;pof_Nt7-;xuRjxuM{t7ayWVj[oej[j[j[ayx]j[RjayWBaya|aykCoza{ofj[a{jtWVa{ayx]fQRjfQWBjtj[bHoft7jtj@j[fkayj[j[jt%3j[RjjtafWBj[f6j[t7j[bGj[juayjZf6ayxujtRjfQaea{fQf6fk",
    "extension": "jpg",
    "height": 2879,
    "width": 2000
  },
  "Frogging": {
    "page": "illustration",
    "name": "Frogging",
    "blurHash": "|.J[3fo#%Kt7ogt7S4ogj[}]jFt6oLWBjbf5o0j[x@j[NIa#WVWBoJj@fRs.aKNbWVoekBa}fRf6s=bbnhjZs.n%bHoLaef*j[oLj[f*fkj@j@WVaykBW.f6a}a#a}WWjst8kCjYj@a}f6a}ayjZnijFofjbayj[oKjsa}",
    "extension": "jpg",
    "height": 1200,
    "width": 1200
  },
  "FutureHomes": {
    "page": "illustration",
    "name": "Future Homes",
    "blurHash": "|LEVi_V@xHs:oMs:WBt6WV~WxY-Vs:WWs:WVR+s.%3$*s:%1WVj@t6R*WCOY$+j?xaxZoeRkWVWBJA%2WAsVxZafayW:WBI=aye.s.jGWCWVWooLS5NGsoafR*ofW.j[ofkCRjs:aeS2kBbaoLbHoyodoLjYWCR*bHoMay",
    "extension": "jpg",
    "height": 2000,
    "width": 2000
  },
  "GetSnuffed": {
    "page": "illustration",
    "name": "Get Snuffed",
    "blurHash": "|7AmrGt74.IUxuxuD%%Mxu~q%M4nM{-;a}IUj[xuIURjWBxuxuWBRjRjt79GIUxu%MxuayWBayj[D%M{t7xut7j[WBWBofxuofWBRjWBfQf7ofofxu%2s:M{IUayxuofayt7t7%MM{D%ofxuj[M{IUj[%2ayM{ofxuWBM{",
    "extension": "jpg",
    "height": 2879,
    "width": 2000
  },
  "GoldenCity": {
    "page": "illustration",
    "name": "Golden City",
    "blurHash": "|SFP$mTLM|,-jwozS4skX9~Xo$w^xDX9s-S4t6WYK7s9-AX9R*jEkCf9jZKir;jFR.i_W:aeWXj?NcV@J7S#s-kCj[SgWUT0SxSeSNoesooLWCj?S$Wqa#a#niaeayoMafbvWBR+soniW;baaykCWCe.ayaybbbHjFbbf6",
    "extension": "jpg",
    "height": 1587,
    "width": 2000
  },
  "GoodVibes": {
    "page": "design",
    "name": "Good Vibes",
    "blurHash": "|26+wxpbHXyDHXxvD4m,Q-.To#R5jZR5RPa}aetlQ8i_X-afpIS1tlj]oz*JWAaKkqkVtSR5enQ.4Ta1*JnipcWUyDgMo}8waKyXeUpIW;wjb]jGP,o}n7RispofVsf*bHt,i|jFX5niozW-o}XRIAWAkVW-t8kWogs;Vt",
    "extension": "jpg",
    "height": 1080,
    "width": 1203
  },
  "GraveGirls": {
    "page": "design",
    "name": "Grave Girls",
    "blurHash": "|16@H2xa0$$*EgSOI;of$%10S2NbWV}roLI;xFxFWVa|oLoL$iWWI;oKay^Oj[oLs.5lNb$%oLso5mazs.WVxFoL$%s.J8xZoLxFWWa|s.NbNbWV5SWW=wWVEgsosoNb-A^PsoR+WWI;oL$iS2Eg0~WVxFS2$%s.xFa|Nb",
    "extension": "jpg",
    "height": 1374,
    "width": 1168
  },
  "GraveGirlsSocials": {
    "page": "design",
    "name": "Grave Girls Socials",
    "blurHash": "|iK_2nt7_3xu_Nxu%Mxu%MoexaofRkofayayRjj[~qfQM{ofM{f6RjjtWBt7R*j[oLofofoes:fQ_3WBM{ofM{j[WBayWBxuWBoLt6j[fkaykCfj%MofWBayWAayWBayWV%MRjayt7WBfQj[ofayt7a|ayayWBj[jtj[ay",
    "extension": "jpg",
    "height": 1540,
    "width": 1528
  },
  "HSign": {
    "page": "design",
    "name": "H Sign",
    "blurHash": "|HCrRHae53s:9pxJ-tj;fhXTS1NEW.R$WVs=fPj[53s;-ZayxcWURhWXayNXbHs?f6WBoMofayWTR#ayjcj[xcWBRhoMj]NEj[oMjvxdaxNEjvoNW-a}j[ayWBj[j]f7j?Rhj[s=ayj@ayWBfiaxR%bHj]ayj[f6axj[a{",
    "extension": "jpg",
    "height": 1080,
    "width": 1080
  },
  "ImprobableFutures": {
    "page": "design",
    "name": "Improbable Futures",
    "blurHash": "|4Au{oNF01=|5mNbOsIokBtdsnM}f5RkNHxGbHo000xa^lE1$*oMNF-VjZXojZ9[WX$%t7weI:oL}vRjInxaR%s,S$NGWX0Nfk^jofs.WAofxaWB0#Wq=wjF$*WBad$*R*NyW=WANGof-VaxNGbb1cWC$*WonOs:$*WAbH",
    "extension": "jpg",
    "height": 2012,
    "width": 1308
  },
  "InkantressSocials": {
    "page": "design",
    "name": "Inkantress Socials",
    "blurHash": "|VM%+f%htRIU~pj?t7%2-;xuWBayofoKofj[f6bH_3xuWBWBIokCfjWBRjxtt6jsWBf+kCfkR*ae?b9Fay?HR%t7ayt7Rj%MR*bHs:j[jZjZofWBofRjoftRs;jsWBoffjofaeofoft7azWBfkof%MRPaextR*ofa|a}js",
    "extension": "jpg",
    "height": 1540,
    "width": 1561
  },
  "Lemons": {
    "page": "design",
    "name": "Lemons",
    "blurHash": "|DKu$6n5YH-m05$%9csqQ;%KWV$~odWCj?RSn+Rk03t79dM}.gNHxZadyAMgfSM$RlbIoMo]k8xsTcW,t4ofx.j]kRoyIEwPoIS1oexoWC%cofWBy3fSj@WBIIjGW=R+%I^Jj]Xjj?Iaa#IFRkWFV_WBXQkUs9t6n$juNw",
    "extension": "jpg",
    "height": 1165,
    "width": 1114
  },
  "LetsPlay": {
    "page": "illustration",
    "name": "Let's Play",
    "blurHash": "|2Ad1LU^60_N00?]8{xu%L8w.l#X^ku3DPtlM|M{K~00-;X8Dj_39FkCkC#TpbIBD%OqMeIoWEV[_2Z%?HayD*xtRjkCbER+IBsDW.a1-pjFt7X84nEMM{RPtQMeoyxaRj.8Djx[o|MxkWM{xuxtDj%zjFe.?uMy%fxtae",
    "extension": "jpg",
    "height": 1411,
    "width": 1398
  },
  "Lobby": {
    "page": "illustration",
    "name": "Lobby",
    "blurHash": "|5AbeW=eM{Ip1c=cEfI:9]{#+]$%K5I;,?n~s;f,}bJ.AWNF$g,;#-R*Ip6A5lNGxbxFf5oJxaxaA]afW.R*WBFxJTEf$PW@Egwc=doyEzE#xHs9OZSgxF$Qr?xGxZ$Nw|t9$%$jwcS1JTr?r=R*sp$Nr?oLShADSO$*sn",
    "extension": "jpg",
    "height": 1389,
    "width": 2000
  },
  "LocalBoast": {
    "page": "design",
    "name": "Local Boast",
    "blurHash": "|fQk#,xY-5f+xC-QxC$|a#$|j?a#a#a#oJWXfRWX}kj?NexCR.WXR.WXa|ozj[oJoJj?WXoJj?oJa#jtWXj@fiWXj?a#j?-PWXS4j?jtoJazjuWXEljtxCR.j?smoJoJa#t6s,smWXWXa#WXj@oJs+WXS4s,oJfRa|WXa|",
    "extension": "jpg",
    "height": 807,
    "width": 1575
  },
  "Maggie": {
    "page": "illustration",
    "name": "Maggie",
    "blurHash": "|FDl$f9G00?a-;%MD%Rjxa9Zof%Mt7RjIVxat7ay00?H~W9ZIoRk-pfkM{_2NGIUM|t7?HE1NGt7%2IobH-pRjRjNGt7xuoyt7IVxuofE1-pWBRja{f6j[WBs:jsR*ofWBM{of%2IUj[xuM{xuWBxuj[M{ofayt7t7Iot7",
    "extension": "jpg",
    "height": 1086,
    "width": 1086
  },
  "Mars": {
    "page": "illustration",
    "name": "Mars",
    "blurHash": "|IKTPs==BU?G$e-oNFxuxa$;Mx?at7E1ofM{jbax1yE28_ogRjxGsWaekC3CKOR5s=NHkDo}SzoL4ptRyDW:x]OXS#NtV@Z$ogt8VsxCV?jraKofFstP$%M{MxV@s9wvozD$w]o#NZWno}s:S$S$rraLV[WBRlX9f,ozbH",
    "extension": "jpg",
    "height": 3508,
    "width": 2480
  },
  "MonsterousRegiment": {
    "page": "design",
    "name": "Monsterous Regiment",
    "blurHash": "|8B1PMsoWVo1I;n*I;n%R+|^oKI;o1bHazs.o2s.AXazs.j@oLa|a|bGaz$PoLxGj@ayjtR+ayR+NHo1Nbjas.j[xGfjs.s.azxFj@ayoLR+azWVnjazbHj@oLjtoKf7f6R+WVWVjajaj[s.oLs.xZbGsoazWVjZWCj@WC",
    "extension": "jpg",
    "height": 2013,
    "width": 1308
  },
  "Mushman": {
    "page": "illustration",
    "name": "Mushman",
    "blurHash": "|_K-h1oL~qt7-;xuWBxuM{ofazfjjsj[ayoLj[j[%gofRjj[RkayayWBfQxuj[ofkCayfkWBayWB%MbHRjf6WBayj[f6ofj[ayayayj[azofj[ofxujtRjayWBayoffQofxuj[j]j[f6j[ayfQayxuj[WBj[WBj[ayayfQ",
    "extension": "jpg",
    "height": 2879,
    "width": 2000
  },
  "NightSky": {
    "page": "illustration",
    "name": "Night Sky",
    "blurHash": "|FMF98~WXmK4%2-VI:$*so3C-;^kFHofofWVS2j[0Kt7t7%2t7R*soNaofIVRQIo=yNaNG$*R*WVIUMxnP-BR*SgS2sAayVtE1IoR*ozs:NasVV@ELNGNGELNGn$R*ofae$*M{RjNanixGaea|WVRjM{RjNGj[t7xaW;W;",
    "extension": "jpg",
    "height": 1090,
    "width": 1090
  },
  "Overwhelmed": {
    "page": "design",
    "name": "Overwhelmed",
    "blurHash": "|CC#lj-q8{M{9Z8{.8~qRj#nozbvRjNGs:njaytRL$M{t,xutl-;IT9Fs:-VaeIpozbvWBxHozRP=yt7NaRjNGV[s:oyf5idM{g3x]t7oLWBM{RjjHaeWobHj]s:s:WBay%3xuayIUM{n*baxuxubvofjZWBV@Rjfkt7of",
    "extension": "jpg",
    "height": 1131,
    "width": 1128
  },
  "PlantSale": {
    "page": "design",
    "name": "Plant Sale",
    "blurHash": "|CLeA@}E#m}s=J$*r?N^#-={j[=dJ8aeso$P$jw{aKkVJ7RkS2jGxGsANv}XEgSg-Aw{$iSNWVj[}XwdJ7J7soWVNbWpJ8=HoeWVwwODfkoLoLoe;zj[s.njN^S4NuoeoL=dwwbHWVbHNvNuX7sAsln*jtsoSNj[S2WVw{",
    "extension": "jpg",
    "height": 1414,
    "width": 1000
  },
  "Potters": {
    "page": "design",
    "name": "Potters",
    "blurHash": "|RPrabb_yF%1yD={.S-;.9~Xoen$ozWBa~oIsoay_3xZWBoLWCWVM{WWRiM{WBWVWBofjsRkS4WC?GjFV[ofa{S5oJaea{w[ofogWXW;s,ozjZoftRn$oIa#WCfRWBaeWB?bazSNs9n$X9jvoys.XUayaeR.oJs.jbkBWC",
    "extension": "jpg",
    "height": 1393,
    "width": 1000
  },
  "Pride&Prejudice": {
    "page": "design",
    "name": "Pride & Prejudice",
    "blurHash": "|297U-xt0exu5Qb]wzxtt6X4ay9[WVNtSLWCWVaf0eWo^7ay-VsokBoeWC5*j[$kfPxHn+$*f8bt0ya|WoWBWCWVbFaybF~CoL-UoLoxs:JPoyi|0fR*$*ofR+ofNaR*jb?GWVS1oeRkjuWCjas:spspbYayoLS1R+s:e:",
    "extension": "jpg",
    "height": 2014,
    "width": 1309
  },
  "Radios": {
    "page": "illustration",
    "name": "Radios",
    "blurHash": "|3DI?w$$EM?aX-oz02%1RQOYE2Ios9nht6ofW=kWXmIV0L?ZD*WBofbGay?F~UR+E3I;4pIot5xZ0L~VRj01Rjxt-oIVoeofD*R*xZ%L?a%2ofNG4:afxtWAxZNGflxuxt-osnazkWR+WBoKsmt64:NGt6t7xaxFxtoyM|",
    "extension": "jpg",
    "height": 1080,
    "width": 1080
  },
  "Ranger": {
    "page": "illustration",
    "name": "Ranger",
    "blurHash": "|57d9QAE5I}dNZo~RLr|bUnXwbXCJY-NbdEe$xWAFpW+wOxTNtN6-5NYR+JDW-$vahI^xUjFR:t1v:a*S[nooNStWZspNGWTs:WXNZoZn%WBR~soS0bXWWjWs*WZWAfhk8w%X7SbsEj^W-oHoNWUr_n+kBW?WBofj=jua%",
    "extension": "jpg",
    "height": 1000,
    "width": 1000
  },
  "Recycle": {
    "page": "illustration",
    "name": "Recycle",
    "blurHash": "|fQI#o%2]-xu%#xuTy%MO@xvoLo#bHR*a}sooLjE.mbIOrf6RPoLrqaya0%gofRiaes.j[ofkCW;yDf6W;j[V@bIaeWVn$xZa}nioLS3o0kWayWBsnayjtkCWBfQWBayt7xZjtoea}j[j[WBaykDxaj[RjbHWBWVofjZR*",
    "extension": "jpg",
    "height": 1083,
    "width": 900
  },
  "Remedease": {
    "page": "design",
    "name": "Remedease",
    "blurHash": "|ABF%vt901ER%Ltl}?-:0Mu+%L9bM|%1nismw^M|0MK1~BxYNGbIE3Nd?FD*nPxZs.NeWXs:NbxtIXS#%1ayoJs:M|jFt69^nj-oayoKoKEMNG-UVZR*soxtNHWBxZRkM|cENbn%$%RkNH%1xaE3IVV@n$s9oeR+WCt6bH",
    "extension": "jpg",
    "height": 1128,
    "width": 1109
  },
  "RemedeaseAd": {
    "page": "design",
    "name": "Remedease Ad",
    "blurHash": "|89K$YyW0gY5IqY5NIY5R*pbj[xtkBj@j[IqWVWV4=WCt6ayxYo0s:ayxZC7WXafWWxYoexZj[xZ0hWV%1ayxZoeWVfkay~VoeEMWWW;WWkBj[j[=woLxtoeIqWVIqR+R+?[oeM|fkRka#aybHWV9^WCWBayxZoLxZoeoL",
    "extension": "jpg",
    "height": 1080,
    "width": 1080
  },
  "RoastersFest": {
    "page": "design",
    "name": "Roasters Fest",
    "blurHash": "|9Db+nxaJ5bt-V?GIoIooL.7kC%exaNGbFt7xtV@.7t6nlxaIoIpxt%2WB~pkCIobar]spa{RkWUtRfkxas:S1oft7oeM|^+oLM|fks:oLS1ofoexubGoLj[bGayRkoLo2xto2t6oLR*fjs:oeRkxtbGNGR*t7ofWBayj[",
    "extension": "jpg",
    "height": 2270,
    "width": 1551
  },
  "RoastersFestSocials": {
    "page": "design",
    "name": "Roasters Fest Socials",
    "blurHash": "|DHeI7_3-;D%yDaK-;-o~qx[WUs:s;tQkCWXbHjF?wx]njRPMxRjW:ozo1?GoJWVR*ozo2n+xaW=_2MxWCx]xuxajYs;SgyDW=aer?ixoJkVSNt7t7IUfk%Mxut7WBa#WV?Ht6W=S4R*n$s9jFWB_3WVo0xas:kCRjRjRP",
    "extension": "jpg",
    "height": 1980,
    "width": 1932
  },
  "Rose&Crown": {
    "page": "design",
    "name": "Rose & Crown",
    "blurHash": "|QQJ7Vxu~W-:Rk-pRk%LWCxtj[j[ayt6oeofs:Rj?aofIUWCWBWBt7ofj[^+oLRjofM|WBofayt6%Lj[RjWCj[j[WBWVj[xta|t6j[ofofRjWCj[oeayR*ayt6j[ayj[ayt7j[t7ayayofayayofWBayWBayt7oLWBayoe",
    "extension": "jpg",
    "height": 1083,
    "width": 1080
  },
  "SAI": {
    "page": "design",
    "name": "SAI",
    "blurHash": "|LT8{|,po}?vt-.8ae-;kC.8j@aKj[aKjFkCkWkWuipJaKVsVXaJaxfPae-Uj[kqkWkqkDaKaJVsVsaKadaekDkWkXkCfk.8kCaKaKaKkCkWozkCaeaekCkWkCf6aKaef6-;jYkCozkCe.aej[kWaKkCkDf6f6aeadaefk",
    "extension": "jpg",
    "height": 694,
    "width": 1008
  },
  "SimonJax": {
    "page": "illustration",
    "name": "Simon Jax",
    "blurHash": "|6C}eLtO01E3#kt9bX=2R-||Ip62%L-AnPNvfls.0_$+-BNGw5wa%2OWNGIt$e%1OYScM}rroyX81Joa|{VtXkkrNFIpr@1aS%=d#+srI.NGs:xZIoIqxEtQs:$%S$NGRlOsob=fRl9ta%OUs:xaWCRjs:ocX8s;RinRoI",
    "extension": "jpg",
    "height": 1200,
    "width": 1200
  },
  "SlitherinAndShiverin": {
    "page": "illustration",
    "name": "Slitherin and Shiverin",
    "blurHash": "|YR2DSxH_NxaP.x]t7%gkVpIs:niX8s:V@WVofo1yXt7TdXSmlV@i{r@Sgxaoyozj[X8V@niofXRyDkCR*jZn4fkS2X8n*%MaybHoLj[jZaebvayofa|V@jZaeaKb^kCoL%2aKj[fkWVjuf+kWjuozWBV@j[j[afbbofjF",
    "extension": "jpg",
    "height": 916,
    "width": 731
  },
  "Stay": {
    "page": "design",
    "name": "Stay",
    "blurHash": "|HR9tA=z-@=#kW-XW+$Qa1$+s:RjogWAW.tRV@oMSOoeM_kBkCWVs;ayj?-Ct8bIe.WBROofo}oJtTofRiWAe-s.bJWVoz-XRjoes:ogo#M{n$kCxZWXS2jFoJaxWVogRj=zafj[axozs:RjjbW;X8aes:a{Rjj[axofog",
    "extension": "jpg",
    "height": 1132,
    "width": 1114
  },
  "StolenRemains": {
    "page": "design",
    "name": "Stolen Remains",
    "blurHash": "|DC5C,s:0LNG?G%2RjM{S2weWCX8s:R*WBs:bHWC0fR*}[xaE2M|ozt7sVxts:M|NG%1t7NGV[s:%1s:NGR*t6kCjFniWpIoWBxut7NGRjs:t7a|Sga|WVWVsosoa|W;fQxuofRjRjt7t7WBjFR+NafQoej[sVjtWVayoe",
    "extension": "jpg",
    "height": 1128,
    "width": 1127
  },
  "SubmAIRine": {
    "page": "illustration",
    "name": "SubmAIRine",
    "blurHash": "|EPZM|?bIJ=|tT?cbd-;jvyD1nb_kEo#oiW?axR*:5M#$~wHa_t7WUf4V?tpOG%extjDR%adRkt6^tDrE7xBMzS0WFk9j^%%w?x[ozRPX9adoMM}NfVvRotNw@WAoukCbI_NxuD-S$aKRPt2s,xuWItQwaNeWAs:f+ogWF",
    "extension": "jpg",
    "height": 1259,
    "width": 1000
  },
  "Sven": {
    "page": "illustration",
    "name": "Sven",
    "blurHash": "|17dqF9F?b9Z4n_2IoD%Rj~pWB0LE1%L?H-pNGM{9GM{%2xuozR+WBxtofE1M|^+^+Io9GRj%2t7M{Ios:-;WVE1j?t7fl?aj@IoRkt6s:WBR*fk-;t7E1IVxu%LofRjRj?aofM{RjofxuofRjM{xuofM{Rjoft7ofaxM|",
    "extension": "jpg",
    "height": 1086,
    "width": 1086
  },
  "TastyBakeryDesktop": {
    "page": "design",
    "name": "Tasty Bakery Desktop",
    "blurHash": "|JL:QK9]X5^P$#%1t4^P$2D$EO-QxCxFWUwbxZxW+Ia$xGWXOENeaLWYSh+sw@Nefloxoeb^WCbHPT$~WAX9wJwIoMNZniT^$*i_S4ogf9n+R*sDqaoLxaWBSwbabbnikW}WkWbbjZRjr@W;Wna#I,soNaNGogozsCWUsp",
    "extension": "jpg",
    "height": 1365,
    "width": 1154
  },
  "TastyBakeryPhone": {
    "page": "design",
    "name": "Tasty Bakery Phone",
    "blurHash": "|UM7Gs{,bv=1XT=zv|-B#mS#M|r?xtW-jFofofofiwoMW;aKf5WBofkBWUx]s:njRjR*ofoej]kC%Lw0RkXSoLX7V@WEW:.8xGi{X8WBoMaKV[WBXO#,n*OXaeS3oNR+X8t,xtnhNHafjGaya{WBx]r@V?buWBR*j]WqWp",
    "extension": "jpg",
    "height": 1365,
    "width": 812
  },
  "ThankYouCard": {
    "page": "design",
    "name": "Thank You Card",
    "blurHash": "|YHoB@t7Rjt7Dis:9FWBIU00WBofaexuayxuayxuD%WBayayoffQt7ayt7-;ayt7ofRjofM{ayM{WBayM{WBofayxuj[ozj[j[j[ayofayj@j[WB4nay%Mayt7j[fQj[WB~qofIUa|Rjayayj[ayIUj[t7WBofayayj[j[",
    "extension": "jpg",
    "height": 1195,
    "width": 871
  },
  "TheBay": {
    "page": "illustration",
    "name": "The Bay",
    "blurHash": "|GCi:e8xN1%gRPtQWBs9oe~W9ZV@xat6WBWBs.kBx^IUxZfRt7V[WVofWCE,r=xYI:xGoeWBbIf+9w-TxDIpt6axn$WVWqJ.$in%SOa#f6s:WDjuozn%RjxtWAf5odWDoL%2RlRkxtWBWCjsa}oLxaNHW;s.WVj[e.j[oL",
    "extension": "jpg",
    "height": 1640,
    "width": 2360
  },
  "TheEnd": {
    "page": "design",
    "name": "The End",
    "blurHash": "|AHZ|Rs*WCsAj[]nsmNwW:=]}FS2EzxF,?WXNuso-T=ej?S4w{W.JRw^$P^4$jsowwS4Sgw^WXSN]-$jbHS2S2oLw{o2WV]n$hsoS4sAsnODsnsBs.xFsosUS2a|soSLWW,sw{WojtSMbG$PjtSLbFwfWVN[oLsojtjtWp",
    "extension": "jpg",
    "height": 1001,
    "width": 1000
  },
  "TheHitchhikersGuideToTheGalaxy": {
    "page": "design",
    "name": "The Hitchhikers Guide to the Galaxy",
    "blurHash": "|395T_wM1G-VABjGKMNIEf{mk8OnNHs.xGEfxGkB1sS2$kj?#;n+azW;w{2.R,I;kV,FWB-BI;r@1HxZt5EMxGt6NGs:$%$%R+jZ$%J7NbofsBWCB6R+r@f+s.n%s.n%WVEfxZ-BEMSg$%Rks:ofbIRln$%0NaI;$*WVR*",
    "extension": "jpg",
    "height": 2012,
    "width": 1308
  },
  "TheMill": {
    "page": "illustration",
    "name": "The Mill",
    "blurHash": "|hJk7c9Goyxvt8%2azt7bI_4NHt3ogWYoej[ofWXD,t7smM|NHRQWXjZoJNMogocR+WUaxR,WVof%Mt7ocR.jsofa#jZkC%3ofazjYjrkCf6oeazR.bGafR*R*WBj[kCjsWCa#jboefRWBj]oJayxua$oeoffSj]j[aeWC",
    "extension": "jpg",
    "height": 1411,
    "width": 1000
  },
  "Thrift&Gift": {
    "page": "design",
    "name": "Thrift & Gift",
    "blurHash": "|AG6*3^O1HIX0#J8EzoxNw}=%HNuIsIrNKxDxENb1@ovwgRlnTR+$%xFoK%0kCRlWCNIR+ays.t50gI=$*xY-Aofs.oKW.0$Ir$j$$$%s.juj[ocnUI=NtxYxWfjWCa|s.aMIqoexYxZoxjbWWR+,[WESdt5kSj?WDS3R,",
    "extension": "jpg",
    "height": 2829,
    "width": 2000
  },
  "Thrift&GiftSocials": {
    "page": "design",
    "name": "Thrift & Gift Socials",
    "blurHash": "|ME_]mS4?c%1_Mbc?uxa?v$*S2WXs.W;WWoeoLW;_3ofaxbHWBoeWBj[WBofn+j]k9ofWEoea|ju~qbIRkt6WBWXf5oeRkxaWWj[oLj[j@j[jbfk?coLaefkWBoeWBbHWBt7o2fRj@oLWXoej[bH_3s:R*bae.WXaeoeWB",
    "extension": "jpg",
    "height": 2000,
    "width": 2000
  },
  "TurnMeOn": {
    "page": "illustration",
    "name": "Turn Me On",
    "blurHash": "|9AUdMQv1I^,xuK#$,xvMxp{R8bJx]xuniNtR*a0GUvf+HB%M_+IJPS1xGXkWTV@RkS$nPWUbYjFzsTecY-CsDS~t7spoztSt8tlkVRijujug3ozIAR*o}Z%Vso}t7niSMozVsWXo}Q-S1o}n%W;S#oMt7S1aespbIj[s;",
    "extension": "jpg",
    "height": 1594,
    "width": 2000
  },
  "Uprooted": {
    "page": "design",
    "name": "Uprooted",
    "blurHash": "|mFPvUNHWXjEX9t7WBa}j?_MoykCRjozoeaykBoLTJxZofbcoIR*fkofWVNuofjZt7adR*kCfjWVbvR+WBs:Rkayj[afaytkWBV@WBa#j[ayWCf6bbofWBWBofj[oeayj[axofkBofWVfQofaykCWBofofofj[j@azayj]",
    "extension": "jpg",
    "height": 2014,
    "width": 1311
  },
  "Water": {
    "page": "illustration",
    "name": "Water",
    "blurHash": "|26dN|1ry[LeMJ%$J~*0TI*h8t=hPSo}rEI-w1N?*L7q;BJ~WBrEO;w~S};VGq,KMdogxbOnsqXR,KG9%4Mco}nPSKn+bv*0NEn,Wna$o}aKt8Vsn5WAV@tkaeV@i{kWaeu5a0WBaKozayniXSo#WVtRWUaKoff+aKXSf6",
    "extension": "jpg",
    "height": 1081,
    "width": 1080
  },
  "WayStation": {
    "page": "illustration",
    "name": "Way Station",
    "blurHash": "|2Ac}PRgPDyEXR?dIS?JR#S]xcR%odn#j=ofj?s;0yO9$yMxV?V@NGt7V@^-WAn-WBtSxvV[V]t754?0M^xvt9NE-rRixc.8R$j=jbITInW.W,RjIoWYozk8oct3bENFbH%Nt7bEn-WWxvWCs;og-=R%nmRiogohR%t7ay",
    "extension": "jpg",
    "height": 1000,
    "width": 1000
  },
  "WesternAirTemple": {
    "page": "illustration",
    "name": "Western Air Temple",
    "blurHash": "|KEd*cfNNGfPxGxGNas:R*$Jt6ogoLo0ayW;oLWW}txYfhs.jboeWVjaS2^6j=s:oLj?s.WVj[a|-ToJa{f7s:aybHj[WV^Qs,WUWVsnj[WVoLWVnOs,ofj[o1ayoLf6j[-Vs,oJayofj[jZazayWBoJoeWVf6a|fiWVoL",
    "extension": "jpg",
    "height": 2829,
    "width": 2000
  },
  "WhiteCliffsOfVictoria": {
    "page": "illustration",
    "name": "White Cliffs Of Victoria",
    "blurHash": "|YHL@*=XR.XTwIt7ShkCr=?^W=s:bIr?j[W=s:jGAKFfxDsSW=WqoJj[bIxaofn%smj[j[j@WXoLR+rroLj]oJa#j[oLayo{xWafoLbHj[o2WWj@xB$%WCjuoLjZjaayj[NMi|fkkBjaayoLoLa#tQoffPoLWWj@oKa}j[",
    "extension": "jpg",
    "height": 1589,
    "width": 2000
  },
  "WiseOldWorm": {
    "page": "illustration",
    "name": "Wise Old Worm",
    "blurHash": "|LD,i:Fx9E-V9ZsCofkXVs?^XTRQsnM{e.bIozV@E0xFs:NHxZWBWCkCkWD*rrofS2s:WVoeR*ofIAsAt7SLjZoet7RjoJRje.oeWXjYofW;oLfkROWVf+jZt7R*R*s:S2nOWqWVs:ofRjoLofR*i_WBkCofW;jtofa}WA",
    "extension": "jpg",
    "height": 1200,
    "width": 1201
  },
  "Witch": {
    "page": "illustration",
    "name": "Witch",
    "blurHash": "|8BVt{]=001F^%}[sDQ:xF0LEf^h=wNL9zR*kkS0DRbI.6spR5V?X9tRj=kps;wKM{ENyC%1MeaKIpj[kCfl%1nOMzkoS#-.oeIWRlo_S1V]xGs:S0NHt7xtMzbHxtNIR*rsjFS~XSn$i_o2ofWXxtofNGV]t7X7R*oLxG",
    "extension": "jpg",
    "height": 1080,
    "width": 1080
  },
  "Wonder": {
    "page": "design",
    "name": "Wonder",
    "blurHash": "|bNS$Y.kVts:tQ%1kCxatQ?sIWaKtQazV@kBoyWBX,nPkAX8e.j[j[aze:s:n%bbnjf6f+jZafkBs:bFj[aeaybbjsayWVkVnjaybaoejtayj[oetQofayf6ayafayayWB%LkCkBayayj[ayf6aeafWCoeayj[a{ayfjkB",
    "extension": "jpg",
    "height": 1000,
    "width": 1000
  },
  "Wow": {
    "page": "design",
    "name": "Wow",
    "blurHash": "|CDaAiWWEfso5ls:5layEf$*R*WVNaj[xGo1xGay0fWV=eS2-BsosoxGw{R*EfxGxGR*xGJ7ofNa}ZR*s:soJ7WpbHbGEfs:xGxGWVj[S2sosoo1s:WVEfoL$*oLNaj[$jxG$jJ7S2s:NaR*NaWp5loLsoNaR*j[-Bs:WV",
    "extension": "jpg",
    "height": 1000,
    "width": 1707
  },
  "XmasBash": {
    "page": "design",
    "name": "Xmas Bash",
    "blurHash": "|NI:%yof|HxGxt$*K4%2Nv0JWBxGaxkCWoRjWBni}us:BkkCJRS2s.WVxGxaofsmoLa1o1ofofbIvNayxajasWofV@jFS1?HayNGbHbGWBt6jZoLK0WVbuWVjFayoMkCjG#8oLkWjuofofRjafSepbofVZf8nijZkCfkbH",
    "extension": "jpg",
    "height": 2829,
    "width": 2000
  }
  // GENERATED PORTFOLIO ITEMS END - DO NOT CHANGE THIS LINE
} as const;

export default PortfolioItems;
