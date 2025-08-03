import React, { useState } from "react";

const Faq = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = {
    general: [
      {
        question: "What do I need to apply for the account?",
        answer: "To apply for the account, you'll need valid identification and some personal details.",
      },
      {
        question: "How does the subscription process work?",
        answer:
          "Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.\n\nDui et est dignissim amet dis nulla vulputate. Id aenean senectus fames lobortis dolor turpis eget lacinia et.",
      },
      {
        question: "Is foodtime available 24 hours?",
        answer: "Yes, foodtime is available 24/7 in major cities.",
      },
      {
        question: "Is there any hidden fee included?",
        answer: "No, all fees are transparently displayed before checkout.",
      },
    ],
    business: [
      {
        question: "How do I partner with Foodtime?",
        answer: "Fill out our business application or contact our sales team.",
      },
      {
        question: "Do you offer custom branding?",
        answer: "Yes, business partners can work with our team to develop co-branded experiences.",
      },
    ],
  };

  const currentFaqs = faqs[activeTab];

  return (
    <section className="w-full px-4 md:px-8 py-16 bg-[#F9F5F0] flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#232b2b]">
        Frequently Asked Questions
      </h2>
      <div className="flex justify-center gap-4 mb-10">
        {["general", "business"].map((tab) => (
          <button
            key={tab}
            onClick={() => { setActiveTab(tab); setOpenIndex(null); }}
            className={`px-6 py-2 rounded-full text-sm font-medium focus:outline-none transition 
              ${
                activeTab === tab
                  ? "bg-[#396C03] text-white shadow"
                  : "border border-[#396C03] text-[#396C03] bg-white hover:bg-[#f3faf1]"
              }`}
            aria-pressed={activeTab === tab}
            tabIndex={0}
            type="button"
          >
            {tab === "general" ? "General" : "For business"}
          </button>
        ))}
      </div>
      <div className="w-full max-w-xl flex flex-col gap-6">
        {currentFaqs.length > 0 ? (
          currentFaqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl bg-white border transition-all duration-200 shadow-sm
                ${openIndex === index ? "shadow-md border-[#396C03]" : "hover:shadow hover:border-[#396C03]/80"}
              `}
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 cursor-pointer select-none rounded-2xl focus:outline-none group transition"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                tabIndex={0}
                type="button"
              >
                <span className="font-semibold text-base md:text-lg text-left text-[#232b2b]">
                  {faq.question}
                </span>
                <span className="ml-4 transform transition-transform duration-200 group-focus:rotate-180"
                  style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  aria-hidden="true"
                >
                  <svg width="24" height="24" fill="none" stroke="#396C03" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-[max-height] duration-300 px-6
                  ${openIndex === index ? "max-h-96 py-2" : "max-h-0"}
                `}
                aria-live={openIndex === index ? "polite" : "off"}
              >
                <p className={`text-gray-600 text-sm whitespace-pre-line pb-3 ${openIndex === index ? "opacity-100" : "opacity-0"}`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-2xl bg-white border shadow p-8 text-center text-gray-500 text-base">
            No FAQs available in this section.
          </div>
        )}
      </div>
    </section>
  );
};

export default Faq;
