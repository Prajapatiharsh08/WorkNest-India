import Image from 'next/image'
import image3 from '../public/image3.png'

const steps = [
  'Register as a partner with Globuz India - no fee required',
  'Complete our quick online training program',
  'Start offering financial products to your network',
  'Earn commissions on successful referrals'
]

export function PartnerSection () {
  return (
    <section
      id='partner'
      className='py-20 bg-gradient-to-br from-accent to-background'
    >
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
          <div className='space-y-8 slide-in-left'>
            <div>
              <h2 className='text-4xl lg:text-5xl font-bold text-foreground mb-6'>
                Become a Partner
              </h2>
              <p className='text-lg text-muted-foreground leading-relaxed'>
                Want to earn by referring bank accounts and financial services?
                Globuz India gives you access to Gromo's marketplace through
                IndiaSales.club. Be your own boss and start earning from day
                one.
              </p>
            </div>

            <div className='bg-card p-8 rounded-2xl shadow-lg border border-border'>
              <h3 className='text-2xl font-bold text-foreground mb-6'>
                How It Works
              </h3>
              <div className='space-y-4'>
                {steps.map((step, index) => (
                  <div key={index} className='flex gap-4'>
                    <div className='w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold'>
                      {index + 1}
                    </div>
                    <p className='text-muted-foreground pt-1'>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='relative slide-in-right'>
            <div className='relative rounded-2xl overflow- shadow-2xl'>
              <Image
                src={image3}
                alt='Partnership opportunity'
                width={1200} // badha diya for better quality
                height={800} // intrinsic resolution bhi badha diya
                className='w-full h-[600px] rounded object-cover'
              />
              <div className='absolute -bottom-6 right-6 bg-card p-6 rounded-xl shadow-xl max-w-sm border border-border'>
                <div className='flex items-start gap-2 mb-3'>
                  <div className='w-2 h-2 bg-secondary rounded-full mt-2'></div>
                  <span className='text-sm font-semibold text-secondary'>
                    Success Story
                  </span>
                </div>
                <p className='text-sm text-muted-foreground italic mb-3'>
                  "I joined Globuz India last year and now earn over ₹50,000
                  monthly by helping people access financial services. The best
                  part? Zero investment and flexible hours!"
                </p>
                <p className='text-sm font-semibold text-foreground'>
                  - Priya S., Mumbai
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
