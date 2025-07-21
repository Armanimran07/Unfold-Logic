"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Link,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-emerald-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-emerald-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              We've received your message and will get back to you within 24
              hours. In the meantime, feel free to check out our portfolio or
              pricing information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="/">Return Home</a>
              </Button>
              <Button asChild variant="outline">
                <a href="/pricing">View Pricing</a>
              </Button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Start Your Project?
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Get a free consultation and detailed quote for your next website or
            software project. We respond to all inquiries within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Get Your Free Quote
                  </CardTitle>
                  <CardDescription>
                    Tell us about your project and we'll provide a detailed
                    proposal within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          required
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) =>
                            handleChange("company", e.target.value)
                          }
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="projectType">Project Type *</Label>
                        <Select
                          onValueChange={(value) =>
                            handleChange("projectType", value)
                          }
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="website">
                              Website Development
                            </SelectItem>
                            <SelectItem value="ecommerce">
                              E-commerce Store
                            </SelectItem>
                            <SelectItem value="webapp">
                              Web Application
                            </SelectItem>
                            <SelectItem value="mobile">Mobile App</SelectItem>
                            <SelectItem value="maintenance">
                              Maintenance & Support
                            </SelectItem>
                            <SelectItem value="consulting">
                              Consulting
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select
                          onValueChange={(value) =>
                            handleChange("budget", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5k">
                              Under $5,000
                            </SelectItem>
                            <SelectItem value="5k-10k">
                              $5,000 - $10,000
                            </SelectItem>
                            <SelectItem value="10k-25k">
                              $10,000 - $25,000
                            </SelectItem>
                            <SelectItem value="25k-50k">
                              $25,000 - $50,000
                            </SelectItem>
                            <SelectItem value="50k-plus">$50,000+</SelectItem>
                            <SelectItem value="not-sure">
                              Not sure yet
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="timeline">Desired Timeline</Label>
                      <Select
                        onValueChange={(value) =>
                          handleChange("timeline", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need this completed?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-month">
                            Within 1 month
                          </SelectItem>
                          <SelectItem value="2-3-months">2-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="6-plus-months">
                            6+ months
                          </SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        required
                        placeholder="Tell us about your project goals, features you need, target audience, and any specific requirements..."
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-lg py-6"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send My Project Details
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Prefer to talk directly? Reach out using any of the methods
                    below.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-emerald-500" />
                    <div>
                      <div className="font-medium">Email</div>
                      <a
                        className="text-slate-600 hover:text-emerald-500 transition-colors"
                        href="mailto:softwaresolutionsagency@gmail.com"
                      >
                        softwaresolutionsagency@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-emerald-500" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <a
                        className="text-slate-600 hover:text-emerald-500 transition-colors"
                        href="tel:+17472938171"
                      >
                        +17472938171
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-emerald-500" />
                    <div>
                      <div className="font-medium">Office</div>
                      <address className="text-slate-600">
                        1 League Irvine
                        <br />
                        CA 92602 United States
                      </address>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-emerald-500" />
                    <div>
                      <div className="font-medium">Business Hours</div>
                      <div className="text-slate-600">
                        Mon-Fri: 9AM-6PM EST
                        <br />
                        Emergency support: 24/7
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-emerald-50 border-emerald-200">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="bg-emerald-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Quick Response Guarantee
                    </h3>
                    <p className="text-slate-600 text-sm">
                      We respond to all inquiries within 24 hours, usually much
                      faster. For urgent projects, call us directly.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* What Happens Next */}
              <Card>
                <CardHeader>
                  <CardTitle>What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">
                          Initial Response
                        </div>
                        <div className="text-slate-600 text-sm">
                          We'll review your project and respond within 24 hours
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">
                          Discovery Call
                        </div>
                        <div className="text-slate-600 text-sm">
                          30-minute consultation to understand your needs
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">
                          Detailed Proposal
                        </div>
                        <div className="text-slate-600 text-sm">
                          Custom quote with timeline and project scope
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">
                          Project Kickoff
                        </div>
                        <div className="text-slate-600 text-sm">
                          Start building your solution immediately
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
