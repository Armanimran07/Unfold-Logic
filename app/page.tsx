import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Zap, Shield, Users, CheckCircle, Star } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
              ⚡ Record-Breaking Turnaround Times
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              We Build Cutting-Edge
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                {" "}
                Websites & Software
              </span>
              <br />– Fast!
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              End-to-end software solutions from simple websites to enterprise systems. No client too big or small –
              quality work on accelerated timelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg">
                <Link href="/contact">
                  Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                Next.js + TypeScript
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                SEO Optimized
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                Mobile Responsive
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">500+</div>
              <div className="text-slate-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">98%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">2-4</div>
              <div className="text-slate-600">Week Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">24/7</div>
              <div className="text-slate-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Complete Software Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From simple websites to enterprise systems – we deliver quality solutions tailored to your budget and
              timeline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <Code className="h-12 w-12 text-emerald-500 mb-4" />
                <CardTitle>Website Development</CardTitle>
                <CardDescription>
                  Custom websites, e-commerce stores, and portfolios built with modern technologies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/services#websites">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <Zap className="h-12 w-12 text-emerald-500 mb-4" />
                <CardTitle>Custom Software</CardTitle>
                <CardDescription>
                  Enterprise web applications, CRM systems, and SaaS platforms with scalable architecture.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/services#software">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <Shield className="h-12 w-12 text-emerald-500 mb-4" />
                <CardTitle>Maintenance & Support</CardTitle>
                <CardDescription>
                  Ongoing updates, security patches, and technical support to keep your site running smoothly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/services#maintenance">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-emerald-500 mb-4" />
                <CardTitle>Consulting & Design</CardTitle>
                <CardDescription>
                  UX/UI design, branding guidance, SEO strategy, and digital consulting services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/services#consulting">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Built with Modern Technology</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We use the latest technologies to ensure your project is fast, secure, and scalable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Next.js + TypeScript</h3>
                <p className="text-slate-600">
                  Server-side rendering for fast load times and SEO optimization. TypeScript ensures robust,
                  maintainable code.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Shadcn UI + Tailwind</h3>
                <p className="text-slate-600">
                  Accessible, responsive components with modern design. Tailwind CSS for rapid, consistent styling.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Cloud Hosting</h3>
                <p className="text-slate-600">
                  Scalable hosting on modern platforms like Vercel and AWS. SSL, CDN, and uptime monitoring included.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Testimonial */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-medium text-slate-900 mb-6">
            "Insanely fast turnaround and excellent support. They delivered our complex e-commerce platform in just 3
            weeks – something other agencies quoted 3 months for."
          </blockquote>
          <cite className="text-slate-600">— Sarah Chen, CEO of TechStart Solutions</cite>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="/testimonials">Read More Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  )
}
