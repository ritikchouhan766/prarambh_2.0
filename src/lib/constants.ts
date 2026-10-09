import lakshitaPhoto from "@/assets/therapist/dr_lakshita.jpeg";
import bharatPhoto from "@/assets/therapist/mr_bharat.png";

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

export const EMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SITE.email)}`;

// ─── GOOGLE APPS SCRIPT ENDPOINT ────────────────────────────────────────────
// Real endpoint for form submissions — replaces dummy Google Forms
export const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwpMYOK1jVOHUTSxZ18_bnDSOg_WYaS3xEGoM5NujqWP71HmlVqOrKQw96PRgzauZ9-yw/exec";

// Legacy FORMS constant for backward compatibility (now unused)
export const FORMS = {
  appointment: APPS_SCRIPT_URL,
  enquiry: APPS_SCRIPT_URL,
  feedback: APPS_SCRIPT_URL,
} as const;

// ─── WORKING HOURS ─────────────────────────────────────────────────────────
export const HOURS = [
  { day: "Monday – Friday", time: "10:00 AM – 8:00 PM" },
  { day: "Sunday", time: "By Appointment Only" },
] as const;

// ─── NAV LINKS ─────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",       href: "/" },
  { label: "Services",   href: "/services" },
  { label: "Conditions", href: "/conditions" },
  { label: "Therapist",  href: "/therapist" },
  { label: "Assessment", href: "/assessment" },
  { label: "Gallery",    href: "/gallery" },
  { label: "FAQ",        href: "/faq" },
  { label: "Our founder", href: "/founder" },
  { label: "Careers",    href: "/careers" },
  { label: "Contact",    href: "/contact" },
] as const;

// ─── TRUST ITEMS (HERO) ────────────────────────────────────────────────────
export const TRUST_ITEMS = [
  { icon: "🩺", text: "Child-focused assessment" },
  { icon: "✨", text: "Personalized therapy goals" },
  { icon: "🌱", text: "Warm, family-first support" },
] as const;

export const ASSESSMENT_STEPS = [
  {
    title: "Speak with our team",
    description:
      "Tell us about your child's development, concerns, and daily challenges so we can guide the right path.",
  },
  {
    title: "Detailed assessment",
    description:
      "We evaluate movement, communication, behavior, sensory needs, learning support, and developmental goals.",
  },
  {
    title: "Personalized care plan",
    description:
      "We create a therapy roadmap with realistic milestones, parent guidance, and clear follow-up steps.",
  },
  {
    title: "Progress & support",
    description:
      "Regular review helps families track improvement and stay confident through every stage of therapy.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Do I need a doctor referral before booking?",
    answer:
      "Not always. Parents can usually contact the centre directly to understand whether an assessment is the right next step.",
  },
  {
    question: "What happens during the first visit?",
    answer:
      "The first visit typically includes understanding the child’s concerns, discussing development history, and planning the assessment approach.",
  },
  {
    question: "Which therapies are available for children?",
    answer:
      "Parambh supports pediatric physiotherapy, speech and language therapy, occupational therapy, behaviour therapy, special education, and psychological guidance.",
  },
  {
    question: "How do I know which therapy is best for my child?",
    answer:
      "The team reviews the child’s developmental profile and goals to recommend the most suitable therapy mix and next steps.",
  },
  {
    question: "Can parents be involved in the therapy plan?",
    answer:
      "Yes. Parent involvement is important. The team usually guides home activities and strategies to support progress outside the clinic.",
  },
  {
    question: "How can I contact the centre?",
    answer:
      "You can reach us by phone, WhatsApp, or enquiry form through the contact page for assessment and appointment guidance.",
  },
] as const;

// ─── HERO STATS ────────────────────────────────────────────────────────────
export const HERO_STATS = [
  { num: "3+",   label: "Years Exp." },
  { num: "6",    label: "Therapies" },
  { num: "100+", label: "Children" },
] as const;

// ─── CONDITIONS (PREVIEW + FULL PAGE) ─────────────────────────────────────
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
    icon: "🧠",
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

// ─── SERVICES ───────────────────────────────────────────────────────────────
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
    icon: "🩺",
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
    icon: "✓",
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
    icon: "💬",
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

// ─── THERAPISTS ─────────────────────────────────────────────────────────────
export interface Therapist {
  name: string;
  slug: string;
  designation: string;
  qualifications: string[];
  experience: string;
  specializations: string[];
  bio: string[];
  avatar: string;
  stats: { val: string; key: string }[];
  timeline: { emoji: string; title: string; description: string }[];
}

export function getTherapistBySlug(slug: string) {
  return THERAPISTS.find((therapist) => therapist.slug === slug);
}

export function getTherapistImage(therapist: Therapist) {
  if (therapist.name === "Lakshita Chouhan") return lakshitaPhoto;
  if (therapist.name === "Bharat Kumar") return bharatPhoto;
  return lakshitaPhoto;
}

export const THERAPISTS: Therapist[] = [
{
  name: "Lakshita Chouhan",
  slug: "lakshita-chouhan",
  designation: "Pediatric Physiotherapist & Founder",
  qualifications: [
    "MPT Physiotherapy", 
    "BPT", 
    "Pediatric Specialist"
  ],
  experience: "3+ Years",
  avatar: "/images/therapist/dr_lakshita.jpeg",
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
      emoji: "🎯",
      title: "Master of Physiotherapy (MPT) — Pediatrics",
      description: "Specialized postgraduate training focused on pediatric rehabilitation and neurodevelopment."
    },
    {
      emoji: "🩺",
      title: "Clinical Experience — 3+ Years",
      description: "Hands-on pediatric physiotherapy in clinical settings, treating children with diverse conditions."
    },
    {
      emoji: "🏥",
      title: "Founded Prarambh Rehab Center, Jodhpur",
      description: "Established the centre to bring specialized pediatric rehabilitation to Jodhpur."
    }
  ]
},
 {
  name: "Bharat Kumar",
  slug: "bharat-kumar",
  designation: "Special Educator",
  qualifications: [
    "Special Education Specialist",
    "Inclusive Education Professional"
  ],
  experience: "Dedicated Professional",
  avatar: "/images/therapist/dr_bharat.jpeg",
  specializations: [
    "Individualized Education Plans (IEPs)",
    "Cognitive & Skill Development",
    "Behavioral Intervention",
    "Sensory Integration Support",
    "Multi-sensory Teaching",
    "Parent Counseling & Training"
  ],
  stats: [
    { val: "100%", key: "Dedication" },
    { val: "IEP", key: "Specialist" }, 
    { val: "1-on-1", key: "Care Focus" }   
  ],
  bio: [
    "Mr. Bharat Kumar is a dedicated Special Educator who specializes in creating adaptive and inclusive learning environments for children with diverse developmental needs.",
    "His primary focus is on designing and implementing Individualized Education Plans (IEPs) that are tailored to each child's unique cognitive, social, and emotional abilities.",
    "Using evidence-based instructional techniques and multi-sensory teaching strategies, he helps children overcome learning barriers and achieve crucial developmental milestones."
  ],
  timeline: [
    {
      emoji: "🧩",
      title: "Individualized Assessment",
      description: "Evaluating a child's unique learning style, strengths, and areas for growth to establish a clear baseline."
    },
    {
      emoji: "📝",
      title: "IEP Development",
      description: "Creating targeted, step-by-step learning goals tailored to the child's specific developmental needs."
    },
    {
      emoji: "🎯",
      title: "Skill Building & Intervention",
      description: "Using play-based and multi-sensory techniques to build cognitive, social, and foundational academic skills."
    },
    {
      emoji: "🤝",
      title: "Family Collaboration",
      description: "Working closely with parents and the therapy team to ensure a cohesive support system at home and in the clinic."
    }
  ]
},
];

// ─── TESTIMONIALS ───────────────────────────────────────────────────────────
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
    quote: "Best work in one place. Everything your child needs under one roof. ✨",
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

// ─── WHY US ───────────────────────────────────────────────────────────────
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

// ─── APPOINTMENT CONCERN OPTIONS ─────────────────────────────────────────
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
