import { useState, useEffect } from "react";

function CareerPage({ onContactClick }) {
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchType, setSearchType] = useState("All types");
  const [searchCategory, setSearchCategory] = useState("All categories");

  // Application Modal States
  const [activeJob, setActiveJob] = useState(null);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantResume, setApplicantResume] = useState("");
  const [applicantMessage, setApplicantMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "https://klique-software-solutions.onrender.com/api/jobs",
        );

        if (!response.ok) {
          throw new Error("Failed to load jobs");
        }

        const result = await response.json();

        // Sirf Live jobs public website par show hongi
        console.log("Full API Result:", result);

        const jobsData = result.data || [];

        console.log("All Jobs:", jobsData);

        setAllJobs(jobsData);
        setJobs(jobsData);
      } catch (error) {
        console.error("Failed to load jobs:", error);
        setAllJobs([]);
        setJobs([]);
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs handler
  const handleFilterSearch = () => {
    let filtered = [...allJobs];

    if (searchLocation.trim() !== "") {
      filtered = filtered.filter((job) =>
        job.location?.toLowerCase().includes(searchLocation.toLowerCase()),
      );
    }

    if (searchType !== "All types") {
      filtered = filtered.filter((job) => job.employmentType === searchType);
    }

    if (searchCategory !== "All categories") {
      filtered = filtered.filter((job) => job.department === searchCategory);
    }

    setJobs(filtered);
    setSelectedCategory("All");
  };

  // Handle filter chip selection
  const handleChipClick = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      setJobs(allJobs);
    } else {
      const filtered = allJobs.filter((job) => job.department === category);

      setJobs(filtered);
    }

    setSearchLocation("");
    setSearchType("All types");
    setSearchCategory("All categories");
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setActiveJob(null);
      setApplicantName("");
      setApplicantEmail("");
      setApplicantResume("");
      setApplicantMessage("");
    }, 2500);
  };

  return (
    <div className="career-page w-full">
      {/* HERO SECTION */}
      <section className="career-hero">
        <div className="career-circuit" />
        <div className="career-hero-content career-reveal">
          <div className="career-eyebrow">
            <span className="career-dot"></span> We're hiring across teams
          </div>
          <h1 className="career-hero-title">
            Build the future of{" "}
            <span className="career-accent">smarter software</span> with us
          </h1>
          <p className="career-hero-sub">
            From Salesforce to custom web and app development — at Klique you
            build real products that scale businesses. Let's build something
            great together.
          </p>

          <div className="career-stats-row">
            <div className="career-stat">
              <b>50+</b>
              <span>Projects delivered</span>
            </div>
            <div className="career-stat">
              <b>15+</b>
              <span>Team members</span>
            </div>
            <div className="career-stat">
              <b>4.9★</b>
              <span>Client rating</span>
            </div>
            <div className="career-stat">
              <b>100%</b>
              <span>Remote friendly</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH BAR CARD */}
      <div className="career-search-wrap">
        <div className="career-search-card career-reveal">
          <div className="career-search-field">
            <input
              type="text"
              placeholder=" "
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
            <label>LOCATION</label>
          </div>

          <div className="career-search-field has-value">
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option>All types</option>
              <option>Full-time</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>
            <label>JOB TYPE</label>
          </div>

          <div className="career-search-field has-value">
            <select
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
            >
              <option>All categories</option>
              <option>Engineering</option>
              <option>Salesforce</option>
              <option>Design</option>
              <option>Internship</option>
            </select>
            <label>CATEGORY</label>
          </div>

          <button onClick={handleFilterSearch} className="career-find-btn">
            Find Job
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* FILTER CHIPS */}
      <div className="career-filters career-reveal">
        {["All", "Engineering", "Salesforce", "Design", "Internship"].map(
          (cat) => (
            <div
              key={cat}
              onClick={() => handleChipClick(cat)}
              className={`career-chip ${selectedCategory === cat ? "active" : ""}`}
            >
              {cat === "All" ? "All roles" : cat}
            </div>
          ),
        )}
      </div>

      {/* WHY JOIN SECTION */}
      <section className="career-section career-section-perks">
        <div className="career-section-head career-reveal">
          <span className="career-kicker">Why Klique</span>
          <h2>A team that ships, learns and grows together</h2>
          <p>
            We are a small team that works for big impact. Every person's work
            matters here.
          </p>
        </div>

        <div className="career-perks-grid">
          <div
            className="career-perk-card career-reveal"
            style={{ transitionDelay: "0.05s" }}
          >
            <div className="career-perk-icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h3>Real ownership</h3>
            <p>
              From day 1 you will work on actual client projects, not just
              training tasks.
            </p>
          </div>

          <div
            className="career-perk-card career-reveal"
            style={{ transitionDelay: "0.15s" }}
          >
            <div className="career-perk-icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
            </div>
            <h3>Fast growth</h3>
            <p>
              Full support for Salesforce certifications, mentorship, and
              skill-building.
            </p>
          </div>

          <div
            className="career-perk-card career-reveal"
            style={{ transitionDelay: "0.25s" }}
          >
            <div className="career-perk-icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <h3>Flexible work</h3>
            <p>
              Both remote and hybrid options, we focus on results, not hours.
            </p>
          </div>

          <div
            className="career-perk-card career-reveal"
            style={{ transitionDelay: "0.35s" }}
          >
            <div className="career-perk-icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>Open culture</h3>
            <p>
              Flat hierarchy, direct communication, and a team that listens to
              ideas.
            </p>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS LIST */}
      <section className="career-jobs-section">
        <div className="career-jobs-gradient" />
        <div className="career-jobs-inner">
          <div className="career-section-head career-reveal">
            <span className="career-kicker">Open positions</span>
            <h2>Find your next role</h2>
            <p>Current openings are below — apply according to your skills.</p>
          </div>

          <div className="career-jobs-list">
            {jobs.length > 0 ? (
              jobs.map((job, idx) => {
                const initials = job.title
                  ? job.title
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()
                  : "JB";

                return (
                  <div
                    key={job._id}
                    className="career-job-card career-reveal"
                    style={{ animationDelay: `${0.05 + idx * 0.08}s` }}
                  >
                    <div className="career-job-left">
                      <div className="career-job-icon">{initials}</div>

                      <div>
                        <div className="career-job-title">{job.title}</div>

                        <div className="career-job-meta">
                          {/* Location */}
                          <span>
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>

                            {job.location || "Not specified"}
                          </span>

                          {/* Employment Type */}
                          {job.employmentType && (
                            <span>💼 {job.employmentType}</span>
                          )}

                          {/* Experience */}
                          {job.experience && <span>◎ {job.experience}</span>}

                          {/* Department */}
                          {job.department && (
                            <span className="career-job-tag">
                              {job.department}
                            </span>
                          )}

                          {/* requirements / tech stack */}
                          {Array.isArray(job.requirements)
                            ? job.requirements.map((requirement, index) => (
                                <span key={index} className="career-job-tag">
                                  {requirement}
                                </span>
                              ))
                            : typeof job.requirements === "string" &&
                              job.requirements
                                .split(",")
                                .map((requirement, index) => (
                                  <span key={index} className="career-job-tag">
                                    {requirement.trim()}
                                  </span>
                                ))}
                        </div>

                        {/* Salary */}
                        {job.salary && (
                          <div className="career-job-salary">
                            Salary: {job.salary}
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveJob(job)}
                      className="career-apply-btn"
                    >
                      Apply now
                    </button>
                  </div>
                );
              })
            ) : (
              <div className="career-empty-state career-reveal">
                <div className="career-empty-icon">🔍</div>
                <h3>No Positions Found</h3>
                <p>
                  We currently have no listings for this filter. Please adjust
                  your search terms.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className="career-process-section">
        <div className="career-section-head career-reveal">
          <span className="career-kicker">Hiring process</span>
          <h2>Simple, transparent, fast</h2>
          <p>Our hiring process is completed in 4 simple steps.</p>
        </div>

        <div className="career-process-track career-reveal">
          <div className="career-step">
            <div className="career-step-circle">1</div>
            <h4>Apply</h4>
            <p>Submit your resume and portfolio.</p>
          </div>

          <div className="career-step">
            <div className="career-step-circle">2</div>
            <h4>Screening</h4>
            <p>Our team will review your profile.</p>
          </div>

          <div className="career-step">
            <div className="career-step-circle">3</div>
            <h4>Interview</h4>
            <p>There will be a technical and culture-fit round.</p>
          </div>

          <div className="career-step">
            <div className="career-step-circle">4</div>
            <h4>Offer</h4>
            <p>You will receive an offer letter after selection.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="career-cta-section career-reveal">
        <h2>Didn't find the right role?</h2>
        <p>
          Send us your resume — we will contact you whenever a matching opening
          comes up.
        </p>
        <button onClick={onContactClick} className="career-cta-btn">
          Send your resume &rarr;
        </button>
      </section>

      {/* APPLY MODAL OVERLAY */}
      {activeJob && (
        <div className="career-modal-overlay">
          <div className="career-modal">
            <button
              onClick={() => setActiveJob(null)}
              className="career-modal-close"
            >
              &times;
            </button>

            <h3>Apply for {activeJob.title}</h3>
            <p className="career-modal-subtitle">
              {activeJob.department} &middot; {activeJob.location}
            </p>

            {formSubmitted ? (
              <div className="career-modal-success">
                <span className="icon">✓</span>
                <h4>Application Submitted!</h4>
                <p>
                  Thank you. Our HR team will review your application and reach
                  out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="career-modal-form">
                <div className="blog-floating-group">
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder=" "
                    className="blog-floating-input"
                  />
                  <label className="blog-floating-label">Full Name*</label>
                </div>

                <div className="blog-floating-group">
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder=" "
                    className="blog-floating-input"
                  />
                  <label className="blog-floating-label">Email Address*</label>
                </div>

                <div className="blog-floating-group">
                  <input
                    type="url"
                    required
                    value={applicantResume}
                    onChange={(e) => setApplicantResume(e.target.value)}
                    placeholder=" "
                    className="blog-floating-input"
                  />
                  <label className="blog-floating-label">
                    Link to Resume / Portfolio*
                  </label>
                </div>

                <div className="blog-floating-group">
                  <textarea
                    rows={4}
                    value={applicantMessage}
                    onChange={(e) => setApplicantMessage(e.target.value)}
                    placeholder=" "
                    className="blog-floating-textarea"
                  />
                  <label className="blog-floating-label">
                    Why should we hire you?
                  </label>
                </div>

                <button type="submit" className="career-modal-submit-btn">
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CareerPage;
