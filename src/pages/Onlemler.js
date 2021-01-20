import React from "react";
import { ReactComponent as Cough } from '../components/icons/Cough.svg';
import { ReactComponent as Fever } from '../components/icons/Fever.svg';
import { ReactComponent as Lungs } from '../components/icons/Lungs.svg';
import { ReactComponent as SocialDistancing } from '../components/icons/SocialDistancing.svg';
import { ReactComponent as WashHands } from '../components/icons/WashHands.svg';
import { ReactComponent as TouchEye } from '../components/icons/TouchEye.svg';
import { ReactComponent as ShakeHands } from '../components/icons/ShakeHands.svg';
import { ReactComponent as Vantilation } from '../components/icons/Vantilation.svg';
import { ReactComponent as ClipBoard } from '../components/icons/ClipBoard.svg';


import '../styles/pages/_onlemler.scss';

const Onlemler = () => (
  <div className="container">
    <section id="symptoms">
      <h2 class="section__header">Bilinen Semptomlar</h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-2">
        <div class="bg-white rounded inline-flex">
          <div class="p-4 flex false">
            <div class="p-2 rounded-full mr-4 flex items-center justify-center bg-teal-600 print__symptom-icon">
              <Cough className="fill-current text-white w-8 h-8" />
            </div>
            <h4 class="text-xl font-medium flex items-center leading-snug print__font-black">
              Kuru Öksürük
            </h4>
          </div>
        </div>
        <div class="bg-white rounded inline-flex">
          <div class="p-4 flex false">
            <div class="p-2 rounded-full mr-4 flex items-center justify-center bg-teal-600 print__symptom-icon">
              <Fever className="fill-current text-white w-8 h-8" />
            </div>
            <h4 class="text-xl font-medium flex items-center leading-snug print__font-black">
              Yüksek Ateş
            </h4>
          </div>
        </div>
        <div class="bg-white rounded inline-flex">
          <div class="p-4 flex false">
            <div class="p-2 rounded-full mr-4 flex items-center justify-center bg-teal-600 print__symptom-icon">
              <Lungs className="fill-current text-white w-8 h-8" />
            </div>
            <h4 class="text-xl font-medium flex items-center leading-snug print__font-black">
              Nefes zorluğu
              </h4>
          </div>
        </div>
      </div>
    </section>
    <section id="measures" class="bg-teal-600 text-white pb-4">
      <h2 class="section__header">Kendinizi korumak için neler yapabilirsiniz?</h2>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">
        <div class="flex false">
          <div class="print__measure-icon false">
            <SocialDistancing className="w-16 h-16 fill-current" />
          </div>
          <div class="ml-4">
            <h4 class="font-semibold text-2xl leading mb-2 print__font-black false">Sosyal Mesafe</h4>
            <p class="text-red-100 font-semibold print__font-black false">
              Eğer yapabiliyorsanız lütfen evinizde kalın.Virüsten korunmak için en iyi yol budur. Eğer mümkünse, eviniziden çalışın. Acil bir durum olmadığı sürece evden çıkmayın.
                </p>
          </div>
        </div>
        <div class="flex false">
          <div class="print__measure-icon false">
            <WashHands className="w-16 h-16 fill-current" />
          </div>
          <div class="ml-4">
            <h4 class="font-semibold text-2xl leading mb-2 print__font-black false">Ellerinizi yıkayın</h4>
            <p class="text-red-100 font-semibold print__font-black false">
              Elinizi su ve sabunla en az 15-20 saniye yıkayın. Eğer bu mümkün değilse, en az %60 alkol içeren el temizleyicisi veya kolonya kullanın.
                </p>
          </div>
        </div>
        <div class="flex false">
          <div class="print__measure-icon false">
            <TouchEye className="w-16 h-16 fill-current" />
          </div>
          <div class="ml-4">
            <h4 class="font-semibold text-2xl leading mb-2 print__font-black false">Yüzünüze dokunmayın</h4>
            <p class="text-red-100 font-semibold print__font-black false">
              Ellerinizi gözünüzden, burnunuzdan ve ağzınızdan uzakta tutun.
                </p>
          </div>
        </div>
        <div class="flex false">
          <div class="print__measure-icon false">
            <ShakeHands className="w-16 h-16 fill-current" />
          </div>
          <div class="ml-4">
            <h4 class="font-semibold text-2xl leading mb-2 print__font-black false">Tokalaşmayın</h4>
            <p class="text-red-100 font-semibold print__font-black false">
              Salgın tamamen bitene kadar, lütfen tokalaşmayın. İnsanlarla mesafenizi koruyun. Selamlaşmak için tokalaşmak şart değildir.
                  </p>
          </div>
        </div>
        <div class="flex false">
          <div class="print__measure-icon false">
            <Vantilation className="w-16 h-16 fill-current" />
          </div>
          <div class="ml-4">
            <h4 class="font-semibold text-2xl leading mb-2 print__font-black false">Evinizi havalandırın</h4>
            <p class="text-red-100 font-semibold print__font-black false">
              Evinize giren hava miktarını camı açarak artırın. Düzgün havalandırma virüs patojenlerinin yayılımını azaltır.
                  </p>
          </div>
        </div>
        <div class="flex false">
          <div class="print__measure-icon false">
            <ClipBoard className="w-16 h-16 fill-current" />
          </div>
          <div class="ml-4">
            <h4 class="font-semibold text-2xl leading mb-2 print__font-black false">Bağışıklığınızı güçlü tutun</h4>
            <p class="text-red-100 font-semibold print__font-black false">
              Yeterli düzeyde uyku aldığınızdan emin olun, sağlıklı beslenin ve vitamin almaya özen gösterin. Mümkünse ev içerisinde hareket edin, spor yapın.
                </p>
          </div>
        </div>
      </div>
    </section>
    <section id="questions">
      <h2 class="font-medium mb-2 text-xl uppercase print__font-black">Sıkça Sorulan Sorular</h2
      ><div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700 pt-4 mt-8">
        <h4 class="font-semibold text-xl mr-16 mb-2 print__font-black false">Bir aşısı var mı?</h4>
        <p class="text-lg text-teal-100 print__font-black false">
          Henüz geliştirilmiş bir aşı yok.
          </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700 pt-4 mt-8">
        <h4 class="font-semibold text-xl mr-16 mb-2 print__font-black false">COVID-19 nasıl yayılır ve bilinen semptomları nelerdir?</h4>
        <p class="text-lg text-teal-100 print__font-black false">
          COVID-19 en çok solunum yoluyla yayılır, yani hastalığın bulaşması için, hasta birinin 6 adım yakınında bulunmak ve havadaki virüs parçalarına denk gelmeniz yeterlidir. COVID-19 dokunma yoluyla da bulaşabilir. Hastalık taşıyan bir yüzeye dokunmanız ve ellerinizi ağız, burun veya gözünüze götürmeniz durumunda bulaşabilir.Ancak bu virüsün ana yayılım şekli değildir. Semptomlar 2 ile 14 gün içerisinde belirebilir.Yaygın görülen semptomlar yüksek ateş, öksürme, burun akıntısı ve nefes almada güçlüktür.
          </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700 pt-4 mt-8">
        <h4 class="font-semibold text-xl mr-16 mb-2 print__font-black false">COVID-19 semptomları kaç günde ortaya çıkar?</h4>
        <p class="text-lg text-teal-100 print__font-black false">
          Belirtiler virüse maruz kaldıktan sonra 2 ile 14 gün arasında açığa çıkar.Yayılımı önlemek için, pek çok devlet 14 gün boyunca izole olmanızı zorunlu kılar.
          </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700 pt-4 mt-8">
        <h4 class="font-semibold text-xl mr-16 mb-2 print__font-black false">COVID-10 nasıl tedavi edilir?</h4>
        <p class="text-lg text-teal-100 print__font-black false">
          Henüz bilinen bir tedavi bulunamamıştır. Ancak semptomlara sahip hastalara bu semptomları yenebilmesi için yardımcı tedaviler uygulanmaktadır. Kesin tanı konulan vakalarda, semptomlar orta ölçekte başlayıp şiddetlenerek ölümcül bir hal almaktadır. Hastalığın ciddi evresinde, hayati organlar için de yardımcı tedaviler uygulanması gerekmektedir. Belirtileriniz ciddileşirse (örneğin nefes almakta zorluk yaşarsanız) lütfen bir sağlık kuruluşuna başvurun. Hastaneye gitmeden önce mutlaka maskenizi takın ve koruyucu kıyafetler giyin.
          </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700 pt-4 mt-8">
        <h4 class="font-semibold text-xl mr-16 mb-2 print__font-black false">Virüsün öldürme oranı nedir?</h4>
        <p class="text-lg text-teal-100 print__font-black false">
          Şu anda virüsten dolayı ölüm oranı %1-5 arasındadır. Ama bu virüs tanısı konan hastalar için geçerlidir. Gerçek ölüm oranı farklı olabilir.
            </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700 pt-4 mt-8">
        <h4 class="font-semibold text-xl mr-16 mb-2 print__font-black false">Antibiyotikler virüse karşı etkili midir?</h4>
        <p class="text-lg text-teal-100 print__font-black false">
          Hayır. Antibiyotikler virüslere karşı etkisizdir. Sadece bakterilere karşı etki gösterebilirler. COVID-19 virüsten kaynaklı bir salgındır, dolayısıyla antibiyotikler tedavi için veya korunma için kullanılmaz.
            </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700 pt-4 mt-8">
        <h4 class="font-semibold text-xl mr-16 mb-2 print__font-black false">Bağışıklık sistemimi nasıl güçlendirebilirim?</h4
        ><p class="text-lg text-teal-100 print__font-black false">
          Düzenli uyku en önemli faktördür. Her gün en az 8 saat uyuduğunuzdan emin olun. Dengeli ve çeşitli bir diyet de bağışıklığınızı güçlendirir. Yeterli düzeyde vitamin, mineral aldığınızdan emin olun. Özellikle C, D, E vitaminleri ve Selenyum, Çinko minerallerini almanız oldukça önemlidir.
                </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700 pt-4 mt-8">
        <h4 class="font-semibold text-xl mr-16 mb-2 print__font-black false">COVID-19'dan iyileştiğimde tekrar yakalanma olasılığım var mıdır?</h4>
        <p class="text-lg text-teal-100 print__font-black false">
          Muhtemelen hayır. Bazı hastalarda, iyileştikten sonra yapılan testler pozitif çıktı. Ama bu büyük olasılıkla semptomların geçmiş ancak virüsün hala vücuttan çıkmaması durumundan dolayı. Bulgular bu durumu %100 kesinleştirmek için yeterli değil.
                    </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700 pt-4 mt-8">
        <h4 class="font-semibold text-xl mr-16 mb-2 print__font-black false">Virüs semptomlarını azaltmak için ateş düşürücü ilaçlar (ibuprofen ya da cortisone gibi) almamam gerektiğini duydum. Bu doğru mu?</h4>
        <p class="text-lg text-teal-100 print__font-black false">
          Muhtemelen evet. Bu konuda henüz kesin bir bilgi yok ancak Fransa Sağlık Bakanlığı bu tür, doktor onayı olmadan alınan ilaçların virüste karmaşıklığa yol açtığını ve ölümcül sonuçları olabileceğini duyurdu. Ayrıca, yüksek ateş vücudumuzun hastalıklarla mücadelede kullandığı bir savunma biçimidir. En güvenli yol, bir ilaç almadan önce mutlaka doktorunuza danışmanızdır.
            </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700 pt-4 mt-8">
        <h4 class="font-semibold text-xl mr-16 mb-2 print__font-black false">Çinkonun virüsün vücuda yayılımını durdurduğunu duydum, bu doğru mu?</h4>
        <p class="text-lg text-teal-100 print__font-black false">Hayır. Çinko bağışıklık sisteminizi güçlendirebilir ama sizi COVID-19'dan koruduğuna dair hiçbir çalışma yoktur.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700 pt-4 mt-8">
        <h4 class="font-semibold text-xl mr-16 mb-2 print__font-black false">Dezenfektan spreyler veya ıslak mendiller vücudumuzu virüsten korumak için kullanılabilir mi?</h4>
        <p class="text-lg text-teal-100 print__font-black false">Hayır. Her zaman genel temizlik kurallarına uyun. Bilmediğiniz dezenfektanlar cildinize ve gözünüze zarar verebilir. Dezenfektanlar insanların veya hayvanların kullanımına yönelik değildir, zorlu yüzeyleri dezenfekte etmek içindir.
          </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700 pt-4 mt-8">
        <h4 class="font-semibold text-xl mr-16 mb-2 print__font-black false">Çinden gelmiş ürünlerden COVID-19 virüsü kapabilir miyim?</h4>
        <p class="text-lg text-teal-100 print__font-black false">
          Şu anda, virüsün ithal edilen ürünlerden (yiyecekler, mamalar, ilaçlar da dahil) bulaşabildiğine dair bir kanıt yoktur. Ambalajlı ürünlerde bulunan hava boşluğu virüsün çoğalması için elverişli değildir. Henüz ithal edilen ürünler yüzünden hastalanan bir vaka yoktur.
              </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700 pt-4 mt-8">
        <h4 class="font-semibold text-xl mr-16 mb-2 print__font-black false">Genç ve sağlıklı bir bireyim, neden virüse karşı dikkatli olmalıyım?</h4>
        <p class="text-lg text-teal-100 print__font-black false">
          Öncelikle, herhangi bir virüs herkes için büyük bir tehdit, özellikle de solunum yolunuzu hedef alanlar.İkinci olarak, diğer insanlara hastalık bulaştırmak istemeyiz.Üçüncü ve en önemlisi, hastanelere yük olmamamız gerekir. Eğer çok fazla kişi aynı anda hasta olursa, kritik hastalar için yeterli hastane kapasitesi olmaz. Bu virüsten hızlıca kurtulmak için herkes kendini korumalı ve kurallara uymalıdır.
                  </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700 pt-4 mt-8">
        <h4 class="font-semibold text-xl mr-16 mb-2 print__font-black false">En riskli gruplar hangileridir?</h4
        ><p class="text-lg text-teal-100 print__font-black false">
          En büyük risk altında olanlar bağışıklık sistemi zayıf olan insanlardır. Örneğin kanser, HIV hastası veya kronik hastalığı olan kimseler. Diğer risk altında olanlar, yaşlılar, hamileler, sigara tüketenler ve aşırı kilolu insanlar.
                    </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700 pt-4 mt-8">
        <h4 class="font-semibold text-xl mr-16 mb-2 print__font-black false">Maskeler işe yarar mı?</h4>
        <p class="text-lg text-teal-100 print__font-black false">
          Maske sizi enfekte olmaktan korumaz. Eğer hastaysanız, maske giyerek virüsün diğer insanlara yayılma riskini azaltmalısınız. Eğer hasta değilseniz, maske giymek zorunda değilsiniz. Sağlık çalışanları için yeterli sayıda maske kalmayabilir, maskelerinizi daha sonrası için saklamalısınız.
                        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-700 pt-4 mt-8">
        <h4 class="font-semibold text-xl mr-16 mb-2 print__font-black false">Virüs yüzeylerde ne kadar süre kalır?</h4>
        <p class="text-lg text-teal-100 print__font-black false">
          Virüslerin sert yüzeylerde 3-4 gün kaldığını varsayıyoruz. Kimi durumlarda 17güne kadar kaldığı olabiliyor. Bu konuda veri gelmeye devam ediyor. Yumuşak yüzeylerde ise (kumaş gibi) birkaç saate kadar kalabiliyor.
            </p>
      </div>
    </section>
    <footer id="footer">
      <div class="mx-auto w-full px-4 lg:px-0 lg:w-1/2 flex flex-col justify-center py-8 print__font-black">
        Bu içerik virüse karşı farkındalık oluşması amacı ile hazırlandı. Bu bilgiler dünya genelinde, saygın medikal websitelerinden derlenerek oluşturuldu. Eğer herhangi bir semptom gösteriyorsanız lütfen doktorunuzla iletişime geçin.
        </div>
    </footer>
  </div>

);

export default Onlemler;
