'use client'

import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function Footer () {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSocialClick = (platform: string) => {
    console.log(`[v0] Navigating to ${platform}`)
    // Add actual social media URLs here
  }

  return (
    <footer className='bg-foreground text-background py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-4 gap-8 mb-8'>
          {/* Company Info */}
          <div>
            <div className='flex items-center gap-2 mb-4'>
              <div className='w-8 h-8 bg-primary rounded-full flex items-center justify-center'>
                <span className='text-white font-bold'>W</span>
              </div>
              <h3 className='text-xl font-bold'>Globuz India</h3>
            </div>
            <p className='text-sm text-background/70 mb-4'>
              Your trusted partner in distributing banking, finance, and
              insurance products from India's top financial institutions.
            </p>
            <div className='flex gap-3'>
              <button
                onClick={() => handleSocialClick('Facebook')}
                className='w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors'
                aria-label='Facebook'
              >
                <Facebook className='w-4 h-4' />
              </button>
              <button
                onClick={() => handleSocialClick('Instagram')}
                className='w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors'
                aria-label='Instagram'
              >
                <Instagram className='w-4 h-4' />
              </button>
              <button
                onClick={() => handleSocialClick('Twitter')}
                className='w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors'
                aria-label='Twitter'
              >
                <Twitter className='w-4 h-4' />
              </button>
              <button
                onClick={() => handleSocialClick('LinkedIn')}
                className='w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors'
                aria-label='LinkedIn'
              >
                <Linkedin className='w-4 h-4' />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-bold mb-4'>QUICK LINKS</h4>
            <ul className='space-y-2'>
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className='text-sm text-background/70 hover:text-primary transition-colors cursor-pointer'
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className='text-sm text-background/70 hover:text-primary transition-colors cursor-pointer'
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className='text-sm text-background/70 hover:text-primary transition-colors cursor-pointer'
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('partner')}
                  className='text-sm text-background/70 hover:text-primary transition-colors cursor-pointer'
                >
                  Join as a Partner
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className='text-sm text-background/70 hover:text-primary transition-colors cursor-pointer'
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='text-lg font-bold mb-4'>SERVICES</h4>
            <ul className='space-y-2'>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className='text-sm text-background/70 hover:text-primary transition-colors cursor-pointer'
                >
                  Banking Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className='text-sm text-background/70 hover:text-primary transition-colors cursor-pointer'
                >
                  Financial Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className='text-sm text-background/70 hover:text-primary transition-colors cursor-pointer'
                >
                  Insurance
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='text-lg font-bold mb-4'>CONTACT</h4>
            <ul className='space-y-2 text-sm text-background/70'>
              <li>
                <a
                  href='mailto:contact@Globuzindia.in'
                  className='hover:text-primary transition-colors'
                >
                  Email: contact@globuz.in
                </a>
              </li>
              <li>
                <a
                  href='tel:+919737873192'
                  className='hover:text-primary transition-colors'
                >
                  Phone: +91 9737873192
                </a>
              </li>
              <li>
                <a
                  href='tel:+919727549771'
                  className='hover:text-primary transition-colors'
                >
                  Phone: +91 9727549771
                </a>
              </li>
              <li>
                <a
                  href='tel:+918980696886'
                  className='hover:text-primary transition-colors'
                >
                  Phone: +91 89806 96886
                </a>
              </li>
              <li className='pt-2'>
                Address: Navkar Bhavsar & Co., Privillion East Wing, 2nd Floor,
                Behind Iskon Temple, SG Highway, Ahmedabad, Gujarat - 380054
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-background/20 pt-8 text-center'>
          <div className='flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-8'>
            {/* Copyright */}
            <p className='text-sm text-background/70'>
              © 2025 Globuz India. All rights reserved.
            </p>

            {/* Divider for desktop */}
            <span className='hidden md:block text-background/40'>|</span>

            {/* Privacy & Terms */}
            <p className='text-sm text-background/70'>
              <Link
                href='/privacy-policy'
                className='hover:text-primary transition-colors'
              >
                Privacy Policy
              </Link>{' '}
              •{' '}
              <Link
                href='/terms-and-conditions'
                className='hover:text-primary transition-colors'
              >
                Terms & Conditions
              </Link>
            </p>

            {/* Divider for desktop */}
            <span className='hidden md:block text-background/40'>|</span>

            {/* Powered by */}
            <p className='text-sm text-background/70'>
              Powered by{' '}
              <a
                href='https://looperatech.netlify.app'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-blue-200 transition-colors font-bold'
              >
                Loopera
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
