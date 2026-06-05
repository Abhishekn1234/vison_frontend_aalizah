import { useState } from 'react';
import { Plus, Minus} from 'lucide-react';
import FadeIn from '../common/FadeIn';


export default function FaqContent() {
  // Track open state for accordions using indices like "category-index"
  const [openIndex, setOpenIndex] = useState<string | null>("0-0"); // Defaulting first item open as seen in image_a63dc4.png

  const toggleAccordion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      category: "GENERAL QUESTIONS",
      highlightWord: "GENERAL",
      mainWord: "QUESTIONS",
      items: [
        {
          q: "What services does Al Sheebani Technical Services offer?",
          a: "We provide complete maintenance and technical solutions across Dubai and the UAE, including MEP works, general maintenance, facility management, carpentry, painting, and ventilation systems."
        },
        {
          q: "Where is Al Sheebani Technical Services located?",
          a: "Our main office is located in Dubai, UAE, positioning us perfectly to efficiently serve commercial and residential clients right across the emirate and surrounding regions."
        },
        {
          q: "Do you offer services for both residential and commercial properties?",
          a: "Yes! We cater fully to both sectors. Whether it's a routine home maintenance repair or a full-scale corporate facility management project, our team is equipped to handle it."
        },
        {
          q: "What makes Al Sheebani Technical Services different from others?",
          a: "Our commitment to premium quality execution, reliable response times, transparent project pricing, and a highly skilled team of certified technical professionals sets us apart."
        },
        {
          q: "How long has Al Sheebani Technical Services been operating in Dubai?",
          a: "We have built a strong standing foundation across the UAE over the years, delivering continuous excellence and building trusted relationships with major commercial and residential clients."
        },
        {
          q: "Are your technicians certified and trained?",
          a: "Absolutely. All our engineers, technicians, and handymen undergo rigorous background checks, strict technical training, and possess certified credentials to safely execute maintenance jobs."
        },
        {
          q: "How can I contact Al Sheebani Technical Services?",
          a: "You can reach us through our online contact dashboard, drop an email to our HR and operations team, or call our direct helpline for instant booking assistance."
        }
      ]
    },
    {
      category: "SERVICES & PROCESS",
      highlightWord: "SERVICES",
      mainWord: "& PROCESS",
      items: [
        {
          q: "What is included in your MEP services?",
          a: "Our MEP services include mechanical, electrical, and plumbing works such as AC maintenance, lighting, wiring, water systems, and more — all handled by certified experts."
        },
        {
          q: "Do you provide emergency repair services in Dubai?",
          a: "Yes, we understand technical malfunctions happen unexpectedly. We offer rapid emergency support to handle severe leaks, electrical blackouts, or critical HVAC breakdowns."
        },
        {
          q: "How does your maintenance process work?",
          a: "It's simple: You log a request, our team evaluates your requirements to provide an initial quote, we schedule a premium dispatch time, and our certified experts handle the job cleanly."
        },
        {
          q: "Do you offer annual maintenance contracts (AMC)?",
          a: "Yes, we provide customizable Annual Maintenance Contracts for corporate entities, real estate portfolios, and private villa owners seeking hassle-free year-round asset care."
        },
        {
          q: "Can I schedule a visit at a specific time?",
          a: "Definitely. We respect your schedule and coordinate visits around your preferred hours to ensure minimal disruption to your daily operations or personal routine."
        },
        {
          q: "What areas in the UAE do you cover?",
          a: "While our core operations reside within Dubai, we systematically span technical distributions across major commercial sectors and strategic operational lines throughout the UAE."
        },
        {
          q: "Do you bring all materials and tools needed for the job?",
          a: "Yes, our mobile units come completely equipped with heavy-duty diagnostic tools, commercial gear, and prime raw materials necessary to safely execute the service on the spot."
        },
        {
          q: "Can I request a quote before confirming the service?",
          a: "Certainly! We guarantee upfront visibility. We provide comprehensive, broken-down estimations prior to booking confirmation so you can plan confidently."
        }
      ]
    },
    {
      category: "PAYMENTS, PRICING & SUPPORT",
      highlightWord: "PAYMENTS,",
      mainWord: "PRICING & SUPPORT",
      items: [
        {
          q: "How do I get a price estimate for maintenance services?",
          a: "You can contact us directly through our website or phone. Our team will evaluate your needs and provide a clear, no-obligation quote."
        },
        {
          q: "Do you charge a service call fee?",
          a: "We maintain highly competitive industry rates. Standard assessment fees are clearly explained upfront and can often be integrated or waived depending on structural contract project bounds."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accommodate multi-channel operational workflows including standard secure bank transfers, major credit/debit cards, and corporate account invoicing channels."
        },
        {
          q: "Is there a warranty on your services?",
          a: "Yes, we stand firmly behind our workmanship. Specific guarantees are actively applied to standard service completions and materials used, ensuring peace of mind."
        },
        {
          q: "Can I cancel or reschedule an appointment?",
          a: "Yes, you can easily change or postpone your appointment. We simply request a reasonable notice window prior to the scheduled expert team dispatch."
        },
        {
          q: "Do you offer discounts for large projects or long-term contracts?",
          a: "Yes, our enterprise solutions offer adjusted volume rates for bulk corporate properties, high-density residential portfolios, and recurring long-term AMC clients."
        },
        {
          q: "How soon can I expect a response after submitting a service request?",
          a: "Our typical support triage loops acknowledge and reply to incoming standard web inquiries within 1–2 hours during typical workspace operational timelines."
        },
        {
          q: "Who can I contact for ongoing support or feedback?",
          a: "Our customer success helpdesk can be reached directly via our central corporate line or through our official designated digital support email address."
        }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-white font-sans text-black px-6 py-12 md:py-20 select-none">
       <FadeIn>
         <div className="flex items-center justify-center gap-2 mb-8">
        <span className="text-[#10a37f] text-xs font-semibold">◆</span>
        <p className="text-xs md:text-sm font-semibold text-gray-900 tracking-wide uppercase text-center">
          "your comfort and satisfaction are our top priorities — we’re always here to help."
        </p>
        <span className="text-[#10a37f] text-xs font-semibold">◆</span>
      </div>

      {/* Main Main Title Block */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-[54px] font-bold text-[#10a37f] tracking-tight leading-[1.1] mb-6">
          Answers to Your Questions — <br />
          About Our Services, Process, and Support
        </h1>
        <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed max-w-3xl mx-auto font-medium">
          We know your time is valuable, so we’ve gathered the most common questions our clients ask about Al Sheebani Technical Services.
          Whether you’re curious about our maintenance process, emergency support, or pricing, you’ll find everything you need to know right here.
        </p>
      </div>

      {/* Loop Categories */}
      <div className="max-w-5xl mx-auto space-y-20 mt-16 pb-24">
        {faqData.map((cat, catIdx) => (
          <div key={catIdx} className="w-full">
            
            {/* Big Section Divided Heading */}
           {/* Big Section Divided Heading */}
<div className="text-center mb-12 border-b border-gray-100 pb-10">

  {cat.category === "PAYMENTS, PRICING & SUPPORT" ? (
    <>
      {/* Line 1 */}
      <p className="text-4xl tracking-[0.35em] text-gray-400 font-bold uppercase mb-2">
        PAYMENTS
      </p>

      {/* Line 2 */}
      <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-[0.9] text-[#10a37f]">
        PRICING
      </h2>

      {/* Divider */}
    

      {/* Line 3 */}
      <h3 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-wide">
        SUPPORT
      </h3>
    </>
  ) : (
    <>
      {/* DEFAULT (unchanged for others) */}
      <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
        <span className="text-gray-400 font-bold mr-3">{cat.highlightWord}</span>
        <span className="text-black">{cat.mainWord}</span>
      </h2>
    </>
  )}

</div>

            {/* Accordion Questions List */}
            <div className="space-y-1">
              {cat.items.map((item, itemIdx) => {
                const uniqueId = `${catIdx}-${itemIdx}`;
                const isOpen = openIndex === uniqueId;

                return (
                  <div 
                    key={itemIdx} 
                    className="border-b border-gray-200 py-5 transition-colors duration-200"
                  >
                    <button
                      onClick={() => toggleAccordion(uniqueId)}
                      className="w-full flex items-start text-left gap-4 focus:outline-none group py-1"
                    >
                      {/* Plus / Minus Circular Brand Accent Icon */}
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${isOpen ? 'bg-[#10a37f] text-white' : 'bg-[#10a37f] text-white'}`}>
                        {isOpen ? <Minus className="w-3 h-3 stroke-[3]" /> : <Plus className="w-3 h-3 stroke-[3]" />}
                      </span>

                      {/* Question Text */}
                      <span className="font-extrabold text-black text-[16px] md:text-[17px] tracking-tight leading-snug">
                        {item.q}
                      </span>
                    </button>

                    {/* Accordion Solution Block */}
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="pl-10 pr-4 pt-3 pb-2 text-sm md:text-[15px] leading-relaxed text-gray-500 font-normal">
                        {item.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        ))}
      </div>

     
       </FadeIn>
     
     

    </div>
  );
}