import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, PenTool, BarChart3, Languages } from 'lucide-react'
import { Image } from "./image"

const services = [
  {
    title: "رسائل الماجستير والدكتوراه",
    description: "نقدم المساعدة في كتابة وتنسيق رسائل الماجستير والدكتوراه بأعلى جودة، مع الالتزام بالمعايير الأكاديمية والبحثية.",
    icon: BookOpen,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D9%83%D9%8A%D9%81%D9%8A%D8%A9_%D9%83%D8%AA%D8%A7%D8%A8%D8%A9_%D9%88%D8%B1%D9%82%D8%A9_%D8%A8%D8%AD%D8%AB%D9%8A%D8%A9.jpg-LzbOavOSJlZVKUR9o93XlRxJzVnHnI.jpeg"
  },
  {
    title: "الأبحاث العلمية",
    description: "نساعد في إعداد الأبحاث العلمية في مختلف المجالات، مع التركيز على المنهجية السليمة وجودة المحتوى.",
    icon: PenTool,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/376253290-qlWoDQ9yXAJtODG1IS0KZMhMFwq9j4.jpeg"
  },
  {
    title: "التحليل الإحصائي",
    description: "نقدم خدمات التحليل الإحصائي المتقدمة، بما في ذلك تحليل البيانات وإعداد التقارير الإحصائية باستخدام أحدث البرامج.",
    icon: BarChart3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D8%B9%D9%86%D8%A7%D8%B5%D8%B1_%D8%A7%D9%84%D8%AA%D9%82%D8%B1%D9%8A%D8%B1.jpg-1Dw09cNaiXcCxPRouJTpFqnlcns1V6.jpeg"
  },
  {
    title: "خدمات الترجمة",
    description: "نوفر خدمات ترجمة احترافية في مختلف المجالات الأكاديمية والعلمية، مع ضمان الدقة والجودة العالية.",
    icon: Languages,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D8%A7%D9%94%D8%B3%D8%B9%D8%A7%D8%B1%20%D8%A7%D9%84%D9%86%D8%B4%D8%B1%20%D9%81%D9%8A%20%D8%A7%D9%84%D9%85%D8%AC%D9%84%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D9%84%D9%85%D9%8A%D8%A9-BfjwtHGt2gOQorTkBgJnMhqIx0dckE.webp"
  }
]

export function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="flex-grow">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <service.icon className="h-10 w-10 text-primary" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

