{
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  const totalSlides = 15;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setAnimating(true);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setAnimating(true);
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => setAnimating(false), 700);
      return () => clearTimeout(timer);
    }
  }, [animating]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  // --- ULTRA-MODERN AGENCY DESIGN SYSTEM ---
  
  const SlideLayout = ({ children, title, subtitle, hideFooter = false }) => (
    <div className="flex flex-col h-full bg-[#030303] text-white p-8 md:p-14 relative overflow-hidden font-sans selection:bg-[#3b82f6] selection:text-white transition-colors duration-700">
      {/* Fonts & Global Styles */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@200;300;400;500;600;700&display=swap');
          body { font-family: 'Prompt', sans-serif; }
          
          /* Avenir Font Class for Small Text */
          .font-avenir {
            font-family: 'Avenir', 'Avenir Next', 'Helvetica Neue', Helvetica, Arial, sans-serif;
            font-weight: 500; /* Medium weight for readability */
            letter-spacing: 0.05em;
          }

          .glass-panel {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.15); /* Increased visibility */
          }
          .glass-panel-hover:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.4);
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.15);
          }
          .text-glow { text-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          
          /* Noise Texture for Premium Feel */
          .bg-noise {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
            pointer-events: none;
            z-index: 1;
          }

          .slide-enter { animation: fadeUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px) scale(0.98); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}
      </style>

      <div className="bg-noise"></div>

      {/* Ambient Lighting */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none animate-pulse duration-[5000ms]"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Technical Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
         style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100% 120px' }}>
      </div>

      {/* Header */}
      <div className="z-20 mb-10 flex justify-between items-end border-b border-white/20 pb-6 relative">
        <div className="space-y-3">
           {subtitle && (
            <div className="flex items-center gap-3">
              <div className="h-[2px] w-8 bg-white"></div>
              <p className="text-white font-avenir text-sm uppercase tracking-[0.1em] font-bold">{subtitle}</p>
            </div>
           )}
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[0.9]">{title}</h2>
        </div>
        <div className="hidden md:flex flex-col items-end gap-1">
           <span className="text-xs font-avenir tracking-widest text-white font-bold">STRATEGY DECK 2026</span>
           <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <div key={i} className={`w-1 h-1 rounded-full ${i < 3 ? 'bg-white' : 'bg-white/30'}`}></div>)}
           </div>
        </div>
      </div>

      {/* Content */}
      <div className={`z-20 flex-grow overflow-y-auto custom-scrollbar relative slide-enter`}>
        {children}
      </div>

      {/* Footer */}
      {!hideFooter && (
        <div className="z-20 mt-8 flex justify-between items-end text-xs uppercase font-avenir tracking-widest text-white/70 pt-6 font-bold border-t border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span>CONFIDENTIAL // K.BOY GROUP</span>
          </div>
          {/* Centered Page Number to avoid overlap */}
          <span className="absolute left-1/2 transform -translate-x-1/2">SLIDE {currentSlide + 1 < 10 ? `0${currentSlide + 1}` : currentSlide + 1} / {totalSlides}</span>
          <span className="hidden md:block">BANGKOK, TH</span>
        </div>
      )}
    </div>
  );

  // --- SLIDES ---

  const Slide1_Title = () => (
    <SlideLayout title="" hideFooter>
      <div className="flex flex-col h-full justify-between py-4 relative z-10">
        <div className="space-y-6">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/40 bg-white/10 text-white text-sm tracking-widest font-avenir uppercase backdrop-blur-md font-bold">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span> Live from Bangkok
           </div>
           
           <h1 className="text-[5rem] md:text-[9.5rem] font-medium tracking-tighter leading-[0.85] text-white mix-blend-overlay opacity-90">
             K.BOY
           </h1>
           <h1 className="text-[5rem] md:text-[9.5rem] font-bold tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white mt-[-20px] md:mt-[-40px]">
             AI PROGRAM
           </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-white/20 pt-10">
          <div className="md:col-span-7">
             <p className="text-2xl md:text-3xl text-white font-light leading-snug">
               หลักสูตรออฟไลน์สำหรับผู้นำธุรกิจ<br/>
               <span className="text-white font-medium">สร้างระบบ AI ที่วัดผล ROI ได้จริง</span>
             </p>
          </div>
          
          <div className="md:col-span-5 flex justify-end">
            <div className="glass-panel p-6 rounded-2xl flex items-center gap-6 w-full max-w-sm border-white/20">
               <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shrink-0">
                 <ArrowUpRight strokeWidth={2.5} />
               </div>
               <div>
                 <p className="text-xs text-white font-avenir uppercase tracking-widest mb-1 font-bold">Presented By</p>
                 <p className="text-lg font-bold text-white">K.Boy</p>
                 <p className="text-white text-xs font-avenir font-bold">Strategic AI System Builder</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );

  const Slide2_Gap = () => (
    <SlideLayout title="The Market Gap" subtitle="ช่องว่างในตลาด AI ไทย">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full">
        <div className="flex flex-col gap-6">
            <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-red-500 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <Activity size={80} />
                </div>
                <h3 className="text-white font-avenir text-sm uppercase tracking-widest mb-4 font-bold">CRITICAL INSIGHT</h3>
                <p className="text-3xl text-white font-light leading-tight">
                   ตลาด AI 70% คือคอร์สออนไลน์ทั่วไป<br/>
                   <span className="font-medium text-white/60">ที่ขาดบริบททางธุรกิจ</span>
                </p>
            </div>
            
            <div className="space-y-4">
               {[
                 { id: "01", text: "Theory-heavy: หนักทฤษฎี ประยุกต์ใช้จริงไม่ได้" },
                 { id: "02", text: "Low Engagement: เรียนผ่าน Zoom ขาดความเข้มข้น" },
                 { id: "03", text: "Zero Vetting: รับทุกคน ไม่มีการคัดกรอง Networking" }
               ].map((item) => (
                 <div key={item.id} className="flex items-center gap-6 p-4 border-b border-white/10 hover:pl-6 transition-all duration-300 cursor-default group">
                    <span className="text-white font-avenir text-sm font-bold">{item.id}</span>
                    <span className="text-white/80 text-lg group-hover:text-white transition-colors">{item.text}</span>
                 </div>
               ))}
            </div>
        </div>

        <div className="relative glass-panel rounded-2xl p-8 flex flex-col">
          <div className="flex justify-between items-center mb-8 border-b border-white/20 pb-4">
             <span className="text-sm font-avenir uppercase text-white font-bold">Comparison Matrix</span>
             <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-white/40"></span>
                <span className="w-2 h-2 rounded-full bg-white"></span>
             </div>
          </div>
          
          <div className="space-y-2 flex-grow">
              {[
                { label: "Content", old: "ทฤษฎีพื้นฐาน", new: "Real Data Project" },
                { label: "Format", old: "Zoom Class", new: "Exclusive Cohort" },
                { label: "Post-Class", old: "เรียนจบแล้วจบเลย", new: "90-Day ROI Tracking" },
              ].map((row, i) => (
                 <div key={i} className="grid grid-cols-12 items-center py-4 group hover:bg-white/5 transition-colors px-2 rounded">
                    <div className="col-span-3 text-xs text-white/60 uppercase tracking-wider font-avenir font-bold">{row.label}</div>
                    <div className="col-span-4 text-white/80 text-sm font-avenir">{row.old}</div>
                    <div className="col-span-1 flex justify-center text-white/40">→</div>
                    <div className="col-span-4 text-white font-bold text-base text-right font-avenir">{row.new}</div>
                 </div>
              ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/20 text-center">
             <span className="text-white text-xs font-avenir uppercase border border-white/40 px-4 py-1.5 rounded-full bg-white/10 font-bold">K.Boy Advantage</span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );

  const Slide3_Problem = () => (
    <SlideLayout title="The Executive Dilemma" subtitle="ปัญหาโลกแตกของผู้บริหาร">
      <div className="flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           {[
             { val: "฿500K+", label: "Wasted Budget", desc: "งบประมาณเสียเปล่ากับ AI Tools ที่พนักงานไม่ใช้", accent: "text-white" },
             { val: "80%", label: "Failure Rate", desc: "SME ที่ใช้ AI แล้วยอดขายโตไม่ถึง 10%", accent: "text-white" },
             { val: "GAP", label: "Missing System", desc: "ขาด 'สะพาน' เชื่อมทฤษฎี กับระบบธุรกิจจริง", accent: "text-white" }
           ].map((card, i) => (
             <div key={i} className="glass-panel p-10 rounded-2xl flex flex-col justify-between glass-panel-hover transition-all duration-500 group">
               <div>
                 <div className="flex justify-between items-start mb-4">
                    <span className="font-avenir text-xs text-white font-bold uppercase border border-white/30 px-3 py-1 rounded">{card.label}</span>
                    {i === 2 && <Zap size={16} className="text-white animate-pulse"/>}
                 </div>
                 <h3 className={`text-6xl font-light tracking-tighter mb-4 ${card.accent}`}>{card.val}</h3>
               </div>
               <p className="text-white/80 text-sm leading-relaxed border-t border-white/20 pt-4 font-avenir">{card.desc}</p>
             </div>
           ))}
        </div>
        
        <div className="text-center relative">
           <div className="absolute left-1/2 -top-6 w-px h-6 bg-gradient-to-b from-transparent to-white/30"></div>
           <p className="text-2xl md:text-3xl font-light text-white italic mb-8">
             "จะคุ้มทุนได้อย่างไร? <span className="text-white/60">ถ้าทีมงานยังทำงานแบบเดิม</span>"
           </p>
           <button className="px-8 py-3 bg-white text-black font-avenir font-bold text-sm tracking-widest uppercase hover:bg-blue-50 transition-colors rounded-sm">
             Solution: The System Framework
           </button>
        </div>
      </div>
    </SlideLayout>
  );

  const Slide4_Solution = () => (
    <SlideLayout title="The Methodology" subtitle="กระบวนการปั้นระบบ AI">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 h-full items-center border-t border-b border-white/20 divide-y md:divide-y-0 md:divide-x divide-white/20">
         
         {[
           { phase: "01", title: "Diagnostics", desc: "Audit ข้อมูลหลังบ้านของคุณสดๆ หาจุดคอขวด (Bottleneck) ที่ AI แก้ได้ทันที", icon: <Fingerprint className="w-8 h-8"/> },
           { phase: "02", title: "System Build", desc: "สร้างจริง: AI Sales Forecasting, CRM Automation หรือ Custom Agent", icon: <Layers className="w-8 h-8"/> },
           { phase: "03", title: "Scale & KPI", desc: "Deploy ใช้งานจริง พร้อมตั้งค่า KPI วัดผล Efficiency Gain (เป้าหมาย 20-40%)", icon: <Activity className="w-8 h-8"/> }
         ].map((item, i) => (
           <div key={i} className="group h-full p-10 flex flex-col justify-between hover:bg-white/[0.05] transition-colors relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              
              <div>
                <div className="flex justify-between items-start mb-8 opacity-70 group-hover:opacity-100 transition-opacity">
                   <span className="font-avenir text-sm text-white font-bold uppercase">PHASE {item.phase}</span>
                   <div className="text-white group-hover:text-blue-400 transition-colors">{item.icon}</div>
                </div>
                <h4 className="text-3xl font-medium text-white mb-4">{item.title}</h4>
              </div>
              
              <p className="text-white/70 text-base font-light leading-relaxed group-hover:text-white transition-colors font-avenir">
                {item.desc}
              </p>
           </div>
         ))}

      </div>
    </SlideLayout>
  );

  const Slide5_Authority = () => (
    <SlideLayout title="Why K.Boy?" subtitle="CEO นักวางกลยุทธ์">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 h-full items-center">
        <div className="md:col-span-5 space-y-12">
          <h3 className="text-4xl md:text-5xl font-light text-white leading-tight">
            AI for Systems Thinkers.<br/>
            <span className="font-bold text-white">Data {'>'} Hype.</span>
          </h3>
          
          <div className="space-y-8">
            {[
                { title: "EXPERIENCE", text: "วางระบบ AI ให้ธุรกิจไทยยอดขาย 100M+" },
                { title: "TRACK RECORD", text: "สร้าง ROI 3 เท่าผ่าน Custom Models" },
                { title: "CASE STUDY", text: "E-commerce ยอดขายโต 35% ใน 60 วัน" }
            ].map((item, i) => (
                <div key={i} className="pl-6 border-l border-white/20 hover:border-white transition-colors duration-500">
                    <span className="text-xs font-avenir text-white font-bold tracking-widest uppercase block mb-1">{item.title}</span>
                    <p className="text-lg text-white/90 font-avenir">{item.text}</p>
                </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-7 relative">
           <div className="glass-panel p-1 rounded-2xl relative overflow-hidden group">
               <div className="bg-[#0a0a0a] rounded-xl p-8 relative overflow-hidden">
                   {/* Background Grid inside Card */}
                   <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
                   
                   <div className="relative z-10 flex justify-between items-end mb-12">
                       <div>
                           <div className="flex items-center gap-2 mb-2">
                               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                               <span className="text-xs font-avenir text-white font-bold uppercase">Live Performance</span>
                           </div>
                           <h4 className="text-white text-xl font-bold font-avenir">Revenue Growth</h4>
                       </div>
                       <div className="text-right">
                           <span className="block text-4xl font-bold text-white">+35%</span>
                           <span className="text-xs text-white/60 uppercase font-avenir font-bold">In 60 Days</span>
                       </div>
                   </div>

                   {/* Graph Visualization */}
                   <div className="flex items-end gap-2 h-40 w-full">
                       {[30, 35, 32, 45, 50, 65, 80, 75, 90, 100].map((h, i) => (
                           <div key={i} className="flex-1 bg-white/10 rounded-t-sm hover:bg-white transition-colors duration-300 relative group/bar">
                               <div style={{ height: `${h}%` }} className="absolute bottom-0 w-full bg-gradient-to-t from-blue-900 to-blue-500 opacity-60 group-hover/bar:opacity-100 transition-opacity"></div>
                           </div>
                       ))}
                   </div>
               </div>
           </div>
           
           {/* Floating Caption */}
           <div className="absolute -bottom-6 -right-6 glass-panel px-6 py-4 rounded-xl shadow-2xl animate-bounce duration-[3000ms] border-white/20">
              <p className="text-xs text-white font-avenir font-bold">
                  <span className="text-blue-400">●</span> Automated Sales Agent
              </p>
           </div>
        </div>
      </div>
    </SlideLayout>
  );

  const Slide6_Diff = () => (
    <SlideLayout title="Differentiation" subtitle="จุดเด่นที่แตกต่าง">
      <div className="glass-panel rounded-2xl overflow-hidden border-white/20">
        <div className="grid grid-cols-4 bg-white/5 border-b border-white/20">
            {["Feature", "K.Boy Offline AI", "Online Course", "Bootcamp"].map((head, i) => (
                <div key={i} className={`p-6 font-avenir text-xs font-bold uppercase tracking-widest ${i === 1 ? 'text-white bg-white/10' : 'text-white/60'}`}>
                    {head}
                </div>
            ))}
        </div>
        {[
          { feature: "Format", kboy: "In-person Cohorts", c1: "Self-paced Video", c2: "Weekend Hacks" },
          { feature: "Focus", kboy: "Business ROI (กำไร)", c1: "Tech Skills", c2: "Coding Basics" },
          { feature: "Guarantee", kboy: "วัดผลใน 90 วัน", c1: "None", c2: "None" },
          { feature: "Connection", kboy: "Vetted CEOs Only", c1: "Anyone", c2: "Mixed" }
        ].map((row, i) => (
            <div key={i} className="grid grid-cols-4 border-b border-white/10 hover:bg-white/[0.05] transition-colors group">
                <div className="p-6 text-white font-avenir font-bold text-sm flex items-center">{row.feature}</div>
                <div className="p-6 text-white font-avenir font-bold text-sm bg-blue-500/10 relative group-hover:bg-blue-500/20 transition-colors flex items-center">
                    {row.kboy}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white opacity-50"></div>
                </div>
                <div className="p-6 text-white/60 font-avenir text-sm flex items-center">{row.c1}</div>
                <div className="p-6 text-white/60 font-avenir text-sm flex items-center">{row.c2}</div>
            </div>
        ))}
      </div>
    </SlideLayout>
  );

  const Slide7_Persona = () => (
    <SlideLayout title="Target Audience" subtitle="System Thinkers Only">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 h-full items-center">
         <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full"></div>
            <div className="glass-panel p-10 rounded-2xl relative border border-white/20">
               <div className="flex justify-between items-start mb-10">
                   <div className="p-3 bg-white text-black rounded-lg">
                       <Briefcase size={24} />
                   </div>
                   <span className="font-avenir text-xs text-white font-bold border border-white/40 px-3 py-1 rounded">QUALIFIED</span>
               </div>
               
               <h3 className="text-3xl font-bold text-white mb-2">Bangkok Executive</h3>
               <p className="text-white/70 text-sm mb-8 font-avenir">Digital Marketing / E-comm / Affiliates</p>
               
               <div className="space-y-6">
                 {[
                    { l: "Revenue", v: "10M+ THB/Year" },
                    { l: "Mindset", v: "Data-Driven" },
                    { l: "Pain", v: "Manual Process" }
                 ].map((stat, i) => (
                     <div key={i} className="flex justify-between items-center border-b border-white/10 pb-2">
                        <span className="text-white/60 text-sm font-avenir font-bold uppercase">{stat.l}</span>
                        <span className="text-white font-medium font-avenir">{stat.v}</span>
                     </div>
                 ))}
               </div>
            </div>
         </div>
         <div className="pl-4 border-l border-white/20 space-y-8">
            <h3 className="text-4xl font-light text-white leading-tight">
              "ในที่สุด ก็เจอ AI<br/>
              <span className="font-bold">ที่เข้าใจภาษาธุรกิจ"</span>
            </h3>
            <p className="text-white/70 text-lg font-light leading-relaxed font-avenir">
              เราคัดกรองเฉพาะ <strong className="text-white">เจ้าของกิจการ & ผู้จัดการ</strong> ไม่รับมือใหม่ เพื่อรักษาคุณภาพสูงสุดของ Cohort
            </p>
            <div className="flex items-center gap-3 text-xs font-avenir text-white font-bold uppercase tracking-widest bg-red-500/20 px-4 py-2 rounded w-fit border border-red-500/30">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                Strict Quality Filter
            </div>
         </div>
      </div>
    </SlideLayout>
  );

  const Slide8_Delivery = () => (
    <SlideLayout title="The Experience" subtitle="Premium Offline Delivery">
      <div className="flex flex-col h-full gap-6">
         <div className="grid grid-cols-2 gap-6 flex-grow">
            {[
                { icon: <MapPin className="w-8 h-8"/>, title: "Exclusive Venue", desc: "Premium space (WeWork Sathorn) บรรยากาศส่งเสริมสมาธิ" },
                { icon: <Target className="w-8 h-8"/>, title: "70/30 Split", desc: "70% Hands-on Build\n30% Framework Strategy" }
            ].map((card, i) => (
                <div key={i} className="glass-panel p-8 rounded-2xl flex flex-col justify-end hover:bg-white/[0.08] transition-colors group cursor-pointer border border-white/10 hover:border-white/30">
                    <div className="mb-auto text-white/50 group-hover:text-white transition-colors">{card.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-white/70 text-sm whitespace-pre-line font-avenir">{card.desc}</p>
                </div>
            ))}
         </div>
         <div className="glass-panel p-10 rounded-2xl flex items-center gap-8 bg-gradient-to-r from-blue-900/20 to-transparent border border-white/20">
             <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                 <Users size={32} />
             </div>
             <div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">The Network Effect</h3>
                <p className="text-white/80 text-lg mt-1 font-light font-avenir">Dinner กระชับมิตรและ Mastermind กลุ่ม <span className="text-white font-medium">มูลค่าหลักล้าน</span></p>
             </div>
         </div>
      </div>
    </SlideLayout>
  );

  const Slide9_Results = () => (
    <SlideLayout title="Proven Results" subtitle="Pilot Class 2025 Data">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { label: "Efficiency Gain", val: "32%", sub: "vs 15% Avg" },
          { label: "Revenue Lift", val: "25%", sub: "in 90 Days" },
          { label: "Completion", val: "100%", sub: "Retention Rate" }
        ].map((stat, i) => (
          <div key={i} className="glass-panel p-10 rounded-2xl text-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-blue-500/10 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500"></div>
             <p className="font-avenir text-xs text-white/60 uppercase tracking-widest mb-4 relative z-10 font-bold">{stat.label}</p>
             <h4 className="text-7xl font-light text-white mb-2 tracking-tighter relative z-10">{stat.val}</h4>
             <p className="text-white font-medium text-sm relative z-10 font-avenir">{stat.sub}</p>
          </div>
        ))}
      </div>
      
      <div className="flex gap-8 items-start border-t border-white/20 pt-8">
         <div className="p-4 bg-white text-black rounded-xl">
            <Award size={32} />
         </div>
         <div>
            <p className="text-xl text-white/90 font-light italic leading-relaxed">
              "Affiliate marketer สร้างระบบผลิตคลิป Reels อัตโนมัติ ทำให้ยอด Lead เพิ่มขึ้น 40% โดยไม่ต้องจ้างคนเพิ่ม"
            </p>
            <div className="flex gap-4 mt-4">
               <span className="text-[10px] font-avenir border border-white/40 px-2 py-1 text-white uppercase font-bold">Tracked via Dashboard</span>
               <span className="text-[10px] font-avenir bg-white/20 text-white px-2 py-1 uppercase rounded font-bold">Verified ROI</span>
            </div>
         </div>
      </div>
    </SlideLayout>
  );

  const Slide10_Pricing = () => (
    <SlideLayout title="Select Your Tier" subtitle="Investment Options">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full pt-4 items-stretch">
        
        {/* Tier 1 */}
        <div className="glass-panel p-8 rounded-2xl flex flex-col hover:bg-white/[0.04] transition-all">
            <span className="font-avenir text-xs text-white/60 mb-6 block border border-white/20 w-fit px-2 py-1 rounded font-bold">LEVEL 01</span>
            <h3 className="text-xl font-bold text-white uppercase mb-2">AI Strategy</h3>
            <div className="text-4xl font-light text-white mb-8">฿15,000</div>
            
            <ul className="space-y-4 flex-grow">
               {["เข้าใจภาพรวม AI Landscape", "No-code (ไม่ต้องเขียนโค้ด)", "Prompt Engineering ขั้นสูง"].map((item,i) => (
                 <li key={i} className="text-sm text-white/80 flex gap-3 items-start font-avenir">
                   <div className="mt-1 w-1.5 h-1.5 bg-white/60 rounded-full"></div> {item}
                 </li>
               ))}
            </ul>
            <button className="w-full py-4 border border-white/30 text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors mt-8 font-avenir">Select</button>
        </div>

        {/* Tier 2 - Hero */}
        <div className="glass-panel p-1 rounded-2xl relative flex flex-col shadow-[0_0_50px_rgba(59,130,246,0.15)] transform scale-105 z-10 bg-gradient-to-b from-blue-500/20 to-transparent">
            <div className="bg-[#050505] w-full h-full rounded-xl p-8 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                    <span className="text-[10px] font-bold uppercase bg-white text-black px-2 py-1 rounded font-avenir">Popular</span>
                </div>
                
                <span className="font-avenir text-xs text-white mb-6 block border border-white/40 w-fit px-2 py-1 rounded font-bold">LEVEL 02</span>
                <h3 className="text-xl font-bold text-white uppercase mb-2">Master Implementation</h3>
                <div className="text-4xl font-bold text-white mb-8">฿69,000</div>
                
                <ul className="space-y-4 flex-grow">
                   {["Get App/Web Tool กลับไปใช้จริง", "เจาะลึก Automation Pipeline", "Hands-on Workshop", "Lifetime Access K.Boy Tools"].map((item,i) => (
                     <li key={i} className="text-sm text-white flex gap-3 items-start font-avenir">
                       <Check size={14} className="mt-0.5 text-white"/> {item}
                     </li>
                   ))}
                </ul>
                <button className="w-full py-4 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-blue-50 transition-colors mt-8 shadow-lg shadow-white/10 font-avenir">Apply Now</button>
            </div>
        </div>

        {/* Tier 3 */}
        <div className="glass-panel p-8 rounded-2xl flex flex-col hover:bg-white/[0.04] transition-all">
            <span className="font-avenir text-xs text-white/60 mb-6 block border border-white/20 w-fit px-2 py-1 rounded font-bold">LEVEL 03</span>
            <h3 className="text-xl font-bold text-white uppercase mb-2">Tailor Made</h3>
            <div className="text-4xl font-light text-white mb-8">฿150,000</div>
            
            <ul className="space-y-4 flex-grow">
               {["Squad: 1 CEO + 2 พนักงาน", "Consult ส่วนตัว", "Custom Solution เฉพาะบริษัท", "Train ทีมงานประกบ"].map((item,i) => (
                 <li key={i} className="text-sm text-white/80 flex gap-3 items-start font-avenir">
                   <div className="mt-1 w-1.5 h-1.5 bg-white/60 rounded-full"></div> {item}
                 </li>
               ))}
            </ul>
            <button className="w-full py-4 border border-white/30 text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors mt-8 font-avenir">Contact</button>
        </div>

      </div>
    </SlideLayout>
  );

  const Slide11_GTM = () => (
    <SlideLayout title="Go-to-Market" subtitle="Launch Plan Q2 2026">
       <div className="flex flex-col h-full justify-between">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { id: "01", title: "Content Pillars", text: "วิดีโอซีรีส์ K.Boy: 'The CEO's Guide to AI' เน้นเนื้อหา High-value", icon: <Play size={20}/> },
               { id: "02", title: "Funnel System", text: "Viral Reels → Value Webinar → ใบสมัคร (Vetting) → ปิดการขาย", icon: <Layers size={20}/> },
               { id: "03", title: "Creative Art", text: "ยกระดับภาพลักษณ์สู่ 'Bangkok's AI System CEO' สื่อถึงความพรีเมียม", icon: <Hexagon size={20}/> },
             ].map((box) => (
               <div key={box.id} className="glass-panel p-8 rounded-2xl group hover:border-white/50 transition-colors">
                  <div className="flex justify-between items-center mb-8">
                    <span className="font-avenir text-4xl text-white/20 font-bold group-hover:text-white/40 transition-colors">{box.id}</span>
                    <div className="p-3 bg-white/5 rounded-full text-white/50 group-hover:text-black group-hover:bg-white transition-all">
                        {box.icon}
                    </div>
                  </div>
                  <h4 className="text-lg text-white font-bold uppercase mb-4 tracking-wide">{box.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed font-avenir">{box.text}</p>
               </div>
             ))}
          </div>

          <div className="glass-panel p-8 rounded-2xl flex justify-between items-center mt-8 bg-gradient-to-r from-blue-900/10 to-transparent border-t border-white/20">
             <span className="font-avenir text-xs text-white font-bold uppercase tracking-widest">Projected Revenue</span>
             <div className="text-right">
                <span className="text-5xl font-light text-white tracking-tight">฿4,500,000</span>
                <p className="text-white/50 text-xs mt-1 uppercase tracking-wider font-avenir font-bold">Based on 3 Full Cohorts</p>
             </div>
          </div>
       </div>
    </SlideLayout>
  );

  const Slide12_CTA = () => (
    <SlideLayout title="" hideFooter>
      <div className="flex flex-col items-center justify-center h-full text-center space-y-12 z-20">
         <div className="relative">
             <div className="absolute inset-0 bg-blue-500 blur-[100px] opacity-20 rounded-full"></div>
             <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter uppercase leading-[0.9] relative z-10">
               Build Your<br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">AI Advantage.</span>
             </h2>
         </div>
         
         <div className="h-px w-32 bg-white/30"></div>
         
         <p className="font-avenir text-white/80 text-sm tracking-widest uppercase font-bold">รับจำนวนจำกัดเพียง 10 ที่นั่งต่อรุ่น</p>

         <div className="flex flex-col items-center gap-8">
            <div className="p-2 bg-white rounded-xl shadow-[0_0_50px_rgba(255,255,255,0.1)]">
               <div className="w-32 h-32 bg-[#0a0a0a] rounded-lg flex items-center justify-center border border-white/10">
                  <span className="text-white/40 text-[10px] font-avenir text-center font-bold">SCAN TO<br/>APPLY</span>
               </div>
            </div>
            
            <button className="group relative px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 font-avenir">
               <span className="relative z-10">Book Strategy Call</span>
               <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0"></div>
            </button>
         </div>
      </div>
    </SlideLayout>
  );

  // New Slide 13: Option 1 & 2
  const Slide13_Options1_2 = () => (
    <SlideLayout title="Partnership Options" subtitle="Fee-Based Models">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          {/* Option 1 */}
          <div className="glass-panel p-8 rounded-2xl flex flex-col h-full border-blue-500/20">
              <div className="mb-6 flex justify-between items-start">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Briefcase size={24}/></div>
                  <span className="font-avenir text-xs font-bold uppercase text-white/40 border border-white/10 px-2 py-1 rounded">Option 1</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Fractional CMO</h3>
              <p className="text-blue-400 font-bold mb-4 font-avenir">80,000 THB / Month</p>
              
              <div className="space-y-4 flex-grow overflow-y-auto pr-2 custom-scrollbar">
                  <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2 font-avenir">Role</h4>
                      <p className="text-sm text-white/70">กำหนดทิศทางภาพลักษณ์ CEO และการสื่อสารเพื่อสร้าง Authority ระยะยาว</p>
                  </div>
                  <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2 font-avenir">Key Deliverables</h4>
                      <ul className="text-sm text-white/70 space-y-2 list-disc list-inside">
                          <li><strong className="text-white">CEO Strategy:</strong> Pillars (Authority, System Thinking, ROI)</li>
                          <li><strong className="text-white">Creative Direction:</strong> Monthly Blueprint, Hooks, Scripts</li>
                          <li><strong className="text-white">Launch Content:</strong> เชื่อมโยง Pitch Deck/Sales Page</li>
                          <li><strong className="text-white">Optimization:</strong> Weekly Review & Messaging Tweak</li>
                      </ul>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                      <p className="text-xs text-white/40 font-avenir">*No Revenue Share</p>
                  </div>
              </div>
          </div>

          {/* Option 2 */}
          <div className="glass-panel p-8 rounded-2xl flex flex-col h-full opacity-70 hover:opacity-100 transition-opacity">
              <div className="mb-6 flex justify-between items-start">
                  <div className="p-2 bg-white/10 rounded-lg text-white"><PenTool size={24}/></div>
                  <span className="font-avenir text-xs font-bold uppercase text-white/40 border border-white/10 px-2 py-1 rounded">Option 2</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Lean Strategy</h3>
              <p className="text-white font-bold mb-4 font-avenir">50,000 THB / Month</p>
              
              <div className="space-y-4 flex-grow overflow-y-auto pr-2 custom-scrollbar">
                  <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2 font-avenir">Role</h4>
                      <p className="text-sm text-white/70">ที่ปรึกษาด้านทิศทางคอนเทนต์และการสื่อสาร (Consultant Only)</p>
                  </div>
                  <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-2 font-avenir">Key Deliverables</h4>
                      <ul className="text-sm text-white/70 space-y-2 list-disc list-inside">
                          <li>Theme และหัวข้อคอนเทนต์</li>
                          <li>Message หลักของแบรนด์</li>
                          <li>Review และ Feedback งานที่ผลิตแล้ว</li>
                          <li>แนะนำทิศทางช่วง Launch</li>
                      </ul>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                      <p className="text-xs text-white/40 font-avenir">*Consultant Role Only. No Execution.</p>
                  </div>
              </div>
          </div>
       </div>
    </SlideLayout>
  );

  // New Slide 14: Option 3
  const Slide14_Option3 = () => (
    <SlideLayout title="Growth Partner" subtitle="Recommended Model">
       <div className="flex flex-col h-full justify-center">
          <div className="glass-panel p-1 rounded-3xl relative w-full max-w-5xl mx-auto shadow-[0_0_80px_rgba(59,130,246,0.15)] bg-gradient-to-br from-blue-500/30 to-transparent">
             <div className="bg-[#050505] rounded-[22px] p-10 md:p-12 relative overflow-hidden">
                 {/* Decor */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full"></div>
                 <div className="absolute top-8 right-8 text-xs font-bold bg-blue-600 text-white px-3 py-1 rounded uppercase font-avenir shadow-lg">Most Recommended</div>
                 
                 <div className="flex flex-col md:flex-row gap-12">
                     <div className="md:w-1/3 border-r border-white/10 pr-8">
                         <span className="font-avenir text-sm text-blue-400 font-bold uppercase tracking-widest block mb-2">Option 3</span>
                         <h3 className="text-4xl font-bold text-white mb-6">Partnership Model</h3>
                         <div className="mb-8">
                             <p className="text-5xl font-bold text-white tracking-tighter">40,000<span className="text-lg text-white/40 font-normal ml-2">THB/Mo</span></p>
                             <div className="mt-4 inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-3 py-2 rounded-lg">
                                <span className="text-blue-400 font-bold text-xl">+10%</span>
                                <span className="text-white/70 text-xs uppercase font-avenir">Revenue Share</span>
                             </div>
                         </div>
                         <p className="text-sm text-white/50 leading-relaxed font-avenir">
                             Content Architect & Growth Partner. ร่วมรับผิดชอบการเติบโตของโปรแกรมผ่านการสื่อสารเชิงลึก (Deep Content).
                         </p>
                     </div>
                     
                     <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div>
                             <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2 font-avenir">
                                 <Award size={14} className="text-blue-500"/> Authority System
                             </h4>
                             <ul className="text-sm text-white/70 space-y-2">
                                 <li>• สร้าง Narrative "Strategic AI System Builder"</li>
                                 <li>• ออกแบบ Framework คอนเทนต์ที่ใช้ซ้ำได้</li>
                                 <li>• System Breakdown & ROI Tables</li>
                             </ul>
                         </div>
                         <div>
                             <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2 font-avenir">
                                 <FileText size={14} className="text-blue-500"/> Deep Content Support
                             </h4>
                             <ul className="text-sm text-white/70 space-y-2">
                                 <li>• เขียน Script วิดีโอสั้น</li>
                                 <li>• Copy สำหรับ Carousel/LinkedIn</li>
                                 <li>• กำหนด Mood & Tone การถ่ายทำ</li>
                             </ul>
                         </div>
                         <div>
                             <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2 font-avenir">
                                 <Target size={14} className="text-blue-500"/> Conversion Focus
                             </h4>
                             <ul className="text-sm text-white/70 space-y-2">
                                 <li>• ออกแบบ Journey (Awareness → Application)</li>
                                 <li>• ปรับ CTA ให้คมและตรงกลุ่มผู้บริหาร</li>
                             </ul>
                         </div>
                         <div>
                             <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2 font-avenir">
                                 <BarChart size={14} className="text-blue-500"/> Analysis
                             </h4>
                             <ul className="text-sm text-white/70 space-y-2">
                                 <li>• วิเคราะห์ Lead Quality</li>
                                 <li>• ปรับกลยุทธ์รายสัปดาห์</li>
                             </ul>
                         </div>
                     </div>
                 </div>
                 
                 <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-avenir">
                     <p>* Revenue Share 10% จากยอดเก็บเงินจริง (No Cap) ชำระภายใน 7 วันหลังปิด Cohort</p>
                     <p>สัญญาขั้นต่ำ 6 เดือน</p>
                 </div>
             </div>
          </div>
       </div>
    </SlideLayout>
  );

  // New Slide 15: Comparison Table
  const Slide15_Comparison = () => (
    <SlideLayout title="Model Comparison" subtitle="Summary View">
       <div className="glass-panel rounded-2xl overflow-hidden mt-4">
           {/* Header */}
           <div className="grid grid-cols-4 bg-white/5 border-b border-white/20">
               <div className="p-6"></div>
               <div className="p-6 text-center font-avenir text-xs font-bold uppercase text-white/60 tracking-widest">Option 2 (50K)</div>
               <div className="p-6 text-center font-avenir text-xs font-bold uppercase text-white/60 tracking-widest">Option 1 (80K)</div>
               <div className="p-6 text-center font-avenir text-xs font-bold uppercase text-blue-400 bg-blue-500/10 tracking-widest relative">
                   Option 3 (40K+10%)
                   <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-500"></div>
               </div>
           </div>

           {/* Rows */}
           {[
               { feat: "วางกลยุทธ์คอนเทนต์", op2: true, op1: true, op3: true },
               { feat: "กำกับภาพลักษณ์ Brand", op2: false, op1: true, op3: true },
               { feat: "เขียน Script / Copywriting", op2: false, op1: true, op3: true },
               { feat: "คอนเทนต์เปิดตัวโปรแกรม", op2: "Review Only", op1: true, op3: true },
               { feat: "ดูผลลัพธ์และปรับกลยุทธ์", op2: false, op1: "Strategic Level", op3: true },
               { feat: "ผูกพันกับรายได้ (Partner)", op2: false, op1: false, op3: true },
           ].map((row, i) => (
               <div key={i} className="grid grid-cols-4 border-b border-white/10 hover:bg-white/[0.03] transition-colors group">
                   <div className="p-6 text-white font-avenir font-bold text-sm flex items-center">{row.feat}</div>
                   
                   {/* Option 2 */}
                   <div className="p-6 flex justify-center items-center border-l border-white/5">
                       {row.op2 === true ? <Check size={18} className="text-white"/> : 
                        row.op2 === false ? <span className="text-white/20">-</span> : 
                        <span className="text-xs text-white/50 font-avenir">{row.op2}</span>}
                   </div>

                   {/* Option 1 */}
                   <div className="p-6 flex justify-center items-center border-l border-white/5 bg-white/[0.02]">
                       {row.op1 === true ? <Check size={18} className="text-white"/> : 
                        row.op1 === false ? <span className="text-white/20">-</span> : 
                        <span className="text-xs text-white/50 font-avenir">{row.op1}</span>}
                   </div>

                   {/* Option 3 */}
                   <div className="p-6 flex justify-center items-center border-l border-white/5 bg-blue-500/5 relative group-hover:bg-blue-500/10 transition-colors">
                       {row.op3 === true ? <Check size={18} className="text-blue-400 shadow-glow"/> : 
                        row.op3 === false ? <span className="text-white/20">-</span> : 
                        <span className="text-xs text-blue-400 font-avenir">{row.op3}</span>}
                       <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-500/20"></div>
                   </div>
               </div>
           ))}
       </div>
    </SlideLayout>
  );

  const slides = [
    Slide1_Title,
    Slide2_Gap,
    Slide3_Problem,
    Slide4_Solution,
    Slide5_Authority,
    Slide6_Diff,
    Slide7_Persona,
    Slide8_Delivery,
    Slide9_Results,
    Slide10_Pricing,
    Slide11_GTM,
    Slide12_CTA,
    Slide13_Options1_2,
    Slide14_Option3,
    Slide15_Comparison
  ];

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="h-screen w-full flex flex-col bg-black items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-[1400px] aspect-video shadow-2xl overflow-hidden relative rounded-2xl border border-white/10 bg-[#030303]">
        <CurrentSlideComponent />
        
        {/* Controls Overlay - Repositioned to Right Center to avoid blocking footer */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-3 z-50">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`w-12 h-12 flex items-center justify-center rounded-full border border-white/10 backdrop-blur-md transition-all ${currentSlide === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-white hover:text-black text-white hover:border-white'}`}
          >
            <ChevronLeft size={20} /> {/* Up arrow logic visually better on side, but keeping left/right logic */}
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`w-12 h-12 flex items-center justify-center rounded-full border border-white/10 backdrop-blur-md transition-all ${currentSlide === totalSlides - 1 ? 'opacity-20 cursor-not-allowed' : 'hover:bg-white hover:text-black text-white hover:border-white'}`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
