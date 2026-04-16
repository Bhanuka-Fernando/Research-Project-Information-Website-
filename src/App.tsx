import bhanuka from "./assets/team/bhanuka.jpg";
import imalka from "./assets/team/Dulan.png";
import thennakon from "./assets/team/Geshika.png";
import sachin from "./assets/team/sachin.jpg";
import supervisor from "./assets/team/superviosr.jpg";
import coSupervisor from "./assets/team/co-supervisor.jpg";

export default function App() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Research", href: "#domain" },
    { label: "System", href: "#system" },
    { label: "Milestones", href: "#milestones" },
    { label: "Documents", href: "#documents" },
    { label: "Presentations", href: "#presentations" },
    { label: "Team", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const milestones = [
    {
      title: "Project Proposal",
      month: "May 2026",
      marks: "6%",
      desc: "Initial proposal submission with problem definition, literature framing, and research plan.",
    },
    {
      title: "Progress Presentation I",
      month: "July 2026",
      marks: "15%",
      desc: "Early prototype demonstration with dataset preparation and initial AI validation.",
    },
    {
      title: "Progress Presentation II",
      month: "September 2026",
      marks: "18%",
      desc: "Integrated system walkthrough covering sensing, mobile workflows, and predictive models.",
    },
    {
      title: "Research Paper",
      month: "October 2026",
      marks: "10%",
      desc: "Formal publication-ready documentation of methods, experiments, and contributions.",
    },
    {
      title: "Final Report",
      month: "November 2026",
      marks: "19%",
      desc: "Complete report including methodology, implementation, evaluation, and findings.",
    },
    {
      title: "Final Presentation & Viva",
      month: "November 2026",
      marks: "20%",
      desc: "Final defense with live demonstration, technical discussion, and outcome review.",
    },
  ];

  const documents = [
    {
      name: "Topic Assesment",
      status: "Available now",
      link: "/documents/Project Charter.pdf",
    },
    {
      name: "Proposal Document",
      status: "Available now",
      link: "https://drive.google.com/drive/folders/1r_Que3HUILaKIgagPlqBBXwckhJnfJXP?usp=sharing",
    },
    {
      name: "Checklist I",
      status: "Available now",
      link: "/documents/Checklist 1.pdf",
    },
    {
      name: "Checklist II",
      status: "Available now",
      link: "https://drive.google.com/file/d/1B43ACW2cfO18gUUoXfiP8iZVk2SbNYCl/view?usp=sharing",
    },
    {
      name: "Checklist III",
      status: "Available now",
      link: "/documents/Checklist 3.pdf",
    },
    { name: "Research Paper", status: "Pending upload" },
    { name: "Final Report", status: "Pending upload" },
  ];

  const presentations = [
    {
      name: "Project Proposal",
      status: "Available now",
      type: "Group",
      note: "Initial project pitch and problem framing presentation.",
      link: "/presentations/Research Proposal Presentation.pptx",
    },
    {
      name: "Progress Presentation I",
      status: "Available now",
      type: "Group",
      note: "Early prototype walkthrough and validation progress update.",
      link: "/presentations/Progress Presentation.pptx",
    },
    {
      name: "Progress Presentation II",
      status: "Available now",
      type: "Group",
      note: "Integrated system presentation with refined model outcomes.",
      link: "/presentations/Progress Presentation 02.pptx",
    },
    {
      name: "Final Presentation",
      status: "Pending upload",
      type: "Group",
      note: "Final defense slides prepared for viva and demonstration.",
    },
  ];

  const team = [
    {
      name: "Supervisor",
      role: "Project Supervisor",
      note: "Providing academic guidance, research oversight, and technical direction for the project.",
      email: "Email :Add email",
      photo: supervisor,
    },

    {
      name: "Co-Supervisor",
      role: "Project Co-Supervisor",
      note: "Supporting research validation, review feedback, and project progress throughout development.",
      email: "Email :Add email",
      photo: coSupervisor,
    },
    
    {
      name: "Sachintha P.W.E",
      role: "IT21390050",
      note: "Focused on intelligent farm monitoring and full-system integration.",
      email: "Email : sachintha@gmail.com",
      photo: sachin,
    },
    {
      name: "Imalka T A D D",
      role: "IT22312358",
      note: "Focused on analytics, evaluation workflows, and application support.",
      email: "Email :imalkatad@gmail.com",
      photo: imalka,
    },
    {
      name: "Thennakon G H",
      role: "IT22332158",
      note: "Focused on sensing pipelines, data capture, and validation support.",
      email: "Email : geshikathennakon@gmail.com",
      photo: thennakon,
    },
    {
      name: "Fernando A N B",
      role: "IT22330178",
      note: "Focused on AI model delivery, experience design, and product direction.",
      email: "Email : bhanukafernando2@gmail.com",
      photo: bhanuka,
    },
    
  ];

  const stats = [
    { value: "4", label: "Integrated intelligence modules" },
    { value: "24/7", label: "Continuous hydroponic insight" },
    { value: "1", label: "Unified decision-support platform" },
  ];

  const highlights = [
    {
      title: "Leaf health intelligence",
      desc: "AI detects disease patterns, nutrient deficiencies, and tipburn severity before visible damage becomes costly.",
    },
    {
      title: "Water and algae alerts",
      desc: "pH, EC, turbidity, and temperature signals are translated into practical warnings and recommended actions.",
    },
    {
      title: "Shelf-life prediction",
      desc: "Post-harvest image analysis plus environmental context helps estimate spoilage stage and remaining freshness.",
    },
    {
      title: "Growth and weight estimation",
      desc: "RGB and depth-based analysis helps estimate lettuce growth patterns and weight-related characteristics without damaging the crop.",
    },
  ];

  const journey = [
    {
      step: "01",
      title: "Capture",
      desc: "Collect lettuce images and hydroponic sensor data from the farm in real time.",
    },
    {
      step: "02",
      title: "Analyze",
      desc: "Run AI and rule-based models to interpret plant health, water quality, spoilage risk, and growth.",
    },
    {
      step: "03",
      title: "Decide",
      desc: "Convert predictions into farmer-friendly status labels, scores, and recommended next actions.",
    },
    {
      step: "04",
      title: "Respond",
      desc: "Use a connected dashboard and mobile workflow to react faster and reduce crop loss.",
    },
  ];

  const researchCards = [
    {
      title: "Literature Survey",
      desc: "Previous smart agriculture studies show strong promise in computer vision and IoT. Most solutions, however, remain fragmented and focus on only one farming stage rather than supporting the full hydroponic lettuce lifecycle.",
    },
    {
      title: "Research Gap",
      desc: "Existing systems often separate disease detection, spoilage analysis, water-quality sensing, and growth estimation. Farmers need one connected workflow instead of several isolated prototypes.",
    },
    {
      title: "Research Problem",
      desc: "How can a practical AI- and IoT-driven system support early health assessment, water-quality alerts, spoilage prediction, and growth estimation for hydroponic lettuce farms in one platform?",
    },
    {
      title: "Research Objectives",
      desc: "Develop a complete monitoring platform with AI-based image analysis, sensor intelligence, explainable alerts, mobile visibility, and actionable decision support for hydroponic lettuce production.",
    },
  ];

  const systemModules = [
    {
      title: "Leaf Health Detection & Scoring",
      desc: "Efficient image-based models classify disorders and nutrient issues, while localized damage detection supports farmer-ready health scores.",
    },
    {
      title: "Spoilage & Shelf-Life Prediction",
      desc: "Freshness is estimated from visual cues together with temperature and humidity context to guide harvest and storage decisions.",
    },
    {
      title: "Water Quality & Algae Warning",
      desc: "Sensor streams are interpreted into water status, algae risk levels, reasons, and recommended interventions.",
    },
    {
      title: "Vision-Based Growth Estimation",
      desc: "RGB and depth data enable non-destructive measurement of growth-related plant characteristics over time.",
    },
  ];

  const technologies = [
    {
      name: "React",
      logo: "https://cdn.simpleicons.org/react/61DAFB",
    },
    {
      name: "React Native",
      logo: "https://cdn.simpleicons.org/react/61DAFB",
    },
    {
      name: "FastAPI",
      logo: "https://cdn.simpleicons.org/fastapi/009688",
    },
    {
      name: "Python",
      logo: "https://cdn.simpleicons.org/python/3776AB",
    },
    {
      name: "PyTorch",
      logo: "https://cdn.simpleicons.org/pytorch/EE4C2C",
    },
    {
      name: "YOLO",
      logo: "https://api.iconify.design/mdi/target.svg?color=%231f7a3f",
    },
    {
      name: "OpenCV",
      logo: "https://cdn.simpleicons.org/opencv/5C3EE8",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.simpleicons.org/postgresql/4169E1",
    },
    {
      name: "ESP32",
      logo: "https://api.iconify.design/mdi/chip.svg?color=%231f7a3f",
    },
    {
      name: "IoT Sensors",
      logo: "https://api.iconify.design/mdi/access-point-network.svg?color=%231f7a3f",
    },
    {
      name: "Computer Vision",
      logo: "https://api.iconify.design/mdi/camera-outline.svg?color=%231f7a3f",
    },
    {
      name: "Deep Learning",
      logo: "https://api.iconify.design/mdi/brain.svg?color=%231f7a3f",
    },
  ];

  const gallery = [
    {
      title: "Controlled cultivation",
      image:
        "https://thumbs.dreamstime.com/b/leafy-green-salad-growing-greenhouse-using-hydroponic-system-clean-controlled-soil-free-greens-consistent-harvest-420391892.jpg",
    },
    {
      title: "Healthy lettuce growth",
      image:
        "https://t4.ftcdn.net/jpg/19/56/87/45/360_F_1956874535_vnhFA7oBksgrPAkGYYemUuIB6QGl5WAi.jpg",
    },
    {
      title: "Fresh harvest quality",
      image:
        "https://png.pngtree.com/thumb_back/fh260/background/20251016/pngtree-fresh-organic-lettuce-harvest-in-wicker-basket-under-golden-sunlight-image_19885440.webp",
    },
  ];

  return (
    <div className="min-h-screen scroll-smooth bg-[var(--bg)] text-slate-900">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[34rem] bg-[radial-gradient(circle_at_top_left,_rgba(69,145,84,0.18),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(180,232,195,0.8),_transparent_32%),linear-gradient(180deg,_rgba(255,255,255,0.96),_rgba(248,252,248,0.92),_rgba(255,255,255,0.98))]" />

      <header className="sticky top-0 z-50 border-b border-emerald-100/80 bg-white/86 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#1f7a3f,#76c27c)] text-lg font-semibold text-white shadow-[0_12px_30px_rgba(71,145,89,0.28)]">
              QL
            </div>
            <div>
              <p className="font-['Manrope',sans-serif] text-base font-extrabold tracking-[0.08em] text-emerald-900 uppercase">
                Quadra Leaf
              </p>
            
            </div>
          </a>

          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-1xl font-bold text-slate-600 transition hover:text-emerald-700"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2.5 text-sm font-semibold text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-100"
          >
            Contact Team
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section id="home" className="overflow-hidden px-5 pt-8 pb-18 md:px-6 md:pt-12 md:pb-24">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="inline-flex rounded-full border border-emerald-200 bg-white/80 px-4 py-1.5 text-sm font-semibold text-emerald-800 shadow-sm backdrop-blur">
                AI-powered hydroponic lettuce intelligence
              </span>
              <h1 className="mt-6 max-w-3xl font-['Fraunces',serif] text-5xl leading-[1.05] font-semibold text-slate-900 md:text-7xl">
                Fresh, bright, and intelligent farming starts with better insight.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Quadra Leaf is a white, clean, modern research showcase for a smart hydroponic
                lettuce platform that combines AI vision, sensor analytics, and decision support
                to protect crop quality from seedling to shelf.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#domain"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-7 py-3.5 text-sm font-semibold text-emerald-800 shadow-[0_8px_20px_rgba(31,106,57,0.08)] transition hover:border-emerald-300 hover:bg-emerald-50"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Explore Research
                </a>
                <a
                  href="#documents"
                  className="rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-emerald-300 hover:text-emerald-800"
                >
                  View Documents
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.75rem] border border-white bg-white/90 p-5 shadow-[0_18px_45px_rgba(25,70,40,0.08)]"
                  >
                    <p className="font-['Fraunces',serif] text-3xl font-semibold text-emerald-800">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 h-28 w-28 rounded-full bg-emerald-100 blur-2xl" />
              <div className="absolute -right-6 bottom-10 h-32 w-32 rounded-full bg-lime-100 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-[0_28px_80px_rgba(37,86,50,0.18)]">
                <img
                  src="https://www.agrowtronics.com/wp-content/uploads/2020/05/pexels-photo-348689-1125x600.jpeg"
                  alt="Fresh hydroponic lettuce growing in a greenhouse"
                  className="h-[26rem] w-full rounded-[1.5rem] object-cover md:h-[34rem]"
                />

                <div className="absolute left-8 top-8 max-w-[15rem] rounded-[1.5rem] border border-white/70 bg-white/88 p-4 shadow-lg backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                    Live farm insight
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Monitor plant stress, water quality, growth, and freshness within one elegant workflow.
                  </p>
                </div>

                <div className="absolute right-8 bottom-8 w-[15rem] rounded-[1.5rem] bg-slate-950/86 p-5 text-white shadow-2xl">
                  <p className="text-sm text-emerald-300">System promise</p>
                  <p className="mt-2 font-['Fraunces',serif] text-2xl leading-tight">
                    Cleaner farming decisions with smarter visuals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-6 md:px-6">
          <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-emerald-100/80 bg-[linear-gradient(180deg,#f9fdf9,#ffffff)] p-6 shadow-[0_26px_70px_rgba(37,86,50,0.08)] md:p-8">
            <div className="grid gap-8 xl:grid-cols-[1.1fr_1.3fr] xl:items-start">
              <div className="rounded-[2rem] bg-[linear-gradient(140deg,#f4fbf3,#ecf8ee)] p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                  Why this matters
                </p>
                <h2 className="mt-3 font-['Fraunces',serif] text-4xl leading-tight text-slate-900 md:text-5xl">
                  Hydroponic lettuce needs precision, not guesswork.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                  Traditional monitoring depends on repeated manual inspection of leaves, tanks,
                  and harvested produce. Quadra Leaf reframes that process into a calm, visual,
                  data-rich system that supports earlier detection and more confident responses.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.4rem] bg-white/80 p-4 shadow-sm">
                    <p className="text-sm font-semibold text-emerald-700">Earlier detection</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Spot stress, spoilage, and water issues before they become expensive.
                    </p>
                  </div>
                  <div className="rounded-[1.4rem] bg-white/80 p-4 shadow-sm">
                    <p className="text-sm font-semibold text-emerald-700">Better decisions</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Turn AI predictions into clear actions that are easier for farmers to trust.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.75rem] border border-emerald-100 bg-white p-6 shadow-[0_18px_45px_rgba(32,87,49,0.08)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100/80 text-lg font-semibold text-emerald-800">
                      {item.title.charAt(0)}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold leading-snug text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="domain" className="px-5 py-20 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Research Scope
              </p>
              <h2 className="mt-3 font-['Fraunces',serif] text-4xl text-slate-900 md:text-5xl">
                A clearer digital identity for a smarter farm research project.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The website now presents your academic work like a polished innovation product:
                clean white space, soft greens, strong hierarchy, and a more inviting flow for
                evaluators, supervisors, and visitors.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {researchCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_18px_45px_rgba(35,80,48,0.07)]"
                >
                  <h3 className="font-['Fraunces',serif] text-3xl text-slate-900">{card.title}</h3>
                  <p className="mt-4 leading-8 text-slate-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="system" className="bg-[linear-gradient(180deg,#f7fbf7,#ffffff)] px-5 py-20 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="text-2xl font-semibold uppercase tracking-[0.24em] text-emerald-700">
                System Journey
              </p>
              
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The system is easier to understand when the workflow and the four intelligence
                modules are separated into clear blocks with stronger visual order.
              </p>
            </div>

            <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="pt-1">
                <div className="space-y-4">
                  {journey.map((item) => (
                    <div
                      key={item.step}
                      className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-[0_14px_30px_rgba(30,55,40,0.05)]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-sm font-bold text-emerald-700">
                          {item.step}
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-1">
                <div className="rounded-[1.7rem] border border-slate-100 bg-white p-6 shadow-[0_16px_34px_rgba(30,55,40,0.05)]">
                  <div className="mb-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                      Core Modules
                    </p>
                    <h3 className="mt-3 font-['Fraunces',serif] text-3xl leading-tight text-slate-900 md:text-[2.35rem]">
                      Four integrated intelligence layers
                    </h3>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {systemModules.map((module) => (
                      <div
                        key={module.title}
                        className="rounded-[1.35rem] border border-slate-100 bg-slate-50/50 p-6"
                      >
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                          Module
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold leading-snug text-slate-900">
                          {module.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{module.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.7rem] border border-slate-100 bg-white shadow-[0_18px_42px_rgba(30,55,40,0.06)]">
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <img
                  src="https://asiaexport.lk/wp-content/uploads/2024/10/IMG_4451-scaled.jpg"
                  alt="Rows of green lettuce in a clean hydroponic setup"
                  className="h-72 w-full object-cover lg:h-full"
                />
                <div className="flex flex-col justify-center p-7 md:p-10">
                  <h3 className="font-['Fraunces',serif] text-3xl text-slate-900 md:text-4xl">
                    Methodology in one view
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
                    Image intelligence, environmental sensing, backend services, and a mobile
                    experience work together to generate explainable scores, warnings, history,
                    and support for day-to-day farm decisions.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="inline-flex items-center gap-3 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800 ring-1 ring-emerald-100"
                      >
                        <img src={tech.logo} alt={tech.name} className="h-5 w-5 object-contain" />
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Visual Story
              </p>
              <h2 className="mt-3 font-['Fraunces',serif] text-4xl text-slate-900 md:text-5xl">
                Fresh imagery that matches the product vision.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {gallery.map((item) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-[0_20px_50px_rgba(39,83,49,0.08)]"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      A brighter, fresher visual direction supports the hydroponic lettuce theme
                      and makes the site feel premium and memorable.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="milestones" className="bg-[linear-gradient(180deg,#ffffff,#f4fbf5)] px-5 py-20 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Milestones
              </p>
              <h2 className="mt-3 font-['Fraunces',serif] text-4xl text-slate-900 md:text-5xl">
                Academic progress mapped with clarity.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Each submission point is now presented in a cleaner, easier-to-scan timeline grid.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {milestones.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_18px_45px_rgba(39,83,49,0.08)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-emerald-700">{item.month}</p>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-800">
                      {item.marks}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="documents" className="px-5 py-20 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              
              <h2 className="text-2xl font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Documents
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Please find all documents related to this project below.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2.2rem] border border-emerald-100/80 bg-white shadow-[0_28px_70px_rgba(39,83,49,0.08)]">
              <div className="border-b border-emerald-100 bg-[linear-gradient(180deg,#f2fbf4,#ebf8ee)] px-6 py-6 md:px-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                      Document Center
                    </p>
                    <h3 className="mt-2 font-['Fraunces',serif] text-3xl text-slate-900">
                      Project files, reports, and submissions
                    </h3>
                  </div>
                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm ring-1 ring-emerald-100">
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                    Upload links can be added later
                  </div>
                </div>
              </div>

              <div className="hidden grid-cols-[1.7fr_0.8fr] border-b border-slate-100 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 md:grid">
                <div>Document</div>
                <div>Status</div>
              </div>

              <div className="divide-y divide-slate-100">
                {documents.map((doc) => (
                  <div
                    key={doc.name}
                    className="grid gap-4 px-6 py-5 transition hover:bg-emerald-50/40 md:grid-cols-[1.7fr_0.8fr] md:px-8"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#edf9ef,#d8f0de)] text-sm font-bold text-emerald-800 shadow-sm">
                        {doc.name
                          .split(" ")
                          .slice(0, 2)
                          .map((word) => word.charAt(0))
                          .join("")}
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 md:hidden">
                          Document
                        </p>
                        <p className="text-lg font-semibold text-slate-900">{doc.name}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 md:hidden">
                          Status
                        </p>
                        {doc.link ? (
                          <a
                            href={doc.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-[0_8px_20px_rgba(31,106,57,0.08)] transition hover:border-emerald-300 hover:bg-emerald-50"
                          >
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            View Document
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3.5 py-1.5 text-sm font-semibold text-amber-700 ring-1 ring-amber-100">
                            <span className="h-2 w-2 rounded-full bg-amber-500" />
                            {doc.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="mb-8 max-w-3xl">
                <h3
                  id="presentations"
                  className="text-2xl font-semibold uppercase tracking-[0.24em] text-emerald-700"
                >
                  Presentations
                </h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Please find all presentations related to this project below.
                </p>
              </div>

              <div className="rounded-[2.4rem] border border-emerald-100/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(242,251,244,0.7))] p-5 shadow-[0_24px_70px_rgba(39,83,49,0.08)] md:p-8">
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {presentations.map((item) => (
                  <article
                    key={item.name}
                    className="flex h-full flex-col rounded-[2rem] border border-emerald-100/80 bg-white p-6 shadow-[0_18px_45px_rgba(39,83,49,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(39,83,49,0.12)] md:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#edf9ef,#d8f0de)] text-sm font-bold text-emerald-800 shadow-sm">
                        {item.name
                          .split(" ")
                          .slice(0, 2)
                          .map((word) => word.charAt(0))
                          .join("")}
                      </div>
                      <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700 ring-1 ring-emerald-100">
                        {item.type}
                      </span>
                    </div>
                    <h4 className="mt-6 text-[1.85rem] font-semibold leading-tight text-slate-900">
                      {item.name}
                    </h4>
                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">{item.note}</p>

                    <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-100 pt-5">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-[0_8px_20px_rgba(31,106,57,0.08)] transition hover:border-emerald-300 hover:bg-emerald-50"
                        >
                          <span className="h-2 w-2 rounded-full bg-emerald-500" />
                          View Presentation
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3.5 py-1.5 text-sm font-semibold text-amber-700 ring-1 ring-amber-100">
                          <span className="h-2 w-2 rounded-full bg-amber-500" />
                          {item.status}
                        </span>
                      )}
                    </div>
                  </article>
                ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-[linear-gradient(180deg,#f7fbf7,#ffffff)] px-5 py-20 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-2xl font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Research Team
              </p>
             
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_18px_45px_rgba(39,83,49,0.08)]"
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-32 w-32 rounded-[1.75rem] object-cover object-top shadow-[0_14px_32px_rgba(39,83,49,0.16)]"
                  />
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{member.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-emerald-700">{member.role}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{member.note}</p>
                  <p className="mt-4 text-sm text-slate-500">{member.email}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 pt-10 pb-24 md:px-6">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2.2rem] bg-[linear-gradient(135deg,#1f6a39,#4c9b5f,#85c787)] p-8 text-white shadow-[0_28px_80px_rgba(37,86,50,0.22)] md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-100">
                Contact
              </p>
              <h2 className="mt-4 font-['Fraunces',serif] text-4xl md:text-5xl">
                Let the website reflect the freshness of the farm itself.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-emerald-50/90">
                This redesign gives your project a lighter, more premium visual presence with a
                cleaner white background, controlled green accents, and a stronger user journey.
              </p>
            </div>

            <div className="rounded-[2.2rem] border border-slate-100 bg-white p-8 shadow-[0_20px_50px_rgba(39,83,49,0.08)] md:p-10">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                    General Email
                  </p>
                  <p className="mt-2 text-xl font-semibold text-slate-900">
                    smartlettuceresearch@gmail.com
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Phone
                  </p>
                  <p className="mt-2 text-xl font-semibold text-slate-900">+94 77 527 6952</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Institution
                  </p>
                  <p className="mt-2 text-xl font-semibold text-slate-900">
                    Sri Lanka Institute of Information Technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
