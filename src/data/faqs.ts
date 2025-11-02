import { FAQ } from "@/types";

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What makes KLG different from other logistics platforms?",
    answer: "KLG is a government-backed platform that partners with existing telematics companies via API, avoiding costly hardware purchases. We rapidly onboard 1,300+ container trucks by integrating with providers like PowerTrack, Tramigo, and Frotcom, focusing on declaration companies and container transport.",
    category: "General",
  },
  {
    id: "2",
    question: "How do telematics API partnerships work?",
    answer: "KLG integrates with telematics providers' APIs to access real-time GPS data, vehicle status, and route progress for container trucks. This allows us to display and manage fleet data without purchasing hardware, while telematics companies retain their core revenue and gain new business opportunities.",
    category: "Integration",
  },
  {
    id: "3",
    question: "What types of clients does KLG serve?",
    answer: "KLG primarily serves declaration companies (customs brokers) who need reliable container transport, and trucking companies with 20ft/40ft container trucks. We also work with telematics providers seeking new revenue streams through our API partnership model.",
    category: "Clients",
  },
  {
    id: "4",
    question: "Which routes does KLG focus on?",
    answer: "KLG focuses on major container transport routes like Matadi-Kinshasa and other key import/export corridors across the DRC and 12 African countries. We prioritize routes with high container volume and existing telematics coverage.",
    category: "Operations",
  },
  {
    id: "5",
    question: "What kind of support do you provide?",
    answer: "We provide dedicated support for declaration companies and telematics partners, including API integration assistance, onboarding coordination, and ongoing technical support. Our local teams in Kinshasa understand frontier market challenges.",
    category: "Support",
  },
  {
    id: "6",
    question: "How quickly can trucks be onboarded?",
    answer: "Through API partnerships, trucks can be onboarded instantly once telematics providers grant access. No hardware installation needed—we leverage existing GPS devices already installed on container trucks.",
    category: "Technical",
  },
  {
    id: "7",
    question: "What data analytics and reporting capabilities do you offer?",
    answer: "KLG provides comprehensive analytics including route optimization, ETA accuracy, container tracking, and operational efficiency metrics. Our integrated dashboards serve declaration companies, truckers, and government agencies with real-time visibility.",
    category: "Analytics",
  },
  {
    id: "8",
    question: "How do you ensure data security and compliance?",
    answer: "KLG implements enterprise-grade security measures including data encryption, secure APIs, and compliance with regional regulations. As a government-backed platform, we meet industry standards for data protection and regulatory tracking.",
    category: "Security",
  },
];
