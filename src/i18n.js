import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    translation: {
      //Nav component
      "nav.home": "Home",
      "nav.employment": "Employment",
      "nav.customer": "Customer",
      "nav.about Us": "AboutUs",
      "nav.contact Us": "ContactUs",

      //HomeFirstSection component
      "homefirst.water": "WATER DISTRIBUTION",
      "homefirst.delivery": "Delivery to all lebanese regions",
      "homefirst.supplying": "Supplying Clean, Clear Water",
      "homefirst.moreinfo": " A privately owned company specializing in bulk water delivery for a multitude of uses including swimming pools, hot tubs, ponds, irrigation, commercial construction, tank setting and clean-ups",
      "homefirst.seller": "Seller",
      "homefirst.buyer": "Buyer",
      "homefirst.supplying": "Supplying Clean, Clear Water",
      "homefirst.supplying": "Supplying Clean, Clear Water",

      //HomeSecondSection component
      "homesecond.selling": "SELLING POINTS ",
      "homesecond.direction": "For directions, click on your nearest location.",
      "homesecond.with": "With one click we will",
      "homesecond.be": "be there",
      "homesecond.down": "DOWNLOAD OUR APP",

      //HomeThirdSection
      "homethird.filling": "Filling all different sizes",
      "homethird.just": "JUST GIVE",
      "homethird.us": "US",
      "homethird.call": "A CALL",
      "homethird.storage": "Storage Tanks",
      "homethird.provide": "Providing potable water to irrigate crops at reasonable prices",
      "homethird.pools": "Swimming Pools",
      "homethird.pool": "Give us a call to arrange to deliver water for your swimming pool quickly and for a fair price. We also can fill or pond as well",

      //Footer
      "footer.home": "Home",
      "footer.employment": "Employment",
      "footer.customer": "Customer",
      "footer.about Us": "About Us",
      "footer.contact Us": "Contact Us",
      "footer.term of use": "Term Of Use",
      "footer.privacy": "Privacy policy",
      "footer.help": "Help/FAQ",

      //About Us
      "aboutus.about": " About Vita",
      "aboutus.info1": "Vita is a company specializing in the distribution of drinking water and the management and maintenance of swimming pools. We meticulously selected a name that embodies the essence of pure life.",
      "aboutus.info2": "it extracts water from deep springs, where we filter the water professionally, and our expert examine the water in our own laboratories to reach the best result.",

      //Contact Us
      "contactus.contact": "Contact Us",
      "contactus.email": "Email us",
      "contactus.call": "Call us",
      "contactus.fb": "Facebook",
      "contactus.twt": "Twitter",

      "contactus.popular": "Popular Topics",
      "contactus.product": "Product issue or quality complaint",
      "contactus.share": "Share your story or compliment",
      "contactus.send": "Send us a suggestion",
      "contactus.question": "Question about a promotion",
      "contactus.careers": "Careers",
      "contactus.find": "Find a product",

      //Emplyment
      "emp.become": "Become a vita Partner",
      "emp.empinfo": "Enter your information below in order to be contacted by a vita representative to complete your registration.",
      "emp.businessInfo": "BUSINESS  Information",
      "emp.businessType": "BUSINESS TYPE",
      "emp.first": "FIRST NAME",
      "emp.last": "LAST NAME",
      "emp.phone": "PHONE NUMBER",
      "emp.email": "EMAIL",
      "emp.address": "BUSINESS ADDRESS",
      "emp.tank": "WATER TANK VOLUME",
      "emp.submit": " SUBMIT",

      //Customer
      "cust.title": "For Our Customers",
      "cust.watertank": "WATERTANK",
      "cust.vat": "(INCLUDING VAT)",
      "cust.order":"Order",
      "cust.swimming": "SWIMMING POOL",
      "cust.cal1": "Calculation For The Round Pool",
      "cust.avg": "Average Depth Of The Pool",
      "cust.pool": "Your Pool Take Around",
      "cust.cal2": "Calculation For The Rectangular Pool",
      "cust.length": "Length Of The Pool",
      "cust.width": "Width Of The Pool",
      "cust.liter": "Liter of water",
      "cust.calc": "Calculate",
      "cust.diameter": "Diameter Of The Pool",
      "cust.view2":"View my order",
      "cust.view1":"View all suplier",
      "cust.view3":"View all offers",



      "login.welcome": "Welcome",
      "login.serverError": "Server Error",
    }
  },

  ar: {
    translation: {
      //Nav component
      "nav.home": "الرئيسية",
      "nav.employment": "توظيف",
      "nav.customer": "عملاء",
      "nav.about Us": "معلومات عنا",
      "nav.contact Us": "اتصل بنا",

      ////HomeFirstSection component
      "homefirst.water": "توزيع مياه ",
      "homefirst.delivery": "توصيل لكافة المناطق اللبنانية",
      "homefirst.supplying": "توفير المياه النظيفة والنقية",
      "homefirst.moreinfo": "شركة مملوكة للقطاع الخاص متخصصة في توصيل المياه بكميات كبيرة للعديد من الاستخدامات بما في ذلك حمامات السباحة، وأحواض المياه الساخنة، والبرك، والري، البناء التجاري، وإعداد الخزانات والتنظيفات",
      "homefirst.seller": "بائع",
      "homefirst.buyer": "مشتري",

      //HomeSecondSection
      "homesecond.selling": "نقاط بيع - مراكز البيع",
      "homesecond.direction": " للحصول على الاتجاهات، انقر على أقرب موقع لديك.",
      "homesecond.with": " بنقرة واحدة سوف نفعل ذلك ",
      "homesecond.be": "نكن هناك",
      "homesecond.down": "قم بتنزيل تطبيقنا",

      //HomeThirdSection
      "homethird.filling": "تعبئة جميع المقاسات المختلفة",
      "homethird.just": "فقط عليك",
      "homethird.us": "بالاتصال",
      "homethird.call": "بنا",
      "homethird.storage": "صهاريج التخزين",
      "homethird.provide": "توفير المياه الصالحة للشرب ولري المزروعات وبأسعار مناسبة",
      "homethird.pools": "أحواض سباحة",
      "homethird.pool": "اتصل بنا لترتيب توصيل المياه لحمام السباحة الخاص بك بسرعة وبسعر عادل. يمكننا  ملء البركة أيضًا",

      //Footer
      "footer.home": "الرئيسية",
      "footer.employment": "توظيف",
      "footer.customer": "عملاء",
      "footer.about Us": "معلومات عنا",
      "footer.contact Us": "اتصل بنا",
      "footer.term of use": "شروط الاستخدام",
      "footer.privacy": "سياسة الخصوصية",
      "footer.help": "مساعدة/التعليمات",

      //About Us
      "aboutus.about": " نبذة عن شركة فيتا",
      "aboutus.info1": "فيتا هي شركة متخصصة في توزيع مياه الشرب وإدارة وصيانة حمامات السباحة. لقد اخترنا بدقة اسمًا يجسد جوهر الحياة النقية.",
      "aboutus.info2": "نقوم باستخراج المياه من الينابيع العميقة، حيث نقوم بتصفية المياه بشكل احترافي، ويقوم خبيرنا بفحص المياه في مختبراتنا الخاصة للوصول إلى أفضل نتيجة",

      //Contact Us
      "contactus.contact": "تواصل معنا",
      "contactus.email": "ارسل لنا عبر البريد الإلكتروني",
      "contactus.call": "أتصل بنا ",
      "contactus.fb": "فيسبوك",
      "contactus.twt": "تويتر",
      "contactus.popular": "موضوعات شعبية",
      "contactus.product": "مشكلة المنتج أو شكوى الجودة",
      "contactus.share": "شارك قصتك أو مجاملة",
      "contactus.send": "أرسل لنا اقتراحا",
      "contactus.question": "سؤال حول ترقية",
      "contactus.careers": "وظائف",
      "contactus.find": "ابحث عن منتج",

      //Emplyment
      "emp.become": "كن شريكًا مع فيتا",
      "emp.empinfo": "أدخل معلوماتك أدناه ليتم الاتصال بك من قبل ممثل فيتا لإكمال تسجيلك.",
      "emp.businessInfo": "معلومات العمل",
      "emp.businessType": "نوع العمل",
      "emp.first": "الاسم الأول",
      "emp.last": "اسم العائلة",
      "emp.phone": "رقم الهاتف",
      "emp.email": "البريد الالكتروني",
      "emp.address": "عنوان العمل",
      "emp.tank": "حجم خزان المياه",
      "emp.submit": " تقديم الطلب",

      //Customer
      "cust.title": "لعملائنا",
      "cust.watertank": "خزان المياه",
      "cust.vat": "(بما في ذلك ضريبة القيمة المضافة)",
      "cust.order":"أطلب",
      "cust.swimming": "حمام السباحة",
      "cust.cal1": "حساب للمسبح المستدير",
      "cust.avg": "متوسط ​​عمق حوض السباحة",
      "cust.pool": "حمام السباحة الخاص بك يستوعب",
      "cust.cal2": "حساب للمسبح المستطيل",
      "cust.length": "طول حمام السباحة",
      "cust.width": "عرض حمام السباحة",
      "cust.calc": "أحسب",
      "cust.liter": "ليتر المياه",
      "cust.diameter": " قطر حمام السباحة",
      "cust.view2":"عرض جميع الموردين",
      "cust.view1":"عرض جميع طلباتي",
      "cust.view3":"عرض جميع العروض",
      // Login
      "login.welcome": "اهلا",
      "login.serverError": "Server error",

    }
  },

};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
