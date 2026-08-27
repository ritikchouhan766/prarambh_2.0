// // ─── SITE CONFIG ─────────────────────────────────────────────────────────────
// export const SITE = {
//   name: "Prarambham Child Rehabilitation Centre",
//   tagline: "Empowering young minds and bodies",
//   shortName: "Prarambham",
//   phone: "+91 6377216003",
//   whatsapp: "916377216003",
//   email: "info@prarambham.in",
//   address: "Air Force Area, Jodhpur, Rajasthan",
//   mapShareLink: "https://share.google/SW1a5ibLEX2V6FPLv",
// } as const;

// // ─── FORM LINKS ───────────────────────────────────────────────────────────────
// export const FORMS = {
//   appointment: "https://forms.google.com/dummy-appointment",
//   enquiry: "https://forms.google.com/dummy-enquiry",
//   feedback: "https://forms.google.com/dummy-feedback",
// } as const;

// // ─── WORKING HOURS ────────────────────────────────────────────────────────────
// export const HOURS = [
//   { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
//   { day: "Saturday",        time: "9:00 AM – 2:00 PM" },
//   { day: "Sunday",          time: "By Appointment Only" },
// ] as const;

// // ─── NAV LINKS ────────────────────────────────────────────────────────────────
// export const NAV_LINKS = [
//   { label: "Home",       href: "/" },
//   { label: "Services",   href: "/services" },
//   { label: "Conditions", href: "/conditions" },
//   { label: "Therapist",  href: "/therapist" },
//   { label: "Contact",    href: "/contact" },
// ] as const;

// // ─── TRUST ITEMS (HERO) ───────────────────────────────────────────────────────
// export const TRUST_ITEMS = [
//   { icon: "🎓", text: "Certified Therapist" },
//   { icon: "💛", text: "Personalized Plans" },
//   { icon: "🏡", text: "Child-Friendly Space" },
// ] as const;

// // ─── HERO STATS ───────────────────────────────────────────────────────────────
// export const HERO_STATS = [
//   { num: "3+",   label: "Years Exp." },
//   { num: "6",    label: "Therapies" },
//   { num: "100+", label: "Children" },
// ] as const;

// // ─── CONDITIONS (PREVIEW + FULL PAGE) ────────────────────────────────────────
// export interface Condition {
//   icon: string;
//   title: string;
//   preview: string;
//   overview: string;
//   warnings: string[];
//   therapyHelps: string[];
// }

// export const CONDITIONS: Condition[] = [
//   {
//     icon: "🗣️",
//     title: "Speech Delay",
//     preview: "Difficulty speaking, limited vocabulary, or unclear speech for their age.",
//     overview:
//       "Speech delay affects how children develop language and communication. It can be isolated or associated with autism, hearing loss, or cognitive delays.",
//     warnings: [
//       "No babbling by 12 months",
//       "No single words by 16 months",
//       "No two-word phrases by 24 months",
//       "Loss of previously acquired language",
//     ],
//     therapyHelps: [
//       "Structured language stimulation techniques",
//       "Play-based communication strategies",
//       "Parent coaching for home practice",
//       "AAC tools if needed (non-verbal support)",
//     ],
//   },
//   {
//     icon: "🧩",
//     title: "Autism Spectrum",
//     preview: "Communication, social, and behavioural challenges needing structured support.",
//     overview:
//       "ASD is a neurodevelopmental condition affecting social communication and behaviour. Early, intensive therapy significantly improves outcomes and independence.",
//     warnings: [
//       "Limited eye contact or social smiling",
//       "No response to their name by 12 months",
//       "Repetitive movements or restricted interests",
//       "Difficulty with transitions or changes",
//     ],
//     therapyHelps: [
//       "Applied Behaviour Analysis (ABA)",
//       "Social skills training",
//       "Sensory integration therapy",
//       "Communication and speech development",
//     ],
//   },
//   {
//     icon: "⚡",
//     title: "ADHD",
//     preview: "Attention difficulties and hyperactivity affecting learning and daily life.",
//     overview:
//       "ADHD affects attention, impulse control, and activity level. Without support, it can significantly impact learning, relationships, and self-esteem.",
//     warnings: [
//       "Unable to focus for age-appropriate time",
//       "Constant movement, climbing, or running",
//       "Interrupts constantly, can't wait for turn",
//       "Difficulty completing schoolwork",
//     ],
//     therapyHelps: [
//       "Structured routine and behaviour management",
//       "OT for attention and regulation",
//       "Parent training strategies",
//       "School readiness programs",
//     ],
//   },
//   {
//     icon: "🚶",
//     title: "Walking Difficulty",
//     preview: "Gait abnormalities, toe-walking, balance issues, or delayed walking.",
//     overview:
//       "Gait abnormalities, delayed walking, or unusual patterns often respond very well to physiotherapy intervention, especially when treated early.",
//     warnings: [
//       "Not walking independently by 18 months",
//       "Persistent toe-walking after age 3",
//       "Walking on insides or outsides of feet",
//       "Frequent falls or poor balance",
//     ],
//     therapyHelps: [
//       "Gait analysis and correction exercises",
//       "Balance and coordination training",
//       "Orthotic assessment and referral",
//       "Strength-building for lower limbs",
//     ],
//   },
//   {
//     icon: "💪",
//     title: "Weak Muscles",
//     preview: "Hypotonia, poor posture, or low muscle strength limiting activities.",
//     overview:
//       "Hypotonia (low muscle tone) affects strength, posture, and movement. Children appear 'floppy' and tire easily. Physiotherapy is the primary treatment.",
//     warnings: [
//       "Difficulty holding head up or sitting unsupported",
//       "Feeling 'floppy' when held",
//       "Delayed motor milestones (rolling, crawling)",
//       "Poor posture, tires quickly during activity",
//     ],
//     therapyHelps: [
//       "Targeted muscle strengthening programs",
//       "Core stability and postural training",
//       "Proprioceptive and sensory input techniques",
//       "Home exercise programs for parents",
//     ],
//   },
//   {
//     icon: "🌱",
//     title: "Developmental Delay",
//     preview: "Delays in motor, cognitive, or social milestones vs. typical development.",
//     overview:
//       "Global developmental delay affects multiple areas — motor, language, cognitive, and social development. Multi-disciplinary therapy provides the best outcomes.",
//     warnings: [
//       "Significant delay in 2 or more developmental areas",
//       "Not meeting expected milestones for age",
//       "Regression — losing skills previously acquired",
//       "Limited social engagement or play skills",
//     ],
//     therapyHelps: [
//       "Comprehensive multi-disciplinary assessment",
//       "Coordinated therapy across all affected areas",
//       "Family education and coping strategies",
//       "Regular progress reviews and goal updates",
//     ],
//   },
// ];

// // ─── SERVICES ─────────────────────────────────────────────────────────────────
// export interface ServiceCard {
//   icon: string;
//   title: string;
//   description: string;
//   outcome: string;
//   isPrimary?: boolean;
// }

// export interface ServiceDetail extends ServiceCard {
//   bgColor: string;
//   badge?: string;
//   fullDescription: string;
//   problems: string[];
//   outcomes: string[];
// }

// export const SERVICES: ServiceDetail[] = [
//   {
//     icon: "🦴",
//     title: "Pediatric Physiotherapy",
//     description:
//       "Expert movement and strength therapy targeting motor skills, posture, balance, and physical independence.",
//     outcome: "Children walk better, move freely",
//     isPrimary: true,
//     bgColor: "bg-teal-pale",
//     badge: "Primary Service",
//     fullDescription:
//       "Our flagship service focuses on improving your child's movement, strength, coordination, and physical independence. Using evidence-based techniques including neurodevelopmental therapy (NDT), sensory integration, and gait training — we design programs that fit your child's unique body and goals.",
//     problems: [
//       "Children with delayed walking or abnormal gait patterns",
//       "Low muscle tone (hypotonia) or spasticity",
//       "Cerebral palsy and neurological conditions",
//       "Post-surgical or injury rehabilitation",
//     ],
//     outcomes: [
//       "Improved walking pattern and balance",
//       "Stronger core and limb muscles",
//       "Greater physical independence in daily activities",
//       "Reduced need for assistive devices over time",
//     ],
//   },
//   {
//     icon: "🗣️",
//     title: "Speech Therapy",
//     description:
//       "Improving communication, language comprehension, articulation and social communication skills.",
//     outcome: "Clear speech, confident communication",
//     bgColor: "bg-blue-pale",
//     fullDescription:
//       "Speech therapy at Prarambham addresses communication disorders across all levels — from children who are non-verbal to those with articulation issues or language processing difficulties. Our approach is play-based and parent-inclusive.",
//     problems: [
//       "Children with speech delay or limited vocabulary",
//       "Autism-related communication challenges",
//       "Stuttering or fluency disorders",
//       "Feeding and swallowing difficulties",
//     ],
//     outcomes: [
//       "Clearer, more expressive speech",
//       "Improved social communication skills",
//       "Better comprehension and response",
//       "Increased confidence in communication",
//     ],
//   },
//   {
//     icon: "✋",
//     title: "Occupational Therapy",
//     description:
//       "Building fine motor skills, self-care routines, sensory processing, and school readiness.",
//     outcome: "Independence in daily activities",
//     bgColor: "bg-sage-pale",
//     fullDescription:
//       "OT at Prarambham focuses on equipping children with the skills they need for daily tasks — from holding a pencil to dressing themselves. We address sensory processing issues, fine motor development, and school readiness in a structured, engaging environment.",
//     problems: [
//       "Sensory processing difficulties (over/under-sensitivity)",
//       "Poor handwriting or fine motor coordination",
//       "Difficulty with self-care tasks",
//       "Attention and concentration in school settings",
//     ],
//     outcomes: [
//       "Improved self-care and independence",
//       "Better handwriting and classroom performance",
//       "Calmer sensory responses",
//       "School readiness and participation",
//     ],
//   },
//   {
//     icon: "🧠",
//     title: "Behaviour Therapy",
//     description:
//       "Positive behaviour strategies for children with autism, ADHD, or emotional regulation challenges.",
//     outcome: "Calmer, focused, cooperative",
//     bgColor: "bg-yellow-50",
//     fullDescription:
//       "Behaviour therapy helps children develop positive coping strategies, reduce harmful behaviours, and build social skills. Using Applied Behaviour Analysis (ABA) principles and cognitive-behavioural approaches, sessions are structured, measurable, and outcome-focused.",
//     problems: [
//       "Children with autism who exhibit challenging behaviours",
//       "Emotional dysregulation and meltdowns",
//       "Aggression, self-harm, or avoidance",
//       "Social skill deficits",
//     ],
//     outcomes: [
//       "Reduction in challenging behaviours",
//       "Improved emotional regulation",
//       "Better social interaction and turn-taking",
//       "Greater compliance and focus in sessions",
//     ],
//   },
//   {
//     icon: "📚",
//     title: "Special Education",
//     description:
//       "Individualized learning support for children with learning disabilities or academic challenges.",
//     outcome: "Learning at their own pace",
//     bgColor: "bg-blue-pale",
//     fullDescription:
//       "Our special educators work with children who face academic challenges due to learning disabilities, cognitive delays, or neurodevelopmental conditions. We use structured, visual, and multi-sensory teaching methods to make learning accessible and enjoyable.",
//     problems: [
//       "Children with dyslexia, dyscalculia, or reading difficulties",
//       "Intellectual disabilities with educational needs",
//       "Attention challenges affecting academic performance",
//       "Children unable to attend mainstream schooling",
//     ],
//     outcomes: [
//       "Foundational literacy and numeracy skills",
//       "Increased attention and focus during academic tasks",
//       "Greater confidence in learning settings",
//       "Individualized educational progress tracking",
//     ],
//   },
//   {
//     icon: "🤝",
//     title: "Psychological Counselling",
//     description:
//       "Emotional support for children and parents — anxiety, transitions, and family wellbeing.",
//     outcome: "Stronger family, resilient child",
//     bgColor: "bg-teal-pale",
//     fullDescription:
//       "Our counselling service provides emotional support for both children and their families. Managing the journey of raising a child with special needs is emotionally demanding. We help families build resilience, communicate better, and navigate challenges together.",
//     problems: [
//       "Parental stress and burnout caring for a child with special needs",
//       "Child anxiety, emotional withdrawal, or depression",
//       "Difficulty adjusting to therapy or school transitions",
//       "Family communication challenges",
//     ],
//     outcomes: [
//       "Reduced parental stress and improved coping",
//       "Better emotional regulation in children",
//       "Stronger parent-child communication",
//       "Resilience and confidence as a family unit",
//     ],
//   },
// ];

// // ─── THERAPISTS ───────────────────────────────────────────────────────────────
// export interface Therapist {
//   name: string;
//   designation: string;
//   qualifications: string[];
//   experience: string;
//   specializations: string[];
//   bio: string[];
//   avatar: string;
//   stats: { val: string; key: string }[];
//   timeline: { emoji: string; title: string; description: string }[];
// }

// export const THERAPISTS: Therapist[] = [
//   {
//     name: "Lakshita Chouhan",
//     designation: "Pediatric Physiotherapist & Founder",
//     qualifications: ["MPT Physiotherapy", "BPT", "Pediatric Specialist"],
//     experience: "3+ Years",
//     avatar: "/images/therapist-lakshita.jpg",
//     specializations: [
//       "Pediatric Physiotherapy",
//       "Neurodevelopmental Therapy (NDT)",
//       "Sensory Integration",
//       "Gait Training & Analysis",
//       "Early Intervention",
//       "Parent Training",
//       "Cerebral Palsy Rehabilitation",
//       "Post-Surgical Rehab",
//     ],
//     stats: [
//       { val: "3+",   key: "Years Exp." },
//       { val: "6",    key: "Therapies" },
//       { val: "100+", key: "Children" },
//     ],
//     bio: [
//       "Lakshita Chouhan is a Master of Physiotherapy (MPT) graduate with a specialization in Pediatric Physiotherapy. She founded Prarambham Child Rehabilitation Centre with a clear mission — to give every child in Jodhpur access to expert, compassionate rehabilitation close to home.",
//       "Her clinical approach combines evidence-based physiotherapy techniques with a deep understanding of child development at every stage. She believes that the best therapy happens when the whole family is educated and actively involved — which is why parent training is built into every treatment plan.",
//       "Lakshita regularly updates her clinical knowledge through workshops and continuing education in pediatric rehabilitation, ensuring every child benefits from the most current and effective approaches available.",
//     ],
//     timeline: [
//       {
//         emoji: "🎓",
//         title: "Bachelor of Physiotherapy (BPT)",
//         description: "Foundational qualification in physiotherapy — anatomy, biomechanics, and clinical assessment",
//       },
//       {
//         emoji: "🏆",
//         title: "Master of Physiotherapy (MPT) — Pediatrics",
//         description: "Specialized postgraduate training focused on pediatric rehabilitation and neurodevelopment",
//       },
//       {
//         emoji: "🏥",
//         title: "Clinical Experience — 3+ Years",
//         description: "Hands-on pediatric physiotherapy in clinical settings, treating children with diverse conditions",
//       },
//       {
//         emoji: "🌟",
//         title: "Founded Prarambham, Jodhpur",
//         description: "Established the centre to bring specialized pediatric rehabilitation to Air Force Area, Jodhpur",
//       },
//     ],
//   },
//   {
//     name: "Dr. Priya Sharma",
//     designation: "Speech-Language Pathologist",
//     qualifications: ["M.Sc. SLP", "BASLP", "Autism Certified"],
//     experience: "4+ Years",
//     avatar: "/images/therapist-priya.jpg",
//     specializations: [
//       "Speech & Language Therapy",
//       "Augmentative Communication (AAC)",
//       "Fluency Disorders",
//       "Feeding & Swallowing",
//       "Autism Communication",
//       "Early Language Intervention",
//     ],
//     stats: [
//       { val: "4+",   key: "Years Exp." },
//       { val: "3",    key: "Specialties" },
//       { val: "150+", key: "Children" },
//     ],
//     bio: [
//       "Dr. Priya Sharma is a certified Speech-Language Pathologist with a Master's in Speech-Language Pathology and 4+ years of clinical experience with children aged 1–16.",
//       "She specializes in helping non-verbal and minimally-verbal children find their communication voice — using AAC devices, PECS, and naturalistic developmental approaches.",
//       "Priya believes every child has something to say, and her role is to help them find a way to say it.",
//     ],
//     timeline: [
//       {
//         emoji: "🎓",
//         title: "BASLP — Speech and Language Pathology",
//         description: "Undergraduate degree in speech therapy, audiology, and language sciences",
//       },
//       {
//         emoji: "🏆",
//         title: "M.Sc. Speech-Language Pathology",
//         description: "Postgraduate specialization with focus on pediatric and neuro communication disorders",
//       },
//       {
//         emoji: "📜",
//         title: "Autism Communication Certification",
//         description: "Specialized training in PECS, AAC, and naturalistic developmental interventions",
//       },
//       {
//         emoji: "🌟",
//         title: "Joined Prarambham Team",
//         description: "Bringing expert speech therapy to children across Jodhpur",
//       },
//     ],
//   },
//   {
//     name: "Ms. Anjali Verma",
//     designation: "Occupational Therapist",
//     qualifications: ["BOT", "Sensory Integration Cert.", "NDT Trained"],
//     experience: "2+ Years",
//     avatar: "/images/therapist-anjali.jpg",
//     specializations: [
//       "Pediatric Occupational Therapy",
//       "Sensory Integration",
//       "Fine Motor Skills",
//       "School Readiness",
//       "Self-Care Training",
//       "Handwriting Intervention",
//     ],
//     stats: [
//       { val: "2+",  key: "Years Exp." },
//       { val: "4",   key: "Specialties" },
//       { val: "80+", key: "Children" },
//     ],
//     bio: [
//       "Anjali Verma is a Bachelor of Occupational Therapy (BOT) graduate with specialized training in Sensory Integration and Neurodevelopmental Therapy.",
//       "Her sessions are child-led, playful, and highly structured — making therapy feel like fun while achieving meaningful clinical goals.",
//       "She works closely with schools and parents to ensure that every skill learned in therapy transfers seamlessly to home and classroom settings.",
//     ],
//     timeline: [
//       {
//         emoji: "🎓",
//         title: "Bachelor of Occupational Therapy (BOT)",
//         description: "Foundational OT training including pediatric and adult rehabilitation",
//       },
//       {
//         emoji: "📜",
//         title: "Sensory Integration Certification",
//         description: "Advanced training in sensory processing assessment and intervention",
//       },
//       {
//         emoji: "🏥",
//         title: "Clinical Experience — Pediatric OT",
//         description: "2+ years in pediatric settings, school readiness, and sensory programs",
//       },
//       {
//         emoji: "🌟",
//         title: "Joined Prarambham Team",
//         description: "Delivering occupational therapy to children across Jodhpur",
//       },
//     ],
//   },
// ];

// // ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
// // COLOR ROTATION: #0E7C7B (teal) → #1A5FA8 (blue) → #4A8C6F (sage) → repeat
// // To add real testimonials: copy one block, fill in the fields, keep rotating colors.

// export interface Testimonial {
//   initial: string; // First letter of parent name
//   name: string;
//   role: string;    // e.g. "Mother of Aryan, 3 years"
//   quote: string;
//   color: string;   // Avatar background color
// }

// export const TESTIMONIALS: Testimonial[] = [
//   // ── Page 1 (desktop: cards 1-3) ──────────────────────────────────────────
//   {
//     initial: "R",
//     name: "Rekha Sharma",
//     role: "Mother of Aryan, 3 years",
//     quote:
//       "Our son had severe low muscle tone at 2.5 years with no independent walking. After 4 months at Prarambham, he walks on his own. Lakshita ma'am's dedication and home exercises made all the difference.",
//     color: "#0E7C7B",
//   },
//   {
//     initial: "P",
//     name: "Priya Mehta",
//     role: "Mother of Aanya, 5 years",
//     quote:
//       "My daughter has autism and we struggled to find the right help in Jodhpur. Prarambham changed everything — the combination of OT, speech, and behaviour therapy in one place has been life-changing for our family.",
//     color: "#1A5FA8",
//   },
//   {
//     initial: "M",
//     name: "Mohammed Siddiqui",
//     role: "Father of Zayan, 4 years",
//     quote:
//       "As a parent you feel helpless when your child is behind in development. Lakshita explained everything clearly, involved us every step, and our son is now on track with his milestones. Highly recommend.",
//     color: "#4A8C6F",
//   },

//   // ── Page 2 (desktop: cards 4-6) ──────────────────────────────────────────
//   {
//     initial: "S",
//     name: "Sunita Rathore",
//     role: "Mother of Dev, 2.5 years",
//     quote:
//       "Dev was diagnosed with developmental delay at 18 months. Within 3 months of physiotherapy at Prarambham, he started crawling and then walking. The team's patience and expertise is beyond what I expected in Jodhpur.",
//     color: "#0E7C7B",
//   },
//   {
//     initial: "V",
//     name: "Vikram Joshi",
//     role: "Father of Anaya, 6 years",
//     quote:
//       "Anaya has ADHD and her school was struggling to manage her. After behaviour therapy here, her teacher called us to say she's a different child — focused, cooperative, and enjoying class. We are so grateful.",
//     color: "#1A5FA8",
//   },
//   {
//     initial: "K",
//     name: "Kavita Bishnoi",
//     role: "Mother of Rohan, 4 years",
//     quote:
//       "Rohan had speech delay and barely said 5 words at age 3. After 6 months of speech therapy at Prarambham, he speaks full sentences and even sings rhymes. I cry happy tears every single day.",
//     color: "#4A8C6F",
//   },

//   // ── Page 3 (desktop: cards 7-9) ──────────────────────────────────────────
//   {
//     initial: "A",
//     name: "Amit Choudhary",
//     role: "Father of Ishaan, 5 years",
//     quote:
//       "Ishaan has cerebral palsy and we were told he may never walk independently. Lakshita ma'am designed a customized physiotherapy plan and today Ishaan takes steps with minimal support. This place is a blessing.",
//     color: "#0E7C7B",
//   },
//   {
//     initial: "N",
//     name: "Nidhi Pareek",
//     role: "Mother of Saanvi, 3.5 years",
//     quote:
//       "Saanvi had severe sensory issues — she couldn't tolerate touch, noise, or new textures. After occupational therapy sessions, she hugged me for the first time last month. I will never forget that moment.",
//     color: "#1A5FA8",
//   },
//   {
//     initial: "D",
//     name: "Deepak Mathur",
//     role: "Father of Arjun, 7 years",
//     quote:
//       "Arjun was falling behind in school because of his learning difficulties. The special education program here gave him tools to learn in his own way. His confidence has completely transformed. Thank you Prarambham.",
//     color: "#4A8C6F",
//   },

//   // ── Page 4 (desktop: card 10 — last page) ────────────────────────────────
//   {
//     initial: "G",
//     name: "Geeta Solanki",
//     role: "Mother of Yash, 4 years",
//     quote:
//       "We drove from Barmer every week for therapy because no one in our city offered this level of care. Every kilometer was worth it. Yash started walking on his own at 4 years and our whole family celebrated.",
//     color: "#0E7C7B",
//   },
// ];

// // ─── WHY US ───────────────────────────────────────────────────────────────────
// export const WHY_US = [
//   {
//     num: "01",
//     title: "Qualified & Experienced",
//     description:
//       "MPT-qualified physiotherapist with specialized pediatric training and 3+ years hands-on clinical experience.",
//   },
//   {
//     num: "02",
//     title: "Personalized Plans",
//     description:
//       "Every child receives a custom therapy plan based on their specific assessment, goals, and family routine.",
//   },
//   {
//     num: "03",
//     title: "Evidence-Based Methods",
//     description:
//       "All therapies are grounded in current clinical research and proven pediatric rehabilitation techniques.",
//   },
//   {
//     num: "04",
//     title: "Parent Involvement",
//     description:
//       "Parents are trained as partners. Home program guidance ensures progress continues between sessions.",
//   },
// ] as const;

// // ─── APPOINTMENT CONCERN OPTIONS ──────────────────────────────────────────────
// export const CONCERN_OPTIONS = [
//   "Physiotherapy Assessment",
//   "Speech Delay",
//   "Autism / ASD",
//   "ADHD",
//   "Walking / Gait Issue",
//   "Weak Muscles / Low Tone",
//   "Developmental Delay",
//   "Occupational Therapy",
//   "Behaviour Therapy",
//   "Special Education",
//   "General Assessment",
// ] as const;

// ─── SITE CONFIG ─────────────────────────────────────────────────────────────
// ─── SITE CONFIG ─────────────────────────────────────────────────────────────
export const SITE = {
  name: "Parambh Rehab Center",
  tagline: "Empowering young minds and bodies",
  shortName: "Parambh",
  phone: "+91 70238 78048",
  whatsapp: "917023878048",
  email: "prarambhrehabilitationcenter@gmail.com",
  address: "Air Force Area, Jodhpur, Rajasthan",
  mapShareLink: "https://www.google.com/maps/place/Prarambh+Child+Rehabilitation+center/@26.2622252,73.03385,17z",
} as const;

// ─── FORM LINKS ───────────────────────────────────────────────────────────────
export const FORMS = {
  appointment: "https://forms.google.com/dummy-appointment",
  enquiry: "https://forms.google.com/dummy-enquiry",
  feedback: "https://forms.google.com/dummy-feedback",
} as const;

// ─── WORKING HOURS ────────────────────────────────────────────────────────────
export const HOURS = [
  { day: "Monday – Friday", time: "10:00 AM – 8:00 PM" },
  { day: "Sunday",          time: "By Appointment Only" },
] as const;

// ─── NAV LINKS ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",       href: "/" },
  { label: "Services",   href: "/services" },
  { label: "Conditions", href: "/conditions" },
  { label: "Therapist",  href: "/therapist" },
  { label: "Gallery",    href: "/gallery" },
  { label: "Our founder", href: "/founder" },
  { label: "Careers",    href: "/careers" },
  { label: "Contact",    href: "/contact" },
] as const;

// ─── TRUST ITEMS (HERO) ───────────────────────────────────────────────────────
export const TRUST_ITEMS = [
  { icon: "🎓", text: "Certified Therapist" },
  { icon: "💛", text: "Personalized Plans" },
  { icon: "🏡", text: "Child-Friendly Space" },
] as const;

// ─── HERO STATS ───────────────────────────────────────────────────────────────
export const HERO_STATS = [
  { num: "3+",   label: "Years Exp." },
  { num: "6",    label: "Therapies" },
  { num: "100+", label: "Children" },
] as const;

// ─── CONDITIONS (PREVIEW + FULL PAGE) ────────────────────────────────────────
export interface Condition {
  icon: string;
  title: string;
  preview: string;
  overview: string;
  warnings: string[];
  therapyHelps: string[];
}

export const CONDITIONS: Condition[] = [
  {
    icon: "🗣️",
    title: "Speech Delay",
    preview: "Difficulty speaking, limited vocabulary, or unclear speech for their age.",
    overview:
      "Speech delay affects how children develop language and communication. It can be isolated or associated with autism, hearing loss, or cognitive delays.",
    warnings: [
      "No babbling by 12 months",
      "No single words by 16 months",
      "No two-word phrases by 24 months",
      "Loss of previously acquired language",
    ],
    therapyHelps: [
      "Structured language stimulation techniques",
      "Play-based communication strategies",
      "Parent coaching for home practice",
      "AAC tools if needed (non-verbal support)",
    ],
  },
  {
    icon: "🧩",
    title: "Autism Spectrum",
    preview: "Communication, social, and behavioural challenges needing structured support.",
    overview:
      "ASD is a neurodevelopmental condition affecting social communication and behaviour. Early, intensive therapy significantly improves outcomes and independence.",
    warnings: [
      "Limited eye contact or social smiling",
      "No response to their name by 12 months",
      "Repetitive movements or restricted interests",
      "Difficulty with transitions or changes",
    ],
    therapyHelps: [
      "Applied Behaviour Analysis (ABA)",
      "Social skills training",
      "Sensory integration therapy",
      "Communication and speech development",
    ],
  },
  {
    icon: "⚡",
    title: "ADHD",
    preview: "Attention difficulties and hyperactivity affecting learning and daily life.",
    overview:
      "ADHD affects attention, impulse control, and activity level. Without support, it can significantly impact learning, relationships, and self-esteem.",
    warnings: [
      "Unable to focus for age-appropriate time",
      "Constant movement, climbing, or running",
      "Interrupts constantly, can't wait for turn",
      "Difficulty completing schoolwork",
    ],
    therapyHelps: [
      "Structured routine and behaviour management",
      "OT for attention and regulation",
      "Parent training strategies",
      "School readiness programs",
    ],
  },
  {
    icon: "🚶",
    title: "Walking Difficulty",
    preview: "Gait abnormalities, toe-walking, balance issues, or delayed walking.",
    overview:
      "Gait abnormalities, delayed walking, or unusual patterns often respond very well to physiotherapy intervention, especially when treated early.",
    warnings: [
      "Not walking independently by 18 months",
      "Persistent toe-walking after age 3",
      "Walking on insides or outsides of feet",
      "Frequent falls or poor balance",
    ],
    therapyHelps: [
      "Gait analysis and correction exercises",
      "Balance and coordination training",
      "Orthotic assessment and referral",
      "Strength-building for lower limbs",
    ],
  },
  {
    icon: "💪",
    title: "Weak Muscles",
    preview: "Hypotonia, poor posture, or low muscle strength limiting activities.",
    overview:
      "Hypotonia (low muscle tone) affects strength, posture, and movement. Children appear 'floppy' and tire easily. Physiotherapy is the primary treatment.",
    warnings: [
      "Difficulty holding head up or sitting unsupported",
      "Feeling 'floppy' when held",
      "Delayed motor milestones (rolling, crawling)",
      "Poor posture, tires quickly during activity",
    ],
    therapyHelps: [
      "Targeted muscle strengthening programs",
      "Core stability and postural training",
      "Proprioceptive and sensory input techniques",
      "Home exercise programs for parents",
    ],
  },
  {
    icon: "🌱",
    title: "Developmental Delay",
    preview: "Delays in motor, cognitive, or social milestones vs. typical development.",
    overview:
      "Global developmental delay affects multiple areas — motor, language, cognitive, and social development. Multi-disciplinary therapy provides the best outcomes.",
    warnings: [
      "Significant delay in 2 or more developmental areas",
      "Not meeting expected milestones for age",
      "Regression — losing skills previously acquired",
      "Limited social engagement or play skills",
    ],
    therapyHelps: [
      "Comprehensive multi-disciplinary assessment",
      "Coordinated therapy across all affected areas",
      "Family education and coping strategies",
      "Regular progress reviews and goal updates",
    ],
  },
];

// ─── SERVICES ─────────────────────────────────────────────────────────────────
export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  outcome: string;
  isPrimary?: boolean;
}

export interface ServiceDetail extends ServiceCard {
  bgColor: string;
  badge?: string;
  headline: string;
  actionLabel: string;
  fullDescription: string;
  problems: string[];
  outcomes: string[];
}

export const SERVICES: ServiceDetail[] = [
  {
    icon: "🦴",
    title: "Pediatric Physiotherapy",
    description:
      "Helping your child move with confidence, strength, and joy.",
    outcome: "Children walk better, move freely",
    isPrimary: true,
    bgColor: "bg-teal-pale",
    badge: "Primary Service",
    headline: "Helping your child move with confidence, strength, and joy.",
    actionLabel: "Book a Physiotherapy Assessment",
    fullDescription:
      "Pediatric Physiotherapy at Parambh focuses on improving gross motor function, balance, posture, and physical independence. Through structured exercises, play-based mobility routines, and targeted physical conditioning, we help children reach physical milestones comfortably.",
    problems: [
      "Children experiencing delayed motor milestones (rolling, sitting, crawling, walking)",
      "Conditions like Cerebral Palsy, Down syndrome, or Spina Bifida",
      "Balance, coordination, or gait abnormalities such as toe-walking",
      "Muscle weakness, poor muscle tone, or poor posture",
    ],
    outcomes: [
      "Improved muscle strength, flexibility, and physical endurance",
      "Better balance, posture control, and gross motor coordination",
      "Independent movement in daily routines such as running, jumping, and climbing stairs",
      "Prevention of joint stiffness and musculoskeletal complications",
    ],
  },
  {
    icon: "🗣️",
    title: "Speech & Language Therapy",
    description:
      "Support that meets your child where they are.",
    outcome: "Clear speech, confident communication",
    bgColor: "bg-blue-pale",
    headline: "Support that meets your child where they are.",
    actionLabel: "Book a Speech Assessment",
    fullDescription:
      "Speech therapy at Parambh addresses communication and feeding disorders across all levels — from non-verbal children to those navigating articulation, fluency, or language processing challenges. Our approach is play-based, parent-inclusive, and tailored to functional daily life.",
    problems: [
      "Children with speech delay or limited vocabulary",
      "Autism-related communication challenges and non-verbal needs",
      "Stuttering, stammering, or fluency difficulties",
      "Articulation errors and unclear speech",
      "Feeding, chewing, and swallowing difficulties",
    ],
    outcomes: [
      "Clearer, more expressive verbal and non-verbal communication",
      "Enhanced receptive language and understanding",
      "Social communication skills such as turn-taking and pragmatic language",
      "Safe and effective chewing and swallowing habits",
    ],
  },
  {
    icon: "✋",
    title: "Occupational Therapy (OT) & Sensory Integration",
    description:
      "Building independence in every daily task, play, and learning moment.",
    outcome: "Independence in daily activities",
    bgColor: "bg-sage-pale",
    headline: "Building independence in every daily task, play, and learning moment.",
    actionLabel: "Book an Occupational Therapy Assessment",
    fullDescription:
      "Pediatric Occupational Therapy helps children master the occupations of childhood — playing, self-care, classroom tasks, and sensory regulation. We focus on the connection between sensory processing and motor skills to make everyday routines manageable and enjoyable.",
    problems: [
      "Sensory processing challenges involving sounds, textures, or touch",
      "Fine motor difficulties such as pencils, scissors, or buttons",
      "Difficulties with self-care such as brushing, feeding, or dressing",
      "Poor hand-eye coordination or visual-motor integration",
    ],
    outcomes: [
      "Enhanced sensory regulation and emotional calm",
      "Mastery of fine motor skills and handwriting readiness",
      "Greater autonomy and independence in daily personal care",
      "Improved focus and attention in structured classroom settings",
    ],
  },
  {
    icon: "🧠",
    title: "Behaviour Therapy",
    description:
      "Nurturing positive behaviors, emotional regulation, and social connection.",
    outcome: "Calmer, focused, cooperative",
    bgColor: "bg-yellow-50",
    headline: "Nurturing positive behaviors, emotional regulation, and social connection.",
    actionLabel: "Book a Behaviour Assessment",
    fullDescription:
      "Our Behaviour Therapy program helps children manage intense emotions, develop adaptive behaviors, and replace challenging habits with constructive coping strategies. We work closely with parents to create predictable, positive routines at home and school.",
    problems: [
      "Frequent meltdowns, aggression, or severe tantrums",
      "Attention-Deficit/Hyperactivity Disorder (ADHD) and impulsivity",
      "Difficulty following routines, instructions, or transitions",
      "Social interaction and cooperative play struggles",
    ],
    outcomes: [
      "Healthy emotional regulation and impulse management",
      "Reduction in disruptive or unsafe behaviors",
      "Improved listening, compliance, and task completion skills",
      "Practical positive-reinforcement strategies for parents and caregivers",
    ],
  },
  {
    icon: "📚",
    title: "Special Education",
    description:
      "Individualized learning journeys tailored to your child's unique potential.",
    outcome: "Learning at their own pace",
    bgColor: "bg-blue-pale",
    headline: "Individualized learning journeys tailored to your child's unique potential.",
    actionLabel: "Book a Special Education Consultation",
    fullDescription:
      "Special Education provides tailored academic and cognitive intervention for children with learning differences and developmental delays. We bridge the gap between curriculum demands and a child's learning style using customized Individualized Education Plans (IEPs).",
    problems: [
      "Specific Learning Difficulties such as Dyslexia, Dysgraphia, or Dyscalculia",
      "Global developmental delays and intellectual disabilities",
      "Challenges with working memory, comprehension, or concentration",
      "School readiness and foundational pre-academic difficulties",
    ],
    outcomes: [
      "Customized reading, writing, and mathematical comprehension",
      "Strengthened cognitive functions, memory, and executive processing",
      "Academic confidence and adaptive learning strategies",
      "Smooth school integration and individualized classroom support",
    ],
  },
  {
    icon: "🤝",
    title: "Psychological Counselling & Child Guidance",
    description:
      "Safe, compassionate mental health and developmental support for children and families.",
    outcome: "Stronger family, resilient child",
    bgColor: "bg-teal-pale",
    headline: "Safe, compassionate mental health and developmental support for children and families.",
    actionLabel: "Book a Psychological Consultation",
    fullDescription:
      "Psychological Counselling offers clinical assessments, therapeutic interventions, and parent guidance to address emotional, cognitive, and social well-being. We support the whole family system to foster resilience and healthy mental development.",
    problems: [
      "Childhood anxiety, fears, low self-esteem, or mood changes",
      "Adjustment issues related to family changes, grief, or academic pressure",
      "Diagnostic evaluations, developmental profiles, ADHD, or Autism screening",
      "Parent guidance and stress support",
    ],
    outcomes: [
      "Building emotional awareness, resilience, and healthy coping mechanisms",
      "Clear diagnostic clarity to guide personalized developmental pathways",
      "Reduced anxiety, stress, and behavioral distress",
      "Empowered and supportive parenting strategies",
    ],
  },
];

// ─── THERAPISTS ───────────────────────────────────────────────────────────────
export interface Therapist {
  name: string;
  designation: string;
  qualifications: string[];
  experience: string;
  specializations: string[];
  bio: string[];
  avatar: string;
  stats: { val: string; key: string }[];
  timeline: { emoji: string; title: string; description: string }[];
}

export const THERAPISTS: Therapist[] = [
{
  name: "Lakshita Chouhan",
  designation: "Pediatric Physiotherapist & Founder",
  qualifications: [
    "MPT Physiotherapy", 
    "BPT", 
    "Pediatric Specialist"
  ],
  experience: "3+ Years",
  avatar: "assets/hero/dr_lakshita.jpg",
  specializations: [
    "Pediatric Physiotherapy",
    "Neurodevelopmental Therapy (NDT)",
    "Sensory Integration",
    "Gait Training & Analysis",
    "Early Intervention",
    "Parent Training",
    "Cerebral Palsy Rehabilitation",
    "Post-Surgical Rehab"
  ],
  stats: [
    { val: "3+", key: "Years Exp." },
    { val: "8", key: "Specialties" }, 
    { val: "61+", key: "Children" }   
  ],
  bio: [
    "Lakshita Chouhan is a Master of Physiotherapy (MPT) graduate specializing in Pediatric Physiotherapy. She founded Prarambh Rehab Center to give families in Jodhpur access to expert, compassionate care close to home.",
    "She blends evidence-based physical therapy with a deep understanding of child development to help kids reach their unique milestones.",
    "Because therapy works best when families are involved, she builds practical parent training into every single treatment plan."
  ],
  timeline: [
    {
      emoji: "🎓",
      title: "Bachelor of Physiotherapy (BPT)",
      description: "Foundational qualification in physiotherapy — anatomy, biomechanics, and clinical assessment."
    },
    {
      emoji: "🏆",
      title: "Master of Physiotherapy (MPT) — Pediatrics",
      description: "Specialized postgraduate training focused on pediatric rehabilitation and neurodevelopment."
    },
    {
      emoji: "🏥",
      title: "Clinical Experience — 3+ Years",
      description: "Hands-on pediatric physiotherapy in clinical settings, treating children with diverse conditions."
    },
    {
      emoji: "🌟",
      title: "Founded Prarambh Rehab Center, Jodhpur",
      description: "Established the centre to bring specialized pediatric rehabilitation to Jodhpur."
    }
  ]
},
  {
    name: "Dr. Priya Sharma",
    designation: "Speech-Language Pathologist",
    qualifications: ["M.Sc. SLP", "BASLP", "Autism Certified"],
    experience: "4+ Years",
    avatar: "/images/therapist-priya.jpg",
    specializations: [
      "Speech & Language Therapy",
      "Augmentative Communication (AAC)",
      "Fluency Disorders",
      "Feeding & Swallowing",
      "Autism Communication",
      "Early Language Intervention",
    ],
    stats: [
      { val: "4+",   key: "Years Exp." },
      { val: "3",    key: "Specialties" },
      { val: "150+", key: "Children" },
    ],
    bio: [
      "Dr. Priya Sharma is a certified Speech-Language Pathologist with a Master's in Speech-Language Pathology and 4+ years of clinical experience with children aged 1–16.",
      "She specializes in helping non-verbal and minimally-verbal children find their communication voice — using AAC devices, PECS, and naturalistic developmental approaches.",
      "Priya believes every child has something to say, and her role is to help them find a way to say it.",
    ],
    timeline: [
      {
        emoji: "🎓",
        title: "BASLP — Speech and Language Pathology",
        description: "Undergraduate degree in speech therapy, audiology, and language sciences",
      },
      {
        emoji: "🏆",
        title: "M.Sc. Speech-Language Pathology",
        description: "Postgraduate specialization with focus on pediatric and neuro communication disorders",
      },
      {
        emoji: "📜",
        title: "Autism Communication Certification",
        description: "Specialized training in PECS, AAC, and naturalistic developmental interventions",
      },
      {
        emoji: "🌟",
        title: "Joined Parambh Rehab Center Team",
        description: "Bringing expert speech therapy to children across Jodhpur",
      },
    ],
  },
  {
    name: "Ms. Anjali Verma",
    designation: "Occupational Therapist",
    qualifications: ["BOT", "Sensory Integration Cert.", "NDT Trained"],
    experience: "2+ Years",
    avatar: "/images/therapist-anjali.jpg",
    specializations: [
      "Pediatric Occupational Therapy",
      "Sensory Integration",
      "Fine Motor Skills",
      "School Readiness",
      "Self-Care Training",
      "Handwriting Intervention",
    ],
    stats: [
      { val: "2+",  key: "Years Exp." },
      { val: "4",   key: "Specialties" },
      { val: "80+", key: "Children" },
    ],
    bio: [
      "Anjali Verma is a Bachelor of Occupational Therapy (BOT) graduate with specialized training in Sensory Integration and Neurodevelopmental Therapy.",
      "Her sessions are child-led, playful, and highly structured — making therapy feel like fun while achieving meaningful clinical goals.",
      "She works closely with schools and parents to ensure that every skill learned in therapy transfers seamlessly to home and classroom settings.",
    ],
    timeline: [
      {
        emoji: "🎓",
        title: "Bachelor of Occupational Therapy (BOT)",
        description: "Foundational OT training including pediatric and adult rehabilitation",
      },
      {
        emoji: "📜",
        title: "Sensory Integration Certification",
        description: "Advanced training in sensory processing assessment and intervention",
      },
      {
        emoji: "🏥",
        title: "Clinical Experience — Pediatric OT",
        description: "2+ years in pediatric settings, school readiness, and sensory programs",
      },
      {
        emoji: "🌟",
        title: "Joined Parambh Rehab Center Team",
        description: "Delivering occupational therapy to children across Jodhpur",
      },
    ],
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
// Real reviews from parents and patients of Prarambham, Jodhpur.
// COLOR ROTATION: teal → blue → sage → repeat
// To add new reviews: copy one block, fill fields, keep color rotating.

export interface Testimonial {
  initial: string; // First letter of reviewer name
  name: string;
  role: string;    // e.g. "Parent" or "Patient"
  quote: string;
  color: string;   // Avatar background — rotate between 3 colors below
}

// Avatar colors
const TC = { teal: "#0E7C7B", blue: "#1A5FA8", sage: "#4A8C6F" } as const;

export const TESTIMONIALS: Testimonial[] = [
  {
    initial: "R",
    name: "Ritik Chouhan",
    role: "Parent",
    quote: "My child was around 5 years old but was unable to walk properly or speak a single word. After therapy, he started walking and speaking a little.",
    color: TC.teal,
  },
  {
    initial: "A",
    name: "Anuj Sharma",
    role: "Parent",
    quote: "My father had spine surgery. After physiotherapy here, his range of motion improved. Your encouragement and positive attitude kept him going. Fantastic physio!",
    color: TC.blue,
  },
  {
    initial: "M",
    name: "Mitanshi Maheshwari",
    role: "Parent",
    quote: "Prarambh became a big support for us. My child showed positive changes after therapy. Therapists are patient and caring.",
    color: TC.sage,
  },
  {
    initial: "P",
    name: "Priyal Arora",
    role: "Parent",
    quote: "This place is perfect for children facing problems. My child is growing well after joining. Thank you Prarambh team.",
    color: TC.teal,
  },
  {
    initial: "A",
    name: "Ateendar Singh Chouhan",
    role: "Parent",
    quote: "Wonderful place for recovery. Professional, caring, supportive staff. Clean and safe environment.",
    color: TC.blue,
  },
  {
    initial: "D",
    name: "Deepika Chouhan",
    role: "Parent",
    quote: "Excellent rehabilitation center for children. Top-quality physiotherapy and special education services.",
    color: TC.sage,
  },
  {
    initial: "A",
    name: "Aman Mathur",
    role: "Parent",
    quote: "Excellent physiotherapy care. Staff is professional, treatment effective, atmosphere motivating.",
    color: TC.teal,
  },
  {
    initial: "S",
    name: "Sandeep Bhati",
    role: "Parent",
    quote: "My child had stammering issues. After therapy, he is improving day by day. Thanks Prarambh team.",
    color: TC.blue,
  },
  {
    initial: "N",
    name: "Nikita Bhati",
    role: "Parent",
    quote: "Highly recommend Dr. Lakshita. Her expertise and dedication are impressive.",
    color: TC.sage,
  },
  {
    initial: "D",
    name: "Dilip Rathore",
    role: "Parent",
    quote: "Amazing home therapy for special children from the Prarambh team. Very satisfied with the results.",
    color: TC.teal,
  },
  {
    initial: "M",
    name: "Meenakshi Jaipal",
    role: "Parent",
    quote: "We got amazing home therapy for our child. The team is dedicated and the results are visible.",
    color: TC.blue,
  },
  {
    initial: "N",
    name: "Naresh Kumar",
    role: "Patient",
    quote: "Physiotherapy experience was very nice. I recovered from pain easily. Thanks team Prarambh.",
    color: TC.sage,
  },
  {
    initial: "S",
    name: "Shanu Agrawal",
    role: "Patient",
    quote: "After knee surgery, physiotherapy sessions helped me feel much better and recover faster.",
    color: TC.teal,
  },
  {
    initial: "P",
    name: "Pradeep Kumar",
    role: "Parent",
    quote: "Best rehabilitation centre in Jodhpur. Excellent service for children with special needs.",
    color: TC.blue,
  },
  {
    initial: "S",
    name: "Sumit Vaishnav",
    role: "Parent",
    quote: "Lakshita ma'am and her team leave no stone unturned. Very hardworking and dedicated to every child.",
    color: TC.sage,
  },
  {
    initial: "N",
    name: "Nitesh Jeengar",
    role: "Parent",
    quote: "Wonderful activities, silent environment, teacher-friendly behavior. Great place for children.",
    color: TC.teal,
  },
  {
    initial: "P",
    name: "Praveen",
    role: "Parent",
    quote: "Excellent staff. Strongly recommended for parents of special children. Very professional.",
    color: TC.blue,
  },
  {
    initial: "B",
    name: "Bhupinder Singh",
    role: "Parent",
    quote: "Hardworking, caring staff giving time to kids with dedication. Truly remarkable team.",
    color: TC.sage,
  },
  {
    initial: "B",
    name: "Bhavesh Chauhan",
    role: "Parent",
    quote: "Wonderful space and experienced therapist. My child has shown great improvement.",
    color: TC.teal,
  },
  {
    initial: "L",
    name: "Lokesh Chouhan",
    role: "Parent",
    quote: "Best centre in Jodhpur for child rehabilitation. Highly recommend to every parent.",
    color: TC.blue,
  },
  {
    initial: "J",
    name: "Jayesh Jangid",
    role: "Parent",
    quote: "Amazing results from physiotherapy treatment. The team is very skilled and patient.",
    color: TC.sage,
  },
  {
    initial: "V",
    name: "Vivek Jeengar",
    role: "Parent",
    quote: "My best experience at Prarambh rehab centre. Professional and caring in every way.",
    color: TC.teal,
  },
  {
    initial: "B",
    name: "Bhavesh Jeengar",
    role: "Parent",
    quote: "Best environment and best therapist. Children feel comfortable and happy here.",
    color: TC.blue,
  },
  {
    initial: "A",
    name: "Ajay Chawla",
    role: "Parent",
    quote: "Excellent care centre for children. The entire team is supportive and knowledgeable.",
    color: TC.sage,
  },
  {
    initial: "R",
    name: "Riya Shrivastav",
    role: "Parent",
    quote: "Good experience overall. Staff is helpful, environment is clean and child-friendly.",
    color: TC.teal,
  },
  {
    initial: "V",
    name: "Vinod Kumar",
    role: "Parent",
    quote: "Best work in one place. Everything your child needs under one roof. 💯",
    color: TC.blue,
  },
  {
    initial: "B",
    name: "Bheru Lal",
    role: "Parent",
    quote: "Very good experience. Therapists are dedicated and treatment has shown visible results.",
    color: TC.sage,
  },
  {
    initial: "S",
    name: "Shayani Mukherjee",
    role: "Parent",
    quote: "Splendid experience. Therapists evolve with the child in a homely way. Fully satisfied with progress.",
    color: TC.teal,
  },
  {
    initial: "A",
    name: "Anju Chouhan",
    role: "Parent",
    quote: "Great experience with the team. Very supportive and patient with children.",
    color: TC.blue,
  },
  {
    initial: "V",
    name: "Vinod Panwar",
    role: "Parent",
    quote: "Professional and supportive care. The team genuinely cares about every child's progress.",
    color: TC.sage,
  },
  {
    initial: "D",
    name: "Dinesh Singhvi",
    role: "Parent",
    quote: "Excellent rehabilitation services. Highly professional team with great results. Thank you Prarambh.",
    color: TC.teal,
  },
  {
    initial: "A",
    name: "Ateendar Singh Chouhan",
    role: "Patient",
    quote: "Great physiotherapy experience. Staff guided me step by step through recovery. I feel much stronger now.",
    color: TC.blue,
  },
  {
    initial: "M",
    name: "Meenakshi Jaipal",
    role: "Parent",
    quote: "Awesome place, better environment, experienced therapists. Very happy with the services.",
    color: TC.sage,
  },
  {
    initial: "V",
    name: "Vinod Kumar",
    role: "Parent",
    quote: "Excellent support and care at every step. The team is truly dedicated to children's wellbeing.",
    color: TC.teal,
  },
  {
    initial: "S",
    name: "Sumit Vaishnav",
    role: "Parent",
    quote: "Parambh Rehab Center is the best rehabilitation centre in Jodhpur. Dr. Lakshita and team are exceptional.",
    color: TC.blue,
  },
];

// ─── WHY US ───────────────────────────────────────────────────────────────────
export const WHY_US = [
  {
    num: "01",
    title: "Qualified & Experienced",
    description:
      "MPT-qualified physiotherapist with specialized pediatric training and 3+ years hands-on clinical experience.",
  },
  {
    num: "02",
    title: "Personalized Plans",
    description:
      "Every child receives a custom therapy plan based on their specific assessment, goals, and family routine.",
  },
  {
    num: "03",
    title: "Evidence-Based Methods",
    description:
      "All therapies are grounded in current clinical research and proven pediatric rehabilitation techniques.",
  },
  {
    num: "04",
    title: "Parent Involvement",
    description:
      "Parents are trained as partners. Home program guidance ensures progress continues between sessions.",
  },
] as const;

// ─── APPOINTMENT CONCERN OPTIONS ──────────────────────────────────────────────
export const CONCERN_OPTIONS = [
  "Physiotherapy Assessment",
  "Speech Delay",
  "Autism / ASD",
  "ADHD",
  "Walking / Gait Issue",
  "Weak Muscles / Low Tone",
  "Developmental Delay",
  "Occupational Therapy",
  "Behaviour Therapy",
  "Special Education",
  "General Assessment",
] as const;