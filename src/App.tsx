import { useState } from 'react'
import './App.scss'

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  // Your 20 Lectures data
  const lectures = [
  { id: 0, title: "Intro, Terminal, and Git", status: "Completed" },
  { id: 1, title: "HTML Essentials", status: "Completed" },
  { id: 2, title: "CSS Fundamentals", status: "Completed" },
  { id: 3, title: "JavaScript Deep Dive", status: "Completed" },
  { id: 4, title: "HTTP, Responses, and Headers", status: "Completed" },
  { id: 5, title: "XML, CSS-JS, and TSX", status: "Completed" },
  { id: 6, title: "React Components and Ternaries", status: "Completed" },
  { id: 7, title: "Hooks and Custom Hooks", status: "Completed" },
  { id: 8, title: "Events, Async, and Fetch", status: "Completed" },
  { id: 9, title: "Props, Context, and Code Review", status: "Completed" },
  { id: 10, title: "Routing Architecture", status: "Completed" },
  { id: 10.5, title: "Test Driven Development (TDD)", status: "Completed" },
  { id: 11, title: "Next.js, Env, and API Keys", status: "Completed" },
  { id: 12, title: "Routing in Next.js", status: "Completed" },
  { id: 13, title: "SSR vs CSR Strategies", status: "Completed" },
  { id: 14, title: "MUI, Tailwind, and Shadcn", status: "Completed" },
  { id: 15, title: "Database Integration", status: "Completed" },
  { id: 16, title: "GraphQL and Apollo", status: "Completed" },
  { id: 17, title: "SSA and Redis", status: "Completed" },
  { id: 18, title: "OAuth Authentication", status: "Completed" },
  { id: 19, title: "DAL, DTO, and Native", status: "Completed" },
  { id: 20, title: "Cookies, CORS, and Sessions", status: "Completed" },
];

return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>SassStudy</h2>
        <nav>
          <ul>
            <li 
              className={activeTab === 'overview' ? 'active' : ''} 
              onClick={() => setActiveTab('overview')}
            >
              <span>Overview</span>
            </li>
            <li 
              className={activeTab === 'archive' ? 'active' : ''} 
              onClick={() => setActiveTab('archive')}
            >
              <span>Semester Archive</span>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header>
          <h1>{activeTab === 'overview' ? 'Semester Wrap-up' : 'Lecture Archive'}</h1>
        </header>

        <div className="view-container">
          {activeTab === 'overview' ? (
            <>
              <section className="stats-grid">
                {/* Lectures */}
                <div className="card-lecture">
                  <span className="category-label">Lectures</span>
                  <p>21 Classes</p>
                  <h3>Gaining Knowledge</h3>
                </div>

                {/* Projects */}
                <div className="card-project">
                  <span className="category-label">Mini Projects</span>
                  <p>6 Builds</p>
                  <h3>Applying Skills</h3>
                </div>

                {/* Discussions */}
                <div className="card-discussion">
                  <span className="category-label">Discussions</span>
                  <p>13 Labs</p>
                  <h3>Exchanging Ideas</h3>
                </div>
              </section>

              <section className="progress-section">
                <div className="progress-container">
                  <div className="progress-bar"></div>
                </div>
                <span>100% Semester Completion</span>
              </section>
            </>
          ) : (
            <section className="archive-list">
              <div className="list-header">
                <span>#</span>
                <span>Lecture Title</span>
                <span>Status</span>
              </div>
              {lectures.map(lec => (
                <div key={lec.id} className="list-item">
                  <span>{lec.id}</span>
                  <span>{lec.title}</span>
                  <span className={`badge ${lec.status.toLowerCase()}`}>
                    {lec.status}
                  </span>
                </div>
              ))}
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default App