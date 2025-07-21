import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">Transparent Pricing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Quality Solutions for Every Budget</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            From lean startups to enterprise organizations – we have packages designed to deliver maximum value at every
            price point.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Starter Package */}
            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>Perfect for small businesses and freelancers</CardDescription>
                <div className="text-3xl font-bold text-slate-900 mt-4">$1,000 - $3,000</div>
                <p className="text-slate-600">One-time payment</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">3-5 page website</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Responsive design</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Basic SEO setup</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Contact form</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">1 month support</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-600">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Standard Package */}
            <Card className="border-2 border-emerald-500 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl">Standard</CardTitle>
                <CardDescription>Ideal for growing businesses</CardDescription>
                <div className="text-3xl font-bold text-slate-900 mt-4">$5,000 - $8,000</div>
                <p className="text-slate-600">One-time payment</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Up to 10 pages</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Custom design</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">CMS integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Blog functionality</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">SEO optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">3 months support</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-600">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl">Premium</CardTitle>
                <CardDescription>Advanced sites with complex features</CardDescription>
                <div className="text-3xl font-bold text-slate-900 mt-4">$10,000+</div>
                <p className="text-slate-600">One-time payment</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Unlimited pages</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">E-commerce store</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">User accounts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Custom features</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Advanced SEO</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">6 months support</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-600">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Package */}
            <Card className="border-2 hover:border-emerald-200 transition-colors bg-slate-50">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>Custom systems and web applications</CardDescription>
                <div className="text-3xl font-bold text-slate-900 mt-4">$15,000+</div>
                <p className="text-slate-600">Custom quote</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Custom web app</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Database integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">API development</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Dedicated team</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">Project management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-slate-700">12 months support</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-600">
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Maintenance & Support Plans</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Keep your website secure, updated, and running smoothly with our flexible maintenance plans. Choose
              monthly or annual billing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">Basic</CardTitle>
                <CardDescription>Essential maintenance for small sites</CardDescription>
                <div className="text-2xl font-bold text-slate-900 mt-4">$100/month</div>
                <p className="text-slate-600">or $1,000/year (save $200)</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-3" />
                    <span className="text-slate-700 text-sm">Monthly updates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-3" />
                    <span className="text-slate-700 text-sm">Security monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-3" />
                    <span className="text-slate-700 text-sm">Backup management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-3" />
                    <span className="text-slate-700 text-sm">Email support</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/contact">Choose Plan</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-500 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white">
                Recommended
              </Badge>
              <CardHeader>
                <CardTitle className="text-xl">Professional</CardTitle>
                <CardDescription>Complete maintenance for business sites</CardDescription>
                <div className="text-2xl font-bold text-slate-900 mt-4">$250/month</div>
                <p className="text-slate-600">or $2,500/year (save $500)</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-3" />
                    <span className="text-slate-700 text-sm">Everything in Basic</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-3" />
                    <span className="text-slate-700 text-sm">Content updates (2 hrs/mo)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-3" />
                    <span className="text-slate-700 text-sm">Performance optimization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-3" />
                    <span className="text-slate-700 text-sm">Monthly reports</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-3" />
                    <span className="text-slate-700 text-sm">Priority support</span>
                  </li>
                </ul>
                <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-600">
                  <Link href="/contact">Choose Plan</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">Enterprise</CardTitle>
                <CardDescription>Full-service support for complex sites</CardDescription>
                <div className="text-2xl font-bold text-slate-900 mt-4">$500+/month</div>
                <p className="text-slate-600">Custom pricing available</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-3" />
                    <span className="text-slate-700 text-sm">Everything in Professional</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-3" />
                    <span className="text-slate-700 text-sm">Unlimited content updates</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-3" />
                    <span className="text-slate-700 text-sm">24/7 phone support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-3" />
                    <span className="text-slate-700 text-sm">Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-3" />
                    <span className="text-slate-700 text-sm">Custom features</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hosting Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Hosting & Infrastructure</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Reliable, fast hosting with SSL certificates, CDN, and uptime monitoring. We handle all the technical
              details so you don't have to.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Shared Hosting</CardTitle>
                <CardDescription>Perfect for small to medium websites</CardDescription>
                <div className="text-2xl font-bold text-slate-900 mt-4">$15/month</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• SSL certificate included</li>
                  <li>• 99.9% uptime guarantee</li>
                  <li>• Daily backups</li>
                  <li>• CDN included</li>
                  <li>• Email support</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cloud Hosting</CardTitle>
                <CardDescription>Scalable hosting for growing businesses</CardDescription>
                <div className="text-2xl font-bold text-slate-900 mt-4">$50/month</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Everything in Shared</li>
                  <li>• Auto-scaling resources</li>
                  <li>• Advanced security</li>
                  <li>• Performance monitoring</li>
                  <li>• Priority support</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dedicated</CardTitle>
                <CardDescription>Enterprise-grade hosting solution</CardDescription>
                <div className="text-2xl font-bold text-slate-900 mt-4">$200+/month</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Dedicated server resources</li>
                  <li>• Custom configuration</li>
                  <li>• 24/7 monitoring</li>
                  <li>• Load balancing</li>
                  <li>• White-glove support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">What's included in the quoted price?</h3>
              <p className="text-slate-600">
                All quotes include design, development, testing, deployment, and initial training. There are no hidden
                fees – what you see is what you pay.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">How long does a typical project take?</h3>
              <p className="text-slate-600">
                Most websites are completed in 2-4 weeks. Complex applications may take 6-12 weeks. We provide detailed
                timelines during the planning phase.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Do you offer payment plans?</h3>
              <p className="text-slate-600">
                Yes! We offer flexible payment schedules. Typically 50% upfront and 50% on completion, but we can work
                with your budget and cash flow needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">What if I need changes after launch?</h3>
              <p className="text-slate-600">
                All projects include a support period for bug fixes and minor adjustments. Additional features can be
                added through our maintenance plans or separate projects.
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
