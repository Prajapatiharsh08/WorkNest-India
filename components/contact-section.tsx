// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Mail, Phone, MapPin, Send } from "lucide-react"
// import Image from "next/image"

// export function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   })

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("[v0] Form submitted:", formData)
//     // Add form submission logic here
//     alert("Thank you for contacting us! We'll get back to you soon.")
//     setFormData({ name: "", email: "", phone: "", message: "" })
//   }

//   return (
//     <section id="contact" className="py-20 bg-gradient-to-b from-background to-accent">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16 fade-in">
//           <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Contact Us</h2>
//           <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
//           <p className="text-lg text-muted-foreground">Have questions? Reach out to us</p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Form */}
//           <div className="bg-card p-8 rounded-2xl shadow-xl slide-in-left border border-border">
//             <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">Name</label>
//                 <Input
//                   placeholder="Your name"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   required
//                   className="bg-background"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">Email</label>
//                 <Input
//                   type="email"
//                   placeholder="Your email"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   required
//                   className="bg-background"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
//                 <Input
//                   type="tel"
//                   placeholder="Your phone number"
//                   value={formData.phone}
//                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                   required
//                   className="bg-background"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">Message</label>
//                 <Textarea
//                   placeholder="How can we help you?"
//                   rows={4}
//                   value={formData.message}
//                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                   required
//                   className="bg-background"
//                 />
//               </div>
//               <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white group">
//                 Send Message
//                 <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </form>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-8 slide-in-right">
//             <div className="relative rounded-2xl overflow-hidden shadow-lg h-64">
//               <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-04%20at%2014.53.51_e8d8fd60-bf2KXTiKG94W9hucyQzdPHiwGroMXh.jpg"
//                 alt="Location map"
//                 fill
//                 className="object-cover"
//               />
//             </div>

//             <div className="space-y-6">
//               <div className="flex gap-4 p-4 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow border border-border">
//                 <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <Mail className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-foreground mb-1">Email</h4>
//                   <a
//                     href="mailto:contact@Globuzindia.in"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     contact@Globuzindia.in
//                   </a>
//                   <br />
//                   <a
//                     href="mailto:info@Globuzindia.in"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     info@Globuzindia.in
//                   </a>
//                 </div>
//               </div>

//               <div className="flex gap-4 p-4 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow border border-border">
//                 <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <Phone className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-foreground mb-1">Phone</h4>
//                   <a href="tel:+919586819690" className="text-muted-foreground hover:text-primary transition-colors">
//                     +91 95868 19690
//                   </a>
//                   <br />
//                   <a href="tel:+918980696886" className="text-muted-foreground hover:text-primary transition-colors">
//                     +91 89806 96886
//                   </a>
//                 </div>
//               </div>

//               <div className="flex gap-4 p-4 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow border border-border">
//                 <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                   <MapPin className="w-6 h-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-foreground mb-1">Address</h4>
//                   <p className="text-muted-foreground">Globuz India</p>
//                   <p className="text-muted-foreground">A-11th Floor, The first,</p>
//                   <p className="text-muted-foreground">B/h Keshav Baugh Party Plot</p>
//                   <p className="text-muted-foreground">Nr. Shivalik High-Street,</p>
//                   <p className="text-muted-foreground">Vastrapur, Ahmedabad,</p>
//                   <p className="text-muted-foreground">Gujarat 380015</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'

import type React from 'react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  XCircle
} from 'lucide-react'
import Image from 'next/image'
import {
  sendContactForm,
  resetContactState
} from '@/lib/store/slices/contactSlice'
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks'

export function ContactSection () {
  const dispatch = useAppDispatch()
  const { loading, success, error, message } = useAppSelector(
    state => state.contact
  )

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  // Reset form on success
  useEffect(() => {
    if (success) {
      setFormData({ name: '', email: '', phone: '', message: '' })
      // Reset state after 5 seconds
      const timer = setTimeout(() => {
        dispatch(resetContactState())
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [success, dispatch])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('[v0] Form submitted:', formData)

    // Dispatch Redux Thunk action
    dispatch(sendContactForm(formData))
  }

  return (
    <section
      id='contact'
      className='py-20 bg-gradient-to-b from-background to-accent'
    >
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16 fade-in'>
          <h2 className='text-4xl lg:text-5xl font-bold text-foreground mb-4'>
            Contact Us
          </h2>
          <div className='w-20 h-1 bg-primary mx-auto mb-6'></div>
          <p className='text-lg text-muted-foreground'>
            Have questions? Reach out to us
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
          {/* Contact Form */}
          <div className='bg-card p-8 rounded-2xl shadow-xl slide-in-left border border-border'>
            <h3 className='text-2xl font-bold text-foreground mb-6'>
              Get in Touch
            </h3>

            {/* Success Message */}
            {success && message && (
              <div className='mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-3'>
                <CheckCircle2 className='w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5' />
                <p className='text-sm text-green-800 dark:text-green-200'>
                  {message}
                </p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className='mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3'>
                <XCircle className='w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5' />
                <p className='text-sm text-red-800 dark:text-red-200'>
                  {error}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label className='block text-sm font-medium text-foreground mb-2'>
                  Name
                </label>
                <Input
                  placeholder='Your name'
                  value={formData.name}
                  onChange={e =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  disabled={loading}
                  className='bg-background'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-foreground mb-2'>
                  Email
                </label>
                <Input
                  type='email'
                  placeholder='Your email'
                  value={formData.email}
                  onChange={e =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  disabled={loading}
                  className='bg-background'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-foreground mb-2'>
                  Phone
                </label>
                <Input
                  type='tel'
                  placeholder='Your phone number'
                  value={formData.phone}
                  onChange={e =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  disabled={loading}
                  className='bg-background'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-foreground mb-2'>
                  Message
                </label>
                <Textarea
                  placeholder='How can we help you?'
                  rows={4}
                  value={formData.message}
                  onChange={e =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  disabled={loading}
                  className='bg-background'
                />
              </div>
              <Button
                type='submit'
                className='w-full bg-primary hover:bg-primary/90 text-white group'
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className='mr-2 w-4 h-4 animate-spin' />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className='space-y-8 slide-in-right'>
            <div className='relative rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 md:h-96'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63186.18817548871!2d72.529003!3d23.029771!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85d61b5755d9%3A0xa16d1c9035214819!2sNavkar%20Bhavsar%20%26%20co.!5e1!3m2!1sen!2sin!4v1759655467087!5m2!1sen!2sin'
                className='absolute top-0 left-0 w-full h-full border-0'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>

            <div className='space-y-6'>
              <div className='flex gap-4 p-4 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow border border-border'>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Mail className='w-6 h-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-semibold text-foreground mb-1'>Email</h4>
                  <a
                    href='mailto:contact@Globuzindia.in'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    contact@Globuzindia.in
                  </a>
                  <br />
                  <a
                    href='mailto:info@Globuzindia.in'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    info@Globuzindia.in
                  </a>
                </div>
              </div>

              <div className='flex gap-4 p-4 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow border border-border'>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Phone className='w-6 h-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-semibold text-foreground mb-1'>Phone</h4>
                  <a
                    href='tel:+919586819690'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    +91 95868 19690
                  </a>
                  <br />
                  <a
                    href='tel:+918980696886'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    +91 89806 96886
                  </a>
                </div>
              </div>

              <div className='flex gap-4 p-4 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow border border-border'>
                <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <MapPin className='w-6 h-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-semibold text-foreground mb-1'>
                    Address
                  </h4>
                  <p className='text-muted-foreground'>Navkar Bhavsar & Co.</p>
                  <p className='text-muted-foreground'>
                    Privillion East Wing, 2nd Floor,
                  </p>
                  <p className='text-muted-foreground'>
                    Behind Iskon Temple, SG Highway,
                  </p>
                  <p className='text-muted-foreground'>
                    Ahmedabad, Gujarat - 380054
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
