"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Mail, MessageSquare, Phone, Send, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export function ContactPageComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [activeSection, setActiveSection] = useState("form")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })
    setFormState({ name: "", email: "", message: "" })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection(prev => prev === "form" ? "info" : "form")
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#083239] to-[#051e22] text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12">
          <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#ddff00] to-[#00ffaa]">
            Let&apos;s Connect
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Have a question or want to collaborate? We&apos;re here to help!
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <AnimatePresence mode="wait">
            {activeSection === "form" && (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-[#ddff00]">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      type="text"
                      required
                      className="mt-1 bg-white/5 border-white/10 text-white placeholder-white focus:ring-[#ddff00] focus:border-[#ddff00]"
                      placeholder="John Doe" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[#ddff00]">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      type="email"
                      required
                      className="mt-1 bg-white/5 border-white/10 text-white placeholder-white focus:ring-[#ddff00] focus:border-[#ddff00]"
                      placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-[#ddff00]">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      className="mt-1 bg-white/5 border-white/10 text-white placeholder-white focus:ring-[#ddff00] focus:border-[#ddff00]"
                      rows={4}
                      placeholder="Your message here..." />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#ddff00] to-[#00ffaa] text-[#083239] hover:from-[#b3d600] hover:to-[#00cc88] transition-all duration-300"
                    disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            )}

            {activeSection === "info" && (
              <motion.div
                key="info"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ddff00] to-[#00ffaa]">Contact Information</h2>
                <div className="space-y-6">
                  <motion.div className="flex items-center" whileHover={{ x: 10 }}>
                    <Phone className="h-6 w-6 mr-3 text-[#ddff00]" />
                    <span className="text-white">+1 (555) 123-4567</span>
                  </motion.div>
                  <motion.div className="flex items-center" whileHover={{ x: 10 }}>
                    <Mail className="h-6 w-6 mr-3 text-[#ddff00]" />
                    <span className="text-white">support@example.com</span>
                  </motion.div>
                  <motion.div className="flex items-center" whileHover={{ x: 10 }}>
                    <MessageSquare className="h-6 w-6 mr-3 text-[#ddff00]" />
                    <span className="text-white">Live chat available 24/7</span>
                  </motion.div>
                  <motion.div className="flex items-center" whileHover={{ x: 10 }}>
                    <MapPin className="h-6 w-6 mr-3 text-[#ddff00]" />
                    <span className="text-white">123 Tech Street, Silicon Valley, CA 94000</span>
                  </motion.div>
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-semibold mb-4 text-[#ddff00]">Office Hours</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-[#00ffaa]" />
                      <span>Monday - Friday: 9am - 5pm</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-[#00ffaa]" />
                      <span>Saturday: 10am - 2pm</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-[#00ffaa]" />
                      <span>Sunday: Closed</span>
                    </div>
                  </div>
                </div>
                <motion.div
                  className="mt-8 p-4 bg-gradient-to-r from-[#ddff00] to-[#00ffaa] rounded-lg text-[#083239]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Quick Response Guarantee
                  </h3>
                  <p className="text-sm">We aim to respond to all inquiries within 24 hours.</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ddff00] to-[#00ffaa]">FAQ</h2>
            <div className="space-y-6">
              {[
                { q: "How quickly can I expect a response?", a: "We typically respond within 24 hours on business days." },
                { q: "Do you offer phone support?", a: "Yes, our phone support is available during office hours." },
                { q: "Can I schedule a video call?", a: "Absolutely! You can book a video call through our scheduling system." },
                { q: "Is there a knowledge base available?", a: "Yes, we have an extensive knowledge base for self-service support." },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2 text-[#ddff00]">{faq.q}</h3>
                  <p className="text-gray-300">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
