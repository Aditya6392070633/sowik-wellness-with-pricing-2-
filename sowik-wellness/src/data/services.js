// The Sowik Wellness home-service formulary.
// Content sourced directly from the client's service menu + photo set.
// Every display string is bilingual: { en: "...", hi: "..." }.
// Use the useLanguage() hook's `t()` helper in components to resolve these.

export const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const chapters = [
  {
    id: "abhyanga",
    number: "I",
    title: { en: "Ayurvedic Rejuvenation Massages", hi: "आयुर्वेदिक कायाकल्प मालिश" },
    mark: "leaf",
    intro: {
      en: "Warm herbal oils, worked in the traditional strokes taught in Kerala's old massage halls — for circulation, fatigue, and the stiffness a desk builds up.",
      hi: "गर्म हर्बल तेल, केरल के पुराने मालिश केंद्रों में सिखाए गए पारंपरिक स्ट्रोक में लगाए जाते हैं — रक्त संचार, थकान और डेस्क पर बैठने से बनी अकड़न के लिए।",
    },
    items: [
      {
        name: { en: "Full Body Abhyanga", hi: "फुल बॉडी अभ्यंग" },
        subtitle: { en: "Full Body Massage", hi: "पूरे शरीर की मालिश" },
        desc: {
          en: "Traditional warm herbal oil massage to boost circulation and relieve daily fatigue.",
          hi: "रक्त संचार बढ़ाने और रोज़ की थकान दूर करने के लिए पारंपरिक गर्म हर्बल तेल मालिश।",
        },
        duration: { en: "45–60 min", hi: "45–60 मिनट" },
        image: "abhyanga-massage.jpg",
        original: "₹1,800",
        discounted: "₹1,440",
      },
      {
        name: { en: "Potli Massage", hi: "पोटली मालिश" },
        subtitle: { en: "Herbal Pouch Therapy", hi: "हर्बल पोटली चिकित्सा" },
        desc: {
          en: "Heated herbal bolus massage for deep muscle relaxation and stubborn stiffness relief.",
          hi: "गहरी मांसपेशी विश्राम और जिद्दी अकड़न से राहत के लिए गर्म हर्बल पोटली मालिश।",
        },
        duration: { en: "45–60 min", hi: "45–60 मिनट" },
        image: "potli-massage.jpg",
        original: "₹2,000",
        discounted: "₹1,600",
      },
      {
        name: { en: "Back Massage", hi: "बैक मालिश" },
        subtitle: { en: "Prishtha Abhyanga", hi: "पृष्ठ अभ्यंग" },
        desc: {
          en: "Warm-oil back massage using slow, soothing strokes to release muscle tension, reduce stiffness, and promote deep relaxation.",
          hi: "मांसपेशियों का तनाव कम करने, अकड़न घटाने और गहरे विश्राम के लिए धीमे, सुखदायक स्ट्रोक के साथ गर्म तेल की पीठ मालिश।",
        },
        duration: { en: "30-45 min", hi: "30-45 मिनट" },
        image: "head-massage.jpg",
        original: "₹1,000",
        discounted: "₹800",
      },
      {
        name: { en: "Head massage", hi: "हेड मसाज" },
        subtitle: { en: "Shiro Abhyanga", hi: "शिरो अभ्यंग" },
        desc: {
          en: "Gentle warm-oil massage of the scalp, head, and neck to relieve tension, calm the mind, and promote deep relaxation",
          hi: "तनाव दूर करने, मन को शांत करने और गहरे विश्राम के लिए स्कैल्प, सिर और गर्दन की कोमल गर्म तेल मालिश",
        },
        duration: { en: "30–40 min", hi: "30–40 मिनट" },
        image: "back-massage.jpg",
        original: "₹1,200",
        discounted: "₹960",
      },
      {
        name: { en: "Foot Massage", hi: "फुट मसाज" },
        subtitle: { en: "Padabhyanga", hi: "पादाभ्यंग" },
        desc: {
          en: "Traditional pressure-point foot massage to relieve fatigue and improve circulation.",
          hi: "थकान दूर करने और रक्त संचार सुधारने के लिए पारंपरिक प्रेशर-पॉइंट पैर मालिश।",
        },
        duration: { en: "30-45 min", hi: "30-45 मिनट" },
        image: "foot-massage.jpg",
        original: "₹1,200",
        discounted: "₹960",
      },
      {
        name: { en: "Chair Massage", hi: "चेयर मसाज" },
        subtitle: { en: "Quick Stress Release", hi: "त्वरित तनाव मुक्ति" },
        desc: {
          en: "Focused neck, shoulder, and upper-back massage for rapid stress relief between meetings.",
          hi: "मीटिंग के बीच तेज़ तनाव-मुक्ति के लिए गर्दन, कंधे और ऊपरी पीठ पर केंद्रित मालिश।",
        },
        duration: { en: "30-45 min", hi: "30-45 मिनट" },
        image: "chair-massage.jpg",
        original: "₹1,000",
        discounted: "₹800",
      },
    ],
  },
  {
    id: "cupping",
    number: "II",
    title: { en: "Specialized Cupping Therapy", hi: "विशेष कपिंग चिकित्सा" },
    mark: "cup",
    intro: {
      en: "Suction-based therapy drawn from both Ayurvedic and Unani traditions — used to move stagnant blood and release tension held deep in tissue.",
      hi: "आयुर्वेदिक और यूनानी दोनों परंपराओं से ली गई सक्शन-आधारित चिकित्सा — रुके हुए रक्त को गतिशील करने और ऊतकों में गहराई से जमे तनाव को छोड़ने के लिए।",
    },
    items: [
      {
        name: { en: "Cupping Therapy", hi: "कपिंग थेरेपी" },
        subtitle: { en: "Dry & Wet Cupping", hi: "ड्राई और वेट कपिंग" },
        desc: {
          en: "Advanced therapeutic cupping to improve blood flow, release deep tissue tension, and flush out toxins.",
          hi: "रक्त प्रवाह सुधारने, गहरे ऊतक तनाव को दूर करने और विषाक्त पदार्थों को बाहर निकालने के लिए उन्नत चिकित्सीय कपिंग।",
        },
        duration: { en: "30–45 min", hi: "30–45 मिनट" },
        image: "body-care-massage.jpg",
        original: "₹1,800",
        discounted: "₹1,440",
      },
    ],
  },
  {
    id: "basti",
    number: "III",
    title: { en: "Pain Management & Basti Services", hi: "दर्द प्रबंधन और बस्ती सेवाएं" },
    mark: "droplet",
    intro: {
      en: "A dam of warm dough holds medicated oil directly over the joint or spine — a slow, sustained soak that reaches where a massage alone cannot.",
      hi: "गर्म आटे का घेरा जोड़ या रीढ़ के ठीक ऊपर औषधीय तेल को रोके रखता है — एक धीमी, निरंतर भिगोने की प्रक्रिया जो अकेले मालिश से नहीं पहुँच पाती।",
    },
    items: [
      {
        name: { en: "Janu Basti", hi: "जानु बस्ती" },
        subtitle: { en: "Knee Pain Relief", hi: "घुटने के दर्द से राहत" },
        desc: {
          en: "Medicated oil pooling therapy for knee joint pain and arthritis relief.",
          hi: "घुटने के जोड़ों के दर्द और गठिया से राहत के लिए औषधीय तेल पूलिंग चिकित्सा।",
        },
        duration: { en: "30–45 min", hi: "30–45 मिनट" },
        image: "janu-basti.jpg",
        original: "₹1,800",
        discounted: "₹1,440",
        priceNote: { en: "₹1,200 on a package", hi: "पैकेज पर ₹1,200" },
      },
      {
        name: { en: "Greeva Basti", hi: "ग्रीवा बस्ती" },
        subtitle: { en: "Cervical Pain Relief", hi: "गर्दन के दर्द से राहत" },
        desc: {
          en: "Targeted herbal oil treatment for neck stiffness, spondylitis, and cervical pain.",
          hi: "गर्दन की अकड़न, स्पॉन्डिलाइटिस और गर्दन के दर्द के लिए लक्षित हर्बल तेल उपचार।",
        },
        duration: { en: "30–45 min", hi: "30–45 मिनट" },
        image: "greeva-basti.jpg",
        original: "₹1,800",
        discounted: "₹1,440",
        priceNote: { en: "₹1,200 on a package", hi: "पैकेज पर ₹1,200" },
      },
      {
        name: { en: "Kati Basti", hi: "कटि बस्ती" },
        subtitle: { en: "Back Pain Relief", hi: "पीठ के दर्द से राहत" },
        desc: {
          en: "Deep oil nourishment therapy for lower backache, sciatica, and spinal discomfort.",
          hi: "कमर दर्द, साइटिका और रीढ़ की परेशानी के लिए गहरी तेल पोषण चिकित्सा।",
        },
        duration: { en: "30–45 min", hi: "30–45 मिनट" },
        image: "kati-basti.jpg",
        original: "₹1,800",
        discounted: "₹1,440",
        priceNote: { en: "₹1,200 on a package", hi: "पैकेज पर ₹1,200" },
      },
      {
        name: { en: "Hridaya Basti", hi: "हृदय बस्ती" },
        subtitle: { en: "Heart Care Therapy", hi: "हृदय देखभाल चिकित्सा" },
        desc: {
          en: "Gentle medicated-oil therapy over the chest to support heart health and ease stress.",
          hi: "हृदय स्वास्थ्य को सहारा देने और तनाव कम करने के लिए छाती पर कोमल औषधीय-तेल चिकित्सा।",
        },
        duration: { en: "30–45 min", hi: "30–45 मिनट" },
        image: "hridaya-basti.jpg",
        original: "₹1,500",
        discounted: "₹1,200",
      },
      {
        name: { en: "Lungs Basti", hi: "फेफड़े बस्ती" },
        subtitle: { en: "Respiratory Care", hi: "श्वसन देखभाल" },
        desc: {
          en: "Warm herbal oil pooling therapy over the chest to support easier, deeper breathing.",
          hi: "आसान और गहरी साँस लेने में सहायता के लिए छाती पर गर्म हर्बल तेल पूलिंग चिकित्सा।",
        },
        duration: { en: "30–45 min", hi: "30–45 मिनट" },
        image: "lungs-basti.jpg",
        original: "₹1,500",
        discounted: "₹1,200",
      },
      {
        name: { en: "Liver Basti", hi: "लिवर बस्ती" },
        subtitle: { en: "Digestive & Liver Care", hi: "पाचन और लिवर देखभाल" },
        desc: {
          en: "Medicated oil therapy over the abdomen to support liver function and digestion.",
          hi: "लिवर कार्य और पाचन को सहारा देने के लिए पेट पर औषधीय तेल चिकित्सा।",
        },
        duration: { en: "30–45 min", hi: "30–45 मिनट" },
        image: "liver-basti.jpg",
        original: "₹1,500",
        discounted: "₹1,200",
      },
    ],
  },
  {
    id: "nabhi",
    number: "IV",
    title: { en: "Navel Alignment & Care", hi: "नाभि संरेखण और देखभाल" },
    mark: "spiral",
    intro: {
      en: "Nabhi Sthan — the navel as a keystone. A gentle manual technique used for generations to correct its shift and ease the digestion that follows.",
      hi: "नाभि स्थान — नाभि को एक आधार-बिंदु मानते हुए। पीढ़ियों से उपयोग की जा रही एक कोमल हस्त-तकनीक जो इसके खिसकाव को ठीक करती है और उसके बाद पाचन को आसान बनाती है।",
    },
    items: [
      {
        name: { en: "Navel Displacement Care", hi: "नाभि विस्थापन देखभाल" },
        subtitle: { en: "Nabhi Sthan", hi: "नाभि स्थान" },
        desc: {
          en: "Traditional manual technique to restore natural navel alignment and improve digestion.",
          hi: "नाभि के प्राकृतिक संरेखण को बहाल करने और पाचन सुधारने के लिए पारंपरिक हस्त-तकनीक।",
        },
        duration: { en: "30–45 min", hi: "30–45 मिनट" },
        image: "nabhi-basti.jpg",
        original: "₹1,500",
        discounted: "₹1,200",
      },
    ],
  },
  {
    id: "shatkarma",
    number: "V",
    title: { en: "Shatkarma Detox Therapies", hi: "षट्कर्म डिटॉक्स चिकित्सा" },
    mark: "wave",
    intro: {
      en: "Nadi and body cleansing, unhurried. Classical purification techniques for the passages that carry breath, mucus, and digestion.",
      hi: "नाड़ी और शरीर की सफाई, बिना जल्दबाज़ी के। साँस, कफ और पाचन को ले जाने वाले मार्गों के लिए शास्त्रीय शुद्धिकरण तकनीकें।",
    },
    items: [
      {
        name: { en: "Jal Neti", hi: "जल नेति" },
        subtitle: { en: "Nasal Irrigation", hi: "नासिका सिंचन" },
        desc: {
          en: "Nasal irrigation using warm saline water to clear sinus and respiratory passages.",
          hi: "साइनस और श्वसन मार्गों को साफ करने के लिए गर्म नमकीन पानी से नासिका सिंचन।",
        },
        duration: { en: "15-30 min", hi: "15-30 मिनट" },
        image: "jal-neti.jpg",
        original: "₹1,200",
        discounted: "₹960",
      },
      {
        name: { en: "Rubber Neti", hi: "रबर नेति" },
        subtitle: { en: "Advanced Nasal Cleansing", hi: "उन्नत नासिका शुद्धि" },
        desc: {
          en: "Advanced nasal cleansing using a specialised flexible tube for clear breathing.",
          hi: "साफ साँस के लिए विशेष लचीली ट्यूब का उपयोग करते हुए उन्नत नासिका शुद्धि।",
        },
        duration: { en: "30 min", hi: "30 मिनट" },
        image: "rubber-neti.png",
        original: "₹1,200",
        discounted: "₹960",
      },
      {
        name: { en: "Kunjal Kriya", hi: "कुंजल क्रिया" },
        subtitle: { en: "Digestive Detox", hi: "पाचन डिटॉक्स" },
        desc: {
          en: "Digestive tract detox therapy for acidity, gas, and stomach cleansing.",
          hi: "एसिडिटी, गैस और पेट की सफाई के लिए पाचन तंत्र डिटॉक्स चिकित्सा।",
        },
        duration: { en: "15-30 min", hi: "15-30 मिनट" },
        image: "kunjal-kriya.jpg",
        original: "₹1,000",
        discounted: "₹800",
      },
      {
        name: { en: "Netra Shuddhi", hi: "नेत्र शुद्धि" },
        subtitle: { en: "Eye Wash Therapy", hi: "आँख धोने की चिकित्सा" },
        desc: {
          en: "Traditional eye-cleansing therapy to soothe strain and refresh tired eyes.",
          hi: "आँखों के तनाव को शांत करने और थकी आँखों को तरोताज़ा करने के लिए पारंपरिक नेत्र-शुद्धि चिकित्सा।",
        },
        duration: { en: "15-30 min", hi: "15-30 मिनट" },
        image: "netra-shuddhi.jpg",
        original: "₹1,000",
        discounted: "₹800",
      },
    ],
  },
  {
    id: "yoga",
    number: "VI",
    title: { en: "Yoga & Mind-Care Therapy", hi: "योग और मानसिक देखभाल चिकित्सा" },
    mark: "lotus",
    intro: {
      en: "Breath and posture, taught one-to-one, at a pace that fits an ordinary day rather than a studio timetable.",
      hi: "साँस और आसन, एक-से-एक सिखाए गए, स्टूडियो के समय-सारिणी की बजाय एक साधारण दिन में फिट होने वाली गति पर।",
    },
    items: [
      {
        name: { en: "Pranayama", hi: "प्राणायाम" },
        subtitle: { en: "Breathwork", hi: "श्वास अभ्यास" },
        desc: {
          en: "Guided breathing techniques to manage anxiety, stress, and energy levels.",
          hi: "चिंता, तनाव और ऊर्जा स्तर को नियंत्रित करने के लिए निर्देशित श्वास तकनीकें।",
        },
        duration: { en: "60 min", hi: "60 मिनट" },
        image: "pranayama-1.jpg",
        original: "₹1,5000",
        discounted: "₹1,2000",
        priceNote: { en: "24-day programme", hi: "24-दिवसीय कार्यक्रम" },
      },
      {
        name: { en: "Therapeutic Yoga", hi: "चिकित्सीय योग" },
        subtitle: { en: "Short Yoga Sessions", hi: "छोटे योग सत्र" },
        desc: {
          en: "Customised 15–30 minute guided posture sessions designed for daily wellness and flexibility.",
          hi: "दैनिक वेलनेस और लचीलेपन के लिए तैयार किए गए 15–30 मिनट के अनुकूलित निर्देशित आसन सत्र।",
        },
        duration: { en: "60 min", hi: "60 मिनट" },
        image: "yoga-therapeutic.jpg",
        original: "₹15000",
        discounted: "₹12000",
        priceNote: { en: "24-day programme", hi: "24-दिवसीय कार्यक्रम" },
      },
      {
        name: { en: "Chair Yoga", hi: "चेयर योग" },
        subtitle: { en: "Seated Yoga Session", hi: "बैठकर किया जाने वाला योग सत्र" },
        desc: {
          en: "Low-impact seated postures and stretches for flexibility, done right from a chair.",
          hi: "लचीलेपन के लिए कम-प्रभाव वाले बैठे हुए आसन और स्ट्रेच, कुर्सी से ही किए जाते हैं।",
        },
        duration: { en: "60 min", hi: "60 मिनट" },
        image: "chair-yoga.png",
        original: "₹15000",
        discounted: "₹12000",
        priceNote: { en: "24-day programme", hi: "24-दिवसीय कार्यक्रम" },
      },
      {
        name: { en: "Online Yoga", hi: "ऑनलाइन योग" },
        subtitle: { en: "Live Video Sessions", hi: "लाइव वीडियो सत्र" },
        desc: {
          en: "Guided yoga over live video for days a home visit isn't needed — same routine, from anywhere.",
          hi: "जिन दिनों घर विज़िट की ज़रूरत नहीं, उनके लिए लाइव वीडियो पर निर्देशित योग — वही रूटीन, कहीं से भी।",
        },
        duration: { en: "60 min", hi: "60 मिनट" },
        image: "online-yoga.png",
        original: "₹15,000",
        discounted: "₹9,000",
        priceNote: { en: "24-day programme", hi: "24-दिवसीय कार्यक्रम" },
      },
    ],
  },
  {
    id: "special-care",
    number: "VII",
    title: { en: "Specialised Care Programs", hi: "विशेष देखभाल कार्यक्रम" },
    mark: "lotus",
    intro: {
      en: "Gentler protocols built around life stage rather than a single symptom — for elders who want to stay mobile, and mothers-to-be who want safe, trained hands.",
      hi: "किसी एक लक्षण की बजाय जीवन के चरण के अनुरूप बनाए गए कोमल प्रोटोकॉल — उन बुज़ुर्गों के लिए जो सक्रिय रहना चाहते हैं, और होने वाली माताओं के लिए जो सुरक्षित, प्रशिक्षित हाथ चाहती हैं।",
    },
    items: [
      {
        name: { en: "Senior Citizen Care", hi: "वरिष्ठ नागरिक देखभाल" },
        subtitle: { en: "Elderly Wellness Support", hi: "बुज़ुर्गों के लिए वेलनेस सहायता" },
        desc: {
          en: "Gentle, mobility-first massage and therapy protocols tailored for senior citizens, male and female.",
          hi: "पुरुष और महिला वरिष्ठ नागरिकों के लिए तैयार किए गए कोमल, गतिशीलता-केंद्रित मालिश और चिकित्सा प्रोटोकॉल।",
        },
        duration: { en: "60 min", hi: "60 मिनट" },
        image: "senior-citizen-care-1.jpg",
        original: "₹15000",
        discounted: "₹12,000",
        priceNote: { en: "24-day programme", hi: "24-दिवसीय कार्यक्रम" },
      },
      {
        name: { en: "Pregnancy & Ladies Care", hi: "गर्भावस्था और महिला देखभाल" },
        subtitle: { en: "Prenatal & Women's Wellness", hi: "प्रसवपूर्व और महिला वेलनेस" },
        desc: {
          en: "Safe, trained therapy tailored for expecting mothers and women's wellness needs.",
          hi: "होने वाली माताओं और महिलाओं की वेलनेस ज़रूरतों के लिए तैयार सुरक्षित, प्रशिक्षित चिकित्सा।",
        },
        duration: { en: "60 min", hi: "60 मिनट" },
        image: "pregnancy-ladies-care.jpg",
        original: "₹18000",
        discounted: "₹14400",
        priceNote: { en: "24-day programme", hi: "24-दिवसीय कार्यक्रम" },
      },
    ],
  },
];

<<<<<<< HEAD
export const founders = [
=======
export const team = [
>>>>>>> 9ed06dd9d93d84d7ea52a8761053bc98e1c5e421
  {
    role: { en: "Founder", hi: "संस्थापक" },
    name: "Sohit Kumar",
    title: { en: "Founder & Ayurvedic Wellness Lead", hi: "संस्थापक और आयुर्वेदिक वेलनेस प्रमुख" },
    image: "founder.jpg",
    bio: {
      en: "Sovik founded Sovik Wellness with a vision to make authentic Ayurvedic wellness more accessible through personalised home-care services. He focuses on maintaining authentic treatment practices, service quality, therapist standards, and a client-first approach to holistic wellbeing.",
      hi: "सोविक ने व्यक्तिगत घर-देखभाल सेवाओं के माध्यम से प्रामाणिक आयुर्वेदिक वेलनेस को अधिक सुलभ बनाने की दृष्टि के साथ सोविक वेलनेस की स्थापना की। वे प्रामाणिक उपचार अभ्यास, सेवा गुणवत्ता, थेरेपिस्ट मानकों और समग्र स्वास्थ्य के प्रति ग्राहक-केंद्रित दृष्टिकोण बनाए रखने पर ध्यान केंद्रित करते हैं।",
    },
    highlights: {
      en: [
        "Founder & Wellness Lead",
        "Authentic Ayurvedic Wellness",
        "Treatment & Service Standards",
        "Personalised Client Care",
      ],
      hi: [
        "संस्थापक और वेलनेस प्रमुख",
        "प्रामाणिक आयुर्वेदिक वेलनेस",
        "उपचार और सेवा मानक",
        "व्यक्तिगत ग्राहक देखभाल",
      ],
    },
  },
  {
    role: { en: "Co-Founder", hi: "सह-संस्थापक" },
    name: "Vikas Kumar",
    title: { en: "Co-Founder & Operations Lead", hi: "सह-संस्थापक और परिचालन प्रमुख" },
    image: "cofounder.jpg",
    bio: {
      en: "Vikash co-founded Sovik Wellness and oversees client experience and daily operations. He coordinates bookings, therapist visits, follow-ups, and service delivery to ensure every client receives a smooth and professional wellness experience.",
      hi: "विकास ने सोविक वेलनेस की सह-स्थापना की और ग्राहक अनुभव और दैनिक परिचालन की देखरेख करते हैं। वे बुकिंग, थेरेपिस्ट विज़िट, फॉलो-अप और सेवा वितरण का समन्वय करते हैं ताकि हर ग्राहक को एक सहज और पेशेवर वेलनेस अनुभव मिले।",
    },
    highlights: {
      en: ["Co-Founder & Operations Lead", "Client Experience", "Therapist Coordination", "Bookings & Operations"],
      hi: ["सह-संस्थापक और परिचालन प्रमुख", "ग्राहक अनुभव", "थेरेपिस्ट समन्वय", "बुकिंग और परिचालन"],
    },
  },
<<<<<<< HEAD
];

export const doctors = [
  {
    role: { en: "Doctor", hi: "डॉक्टर" },
    name: "Dr. Annya Gautam",
    consultationFee: {
      en: "₹1,000 Consultation Fee",
      hi: "₹1,000 परामर्श शुल्क",
    },
    title: {
      en: "BAMS, MD (Panchakarma)",
      hi: "बीएएमएस, एमडी (पंचकर्म)",
    },
    image: "doctor-annya-gautam.jpg",
    bio: {
      en: "Dr. Annya Gautam (BAMS, MD Panchakarma) brings clinical experience across diagnostic testing, patient counselling, diagnosis, and treatment, along with training in Advanced Cardiovascular Life Support (ACLS & BLS). Her background includes peripheral OPDs and camps across Maharashtra, specialty-clinic training, and certification in Ayurvedic cosmetology and trichology. She has presented multiple papers and posters at national and international conferences, with published work spanning insomnia, depressive disorder, diabetic neuropathy with stroke, and hepatocellular jaundice.",
      hi: "डॉ. अन्न्या गौतम (बीएएमएस, एमडी पंचकर्म) को डायग्नोस्टिक टेस्टिंग, पेशेंट काउंसलिंग, निदान और उपचार में नैदानिक अनुभव है, साथ ही एडवांस्ड कार्डियोवैस्कुलर लाइफ सपोर्ट (ACLS व BLS) में प्रशिक्षण भी प्राप्त है। उनकी पृष्ठभूमि में महाराष्ट्र भर में पेरिफेरल ओपीडी व कैंप, स्पेशलिटी क्लिनिक प्रशिक्षण, और आयुर्वेदिक कॉस्मेटोलॉजी व ट्राइकोलॉजी में सर्टिफिकेशन शामिल है। उन्होंने राष्ट्रीय व अंतरराष्ट्रीय सम्मेलनों में कई पेपर व पोस्टर प्रस्तुत किए हैं, जिनमें अनिद्रा, अवसाद, डायबिटिक न्यूरोपैथी व स्ट्रोक और हेपेटोसेल्युलर पीलिया पर प्रकाशित कार्य शामिल हैं।",
    },
    highlights: {
      en: [
        "BAMS, MD Panchakarma",
        "Diagnosis & Treatment",
        "Patient Counselling",
        "ACLS & BLS Trained",
        "Ayurvedic Cosmetology & Trichology",
      ],
      hi: [
        "बीएएमएस, एमडी पंचकर्म",
        "निदान और उपचार",
        "रोगी परामर्श",
        "ACLS व BLS प्रशिक्षित",
        "आयुर्वेदिक कॉस्मेटोलॉजी व ट्राइकोलॉजी",
      ],
    },
  },
  {
    role: { en: "Doctor", hi: "डॉक्टर" },
    name: "Dr. Shijin TP",
    consultationFee: {
      en: "₹1,000 Consultation Fee",
      hi: "₹1,000 परामर्श शुल्क",
    },
=======
  {
    role: { en: "Doctor", hi: "डॉक्टर" },
    name: "Dr. Shijin TP",
>>>>>>> 9ed06dd9d93d84d7ea52a8761053bc98e1c5e421
    title: {
      en: "BAMS | Musculoskeletal & Neurological Wellness",
      hi: "बीएएमएस | मस्कुलोस्केलेटल और न्यूरोलॉजिकल वेलनेस",
    },
    image: "doctor-shijin-tp.jpg",
    bio: {
      en: "Dr. Shijin TP (BAMS) focuses on musculoskeletal and neurological wellness, with clinical interests including back pain, neck strain, knee pain, joint stiffness, muscle cramps, migraine and headache disorders, Parkinson's disease, epilepsy, stroke recovery, multiple sclerosis, peripheral neuropathy, sleep disorders, and movement disorders.",
      hi: "डॉ. शिजिन टीपी (बीएएमएस) मस्कुलोस्केलेटल और न्यूरोलॉजिकल वेलनेस पर ध्यान केंद्रित करते हैं, जिसमें पीठ दर्द, गर्दन में खिंचाव, घुटने का दर्द, जोड़ों की अकड़न, मांसपेशियों में ऐंठन, माइग्रेन और सिरदर्द विकार, पार्किंसन रोग, मिर्गी, स्ट्रोक रिकवरी, मल्टीपल स्क्लेरोसिस, पेरिफेरल न्यूरोपैथी, नींद संबंधी विकार और मूवमेंट विकार जैसे नैदानिक क्षेत्र शामिल हैं।",
    },
    highlights: {
      en: [
        "BAMS",
        "Musculoskeletal Wellness",
        "Neurological Wellness",
        "Back & Neck Pain",
        "Knee & Joint Care",
        "Migraine & Headache Disorders",
        "Sleep Disorders",
        "Movement Disorders",
      ],
      hi: [
        "बीएएमएस",
        "मस्कुलोस्केलेटल वेलनेस",
        "न्यूरोलॉजिकल वेलनेस",
        "पीठ और गर्दन दर्द",
        "घुटने और जोड़ों की देखभाल",
        "माइग्रेन और सिरदर्द विकार",
        "नींद संबंधी विकार",
        "मूवमेंट विकार",
      ],
    },
  },
<<<<<<< HEAD
  {
    role: { en: "Doctor", hi: "डॉक्टर" },
    name: "Dr. Payal Sharma",
    consultationFee: {
      en: "₹1,000 Consultation Fee",
      hi: "₹1,000 परामर्श शुल्क",
    },
    title: {
      en: "BAMS, MS (Ayurveda) — Gynecology & Obstetrics",
      hi: "बीएएमएस, एमएस (आयुर्वेद) — स्त्री रोग एवं प्रसूति",
    },
    image: "doctor-payal-sharma.jpg",
    bio: {
      en: "Dr. Payal Sharma is an experienced Ayurvedic physician specializing in women's health, gynecological disorders, and reproductive health. With a holistic approach to treatment, she focuses on understanding the individual needs of every woman and providing personalized Ayurvedic care. Her areas of expertise include infertility and fertility support, PCOD/PCOS, uterine fibroids, menstrual disorders, menopause, and other gynecological concerns. She also provides Ayurvedic guidance for women seeking natural and holistic support for reproductive and hormonal health. Dr. Payal believes in combining Ayurvedic principles, personalized treatment, and lifestyle guidance to support women through different stages of their reproductive and hormonal journey, with an emphasis on safe, individualized, and compassionate care.",
      hi: "डॉ. पायल शर्मा एक अनुभवी आयुर्वेदिक चिकित्सक हैं जो महिलाओं के स्वास्थ्य, स्त्री रोग संबंधी विकारों और प्रजनन स्वास्थ्य में विशेषज्ञता रखती हैं। समग्र उपचार दृष्टिकोण के साथ, वे हर महिला की व्यक्तिगत आवश्यकताओं को समझने और व्यक्तिगत आयुर्वेदिक देखभाल प्रदान करने पर ध्यान केंद्रित करती हैं। उनकी विशेषज्ञता के क्षेत्रों में बांझपन व प्रजनन सहायता, पीसीओडी/पीसीओएस, गर्भाशय फाइब्रॉएड, मासिक धर्म संबंधी विकार, रजोनिवृत्ति और अन्य स्त्री रोग संबंधी चिंताएं शामिल हैं। वे प्रजनन और हार्मोनल स्वास्थ्य के लिए प्राकृतिक व समग्र सहायता चाहने वाली महिलाओं के लिए आयुर्वेदिक मार्गदर्शन भी प्रदान करती हैं। डॉ. पायल आयुर्वेदिक सिद्धांतों, व्यक्तिगत उपचार और जीवनशैली मार्गदर्शन को जोड़कर महिलाओं को उनकी प्रजनन और हार्मोनल यात्रा के विभिन्न चरणों में सहयोग देने में विश्वास रखती हैं, जिसमें सुरक्षित, व्यक्तिगत और सहानुभूतिपूर्ण देखभाल पर ज़ोर दिया जाता है।",
    },
    highlights: {
      en: [
        "BAMS, MS (Ayurveda)",
        "Infertility & Fertility Support",
        "PCOD/PCOS",
        "Uterine Fibroids",
        "Menstrual Disorders",
        "Menopause Care",
      ],
      hi: [
        "बीएएमएस, एमएस (आयुर्वेद)",
        "बांझपन व प्रजनन सहायता",
        "पीसीओडी/पीसीओएस",
        "गर्भाशय फाइब्रॉएड",
        "मासिक धर्म विकार",
        "रजोनिवृत्ति देखभाल",
      ],
    },
  },
];

// Kept for backward compatibility with any code still importing the combined list.
export const team = [...founders, ...doctors];

export const contact = {
  phone: "+91 96676 57227",
  phoneHref: "tel:+919667657227",
  whatsappHref:
    "https://wa.me/919667657227?text=" +
    encodeURIComponent("Namaste Sowik Wellness, I'd like to book a home session."),
  address: "F 149, 2nd Floor, Vasundhara Sector 3, Ghaziabad, 201012",
  facebookUrl: "https://www.facebook.com/share/1Q1iqH2AFh/",
  instagramUrl:
    "https://www.instagram.com/sovikwellness?igsi=Z2FyNGg4OHg5YnM5&utm_source=ig_contact_invite",
=======
];

export const contact = {
  phone: "+91 9690148288",
  phoneHref: "tel:+919690148288",
  whatsappHref:
    "https://wa.me/919690148288?text=" +
    encodeURIComponent("Namaste Sowik Wellness, I'd like to book a home session."),
>>>>>>> 9ed06dd9d93d84d7ea52a8761053bc98e1c5e421
};
