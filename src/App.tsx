import { useState, type ReactNode } from "react";
import kampus from './assets/Kampus3USD.jpg';
import logo from './assets/Logo.jpg';
import biodata from './assets/biodata123.png';

type Screen = "login" | "home" | "krs" | "schedule" | "grades" | "kkm" | "ktm" | "activities";
type IconName =
  | "home" | "book" | "calendar" | "chart" | "users" | "card" | "award"
  | "search" | "bell" | "help" | "arrow" | "clock" | "pin" | "download"
  | "upload" | "check" | "alert" | "plus" | "filter" | "google" | "eye";

const iconPaths: Record<IconName, ReactNode> = {
  home: <><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></>,
  book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5z"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></>,
  chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
  card: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 9h20M6 15h4"/></>,
  award: <><circle cx="12" cy="8" r="6"/><path d="m8.5 13-1 9 4.5-3 4.5 3-1-9"/></>,
  search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></>,
  help: <><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.3 2.3 0 1 1 3.4 2c-1 .6-1.2 1.1-1.2 2M12 17h.01"/></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2"/></>,
  download: <><path d="M12 3v12M7 10l5 5 5-5M4 21h16"/></>,
  upload: <><path d="M12 21V9M7 14l5-5 5 5M4 3h16"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  alert: <><path d="M10.3 3.5 2.7 17a2 2 0 0 0 1.7 3h15.2a2 2 0 0 0 1.7-3L13.7 3.5a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></>,
  plus: <path d="M12 5v14M5 12h14"/>,
  filter: <path d="M4 6h16M7 12h10M10 18h4"/>,
  google: <path d="M21.4 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.3a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 2.9-4.3 2.9-7.3zM12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.2H3.1v2.6A10 10 0 0 0 12 22zM6.4 13.9A6 6 0 0 1 6 12c0-.7.1-1.3.3-1.9V7.5H3.1A10 10 0 0 0 2 12c0 1.6.4 3.1 1.1 4.5l3.3-2.6zM12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.8A9.7 9.7 0 0 0 3.1 7.5l3.3 2.6C7.2 7.7 9.4 6 12 6z"/>,
  eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="2.5"/></>,
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{iconPaths[name]}</svg>;
}

function Button({ children, variant = "primary", icon, onClick, className = "" }: { children: ReactNode; variant?: "primary" | "secondary" | "ghost" | "dark"; icon?: IconName; onClick?: () => void; className?: string }) {
  return <button className={`button button-${variant} ${className}`} onClick={onClick}>{icon && <Icon name={icon} />}{children}</button>;
}

function Brand({ light = false }: { light?: boolean }) {
  return <div className={`brand ${light ? "brand-light" : ""}`}><div className="brand-mark" style={{ background: 'transparent', boxShadow: 'none' }}><img src={logo} alt="Logo USD" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /></div><div><strong>SIA USD</strong><small>Academic Information System</small></div></div>;
}

const nav: { id: Screen; label: string; icon: IconName }[] = [
  { id: "home", label: "Dashboard", icon: "home" },
  { id: "krs", label: "KRS", icon: "book" },
  { id: "schedule", label: "Schedule", icon: "calendar" },
  { id: "grades", label: "IPK & KHS", icon: "chart" },
  { id: "kkm", label: "KKM", icon: "users" },
  { id: "ktm", label: "KTM Digital", icon: "card" },
  { id: "activities", label: "Points", icon: "award" },
];

function Header({ current, go }: { current: Screen; go: (s: Screen) => void }) {
  return <header className="app-header">
    <div className="header-row">
      <Brand />
      <nav className="main-nav">{nav.map(item => <button key={item.id} className={current === item.id ? "nav-active" : ""} onClick={() => go(item.id)}><Icon name={item.icon} /><span>{item.label}</span></button>)}</nav>
      <div className="header-tools">
        <button className="icon-button"><Icon name="search" /></button>
        <button className="icon-button notification"><Icon name="bell" /><i /></button>
        <div className="profile-chip"><div className="avatar">CC</div><div><strong>Cedric Chandra</strong><span>2314195</span></div></div>
      </div>
    </div>
  </header>;
}

function Footer() {
  return <footer>
    <div className="footer-grid">
      <div><Brand light /><p>Your connected academic journey at Sanata Dharma University.</p></div>
      <div><strong>Academic</strong><span>KRS Registration</span><span>Study Results</span><span>Class Schedule</span></div>
      <div><strong>Student Services</strong><span>Digital Student ID</span><span>Community Service</span><span>Activity Points</span></div>
      <div><strong>Need help?</strong><span>Student Service Center</span><span>sia@usd.ac.id</span><span>+62 274 513301</span></div>
    </div>
    <div className="footer-bottom"><span>© 2025 Universitas Sanata Dharma</span><span>Privacy · Terms · Accessibility</span></div>
  </footer>;
}

function Shell({ current, go, children }: { current: Screen; go: (s: Screen) => void; children: ReactNode }) {
  return <div className="app-shell"><Header current={current} go={go} /><main>{children}</main><Footer /></div>;
}

function PageHeading({ eyebrow, title, subtitle, action }: { eyebrow: string; title: string; subtitle: string; action?: ReactNode }) {
  return <div className="page-heading"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{subtitle}</p></div>{action}</div>;
}

function Status({ children, tone = "green" }: { children: ReactNode; tone?: "green" | "yellow" | "red" | "blue" | "gray" }) {
  return <span className={`status status-${tone}`}><i />{children}</span>;
}

function Login({ go }: { go: (s: Screen) => void }) {
  return <div className="login-page">
    <section className="login-visual">
      <img src={kampus} alt="Kampus 3" />
      <div className="login-shade" />
      <div className="login-brand"><Brand light /></div>
      <div className="login-copy"><span className="eyebrow light">Welcome to SIA USD</span><h1>One place for your entire academic journey.</h1><p>Register courses, follow your progress, and stay connected with campus life.</p></div>
      <div className="news-ticker"><span>Campus update</span><div><strong>Odd Semester 2025/2026 registration is now open</strong><small>Complete your KRS before 16 August 2026</small></div><Icon name="arrow" /></div>
      <div className="photo-credit">Photo by Ed Us on Unsplash</div>
    </section>
    <section className="login-panel">
      <div className="login-card">
        <div className="mobile-brand"><Brand /></div>
        <span className="eyebrow">Student portal</span><h2>Welcome back</h2><p className="muted">Sign in with your university account to continue.</p>
        <label>Student ID (NIM)<div className="input-wrap"><Icon name="card" /><input defaultValue="2314195" placeholder="Enter your student ID" /></div></label>
        <label>Password<div className="input-wrap"><Icon name="book" /><input type="password" defaultValue="password123" placeholder="Enter your password" /><Icon name="eye" /></div></label>
        <div className="form-options"><label className="checkbox"><input type="checkbox" defaultChecked /> <span>Remember me</span></label><button>Forgot password?</button></div>
        <Button className="wide" onClick={() => go("home")}>Sign in <Icon name="arrow" /></Button>
        <div className="divider"><span>or continue with</span></div>
        <Button className="wide" variant="secondary" icon="google" onClick={() => go("home")}>Login with Student Google Account (SSO)</Button>
        <p className="login-help"><Icon name="help" /> Need help signing in? <strong>Contact ICT Support</strong></p>
      </div>
    </section>
  </div>;
}

function Dashboard({ go }: { go: (s: Screen) => void }) {
  const quick = [
    ["krs", "book", "Course Registration", "Build your semester plan"],
    ["grades", "chart", "IPK & KHS", "Review your academic results"],
    ["schedule", "calendar", "Class Schedule", "See your weekly classes"],
    ["activities", "award", "Activity Points", "Track graduation points"],
    ["kkm", "card", "Kartu Keuangan (KKM)", "Manage your financial card"],
  ] as const;

  return (
    <Shell current="home" go={go}>
      <div className="container">
        <div className="welcome-bar">
          <div>
            <span className="eyebrow">Tuesday, 20 October 2026</span>
            <h1>Good morning, Cedric.</h1>
            <p>Here is what is happening with your studies today.</p>
          </div>
          <div className="student-summary">
            <div className="avatar large">CC</div>
            <div>
              <small>Informatics · 2023</small>
              <strong>Cedric Chandra</strong>
              <span>235314195</span>
            </div>
            <div className="metric">
              <small>GPA</small>
              <strong>3.81</strong>
            </div>
            <div className="metric">
              <small>Completed</small>
              <strong>129 <em>SKS</em></strong>
            </div>
          </div>
        </div>

        <div className="search-banner">
          <Icon name="search" />
          <input placeholder="Search courses, services, or academic information..." />
          <kbd>⌘ K</kbd>
        </div>

        <div className="dashboard-grid">
          <section className="card quick-card">
            <div className="card-head">
              <div>
                <span className="eyebrow">Shortcuts</span>
                <h2>Quick actions</h2>
              </div>
            </div>
            <div className="quick-list">
              {quick.map(([id, icon, name, desc]) => (
                <button key={id} onClick={() => go(id)}>
                  <span className={`quick-icon quick-${id}`}><Icon name={icon} /></span>
                  <div>
                    <strong>{name}</strong>
                    <small>{desc}</small>
                  </div>
                  <Icon name="arrow" />
                </button>
              ))}
            </div>
          </section>

          <div className="dashboard-stack">
            <section className="card">
              <div className="card-head">
                <div>
                  <span className="eyebrow">Stay informed</span>
                  <h2>Academic announcements</h2>
                </div>
                <button className="text-button">View all <Icon name="arrow" /></button>
              </div>
              <div className="announcement-list">
                <article>
                  <time>20 OCT</time>
                  <div>
                    <Status tone="blue">Academic</Status>
                    <h3>Semester 6 Final Grade Publication</h3>
                    <p>Your KHS for semester 6 has been officially verified and published.</p>
                  </div>
                </article>
                <article>
                  <time>18 OCT</time>
                  <div>
                    <Status tone="yellow">Reminder</Status>
                    <h3>Point Verification</h3>
                    <p>Check your activity portfolio points via the student portal.</p>
                  </div>
                </article>
              </div>
            </section>

            <section className="card">
              <div className="card-head">
                <div>
                  <span className="eyebrow">Tuesday, 20 Oct</span>
                  <h2>Today's class schedule</h2>
                </div>
                <button className="text-button" onClick={() => go("schedule")}>Full schedule <Icon name="arrow" /></button>
              </div>
              <div className="today-list">
                <article>
                  <time>13:00<span>15:50</span></time>
                  <i className="course-line blue" />
                  <div>
                    <strong>Desain UI/UX</strong>
                    <span><Icon name="pin" /> SDEV207 · Kelas A</span>
                  </div>
                  <Status tone="blue">Scheduled</Status>
                </article>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Shell>
  );
}

const courseBlocks = [
  { name: "Desain UI/UX", code: "SDEV207", sks: 3, time: "Tue · 13:00–15:50", lecturer: "SDEV207 · Kelas A", color: "blue" },
  { name: "Metodologi Penelitian", code: "PENL101", sks: 4, time: "Wed · 07:00–10:50", lecturer: "PENL101 · Kelas A", color: "purple" },
  { name: "Sistem Tertanam", code: "INTS208", sks: 3, time: "Thu · 13:00–15:50", lecturer: "INTS208 · Kelas A", color: "orange" },
  { name: "Pengukuran & Analisis Unjuk Kerja Jaringan", code: "NETW108", sks: 3, time: "Fri · 10:00–12:50", lecturer: "NETW108 · Kelas A", color: "mint" },
];

function MiniCalendar({ full = false }: { full?: boolean }) {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return (
    <div className={`calendar-grid ${full ? "calendar-full" : ""}`}>
      <div className="calendar-corner" />
      {days.map((d, i) => (
        <div className="calendar-day" key={d}>
          <strong>{d}</strong>
          <span>{11 + i}</span>
        </div>
      ))}
      {[
        "07:00", "08:00", "09:00", "10:00", "11:00", "12:00",
        "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"
      ].map((t, row) => (
        <div className="calendar-row" key={t} style={{ gridRow: row + 2 }}>
          <time>{t}</time>
        </div>
      ))}

      {/* RABU: Metodologi Penelitian (07:00 - 10:50) */}
      <div className="class-block c-purple" style={{ gridColumn: 4, gridRow: "2 / span 4" }}>
        <strong>Metodologi Penelitian</strong>
        <b>PENL101 · Kelas A</b>
        <span>07:00–10:50</span>
        {full && <small>4 SKS</small>}
      </div>

      {/* SELASA: Desain UI/UX (13:00 - 15:50) */}
      <div className="class-block c-blue" style={{ gridColumn: 3, gridRow: "8 / span 3" }}>
        <strong>Desain UI/UX</strong>
        <b>SDEV207 · Kelas A</b>
        <span>13:00–15:50</span>
        {full && <small>3 SKS</small>}
      </div>

      {/* KAMIS: Sistem Tertanam (13:00 - 15:50) */}
      <div className="class-block c-orange" style={{ gridColumn: 5, gridRow: "8 / span 3" }}>
        <strong>Sistem Tertanam</strong>
        <b>INTS208 · Kelas A</b>
        <span>13:00–15:50</span>
        {full && <small>3 SKS</small>}
      </div>

      {/* JUMAT: Pengukuran & Analisis Unjuk Kerja Jaringan (10:00 - 12:50) */}
      <div className="class-block c-mint" style={{ gridColumn: 6, gridRow: "5 / span 3" }}>
        <strong>Pengukuran & Analisis Unjuk Kerja Jaringan</strong>
        <b>NETW108 · Kelas A</b>
        <span>10:00–12:50</span>
        {full && <small>3 SKS</small>}
      </div>
    </div>
  );
}

function Krs({ go }: { go: (s: Screen) => void }) {
  // Mengisi default state dengan seluruh kode mata kuliah agar langsung 'Added'
  const [selectedCodes, setSelectedCodes] = useState<string[]>([
    "SDEV207",
    "PENL101",
    "INTS208",
    "NETW108"
  ]);

  // Hitung total SKS secara otomatis (akan langsung berjumlah 13 SKS)
  const totalSks = courseBlocks
    .filter(c => selectedCodes.includes(c.code))
    .reduce((sum, c) => sum + c.sks, 0);

  const toggleCourse = (code: string) => {
    if (selectedCodes.includes(code)) {
      setSelectedCodes(selectedCodes.filter(c => c !== code));
    } else {
      setSelectedCodes([...selectedCodes, code]);
    }
  };

  return (
    <Shell current="krs" go={go}>
      <div className="container">
        <PageHeading 
          eyebrow="Course registration · Odd 2026/2027" 
          title="KRS Simulator" 
          subtitle="Build a conflict-free semester plan before submitting it to your academic advisor." 
        />
        
        {/* Summary Strip dengan Lingkaran 13 / 24 SKS */}
        <div className="summary-strip">
          <div className="credit-ring">
            <strong>{totalSks}</strong>
            <span>/ 24 SKS</span>
          </div>
          <div>
            <strong>Credit load summary</strong>
            <p>
              {totalSks === 0 
                ? "Select courses below to start building your semester plan." 
                : totalSks <= 21 
                ? "A balanced study load for your current GPA." 
                : "You are approaching the maximum study load."}
            </p>
          </div>
          <div className="summary-divider" />
          <Status tone={totalSks > 21 ? "yellow" : totalSks > 0 ? "green" : "gray"}>
            {totalSks > 21 ? "Review course load" : totalSks > 0 ? "No schedule conflicts" : "No courses selected"}
          </Status>
          <div className="summary-spacer" />
          <span className="draft-note">Last saved 2 minutes ago</span>
        </div>

        <div className="krs-layout">
          {/* Picker List Matakuliah */}
          <section className="course-picker">
            <div className="picker-tools">
              <div className="compact-search">
                <Icon name="search" />
                <input placeholder="Search course or code..." />
              </div>
              <Button variant="secondary" icon="filter">Filter</Button>
            </div>
            <div className="filter-tags">
              <button className="active">All courses</button>
              <button>3 SKS</button>
              <button>4 SKS</button>
              <button>Mandatory</button>
            </div>

            <div className="course-list">
              {courseBlocks.map((course) => {
                const isAdded = selectedCodes.includes(course.code);
                return (
                  <article key={course.code}>
                    <i className={`course-dot ${course.color}`} />
                    <div className="course-main">
                      <span>{course.code} · {course.sks} SKS</span>
                      <h3>{course.name}</h3>
                      <p>{course.lecturer}</p>
                      <small><Icon name="clock" /> {course.time}</small>
                    </div>
                    <Button 
                      variant={isAdded ? "secondary" : "primary"} 
                      icon={isAdded ? "check" : "plus"} 
                      onClick={() => toggleCourse(course.code)}
                    >
                      {isAdded ? "Added" : "Add"}
                    </Button>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Preview Kalender */}
          <section className="card calendar-card">
            <div className="card-head">
              <div>
                <span className="eyebrow">Live preview</span>
                <h2>Weekly plan</h2>
              </div>
              <div className="legend">
                <span><i className="blue" /> Core</span>
                <span><i className="purple" /> Elective</span>
              </div>
            </div>
            <MiniCalendar full />
            <div className="calendar-actions">
              <Button variant="secondary">Save draft</Button>
              <Button>Submit to DPA <Icon name="arrow" /></Button>
            </div>
          </section>
        </div>
      </div>
    </Shell>
  );
}

function Schedule({ go }: { go: (s: Screen) => void }) {
  const [weekly, setWeekly] = useState(true);
  return <Shell current="schedule" go={go}><div className="container">
    <PageHeading eyebrow="Academic calendar" title="Course Schedule" subtitle="Your confirmed class schedule for the current semester." />
    <div className="control-bar"><label>Semester<select defaultValue="odd"><option value="odd">Odd 2025/2026</option><option>Even 2024/2025</option></select></label><div className="segmented"><button className={weekly ? "active" : ""} onClick={() => setWeekly(true)}>Weekly grid</button><button className={!weekly ? "active" : ""} onClick={() => setWeekly(false)}>Agenda list</button></div><div className="control-spacer" /><Button variant="secondary" icon="google">Export to Google Calendar</Button><Button variant="dark" icon="download">Download PDF</Button></div>
    <section className="card schedule-card"><div className="schedule-title"><div><h2>Sixth Semester Schedule</h2><p>4 courses · 13 total SKS</p></div><div className="week-controls"><button>‹</button><Button variant="secondary">Today</Button><button>›</button></div></div>{weekly ? <MiniCalendar full /> : <Agenda />}</section>
  </div></Shell>;
}

function Agenda() {
  return <div className="agenda">{["Monday, 11 August", "Tuesday, 12 August", "Wednesday, 13 August"].map((day, i) => <section key={day}><h3>{day}</h3><article><time>{i === 0 ? "13:00" : i === 1 ? "08:00" : "10:00"}<span>{i === 0 ? "15:30" : i === 1 ? "09:40" : "12:30"}</span></time><i className={`course-line ${i === 0 ? "purple" : i === 1 ? "blue" : "orange"}`} /><div><strong>{i === 0 ? "Cloud Computing" : i === 1 ? "Human–Computer Interaction" : "Machine Learning"}</strong><span>K.312 · Main Campus</span></div><Status tone="gray">3 SKS</Status></article></section>)}</div>;
}

const grades = [
  ["NETW112", "Dasar - dasar Routing", "3", "A-", "11.25"],
  ["NETW106", "Jaringan Perangkat Bergerak", "3", "A", "12.00"],
  ["STDL101", "Kuliah Kerja Nyata", "3", "A", "12.00"],
  ["INTS110", "Sistem Rekomendasi", "3", "A", "12.00"],
  ["NETW113", "Komputasi Awan dan Virtualisasi", "3", "B+", "10.50"],
  ["INTS112", "Logika Kabur", "3", "A", "12.00"],
  ["NETW111", "Simulasi Jaringan", "3", "A-", "11.25"],
];

function Grades({ go }: { go: (s: Screen) => void }) {
  const [target, setTarget] = useState(3.85);
  return <Shell current="grades" go={go}><div className="container">
    <PageHeading eyebrow="Academic performance" title="IPK & KHS" subtitle="Understand your progress and make informed decisions about your next semester." action={<Button variant="secondary" icon="download">Download transcript</Button>} />
    <div className="performance-grid">
      <section className="gpa-card"><span className="eyebrow light">Cumulative GPA</span><div className="gpa-score"><strong>3.68</strong><span>/ 4.00</span></div><div className="gpa-change">↑ 0.06 from last semester</div><div className="gpa-bars">{[3.41,3.55,3.67,3.72,3.68].map((v,i) => <div key={i}><i style={{ height: `${(v/4)*100}%` }} /><span>S{i+1}</span></div>)}</div></section>
      <section className="card stat-card"><span className="eyebrow">Study progress</span><div className="big-stat"><strong>129</strong><span>of 144 SKS earned</span></div><div className="progress"><i style={{ width: "57%" }} /></div><div className="stat-split"><div><small>Highest GPA</small><strong>3.81</strong></div><div><small>Study duration</small><strong>6 semesters</strong></div></div></section>
      <section className="card target-card"><span className="eyebrow">Target simulator</span><h2>Plan your next GPA</h2><p>Target cumulative GPA</p><strong>{target.toFixed(2)}</strong><input type="range" min="3.68" max="4" step="0.01" value={target} onChange={e => setTarget(Number(e.target.value))} /><div className="range-labels"><span>3.68</span><span>4.00</span></div><small>You need approximately <b>{Math.max(3.8, target + .05).toFixed(2)}</b> next semester.</small></section>
    </div>
    <section className="card grade-section"><div className="card-head"><div><span className="eyebrow">Study results</span><h2>Semester grade report</h2></div><div className="semester-tabs"><button>Semester 4</button><button>Semester 5</button><button className="active">Semester 6</button></div></div><table><thead><tr><th>Course code</th><th>Course name</th><th>SKS</th><th>Grade</th><th>Grade points</th></tr></thead><tbody>{grades.map(g => <tr key={g[0]}>{g.map((v,i) => <td key={v} className={i === 3 ? "grade" : ""}>{v}</td>)}</tr>)}</tbody><tfoot><tr><td colSpan={2}>Semester summary</td><td>21 SKS</td><td>IPS 3.81</td><td>81.00</td></tr></tfoot></table></section>
  </div></Shell>;
}

function Kkm({ go }: { go: (s: Screen) => void }) {
  const payments = [
    { type: "USKS/UKS/UKP Thp I", unpaid: "0", date: "10-10-2025", paid: "5,830,000", method: "Bank Virtual Account BRI" },
    { type: "USKS/UKS/UKP Thp I", unpaid: "0", date: "28-03-2026", paid: "5,565,000", method: "Bank Virtual Account Mandiri" },
    { type: "UKT (Uang Kuliah Tunggal)", unpaid: "0", date: "03-08-2025", paid: "2,750,000", method: "Bank Virtual Account Mandiri" },
    { type: "UKT (Uang Kuliah Tunggal)", unpaid: "0", date: "08-01-2026", paid: "2,750,000", method: "Bank Virtual Account Mandiri" },
    { type: "KKN", unpaid: "0", date: "03-06-2026", paid: "1,766,000", method: "Bank Virtual Account Mandiri" },
    { type: "KMHS", unpaid: "0", date: "08-01-2026", paid: "200,000", method: "Bank Virtual Account Mandiri" },
    { type: "Sos Mhs", unpaid: "0", date: "08-01-2026", paid: "40,000", method: "Bank Virtual Account Mandiri" }
  ];

  return (
    <Shell current="kkm" go={go}>
      <div className="container">
        <PageHeading 
          eyebrow="Financial services" 
          title="Kartu Keuangan Mahasiswa (KKM)" 
          subtitle="Pantau rincian tagihan, riwayat pembayaran uang kuliah, dan status kewajiban finansial." 
          action={<Button icon="download">Cetak KKM (PDF)</Button>}
        />

        {/* Ringkasan Status Keuangan */}
        <div className="kkm-overview">
          <section className="status-hero">
            <span>Status Pembayaran</span>
            <Status tone="green">Lunas / Tidak Ada Tunggakan</Status>
            <h2>Rp 0</h2>
            <p>Total sisa tagihan kewajiban semester ini</p>
            <div className="timeline">
              <i />
              <div className="done"><b><Icon name="check" /></b><span>Tahap I</span></div>
              <div className="done"><b><Icon name="check" /></b><span>Tahap II</span></div>
              <div className="done"><b><Icon name="check" /></b><span>UKT</span></div>
              <div className="done"><b><Icon name="check" /></b><span>Lunas</span></div>
            </div>
          </section>

          <section className="card info-card">
            <span className="eyebrow">Metode Pembayaran</span>
            <h2>Virtual Account</h2>
            <p><Icon name="card" /> BRI / Mandiri / BCA USD</p>
            <small style={{ marginTop: '12px', display: 'block', color: 'var(--muted)' }}>
              Pembayaran otomatis terverifikasi sistem dalam 1x24 jam.
            </small>
          </section>

          <section className="card supervisor-card">
            <span className="eyebrow">Bantuan Keuangan</span>
            <div className="supervisor">
              <div>
                <strong>Biro Keuangan USD</strong>
                <span>Gedung Pusat Kampus II</span>
              </div>
            </div>
            <Button variant="secondary">Petunjuk Pembayaran</Button>
          </section>
        </div>

        {/* Tabel Rincian Pembayaran */}
        <section className="card documents">
          <div className="card-head">
            <div>
              <span className="eyebrow">Riwayat Transaksi</span>
              <h2>Rincian Tagihan & Pembayaran Non-DPP</h2>
            </div>
            <span className="completion"><strong>Lunas</strong></span>
          </div>
          <table>
            <thead>
              <tr>
                <th>Jenis Uang Kuliah</th>
                <th>Tunggakan (Rp)</th>
                <th>Tanggal Bayar</th>
                <th>Jumlah Dibayar (Rp)</th>
                <th>Metode / Sumber</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p, i) => (
                <tr key={i}>
                  <td><strong>{p.type}</strong></td>
                  <td>Rp {p.unpaid}</td>
                  <td>{p.date}</td>
                  <td><strong style={{ color: '#16a34a' }}>Rp {p.paid}</strong></td>
                  <td><Status tone="blue">{p.method}</Status></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </Shell>
  );
}

function QrCode() {
  const bits = [0,1,2,4,5,6,8,10,12,13,14,16,18,20,21,22,24,26,28,29,30,32,33,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,65,66,68,70,72,74,76,78,80];
  return <div className="qr">{Array.from({length:81},(_,i)=><i key={i} className={bits.includes(i) || (i%7===0) || (i%11===0) ? "on" : ""} />)}</div>;
}

function Ktm({ go }: { go: (s: Screen) => void }) {
  return <Shell current="ktm" go={go}><div className="container ktm-page">
    <PageHeading eyebrow="Official student identity" title="KTM Digital" subtitle="Your secure digital student card for campus access, attendance, and library services." />
    <div className="id-stage">
      <div className="id-card">
        <div className="id-pattern" /><div className="id-top"><Brand light /><span>STUDENT ID</span></div>
        <div className="id-body"><div className="student-photo"><img src= {biodata} alt="Cedric Chandra" /></div><div className="id-details"><small>FULL NAME</small><h2>Cedric Chandra</h2><div><span><small>STUDENT ID</small><strong>2314195</strong></span><span><small>PROGRAM</small><strong>Informatics</strong></span></div><p>Faculty of Science and Technology</p></div><div className="id-code"><QrCode /><small>Scan to verify</small></div></div>
        <div className="barcode">{Array.from({length:38},(_,i)=><i key={i} className={i%3===0 || i%7===0 ? "thick" : ""} />)}</div>
      </div>
      <div className="id-instructions"><span className="secure-icon"><Icon name="card" size={24} /></span><h2>Your campus pass, always with you.</h2><p>Present this card or scan the QR code at campus facilities. The code refreshes automatically for your security.</p><div className="verification"><Status>Active student · Verified</Status><span>Valid through 31 August 2027</span></div><Button icon="download">Download Digital ID</Button><small>Last verified today at 08:42 WIB</small></div>
    </div>
  </div></Shell>;
}

function Activities({ go }: { go: (s: Screen) => void }) {
  const acts = [
    ["Informatika Belajar Program", "Pelatihan & Workshop", "Verified", "1"]
  ];

  return (
    <Shell current="activities" go={go}>
      <div className="container">
        <PageHeading 
          eyebrow="Student development" 
          title="Activity Points" 
          subtitle="Track co-curricular credits and build a complete graduation portfolio." 
          action={<Button icon="plus">Submit new activity</Button>} 
        />
        
        {/* Banner Total Poin */}
        <section className="points-hero">
          <div>
            <span className="eyebrow light">Total accumulated points</span>
            <strong>1 <small>/ 100 points</small></strong>
            <p>You need 99 more points to fulfill your graduation requirement.</p>
          </div>
          <div className="points-progress">
            <div className="point-label">
              <span>Current progress</span>
              <strong>1%</strong>
            </div>
            <div className="progress light">
              <i style={{ width: "1%" }} />
            </div>
            <div className="milestones">
              <span>0</span>
              <span>50</span>
              <span>75</span>
              <span>100 points</span>
            </div>
          </div>
        </section>

        <div className="activity-layout">
          {/* Category Breakdown */}
          <section className="card category-card">
            <div className="card-head">
              <div>
                <span className="eyebrow">Point distribution</span>
                <h2>Category breakdown</h2>
              </div>
            </div>
            {[
              ["Academic & scientific", 1, 20, "orange"],
              ["Leadership & organization", 0, 35, "blue"],
              ["Talents & interests", 0, 25, "purple"],
              ["Community service", 0, 20, "mint"]
            ].map(c => (
              <div className="category" key={c[0] as string}>
                <div>
                  <i className={c[3] as string} />
                  <strong>{c[0]}</strong>
                  <span>{c[1]} / {c[2]} pts</span>
                </div>
                <div className="progress">
                  <i className={c[3] as string} style={{ width: `${(Number(c[1]) / Number(c[2])) * 100}%` }} />
                </div>
              </div>
            ))}
            <div className="tip">
              <Icon name="award" />
              <div>
                <strong>Recommended next step</strong>
                <p>Join campus organizational activities to accumulate more points.</p>
              </div>
            </div>
          </section>

          {/* Activity History Table */}
          <section className="card history-card">
            <div className="card-head">
              <div>
                <span className="eyebrow">Your portfolio</span>
                <h2>Activity history</h2>
              </div>
              <button className="text-button">View all <Icon name="arrow" /></button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Activity name</th>
                  <th>Category / Role</th>
                  <th>Proof status</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {acts.map(a => (
                  <tr key={a[0]}>
                    <td><strong>{a[0]}</strong></td>
                    <td>{a[1]}</td>
                    <td><Status tone={a[2] === "Verified" ? "green" : "yellow"}>{a[2]}</Status></td>
                    <td><b>+{a[3]}</b></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </Shell>
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("login");
  const go = (next: Screen) => { setScreen(next); window.scrollTo({ top: 0, behavior: "smooth" }); };
  if (screen === "login") return <Login go={go} />;
  if (screen === "home") return <Dashboard go={go} />;
  if (screen === "krs") return <Krs go={go} />;
  if (screen === "schedule") return <Schedule go={go} />;
  if (screen === "grades") return <Grades go={go} />;
  if (screen === "kkm") return <Kkm go={go} />;
  if (screen === "ktm") return <Ktm go={go} />;
  return <Activities go={go} />;
}
