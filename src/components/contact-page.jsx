"use client"

import { useState } from "react"
import { motion } from "framer-motion";
import { Loader2, Mail, MessageSquare, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {toast} from "@/hooks/use-toast"

export function ContactPageComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })

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

  return (
    (<div
      className="min-h-screen bg-gradient-to-b from-[#083239] to-[#051e22] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Let's <span className="text-[#ddff00]">Connect</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Have a question or want to collaborate? We're all ears!
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
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
                  className="mt-1 bg-white/5 border-white/10 text-white placeholder-gray-400"
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
                  className="mt-1 bg-white/5 border-white/10 text-white placeholder-gray-400"
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
                  className="mt-1 bg-white/5 border-white/10 text-white placeholder-gray-400"
                  rows={4}
                  placeholder="Your message here..." />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#ddff00] text-[#083239] hover:bg-[#b3d600] transition-colors"
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-[#ddff00]">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-3 text-[#ddff00]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-3 text-[#ddff00]" />
                <span>support@example.com</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-6 w-6 mr-3 text-[#ddff00]" />
                <span>Live chat available 24/7</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-[#ddff00]">Office Hours</h3>
              <p>Monday - Friday: 9am - 5pm</p>
              <p>Saturday: 10am - 2pm</p>
              <p>Sunday: Closed</p>
            </div>
            <motion.div
              className="mt-8 p-4 bg-[#ddff00] rounded-lg text-[#083239]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <h3 className="text-lg font-semibold mb-2">Quick Response Guarantee</h3>
              <p className="text-sm">We aim to respond to all inquiries within 24 hours.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>)
  );
}