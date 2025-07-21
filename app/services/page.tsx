import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Zap, Shield, Users, Globe, Database, Smartphone, Search, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Complete Software Solutions for Every Need
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            From simple websites to enterprise systems – we deliver quality solutions tailored to your budget, timeline,
            and business objectives.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20" id="main-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Website Development */}
          <div className="mb-20" id="websites">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Code className="h-12 w-12 text-emerald-500 mr-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Website Development</h2>
                </div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Custom-designed websites that convert visitors into customers. From simple brochure sites to complex
                  e-commerce platforms, we build responsive, SEO-optimized websites using modern technologies.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Responsive design for all devices</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">SEO optimization built-in</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Content management system</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">E-commerce integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Performance optimization</span>
                  </li>
                </ul>
                <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
                  <Link href="/contact">
                    Get Website Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <Globe className="h-8 w-8 text-emerald-500 mb-2" />
                    <CardTitle className="text-lg">Business Websites</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">Professional sites that establish credibility and drive leads.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Smartphone className="h-8 w-8 text-emerald-500 mb-2" />
                    <CardTitle className="text-lg">E-Commerce</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">Online stores with payment processing and inventory management.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Search className="h-8 w-8 text-emerald-500 mb-2" />
                    <CardTitle className="text-lg">Portfolios</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">Showcase your work with stunning visual presentations.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Database className="h-8 w-8 text-emerald-500 mb-2" />
                    <CardTitle className="text-lg">Blogs & CMS</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">Content-driven sites with easy management interfaces.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Custom Software */}
          <div
            className="mb-20 py-20 bg-slate-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-lg"
            id="software"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <Database className="h-8 w-8 text-emerald-500 mb-2" />
                      <CardTitle className="text-lg">CRM Systems</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">Customer relationship management tailored to your workflow.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Users className="h-8 w-8 text-emerald-500 mb-2" />
                      <CardTitle className="text-lg">SaaS Platforms</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">Scalable software-as-a-service applications.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Globe className="h-8 w-8 text-emerald-500 mb-2" />
                      <CardTitle className="text-lg">Web Applications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">Complex business logic and user management systems.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Shield className="h-8 w-8 text-emerald-500 mb-2" />
                      <CardTitle className="text-lg">API Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">Secure, scalable APIs for system integration.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <Zap className="h-12 w-12 text-emerald-500 mr-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Custom Software Development</h2>
                </div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Enterprise-grade web applications built with scalable architectures. We develop custom software
                  solutions that streamline your business processes and give you a competitive advantage.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Scalable cloud architecture</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Database design & integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">User authentication & roles</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Third-party API integrations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Advanced security measures</span>
                  </li>
                </ul>
                <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
                  <Link href="/contact">
                    Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Maintenance & Support */}
          <div className="mb-20" id="maintenance">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Shield className="h-12 w-12 text-emerald-500 mr-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Maintenance & Support</h2>
                </div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Keep your website secure, updated, and running smoothly with our comprehensive maintenance plans. From
                  security patches to content updates, we handle the technical details so you can focus on your
                  business.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Regular security updates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Performance monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Content updates & changes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Backup & disaster recovery</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">24/7 technical support</span>
                  </li>
                </ul>
                <div className="bg-emerald-50 p-6 rounded-lg mb-8">
                  <h3 className="font-semibold text-slate-900 mb-2">Starting at $100/month</h3>
                  <p className="text-slate-600">
                    Flexible plans from basic maintenance to full-service support. Annual plans available with
                    significant savings.
                  </p>
                </div>
                <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
                  <Link href="/pricing">
                    View Maintenance Plans <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-slate-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Monthly Updates</h4>
                      <p className="text-slate-300 text-sm">Framework updates, security patches, plugin maintenance</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Uptime Monitoring</h4>
                      <p className="text-slate-300 text-sm">24/7 monitoring with instant alerts and quick resolution</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Content Support</h4>
                      <p className="text-slate-300 text-sm">Minor content changes, image updates, text edits</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Performance Reports</h4>
                      <p className="text-slate-300 text-sm">
                        Monthly analytics and performance optimization recommendations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Consulting & Design */}
          <div className="py-20 bg-slate-50 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-lg" id="consulting">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-1 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Users className="h-6 w-6 text-emerald-500 mr-2" />
                        UX/UI Design
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">
                        User-centered design that converts visitors into customers through intuitive interfaces.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Search className="h-6 w-6 text-emerald-500 mr-2" />
                        SEO Strategy
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">
                        Comprehensive SEO audits and strategies to improve your search engine rankings.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Globe className="h-6 w-6 text-emerald-500 mr-2" />
                        Digital Strategy
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">
                        Technology roadmaps and digital transformation consulting for growing businesses.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <Users className="h-12 w-12 text-emerald-500 mr-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Consulting & Design</h2>
                </div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Strategic guidance to help you make the right technology decisions. Our consulting services include
                  UX/UI design, branding guidance, SEO strategy, and digital transformation planning.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Brand identity development</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">User experience optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Technology stack recommendations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Conversion rate optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Digital marketing strategy</span>
                  </li>
                </ul>
                <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
                  <Link href="/contact">
                    Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Streamlined Process</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We've refined our development process to deliver exceptional results in record time without compromising
              on quality.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-slate-300">
                We understand your goals, requirements, and constraints through detailed consultation.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Planning</h3>
              <p className="text-slate-300">Detailed project scope, timeline, and technical architecture planning.</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-slate-300">Rapid development with regular check-ins and progress updates.</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Launch</h3>
              <p className="text-slate-300">
                Testing, deployment, and ongoing support to ensure everything runs perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  )
}
