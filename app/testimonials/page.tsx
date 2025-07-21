import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, Quote } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
            Client Success Stories
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What Our Clients Say</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Don't just take our word for it – hear from the businesses we've helped transform their digital presence and
            achieve their goals.
          </p>
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-slate-600 font-medium">4.9/5 average rating from 200+ clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <Quote className="h-8 w-8 text-emerald-500 mb-4" />
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg text-slate-700 mb-6">
                  "Insanely fast turnaround and excellent support. They delivered our complex e-commerce platform in
                  just 3 weeks – something other agencies quoted 3 months for. Sales increased 40% in the first month!"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    SC
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Sarah Chen</div>
                    <div className="text-slate-600">CEO, TechStart Solutions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <Quote className="h-8 w-8 text-emerald-500 mb-4" />
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg text-slate-700 mb-6">
                  "The team understood our vision perfectly and delivered beyond expectations. Our new website has
                  generated more leads in 2 months than our old site did in 2 years. The ROI has been incredible."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MR
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Michael Rodriguez</div>
                    <div className="text-slate-600">Founder, GreenSpace Landscaping</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <Quote className="h-8 w-8 text-emerald-500 mb-4" />
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg text-slate-700 mb-6">
                  "Professional, responsive, and incredibly talented. They built our custom CRM system that has
                  streamlined our entire operation. The ongoing support has been fantastic too."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    JT
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Jennifer Thompson</div>
                    <div className="text-slate-600">Operations Director, HealthFirst Clinic</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Success Stories & Case Studies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real results from real clients – see how we've helped businesses achieve their goals through strategic web
              development.
            </p>
          </div>

          <div className="space-y-16">
            {/* Case Study 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                  E-Commerce Success
                </Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">TechStart Solutions: 300% Revenue Increase</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  TechStart needed a complete e-commerce overhaul to handle their growing product line. Their old
                  platform was slow, difficult to manage, and losing sales due to poor user experience.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900">Challenge:</h4>
                    <p className="text-slate-600">Outdated e-commerce platform with 60% cart abandonment rate</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Solution:</h4>
                    <p className="text-slate-600">Custom Next.js e-commerce platform with optimized checkout flow</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Results:</h4>
                    <p className="text-slate-600">
                      300% revenue increase, 25% cart abandonment rate, 2-second load times
                    </p>
                  </div>
                </div>
                <Button asChild variant="outline">
                  <Link href="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-2">300%</div>
                    <div className="text-slate-600">Revenue Increase</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-2">25%</div>
                    <div className="text-slate-600">Cart Abandonment</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-2">2s</div>
                    <div className="text-slate-600">Load Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-2">3</div>
                    <div className="text-slate-600">Weeks Delivery</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-emerald-600 mb-2">500%</div>
                      <div className="text-slate-600">Lead Increase</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-emerald-600 mb-2">85%</div>
                      <div className="text-slate-600">Mobile Traffic</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-emerald-600 mb-2">#1</div>
                      <div className="text-slate-600">Google Ranking</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-emerald-600 mb-2">4</div>
                      <div className="text-slate-600">Weeks Delivery</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <Badge className="mb-4 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                  Local Business Growth
                </Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  GreenSpace Landscaping: From Local to Regional Leader
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  A family-owned landscaping business wanted to expand beyond word-of-mouth referrals and compete with
                  larger companies in their market.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900">Challenge:</h4>
                    <p className="text-slate-600">No online presence, relying solely on referrals for new business</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Solution:</h4>
                    <p className="text-slate-600">
                      SEO-optimized website with portfolio showcase and lead capture forms
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Results:</h4>
                    <p className="text-slate-600">500% increase in leads, #1 Google ranking for target keywords</p>
                  </div>
                </div>
                <Button asChild variant="outline">
                  <Link href="/contact">
                    Get Your Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                  Healthcare Innovation
                </Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  HealthFirst Clinic: Streamlined Patient Management
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  A growing medical practice needed a custom patient management system to replace their paper-based
                  processes and improve efficiency.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900">Challenge:</h4>
                    <p className="text-slate-600">
                      Paper-based patient records, scheduling conflicts, inefficient workflows
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Solution:</h4>
                    <p className="text-slate-600">
                      Custom web application with patient portal, scheduling, and records management
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Results:</h4>
                    <p className="text-slate-600">
                      50% reduction in admin time, 95% patient satisfaction, HIPAA compliant
                    </p>
                  </div>
                </div>
                <Button asChild variant="outline">
                  <Link href="/contact">
                    Discuss Your Needs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-2">50%</div>
                    <div className="text-slate-600">Less Admin Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
                    <div className="text-slate-600">Patient Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
                    <div className="text-slate-600">HIPAA Compliant</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 mb-2">8</div>
                    <div className="text-slate-600">Weeks Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">More Happy Clients</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quick Testimonial 1 */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-4">
                  "Exceptional work and communication. They delivered exactly what we needed, on time and within
                  budget."
                </blockquote>
                <div className="text-sm">
                  <div className="font-semibold text-slate-900">David Kim</div>
                  <div className="text-slate-600">CTO, DataFlow Analytics</div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Testimonial 2 */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-4">
                  "The best investment we've made for our business. Our new website has transformed how customers
                  perceive our brand."
                </blockquote>
                <div className="text-sm">
                  <div className="font-semibold text-slate-900">Lisa Martinez</div>
                  <div className="text-slate-600">Owner, Artisan Coffee Co.</div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Testimonial 3 */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-4">
                  "Fast, professional, and results-driven. They understood our industry and delivered a solution that
                  works perfectly."
                </blockquote>
                <div className="text-sm">
                  <div className="font-semibold text-slate-900">Robert Johnson</div>
                  <div className="text-slate-600">President, Johnson Manufacturing</div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Testimonial 4 */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-4">
                  "Outstanding support and maintenance. They're always available when we need them and proactive about
                  keeping our site updated."
                </blockquote>
                <div className="text-sm">
                  <div className="font-semibold text-slate-900">Amanda Foster</div>
                  <div className="text-slate-600">Marketing Director, EcoTech Solutions</div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Testimonial 5 */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-4">
                  "They turned our vision into reality. The custom features they built have given us a significant
                  competitive advantage."
                </blockquote>
                <div className="text-sm">
                  <div className="font-semibold text-slate-900">Carlos Mendez</div>
                  <div className="text-slate-600">Founder, LogiTrack Systems</div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Testimonial 6 */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 mb-4">
                  "Incredible attention to detail and user experience. Our customers love the new interface and it shows
                  in our conversion rates."
                </blockquote>
                <div className="text-sm">
                  <div className="font-semibold text-slate-900">Rachel Green</div>
                  <div className="text-slate-600">E-commerce Manager, StyleHub</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  )
}
