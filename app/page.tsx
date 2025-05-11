import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Car,
  PlayCircle,
  AlertTriangle,
  Download,
  Clock,
  Bike,
  Truck,
  Gauge,
  Battery,
  ThermometerSun,
  FuelIcon as Oil,
  StopCircle,
  ArrowUp,
  Plus,
  Check,
  Volume2,
  Settings,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-500 text-white">
      {/* Header */}
      {/* Header removed, now handled by TopBar in layout */}

      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight mt-16">
          دروس مخصصة
          <br />
          لكل فئة رخصة قيادة
        </h1>
        <p className="text-blue-100 max-w-2xl mx-auto mb-8">
          تعلم قواعد المرور وإشارات الطريق مع تطبيقنا الشامل لتعليم القيادة
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

      {/* App Preview */}
      <section className="container mx-auto py-8 px-4 text-center relative">
        <div className="absolute -bottom-10 left-0 w-24 h-24">
          <div className="bg-red-500 rounded-full p-4 w-20 h-20 flex items-center justify-center">
            <StopCircle className="w-12 h-12 text-white" />
          </div>
        </div>
        <div className="absolute -bottom-10 right-0 w-24 h-24">
          <div className="bg-blue-500 rounded-full p-4 w-20 h-20 flex items-center justify-center">
            <ArrowUp className="w-12 h-12 text-white" />
          </div>
        </div>
      </section>

      {/* Feature Section 1 - License Categories */}
      <section className="container mx-auto py-16 px-4 grid md:grid-cols-2 gap-8 items-center mt-16">
        <div className="relative">
          <div className="absolute top-0 right-8 text-blue-300 text-4xl">✦</div>
          <div className="bg-blue-700 rounded-lg p-4 max-w-md mx-auto">
            <div className="p-3 bg-blue-800 rounded-lg mb-4">
              <h3 className="text-xl font-bold mb-2 text-center">
                إشارات المرور
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-600 p-4 rounded-lg">
                <div className="flex justify-center mb-2">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Car className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-medium">الصنف ب - رخصة</h4>
                  <p className="text-sm text-blue-200">سياقة خاصة</p>
                  <div className="mt-2 bg-blue-500 rounded-md py-1 px-2 text-sm">
                    Category B
                  </div>
                </div>
              </div>
              <div className="bg-blue-600 p-4 rounded-lg opacity-70">
                <div className="flex justify-center mb-2">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Bike className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-medium">الصنف أ - دراجات</h4>
                  <p className="text-sm text-blue-200">نارية ثقيلة</p>
                  <div className="mt-2 bg-blue-500 rounded-md py-1 px-2 text-sm">
                    Category A
                  </div>
                </div>
              </div>
              <div className="bg-blue-600 p-4 rounded-lg opacity-70">
                <div className="flex justify-center mb-2">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Truck className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-medium">الصنف ج+هـ - سيارات</h4>
                  <p className="text-sm text-blue-200">نقل ثقيلة</p>
                  <div className="mt-2 bg-blue-500 rounded-md py-1 px-2 text-sm">
                    Category C+E
                  </div>
                </div>
              </div>
              <div className="bg-blue-600 p-4 rounded-lg opacity-70">
                <div className="flex justify-center mb-2">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Bike className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-medium">الصنف أ - دراجات</h4>
                  <p className="text-sm text-blue-200">نارية</p>
                  <div className="mt-2 bg-blue-500 rounded-md py-1 px-2 text-sm">
                    Category A
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            تعلم قواعد القيادة لجميع أنواع الرخص
          </h2>
          <p className="text-blue-100 mb-6">
            نقدم دروسًا مخصصة لكل فئة من فئات رخص القيادة، بما في ذلك السيارات
            والدراجات النارية والشاحنات. تعلم بسهولة مع محتوى تفاعلي مصمم خصيصًا
            لاحتياجاتك.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors">
            استكشف فئات الرخص
          </button>
        </div>
      </section>

      {/* Feature Section 2 - Video Lessons */}
      <section className="container mx-auto py-16 px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-right order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            فيديوهات لتعلم أساسيات ومهارات القيادة
          </h2>
          <p className="text-blue-100 mb-6">
            شاهد دروسًا مصورة تشرح تقنيات القيادة الأساسية، وكيفية التعامل مع
            حالات الطريق المختلفة، وقواعد المرور بطريقة سهلة وواضحة.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors">
            شاهد الدروس المصورة
          </button>
        </div>
        <div className="relative order-1 md:order-2">
          <div className="absolute top-0 left-8 text-blue-300 text-4xl">✦</div>
          <div className="bg-blue-700 rounded-lg p-4 max-w-md mx-auto">
            <div className="p-3 bg-blue-800 rounded-lg mb-4">
              <div className="flex items-center gap-2">
                <PlayCircle className="w-5 h-5" />
                <h3 className="text-lg font-medium">تعلم الركن</h3>
              </div>
            </div>
            <div className="bg-blue-600 p-4 rounded-lg mb-4">
              <p className="text-sm mb-2">ملاحظة مهمة للمتدربين</p>
              <h4 className="font-medium mb-2">
                كيفية ركن السيارة بطريقة الفيديو
              </h4>
              <p className="text-xs text-blue-200 mb-4">
                شرح خطوة بخطوة لركن السيارة بشكل صحيح
              </p>
              <button className="bg-blue-500 text-white w-full py-2 rounded-md flex items-center justify-center gap-2">
                <PlayCircle className="w-4 h-4" />
                <span>شاهد الآن</span>
              </button>
            </div>
            <div className="bg-blue-600 p-4 rounded-lg">
              <div className="bg-gray-900 rounded-lg h-32 mb-2 flex items-center justify-center">
                <PlayCircle className="w-12 h-12 text-white opacity-80" />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <button className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <PlayCircle className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex gap-2">
                  <button className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <Volume2 className="w-4 h-4 text-white" />
                  </button>
                  <button className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <Settings className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 3 - Traffic Signs */}
      <section className="container mx-auto py-16 px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <div className="absolute top-0 right-8 text-blue-300 text-4xl">✦</div>
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
            <div className="bg-blue-700 rounded-lg p-4">
              <div className="p-2 bg-blue-800 rounded-lg mb-2">
                <p className="text-sm text-center">لوحة القيادة</p>
              </div>
              <div className="bg-blue-600 rounded-lg p-4 mb-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-blue-500 p-2 rounded-lg flex flex-col items-center">
                    <Gauge className="w-8 h-8 text-white mb-1" />
                    <p className="text-xs text-center text-white">
                      عداد السرعة
                    </p>
                  </div>
                  <div className="bg-blue-500 p-2 rounded-lg flex flex-col items-center">
                    <Battery className="w-8 h-8 text-white mb-1" />
                    <p className="text-xs text-center text-white">البطارية</p>
                  </div>
                  <div className="bg-blue-500 p-2 rounded-lg flex flex-col items-center">
                    <ThermometerSun className="w-8 h-8 text-white mb-1" />
                    <p className="text-xs text-center text-white">الحرارة</p>
                  </div>
                  <div className="bg-blue-500 p-2 rounded-lg flex flex-col items-center">
                    <Oil className="w-8 h-8 text-white mb-1" />
                    <p className="text-xs text-center text-white">الزيت</p>
                  </div>
                </div>
              </div>
              <p className="text-xs mb-4 text-center">مؤشرات لوحة القيادة</p>
              <div className="space-y-2">
                <div className="bg-blue-600 p-2 rounded-lg text-center text-sm">
                  <p>تعرف على المؤشرات</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            شرح مفصل لمؤشرات لوحة القيادة
          </h2>
          <p className="text-blue-100 mb-6">
            تعرف على جميع إشارات المرور وعلامات الطريق ومؤشرات لوحة القيادة.
            نقدم شرحًا مفصلاً لكل إشارة ومعناها وكيفية التصرف عند رؤيتها.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors">
            تعلم إشارات المرور
          </button>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="container mx-auto py-16 px-4">
        <div className="bg-blue-700 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:max-w-md text-right">
            <h2 className="text-3xl font-bold mb-2">
              تعلم واختبر مهاراتك في القيادة
            </h2>
            <p className="mb-4">مع دروس شاملة ومحتوى تفاعلي</p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2">
              <Download className="w-5 h-5" />
              تحميل التطبيق
            </button>
          </div>
          <div className="w-64 h-64 relative">
            <Image
              src="/images/logo.png"
              alt="Code Circulation Logo"
              width={256}
              height={256}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
