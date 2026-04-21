import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Users, 
  Mail, 
  Linkedin, 
  ChevronRight,
  Menu,
  X,
  ShieldCheck,
  Briefcase,
  TrendingUp,
  Award
} from 'lucide-react';

// --- Types ---
interface CaseStudy {
  id: number;
  title: string;
  category: string;
  description: string;
  impact: string[];
  image: string;
}

// --- Data ---
const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "Digital Academy Ecosystem",
    category: "LMS & Automation",
    description: "Architected a full-scale Learning Management System with automated enrollment, grading, and certification workflows.",
    impact: ["10k+ active students", "85% reduction in manual admin", "Zero downtime launch"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "AI Cashflow Forecaster",
    category: "FinTech & AI",
    description: "Developed a predictive financial modeling system that integrates with multiple bank APIs to forecast runway with 98% accuracy.",
    impact: ["$2M+ managed runway", "Real-time risk alerts", "Automated reporting"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "E-commerce Scale Engine",
    category: "Operations",
    description: "Optimized supply chain and fulfillment systems for a multi-store brand, reducing lead times by 40%.",
    impact: ["3x order capacity", "40% faster fulfillment", "99.9% inventory accuracy"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "HubSpot AI Integration",
    category: "Sales Automation",
    description: "Built a custom AI layer over HubSpot to automatically qualify leads and route them to the right sales pod.",
    impact: ["50% faster lead response", "20% increase in conversion", "Automated data hygiene"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  }
];

const EXPERTISES = [
  {
    title: "Software Development & Systems Integration",
    description: "Experienced engineers with over 15 years in developing high-quality software solutions and business systems integration with AI.",
    icon: <Zap className="w-5 h-5" />
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description: "Mastering data-driven strategies and innovative methodologies to enhance user experience and maximize conversion opportunities.",
    icon: <TrendingUp className="w-5 h-5" />
  },
  {
    title: "Sales Strategist & Business Development",
    description: "Leading teams to drive revenue growth and expertise in fleet management, B2B sales, and CRM systems.",
    icon: <Briefcase className="w-5 h-5" />
  }
];

const SERVICES = [
  {
    index: "01",
    category: "SOFTWARE",
    title: "Software & AI Integration",
    description: "Enterprise-grade systems, AI implementation, and custom software architecture tailored for complexity.",
    tags: ["FULL STACK", "AI/ML", "ARCHITECTURE"]
  },
  {
    index: "02",
    category: "GROWTH",
    title: "Conversion Optimization",
    description: "Data-driven UI/UX strategies and conversion architectures that turn traffic into high-value equity.",
    tags: ["UI/UX", "REVENUE", "A/B TESTING"]
  },
  {
    index: "03",
    category: "ECOSYSTEM",
    title: "Project Management",
    description: "Global delivery frameworks that sync your technical roadmap with business milestones perfectly.",
    tags: ["STRATEGY", "SCRUM", "VALUATION"]
  }
];

// --- Components ---

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex flex-col select-none ${className}`}>
    <div className="font-display font-black text-2xl tracking-tighter leading-none">
      <span className="text-white">DIGITAL</span>
      <span className="text-brand-lime">MATTERS.</span>
    </div>
    <div className="font-mono text-[10px] text-gray-600 tracking-[0.3em] font-bold mt-1">
      EST. 2024
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-brand-border py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <Logo />
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {['About', 'Impact', 'Services'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="mono text-gray-500 hover:text-brand-lime transition-colors">{item}</a>
          ))}
          <a href="#audit" className="px-6 py-2 border border-brand-lime text-brand-lime mono hover:bg-brand-lime hover:text-black transition-all">Free Audit</a>
        </div>

        <button className="md:hidden text-brand-lime" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 bg-black z-50 p-10 flex flex-col md:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <Logo />
              <button onClick={() => setIsMobileMenuOpen(false)}><X className="text-brand-lime" /></button>
            </div>
            <div className="flex flex-col gap-8">
              {['About', 'Impact', 'Services'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-display font-bold text-white hover:text-brand-lime transition-colors">{item}</a>
              ))}
              <a href="#audit" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 py-4 border border-brand-lime text-brand-lime text-center mono text-lg">Free Audit</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-black">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#BEF264 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-brand-lime" />
              <span className="mono text-brand-lime">Elite Systems Architect</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-bold leading-[0.9] mb-12 uppercase">
              We focus on <br />
              <span className="text-brand-lime">Execution.</span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <div>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
                  Turning operational chaos into <span className="text-white font-medium italic underline decoration-brand-lime underline-offset-4">predictable growth</span> through high-performance software and systems strategy.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <button 
                    onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-10 py-5 bg-brand-lime text-black font-mono font-bold hover:bg-white transition-all flex items-center justify-center gap-3 group"
                  >
                    INITIATE AUDIT <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => document.getElementById('impact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-10 py-5 border border-white/20 text-white font-mono font-bold hover:border-brand-lime hover:text-brand-lime transition-all"
                  >
                    VIEW PORTFOLIO
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 border-l border-brand-border pl-12 hidden md:grid">
                {[
                  { label: "Efficiency Gain", value: "40%" },
                  { label: "Success Rate", value: "99%" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-4xl font-display font-bold text-white mb-2">{stat.value}</div>
                    <div className="mono text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const Bio = () => {
  return (
    <section id="about" className="py-24 relative bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="mono text-brand-lime">Capabilities</span>
              <span className="h-px flex-1 bg-brand-border" />
            </div>
            <h2 className="text-5xl font-bold mb-12 tracking-tight uppercase">OUR EXPERTISE.</h2>
            <div className="space-y-12">
              {EXPERTISES.map((exp, i) => (
                <div key={i} className="group cursor-default">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="text-brand-lime">{exp.icon}</div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-lime transition-colors">{exp.title}</h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed pl-9">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="tech-card p-12 rounded-none relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-lime" />
            <div className="mono text-brand-lime mb-8">Engineering Protocol 01</div>
            <h3 className="text-3xl font-bold mb-8 uppercase">About Us</h3>
            <div className="space-y-8 text-gray-400 leading-relaxed text-lg">
              <p>
                We're a high-performance engineering collective focused on combining diverse software expertise to deliver superior systems.
              </p>
              <p>
                Our core team excels in <span className="text-white font-medium underline decoration-brand-lime underline-offset-4">software development</span>, <span className="text-white font-medium underline decoration-brand-lime underline-offset-4">system integration</span>, and <span className="text-white font-medium underline decoration-brand-lime underline-offset-4">strategic sales planning</span>.
              </p>
              <p>
                We don't just provide services; we build the digital infrastructure that allows modern businesses to move with velocity and achieve market dominance.
              </p>
            </div>
            <div className="mt-12 flex items-center justify-between border-t border-brand-border pt-8">
              <div className="mono">EST. 2024</div>
              <div className="mono text-brand-lime">STATUS: ACTIVE</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProblemSolution = () => {
  return (
    <section className="py-32 bg-brand-gray">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="mono text-red-500 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              CRITICAL FAILURES
            </div>
            <h2 className="text-5xl font-bold mb-10 uppercase leading-none">
              Systems die in <br />
              <span className="text-red-500">Silence.</span>
            </h2>
            <div className="space-y-8">
              {[
                "Constant firefighting and missed deployment window",
                "Scalability chaos where velocity drops as team size grows",
                "Lack of visibility into true architecture health"
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="mono text-red-500 mt-1">[{i+1}]</div>
                  <p className="text-gray-400 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tech-card p-12 relative"
          >
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-brand-lime" />
            <div className="mono text-brand-lime mb-8">Solution Framework</div>
            <p className="text-xl text-white mb-10 leading-relaxed font-light">
              I implement high-performance operational architectures that align your technical execution with market reality.
            </p>
            <div className="grid gap-6">
              {[
                "Automated CI/CD Dashboards",
                "Resource Allocation Frameworks",
                "AI-Driven Dev Cycle Automation"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-5 h-5 border border-brand-lime flex items-center justify-center text-brand-lime group-hover:bg-brand-lime group-hover:text-black transition-all">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <span className="mono text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const Impact = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section id="impact" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mono text-brand-lime mb-4">DEPLOYMENTS & OUTCOMES</div>
            <h2 className="text-5xl md:text-7xl font-bold uppercase">Impact.</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-sm mono"
          >
            SENSITIVE PROJECT DATA // REDACTED // KEY PERFORMANCE METRICS BELOW
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-1 gap-y-1">
          {CASE_STUDIES.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer border border-brand-border hover:border-brand-lime transition-all overflow-hidden relative"
              onClick={() => setSelectedId(study.id)}
            >
              <div className="relative aspect-[16/6] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all" />
              </div>
              <div className="p-8 flex items-center justify-between">
                <div>
                  <div className="mono text-brand-lime mb-2">{study.category}</div>
                  <h3 className="text-2xl font-bold uppercase group-hover:lime-text transition-colors">
                    {study.title}
                  </h3>
                </div>
                <div className="w-12 h-12 border border-brand-border flex items-center justify-center group-hover:border-brand-lime group-hover:bg-brand-lime group-hover:text-black transition-all">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            <motion.div 
              layoutId={`study-${selectedId}`}
              className="relative w-full max-w-4xl bg-brand-bg border border-brand-border rounded-none overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 border border-brand-border flex items-center justify-center hover:bg-brand-lime hover:text-black transition-all"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="grid md:grid-cols-2">
                <div className="h-full overflow-hidden">
                  <img 
                    src={CASE_STUDIES.find(s => s.id === selectedId)?.image} 
                    className="w-full h-full object-cover min-h-[400px]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-12">
                  <div className="mono text-brand-lime mb-4">
                    {CASE_STUDIES.find(s => s.id === selectedId)?.category}
                  </div>
                  <h2 className="text-4xl font-bold mb-8 uppercase leading-none">
                    {CASE_STUDIES.find(s => s.id === selectedId)?.title}
                  </h2>
                  <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
                    {CASE_STUDIES.find(s => s.id === selectedId)?.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="mono text-white mb-4 italic">CRITICAL IMPACT METRICS</div>
                    {CASE_STUDIES.find(s => s.id === selectedId)?.impact.map((item, i) => (
                      <div key={i} className="flex items-center gap-4 py-3 border-b border-brand-border">
                        <CheckCircle2 className="w-5 h-5 text-brand-lime" />
                        <div className="mono text-gray-300 text-xs">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-32 bg-black border-y border-brand-border relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="mono text-brand-lime mb-6">SERVICE CATALOG // 2024</div>
          <h2 className="text-6xl font-bold mb-8 uppercase italic leading-none">High Velocity <br /> Systems.</h2>
          <p className="text-gray-500 font-mono text-sm max-w-xl mx-auto">
            WE DON'T JUST MANAGE TASKS; WE ARCHITECT THE FRAMEWORKS THAT ELIMINATE THE NEED FOR MANAGEMENT.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="tech-card p-12 rounded-2xl flex flex-col group relative overflow-hidden"
            >
              <div className="mono text-gray-500 mb-8 flex items-center gap-2">
                <span className="text-brand-lime font-bold">{service.index}</span>
                <span className="w-4 h-px bg-gray-800" />
                <span>{service.category}</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-6 text-white leading-tight uppercase group-hover:lime-text transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-500 mb-12 leading-relaxed text-lg">
                {service.description}
              </p>
              
              <div className="mt-auto flex flex-wrap gap-2">
                {service.tags.map((tag, j) => (
                  <span key={j} className="px-4 py-1.5 border border-brand-border rounded-full mono text-[9px] text-gray-500 group-hover:border-brand-lime/30 group-hover:text-brand-lime transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AuditForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="audit" className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto border border-brand-border bg-brand-gray overflow-hidden grid md:grid-cols-2">
          <div className="p-16 border-r border-brand-border">
            <div className="mono text-brand-lime mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-lime" />
              SYSTEM PROTOCOL 04: CONSULT
            </div>
            <h2 className="text-6xl font-bold mb-10 uppercase leading-[0.9]">
              Let's scale <br />
              <span className="text-brand-lime">Faster.</span>
            </h2>
            <p className="text-gray-400 mb-12 text-lg leading-relaxed font-light">
              Ready to eliminate delivery bottlenecks? Request a high-intensity architecture audit today.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 border border-brand-border flex items-center justify-center text-brand-lime">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="mono text-gray-500 text-[10px] mb-1">SECURE ENCRYPTED CHANNEL</div>
                  <div className="font-mono text-white text-lg">Hello@thedigitalmatters.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-16">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-24 h-24 border border-brand-lime flex items-center justify-center text-brand-lime mb-8">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold mb-4 uppercase">TRANSMISSION RECEIVED</h3>
                <p className="mono text-gray-400">ETA: 24 HOURS // STANDBY</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="mono text-gray-500">OPERATOR NAME</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-0 py-4 bg-transparent border-b border-brand-border focus:border-brand-lime outline-none transition-all text-white font-mono"
                      placeholder="J. DOE"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="mono text-gray-500">SECURE EMAIL</label>
                    <input 
                      required
                      type="email" 
                      className="w-full px-0 py-4 bg-transparent border-b border-brand-border focus:border-brand-lime outline-none transition-all text-white font-mono"
                      placeholder="J@COMPANY.CO"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="mono text-gray-500">SYSTEM BOTTLENECK ANALYSIS</label>
                  <textarea 
                    required
                    className="w-full px-0 py-4 bg-transparent border-b border-brand-border focus:border-brand-lime outline-none transition-all min-h-[120px] text-white font-mono resize-none"
                    placeholder="DESCRIBE CURRENT DELIVERY FRICTION..."
                  />
                </div>
                <button 
                  disabled={status === 'submitting'}
                  className="w-full py-6 bg-brand-lime text-black font-mono font-bold hover:bg-white transition-all disabled:opacity-50 uppercase tracking-[0.2em]"
                >
                  {status === 'submitting' ? 'TRANSMITTING...' : 'INITIATE REQUEST'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


const Footer = () => {
  return (
    <footer className="py-12 border-t border-brand-border bg-black">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <Logo />
        <p className="mono text-gray-600 text-[10px]">
          © {new Date().getFullYear()} THE DIGITAL MATTERS // SYSTEMS ARCHITECTURE // ALL RIGHTS RESERVED
        </p>
        <div className="flex gap-8">
          <a href="mailto:Hello@thedigitalmatters.com" className="text-gray-500 hover:text-brand-lime transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-[60] h-16 w-16 bg-brand-lime text-black rounded-full shadow-[0_0_50px_rgba(190,242,100,0.3)] flex items-center justify-center group hover:scale-110 transition-all"
        >
          <Zap className="w-6 h-6 fill-current" />
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-20 bg-black text-brand-lime mono px-4 py-2 border border-brand-lime whitespace-nowrap pointer-events-none"
          >
            INITIATE SYSTEM AUDIT
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};


export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-lime/30 selection:text-brand-lime">
      <Navbar />
      <main>
        <Hero />
        <Bio />
        <ProblemSolution />
        <Impact />
        <Services />
        <AuditForm />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
