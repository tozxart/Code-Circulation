import Image from "next/image";
import {
  Car,
  AlertTriangle,
  Download,
  Clock,
  Gauge,
  Battery,
  ThermometerSun,
  FuelIcon as Oil,
  StopCircle,
  ArrowUp,
} from "lucide-react";
import Footer from "@/components/footer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function CodeRouteBMainPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          دروس مخصصة
          <br />
          للصنف ب فقط
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          تعلم قانون الطرقات التونسية وإشارات الطريق مع تطبيق Code de la Route
          TN - B
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2">
            <Download className="w-5 h-5" />
            تحميل للأندرويد
          </button>
          <button className="bg-transparent border border-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2 opacity-70 cursor-not-allowed">
            <Clock className="w-5 h-5" />
            قريباً على iOS
          </button>
          <button className="bg-transparent border border-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2 opacity-70 cursor-not-allowed">
            <Clock className="w-5 h-5" />
            قريباً على Windows
          </button>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="container mx-auto py-8 px-4 text-center">
        <Alert
          variant="default"
          className="max-w-3xl mx-auto bg-background/80 border-border/50 backdrop-blur-sm">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle className="font-bold text-lg text-right">
            إخلاء مسؤولية وإفصاح عن مصدر المعلومات
          </AlertTitle>
          <AlertDescription className="text-right">
            هذا التطبيق لا يمثل أي جهة حكومية. تم تطويره كأداة تعليمية مستقلة.
            جميع المعلومات والمحتويات التعليمية مستمدة من "مجلة الطرقات
            التونسية" والمصادر الرسمية المتاحة للجمهور.
          </AlertDescription>
        </Alert>
      </section>

      {/* App Preview */}
      <section className="container mx-auto py-8 px-4 text-center relative">
        <div className="absolute -bottom-10 left-0 w-24 h-24">
          <div className="bg-red-500 rounded-full p-4 w-20 h-20 flex items-center justify-center">
            <StopCircle className="w-12 h-12 text-white" />
          </div>
        </div>
        <div className="absolute -bottom-10 right-0 w-24 h-24">
          <div className="bg-primary rounded-full p-4 w-20 h-20 flex items-center justify-center">
            <ArrowUp className="w-12 h-12 text-white" />
          </div>
        </div>
      </section>

      {/* Feature Section 1 - Category B */}
      <section className="container mx-auto py-16 px-4 grid md:grid-cols-2 gap-8 items-center mt-16">
        <div className="relative">
          <div className="absolute top-0 right-8 text-primary text-4xl">✦</div>
          <div
            data-theme-container
            className="bg-slate-700 dark:bg-slate-800 blue:bg-blue-700 original:bg-indigo-700 rounded-lg p-4 max-w-md mx-auto">
            <div
              data-theme-header
              className="p-3 bg-slate-800 dark:bg-slate-900 blue:bg-blue-800 original:bg-indigo-800 rounded-lg mb-4">
              <h3 className="text-xl font-bold mb-2 text-center">
                إشارات المرور - الصنف ب
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div
                data-theme-card
                className="bg-slate-600 dark:bg-slate-700 blue:bg-blue-600 original:bg-indigo-600 p-4 rounded-lg">
                <div className="flex justify-center mb-2">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Car className="w-8 h-8 text-slate-700 dark:text-slate-800 blue:text-blue-700 original:text-indigo-700" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-medium">الصنف ب - رخصة</h4>
                  <p className="text-sm text-gray-300">سياقة خاصة</p>
                  <div className="mt-2 bg-primary text-primary-foreground blue:bg-white blue:text-blue-700 rounded-md py-1 px-2 text-sm">
                    Category B
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            كل ما تحتاجه لاختبار الصنف ب
          </h2>
          <p className="text-gray-300 mb-6">
            نقدم دروسًا وتمارين مخصصة للصنف ب، مع شرح واضح لقواعد الطريق
            والإشارات لمساعدتك على النجاح في الاختبار.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors">
            ابدأ التعلم الآن
          </button>
        </div>
      </section>

      {/* Feature Section 2 - Dashboard Signs */}
      <section className="container mx-auto py-16 px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <div className="absolute top-0 right-8 text-primary text-4xl">✦</div>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="bg-red-500 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-4 text-center">
                علامات الخطر
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-red-400 p-2 rounded-lg flex flex-col items-center">
                    <div className="w-12 h-12 bg-white rounded-full mb-2 flex items-center justify-center">
                      <AlertTriangle className="w-8 h-8 text-red-500" />
                    </div>
                    <p className="text-xs text-center">تحذير خطر</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              data-theme-container
              className="bg-slate-700 dark:bg-slate-800 blue:bg-blue-700 original:bg-indigo-700 rounded-lg p-4">
              <div
                data-theme-header
                className="p-2 bg-slate-800 dark:bg-slate-900 blue:bg-blue-800 original:bg-indigo-800 rounded-lg mb-2">
                <p className="text-sm text-center">لوحة القيادة</p>
              </div>
              <div
                data-theme-card
                className="bg-slate-600 dark:bg-slate-700 blue:bg-blue-600 original:bg-indigo-600 rounded-lg p-4 mb-2">
                <div className="grid grid-cols-2 gap-2">
                  <div
                    data-theme-item
                    className="bg-slate-500 dark:bg-slate-600 blue:bg-blue-500 original:bg-indigo-500 p-2 rounded-lg flex flex-col items-center">
                    <Gauge className="w-8 h-8 text-white mb-1" />
                    <p className="text-xs text-center text-white">
                      عداد السرعة
                    </p>
                  </div>
                  <div
                    data-theme-item
                    className="bg-slate-500 dark:bg-slate-600 blue:bg-blue-500 original:bg-indigo-500 p-2 rounded-lg flex flex-col items-center">
                    <Battery className="w-8 h-8 text-white mb-1" />
                    <p className="text-xs text-center text-white">البطارية</p>
                  </div>
                  <div
                    data-theme-item
                    className="bg-slate-500 dark:bg-slate-600 blue:bg-blue-500 original:bg-indigo-500 p-2 rounded-lg flex flex-col items-center">
                    <ThermometerSun className="w-8 h-8 text-white mb-1" />
                    <p className="text-xs text-center text-white">الحرارة</p>
                  </div>
                  <div
                    data-theme-item
                    className="bg-slate-500 dark:bg-slate-600 blue:bg-blue-500 original:bg-indigo-500 p-2 rounded-lg flex flex-col items-center">
                    <Oil className="w-8 h-8 text-white mb-1" />
                    <p className="text-xs text-center text-white">الزيت</p>
                  </div>
                </div>
              </div>
              <p className="text-xs mb-4 text-center">مؤشرات لوحة القيادة</p>
            </div>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            شرح مفصل لمؤشرات لوحة القيادة
          </h2>
          <p className="text-gray-300 mb-6">
            تعرف على أهم المؤشرات والإشارات التي ستحتاجها في اختبار الصنف ب.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors">
            تعلم إشارات المرور
          </button>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container mx-auto py-16 px-4">
        <div
          data-theme-container
          className="bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-800 dark:to-slate-900 blue:from-blue-700 blue:to-blue-600 original:from-indigo-700 original:to-indigo-800 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:max-w-md text-right">
            <h2 className="text-3xl font-bold mb-2">
              تعلم واختبر مهاراتك في الصنف ب
            </h2>
            <p className="mb-4 text-gray-300 blue:text-white">
              مع دروس شاملة ومحتوى تفاعلي مخصص
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2">
              <Download className="w-5 h-5" />
              تحميل التطبيق
            </button>
          </div>
          <div className="w-64 h-64 relative">
            <Image
              src="/images/logo.png"
              alt="Code de la Route TN - B Logo"
              width={256}
              height={256}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
