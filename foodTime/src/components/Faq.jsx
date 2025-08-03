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
        question: "How the subscription process works?",
        answer:
          "Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.\n\nDui et est dignissim amet dis nulla vulputate. Id aenean senectus fames lobortis dolor turpis eget lacinia et.",
      },
      {
        question: "What do I need to apply for the account?",
        answer: "Just fill out the form and submit the necessary documents.",
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
    business: [], // Empty for now
  };

  const currentFaqs = faqs[activeTab];

  return (
    <div className="px-4 md:px-8 py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Frequently asked questions
      </h2>

      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => {
            setActiveTab("general");
            setOpenIndex(null);
          }}
          className={`px-6 py-2 rounded-full text-sm font-medium ${
            activeTab === "general"
              ? "bg-[#396C03] text-white"
              : "border border-[#396C03] text-[#396C03]"
          }`}
        >
          General
        </button>
        <button
          onClick={() => {
            setActiveTab("business");
            setOpenIndex(null);
          }}
          className={`px-6 py-2 rounded-full text-sm font-medium ${
            activeTab === "business"
              ? "bg-[#396C03] text-white"
              : "border border-[#396C03] text-[#396C03]"
          }`}
        >
          For business
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentFaqs.length > 0 ? (
          currentFaqs.map((faq, index) => (
            <div
              key={index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="border rounded-xl p-5 bg-white cursor-pointer transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-[15px] leading-snug">
                  {faq.question}
                </h3>
                <span className="text-2xl font-bold text-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="text-sm text-gray-600 mt-4 whitespace-pre-line">
                  {faq.answer}
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="text-center col-span-2 text-gray-500">No FAQs available in this section.</p>
        )}
      </div>
    </div>
  );
};

export default Faq;
