import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HubIcon from "@mui/icons-material/Hub";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import ViewQuiltOutlinedIcon from "@mui/icons-material/ViewQuiltOutlined";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

export const NAV_ITEMS = [
  { label: "Product", href: "#interview-showcase" },
  { label: "Solutions", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#testimonials" },
];

export const HERO_STATS = [
  { value: "70%", label: "Less time to hire" },
  { value: "4x", label: "Faster reviews" },
  { value: "50+", label: "Skills assessed" },
];

export const TRUSTED_COMPANIES = [
  { name: "slack", Icon: HubIcon },
  { name: "Notion", Icon: ViewQuiltOutlinedIcon },
  { name: "linear", Icon: CircleOutlinedIcon },
  { name: "Vercel", Icon: ChangeHistoryIcon },
  { name: "segment", Icon: GraphicEqIcon },
  { name: "loom", Icon: AllInclusiveIcon },
  { name: "otter.ai", Icon: BubbleChartIcon },
  { name: "webflow", Icon: WaterDropIcon },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "Create a role",
    description:
      "Add job details, required skills and customize the interview experience.",
    Icon: DescriptionOutlinedIcon,
    iconColor: "blue",
  },
  {
    number: "02",
    title: "Generate interviews",
    description:
      "Evalify creates role-specific questions using AI based on your requirements.",
    Icon: AutoAwesomeOutlinedIcon,
    iconColor: "purple",
  },
  {
    number: "03",
    title: "Conduct & evaluate",
    description:
      "Candidates take AI interviews with real-time evaluation and detailed insights.",
    Icon: GroupsOutlinedIcon,
    iconColor: "green",
  },
  {
    number: "04",
    title: "Make the right hire",
    description:
      "Review reports, compare candidates and hire the best talent faster.",
    Icon: BarChartOutlinedIcon,
    iconColor: "orange",
  },
];

export const INTERVIEW_BENEFITS = [
  "Adaptive, human-like interviews",
  "Skill-based evaluation",
  "Bias-aware and consistent",
  "Multi-language support",
];

export const FEATURES = [
  {
    title: "AI Interviewer",
    description:
      "Conduct realistic, adaptive interviews with AI that evaluates in real-time.",
    background: "lavender",
  },
  {
    title: "Detailed Analytics",
    description:
      "Get role-wise reports, skill breakdown and candidate insights in one place.",
    background: "blue",
  },
  {
    title: "AI Question Generation",
    description: "Create role-specific, skill-based questions powered by AI.",
    background: "orange",
  },
  {
    title: "Smart Evaluation",
    description: "Get objective and consistent evaluations with AI scoring.",
    background: "green",
  },
  {
    title: "Multi-role Support",
    description:
      "Hire for any role — engineering, design, product, sales and more.",
    background: "purple",
  },
  {
    title: "Live Coding Interviews",
    description: "Built-in code editor with real-time evaluation.",
    background: "orange",
  },
  {
    title: "ATS Integration",
    description:
      "Sync candidates and evaluations with your existing workflow.",
    background: "blue",
  },
  {
    title: "Secure & Reliable",
    description:
      "Your data is always secure with enterprise-grade protection.",
    background: "pink",
  },
];

export const PRICING_PLANS = [
  {
    name: "Free",
    description: "Perfect for trying out Evalify",
    monthly: 0,
    yearly: 0,
    features: [
      "5 AI interviews",
      "Basic evaluations",
      "Email support",
    ],
    button: "Get started",
  },
  {
    name: "Starter",
    description: "For small teams",
    monthly: 49,
    yearly: 39,
    features: [
      "50 AI interviews",
      "Standard analytics",
      "ATS integration",
      "Priority support",
    ],
    button: "Get started",
  },
  {
    name: "Pro",
    description: "For growing teams",
    monthly: 149,
    yearly: 119,
    features: [
      "250 AI interviews",
      "Advanced analytics",
      "Custom questions",
      "Team collaboration",
      "Dedicated support",
    ],
    button: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    monthly: 299,
    yearly: 239,
    features: [
      "Unlimited interviews",
      "Custom workflows",
      "SSO & advanced security",
      "Dedicated account manager",
    ],
    button: "Contact sales",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Evalify has reduced our hiring time by 70%. The quality of candidates is significantly better.",
    name: "Sarah Chen",
    role: "Head of Talent, FintechCo",
    portrait: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "The AI evaluations are incredibly accurate and save us hours of manual screening.",
    name: "James Wilson",
    role: "CTO, StartupX",
    portrait: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "A must-have for any modern recruiting team. Simple, powerful and reliable.",
    name: "Priya Sharma",
    role: "HR Director, SaaSFlow",
    portrait: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export const FAQS = [
  {
    question: "How does the AI interview work?",
    answer:
      "Evalify asks role-specific questions, analyzes video, audio, and coding responses, then provides detailed evaluations with scores and feedback.",
  },
  {
    question: "Can I integrate with my existing ATS?",
    answer:
      "Evalify is designed to fit into your hiring workflow. Contact our team to discuss integrations for your applicant tracking system.",
  },
  {
    question: "Is candidate data secure?",
    answer:
      "Candidate data should be handled with appropriate access controls and security measures. Contact the Evalify team for specific security and compliance details.",
  },
  {
    question: "Which roles and skills are supported?",
    answer:
      "You can configure assessments around the roles, technical skills and evaluation criteria relevant to your hiring needs.",
  },
  {
    question: "Can I customize the questions?",
    answer:
      "Yes. Configure role-specific questions and assessment rounds to suit your hiring requirements.",
  },
];

export const CTA_BENEFITS = [
  {
    label: "Faster hiring",
    Icon: BoltOutlinedIcon,
  },
  {
    label: "More accurate evaluations",
    Icon: TrackChangesOutlinedIcon,
  },
  {
    label: "Secure & reliable",
    Icon: VerifiedUserOutlinedIcon,
  },
];

export const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#features" },
      { label: "Security", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help center", href: "#help" },
      { label: "Documentation", href: "#documentation" },
      { label: "Guides", href: "#guides" },
      { label: "Status", href: "#status" },
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com",
  },
  {
    label: "X",
    Icon: XIcon,
    href: "https://x.com",
  },
  {
    label: "GitHub",
    Icon: GitHubIcon,
    href: "https://github.com",
  },
];
