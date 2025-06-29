import React, { useEffect, useState } from "react";

const statsData = [
  { label: "Users", value: 12000 },
  { label: "Loans Paid", value: 350 },
  { label: "Countries", value: 5 },
  { label: "Awards", value: 7 },
];

const teamMembers = [
  {
    name: "Arnav Goyal",
    role: "Leader & Backend Developer",
    email: "arnav@example.com",
    github: "https://github.com/arnavgoyal",
    linkedin: "https://linkedin.com/in/arnavgoyal",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Hitesh Kumar",
    role: "AI-ML Developer",
    email: "hitesh@example.com",
    github: "https://github.com/hiteshkumar",
    linkedin: "https://linkedin.com/in/hiteshkumar",
    img: "https://randomuser.me/api/portraits/men/26.jpg",
  },
  {
    name: "Richa Chaudhary",
    role: "Backend Developer",
    email: "richa@example.com",
    github: "https://github.com/richachaudhary",
    linkedin: "https://linkedin.com/in/richachaudhary",
    img: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    name: "Ananya Singh",
    role: "Research and PPT",
    email: "ananya@example.com",
    github: "https://github.com/ananyasingh",
    linkedin: "https://linkedin.com/in/ananyasingh",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

// SVG icons for GitHub and LinkedIn
const GithubIcon = () => (
  <svg
    className="w-6 h-6 text-teal-200 hover:text-orange-200"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    className="w-6 h-6 text-teal-300 hover:text-orange-300"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z" />
  </svg>
);

const AnimatedStat = ({ value }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let incrementTime = 20;
    let step = Math.ceil(end / 50);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{count.toLocaleString()}</span>;
};

const TeamSlider = ({ members, interval = 2500 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % members.length);
    }, interval);
    return () => clearInterval(timer);
  }, [members.length, interval]);

  // Helper to get the correct index with wrap-around
  const getIndex = (idx) => (idx + members.length) % members.length;

  // Indices for left, center, right
  const leftIdx = getIndex(current - 1);
  const centerIdx = current;
  const rightIdx = getIndex(current + 1);

  return (
    <div className="flex justify-center items-center min-h-[400px] gap-8">
      {/* Left (previous) */}
      <div className="flex flex-col items-center transition-all duration-500 -translate-y-16">
        <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-700 opacity-60 scale-90 shadow-md">
          <img
            src={members[leftIdx].img}
            alt={members[leftIdx].name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-2 text-base text-gray-400 font-semibold">
          {members[leftIdx].name}
        </div>
      </div>
      {/* Center (current) */}
      <div className="flex flex-col items-center transition-all duration-500 z-10">
        <div className="w-64 h-64 rounded-2xl overflow-hidden bg-gray-700 shadow-2xl border-4 border-blue-500 flex items-center justify-center mb-6">
          <img
            src={members[centerIdx].img}
            alt={members[centerIdx].name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-3xl font-bold text-gray-100 mb-2">
          {members[centerIdx].name}
        </div>
        <div className="text-xl text-gray-400 mb-2">
          {members[centerIdx].role}
        </div>
        <div className="text-lg text-gray-300 mb-2">
          {members[centerIdx].email}
        </div>
        <div className="flex gap-4 mt-2">
          <a
            href={members[centerIdx].github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href={members[centerIdx].linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
      {/* Right (next) */}
      <div className="flex flex-col items-center transition-all duration-500 -translate-y-16">
        <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-700 opacity-60 scale-90 shadow-md">
          <img
            src={members[rightIdx].img}
            alt={members[rightIdx].name}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-2 text-base text-gray-400 font-semibold">
          {members[rightIdx].name}
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-orange-100">
      {/* Motto, Mission, Stats */}
      <section className="w-full min-h-screen flex items-center justify-center">
        <div className="max-w-5xl w-full mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-teal-200 mb-4">
              Empowering Innovation Together
            </h1>
            <p className="text-lg md:text-xl text-orange-200 mb-2">
              Our Motto:{" "}
              <span className="text-teal-300 font-semibold">
                "Build. Inspire. Grow."
              </span>
            </p>
            <p className="text-md md:text-lg text-orange-200">
              Mission:{" "}
              <span className="text-teal-200">
                To make genZ aware about Money Management and Finance, help them
                save for future, and recover from existing debts.
              </span>
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {statsData.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-800 rounded-lg py-6 flex flex-col items-center shadow-md"
              >
                <div className="text-3xl font-extrabold text-orange-300 mb-2">
                  <AnimatedStat value={stat.value} />
                </div>
                <div className="text-teal-300 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="w-full min-h-screen flex items-center justify-center">
        <div className="max-w-5xl w-full mx-auto">
          <h2 className="text-3xl font-bold text-teal-200 mb-8 text-center">
            Meet Our Team
          </h2>
          <TeamSlider members={teamMembers} />
        </div>
      </section>
    </div>
  );
};

export default Team;
