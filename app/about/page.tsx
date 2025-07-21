import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
            About Our Agency
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Building the Future of Digital Solutions
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We're a team of passionate developers, designers, and strategists
            dedicated to delivering exceptional software solutions that drive
            real business results.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                To democratize access to high-quality software solutions by
                delivering enterprise-grade websites and applications at every
                budget level. We believe that exceptional digital experiences
                shouldn't be limited to Fortune 500 companies.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our commitment to rapid delivery and transparent pricing means
                you get professional results without the traditional agency
                overhead or lengthy timelines.
              </p>
              <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
                <Link href="/contact">
                  Work With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Target className="h-8 w-8 text-emerald-500 mb-2" />
                  <CardTitle className="text-lg">Quality First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Every project meets enterprise standards for performance,
                    security, and maintainability.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 text-emerald-500 mb-2" />
                  <CardTitle className="text-lg">Speed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Record-breaking delivery times without compromising on
                    quality or functionality.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-emerald-500 mb-2" />
                  <CardTitle className="text-lg">Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We work as an extension of your team, not just another
                    vendor.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Award className="h-8 w-8 text-emerald-500 mb-2" />
                  <CardTitle className="text-lg">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Continuous improvement and staying ahead of technology
                    trends.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A diverse group of senior developers, designers, and project
              managers with decades of combined experience in delivering
              successful projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  MF
                </div>
                <CardTitle>Miles Freeman</CardTitle>
                <CardDescription>Lead Developer & Co-Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  7+ years in full-stack development. Specializes in Next.js,
                  TypeScript, NestJS, and cloud solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  MJ
                </div>
                <CardTitle>Maria Johnson</CardTitle>
                <CardDescription>
                  UX/UI Designer & Creative Director
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Award-winning designer with expertise in user experience,
                  brand identity, and conversion optimization.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  DH
                </div>
                <CardTitle>Dylan Hetman</CardTitle>
                <CardDescription>
                  Client Success & Outreach Manager
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Dedicated to client onboarding and relationship management,
                  ensuring smooth project delivery and long-term success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose SoftwareSolutions?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver
              solutions that not only work perfectly but drive real results for
              your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Rapid Delivery
              </h3>
              <p className="text-slate-600">
                Most projects delivered in 2-4 weeks. We've streamlined our
                process to eliminate delays without cutting corners.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Proven Track Record
              </h3>
              <p className="text-slate-600">
                500+ successful projects with 98% client satisfaction rate. Our
                portfolio speaks for itself.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                All Budgets Welcome
              </h3>
              <p className="text-slate-600">
                From $1,000 starter sites to $100,000+ enterprise systems.
                Quality solutions at every price point.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Modern Technology
              </h3>
              <p className="text-slate-600">
                Latest frameworks and best practices ensure your project is
                future-proof and maintainable.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                24/7 Support
              </h3>
              <p className="text-slate-600">
                Ongoing maintenance and support available. We're here when you
                need us, not just during the project.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Transparent Pricing
              </h3>
              <p className="text-slate-600">
                No hidden fees or surprise costs. Clear, upfront pricing with
                detailed project scopes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
