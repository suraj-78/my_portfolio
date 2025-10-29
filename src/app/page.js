"use client";

import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { ResponsiveNavbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import LogoLoop from "@/components/LogoLoop";
import { ProjectFollowingPointer } from "@/components/ProjectFollowingPointer";
import { motion } from "framer-motion";
import {
  IconCode,
  IconDatabase,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandTailwind,
  IconBrandMongodb,
  IconBrandFirebase,
  IconBrandTypescript,
  IconBrandGit,
  IconDeviceDesktop,
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconExternalLink,
  IconDownload,
  IconMapPin,
  IconPhone,
  IconSchool,
  IconCertificate,
  IconCalendar,
  IconTrophy,
  IconApi,
  IconBrandMysql,
  IconBrandRedux,
  IconChartBar,
  IconChartLine,
  IconTerminal,
  IconBrandNextjs,
  IconDatabase as IconPostgreSQL,
  IconBrandSocketIo,
  IconBrandDocker,
  IconBrandStripe,
  IconServer,
  IconWorldWww,
  IconBolt,
} from "@tabler/icons-react";
import { Highlighter } from "@/components/ui/highlighter";

export default function Home() {
  // Function to get tech icon and color
  const getTechIconAndColor = (tech) => {
    const techMap = {
      React: { icon: IconBrandReact, color: "text-cyan-400" },
      "Next.js": { icon: IconBrandNextjs, color: "text-white" },
      "Node.js": { icon: IconBrandNodejs, color: "text-green-500" },
      JavaScript: { icon: IconBrandJavascript, color: "text-yellow-400" },
      TypeScript: { icon: IconBrandTypescript, color: "text-blue-500" },
      "C/C++": { icon: IconCode, color: "text-blue-400" },
      "Tailwind CSS": { icon: IconBrandTailwind, color: "text-cyan-400" },
      MongoDB: { icon: IconBrandMongodb, color: "text-green-500" },
      PostgreSQL: { icon: IconPostgreSQL, color: "text-blue-600" },
      MySQL: { icon: IconBrandMysql, color: "text-blue-500" },
      "Redux Toolkit": { icon: IconBrandRedux, color: "text-purple-500" },
      "Recoil Toolkit": { icon: IconBrandRedux, color: "text-blue-400" },
      Prisma: { icon: IconDatabase, color: "text-gray-300" },
      "Express.js": { icon: IconServer, color: "text-gray-300" },
      JWT: { icon: IconWorldWww, color: "text-gray-400" },
      "RESTful API Development": { icon: IconApi, color: "text-orange-400" },
      Git: { icon: IconBrandGit, color: "text-red-500" },
    };

    return techMap[tech] || { icon: IconCode, color: "text-gray-400" };
  };

  const skills = [
    { name: "Frontend Development", icon: IconBrandReact, level: 90 },
    { name: "Backend Development", icon: IconBrandNodejs, level: 85 },
    { name: "Database Management", icon: IconDatabase, level: 80 },
    { name: "C/C++", icon: IconCode, level: 88 },
    { name: "JavaScript/TypeScript", icon: IconBrandJavascript, level: 92 },
    { name: "UI/UX Design", icon: IconDeviceDesktop, level: 75 },
  ];

  const skillLogos = [
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 glass-effect px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-cyan-400/30 glow-box group hover:border-cyan-400/50 transition-all duration-300">
          <IconBrandReact
            className="text-cyan-400 glow-text group-hover:scale-110 transition-transform duration-300"
            size={24}
          />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            React
          </span>
        </div>
      ),
      alt: "React",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 glass-effect px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-green-500/30 glow-box group hover:border-green-500/50 transition-all duration-300">
          <IconBrandMongodb
            className="text-green-500 glow-text group-hover:scale-110 transition-transform duration-300"
            size={24}
          />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            MongoDB
          </span>
        </div>
      ),
      alt: "MongoDB",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 glass-effect px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-blue-500/30 glow-box group hover:border-blue-500/50 transition-all duration-300">
          <IconPostgreSQL
            className="text-blue-500 glow-text group-hover:scale-110 transition-transform duration-300"
            size={24}
          />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            PostgreSQL
          </span>
        </div>
      ),
      alt: "PostgreSQL",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandHtml5 className="text-orange-500" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            HTML
          </span>
        </div>
      ),
      alt: "HTML",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandCss3 className="text-blue-500" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            CSS
          </span>
        </div>
      ),
      alt: "CSS",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandTailwind className="text-teal-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Tailwind CSS
          </span>
        </div>
      ),
      alt: "Tailwind CSS",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandNodejs className="text-green-600" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Node.js
          </span>
        </div>
      ),
      alt: "Node.js",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconCode className="text-gray-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Express.js
          </span>
        </div>
      ),
      alt: "Express.js",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconDatabase className="text-teal-400" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Prisma ORM
          </span>
        </div>
      ),
      alt: "Prisma ORM",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 glass-effect px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-yellow-400/30 glow-box group hover:border-yellow-400/50 transition-all duration-300">
          <IconBrandJavascript
            className="text-yellow-400 glow-text group-hover:scale-110 transition-transform duration-300"
            size={24}
          />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            JavaScript
          </span>
        </div>
      ),
      alt: "JavaScript",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandTypescript className="text-blue-600" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            TypeScript
          </span>
        </div>
      ),
      alt: "TypeScript",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandGithub className="text-white" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            GitHub
          </span>
        </div>
      ),
      alt: "GitHub",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-700/30">
          <IconBrandGit className="text-red-500" size={24} />
          <span className="text-white font-medium sm:font-semibold text-sm sm:text-base">
            Git
          </span>
        </div>
      ),
      alt: "Git",
    },
  ];

  const projects = [
    {
      title: "Second Brain – Your Digital Knowledge Hub",
      description:
        "• Designed a digital knowledge system capable of storing 1,000+ notes, links, and materials with advanced search and tagging. • Executed dynamic sidebar filtering and advanced search/tagging, improving content discovery and user experience. • Spearheaded the launch of 'Share Your Brain', enabling public note-sharing and attracting 50+ users in two weeks.",
      image: "/Screenshot 2025-10-01 232803.png", 
      tech: [
        "TypeScript",
        "React.js",
        "Recoil Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],
      github: "https://github.com/your-github/second-brain", // Please replace with your actual GitHub link
      live: "#", // Please replace with your actual live link
    },
    {
      title: "CreditSea – Offline Analytics Portal",
      description:
        "• Built a full-stack analytics tool tracking 5,000+ user interactions with offline-first support. • Integrated localStorage queuing and Axios interceptors, ensuring 100% event recovery and seamless background sync. • Created auto-saving forms and unsynced data alerts, increasing completion rates by 30%.",
      image: "/Screenshot 2025-09-11 112027.png", 
      tech: ["React", "Node.js", "TypeScript", "MongoDB"],
      github: "https://github.com/your-github/creditsea", // Please replace with your actual GitHub link
      live: "#", // Please replace with your actual live link
    },
    
  ];

  const education = [
    {
      degree: "B.Tech. in Computer Science & Engineering",
      institution: "Indian Institute of Information Technology Bhagalpur",
      location: "Bhagalpur, Bihar",
      period: "2022 - 2026",
      grade: "CGPA: 7.8",
      icon: IconSchool,
      achievements: [
        "Coursework: Data Structures and Algorithms, Object-Oriented Programming, Operating Systems, DBMS.",
      ],
    },
  ];
  
    const achievements = [
    {
      description: "Excelled on LeetCode, achieving a maximum rating of 1720+, ranked in the top 12% globally, with a highest global rank of 3290.",
      icon: IconTrophy
    },
    {
      description: "Solved over 900+ problems across platforms including LeetCode, Codeforces, GeeksforGeeks, and Coding Ninjas.",
      icon: IconCode
    },
    {
      description: "Selected as a semifinalist in Flipkart Grid 7.0 among 160k+ registered students.",
      icon: IconTrophy
    },
    {
      description: "2X semifinalist in the Tata Imagination Challenge (2023 & 2024) out of 312k+ participants.",
      icon: IconTrophy
    },
    {
      description: "Led a team in the Smart India Hackathon (Internal Round), ranking in the top 8 out of 60+ teams.",
      icon: IconTrophy
    }
  ];

  return (
    <>
      <ResponsiveNavbar />
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <section
          id="about"
          className="py-20 px-4 relative overflow-hidden particles-container"
        >
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,107,53,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(247,147,30,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.05),transparent_70%)]" />

          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-orange-500/30 rounded-full blur-sm float-animation"></div>
          <div
            className="absolute top-32 right-20 w-3 h-3 bg-orange-400/20 rounded-full blur-sm float-animation"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-1 h-1 bg-orange-600/40 rounded-full blur-sm float-animation"
            style={{ animationDelay: "3s" }}
          ></div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Me
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4 sm:space-y-6"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                  Full-Stack Developer
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I am a passionate and dedicated Computer Science student with a strong foundation in full-stack web development. My expertise lies in building robust and scalable applications using technologies like {" "}
                  <strong className="text-white font-bold">React</strong>,{" "}
                  <strong className="text-white font-bold">Node.js</strong>, and{" "}
                  <strong className="text-white font-bold">MongoDB</strong>.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I am a quick learner and always eager to explore new technologies and frameworks to enhance my skills.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-orange-400">
                    <IconMapPin size={20} />
                    <span>Bhusawal, Maharashtra, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-orange-400">
                    <IconMail size={20} />
                    <span>Available for hire</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              >
                {[
                  { number: "900+", label: "Problems Solved" },
                  { number: "1+", label: "Years Experience" },
                  { number: "5+", label: "Projects Completed" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center border border-gray-700/30"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h4 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                      {stat.number}
                    </h4>
                    <p className="text-gray-300 mt-2 text-sm sm:text-base">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,107,53,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(247,147,30,0.1),transparent_50%)]" />

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                My{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Education
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                My{" "}
                <Highlighter action="underline" color="#FF9800">
                  academic journey
                </Highlighter>{" "}
                and continuous{" "}
                <Highlighter action="highlight" color="#87CEFA">
                  learning path
                </Highlighter>{" "}
                in technology
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full mt-6" />
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row gap-6 lg:gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Education Card */}
                  <div className="flex-1">
                    <motion.div
                      className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/30 hover:border-orange-500/30 transition-all duration-300 group"
                      whileHover={{ y: -10, scale: 1.02 }}
                    >
                      <div className="flex items-start gap-4 sm:gap-6">
                        <div className="p-3 sm:p-4 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl">
                          <edu.icon
                            size={28}
                            className="text-orange-400 sm:w-8 sm:h-8"
                          />
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                              {edu.degree}
                            </h3>
                            <div className="flex items-center gap-2 text-orange-400 mt-2 lg:mt-0">
                              <IconCalendar size={18} />
                              <span className="font-medium">{edu.period}</span>
                            </div>
                          </div>

                          <div className="space-y-3 mb-6">
                            <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                              <h4 className="text-base sm:text-lg font-semibold text-gray-200">
                                {edu.institution}
                              </h4>
                              <span className="text-sm sm:text-base text-gray-400">
                                • {edu.location}
                              </span>
                            </div>
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 px-4 py-2 rounded-full border border-orange-500/30">
                              <IconTrophy
                                size={16}
                                className="text-orange-400"
                              />
                              <span className="text-orange-300 font-medium">
                                {edu.grade}
                              </span>
                            </div>
                          </div>

                          <div>
                            <ul className="space-y-2">
                              {edu.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-center gap-3 text-gray-300"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.5,
                                    delay: index * 0.2 + i * 0.1,
                                  }}
                                  viewport={{ once: true }}
                                >
                                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0" />
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Connector */}
                  <div className="hidden lg:flex flex-col items-center">
                    <motion.div
                      className="w-4 h-4 border-4 border-orange-500 bg-black rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                    {index < education.length - 1 && (
                      <motion.div
                        className="w-1 h-32 bg-gradient-to-b from-orange-500 to-transparent"
                        initial={{ height: 0 }}
                        whileInView={{ height: 128 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                      />
                    )}
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_50%)]" />

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technical{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Skills
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                Here are the{" "}
                <Highlighter action="underline" color="#FF9800">
                  technologies
                </Highlighter>{" "}
                and tools I work with to bring{" "}
                <Highlighter action="highlight" color="#87CEFA">
                  ideas to life
                </Highlighter>
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
            </motion.div>

            {/* LogoLoop Skills Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12 sm:mb-16"
            >
              {/* Mobile version */}
              <div className="block sm:hidden">
                <LogoLoop
                  logos={skillLogos}
                  speed={40}
                  direction="left"
                  logoHeight={40}
                  gap={24}
                  pauseOnHover={true}
                  fadeOut={true}
                  fadeOutColor="rgba(0, 0, 0, 1)"
                  scaleOnHover={true}
                  ariaLabel="Technical skills"
                  className="py-4"
                />
              </div>
              {/* Desktop version */}
              <div className="hidden sm:block">
                <LogoLoop
                  logos={skillLogos}
                  speed={60}
                  direction="left"
                  logoHeight={60}
                  gap={48}
                  pauseOnHover={true}
                  fadeOut={true}
                  fadeOutColor="rgba(0, 0, 0, 1)"
                  scaleOnHover={true}
                  ariaLabel="Technical skills"
                  className="py-8"
                />
              </div>
            </motion.div>

            {/* Reverse Direction Skills Loop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Mobile version */}
              <div className="block sm:hidden">
                <LogoLoop
                  logos={skillLogos.slice().reverse()}
                  speed={30}
                  direction="right"
                  logoHeight={35}
                  gap={20}
                  pauseOnHover={true}
                  fadeOut={true}
                  fadeOutColor="rgba(0, 0, 0, 1)"
                  scaleOnHover={true}
                  ariaLabel="Technical skills reverse"
                  className="py-3 opacity-75"
                />
              </div>
              {/* Desktop version */}
              <div className="hidden sm:block">
                <LogoLoop
                  logos={skillLogos.slice().reverse()}
                  speed={45}
                  direction="right"
                  logoHeight={50}
                  gap={40}
                  pauseOnHover={true}
                  fadeOut={true}
                  fadeOutColor="rgba(0, 0, 0, 1)"
                  scaleOnHover={true}
                  ariaLabel="Technical skills reverse"
                  className="py-6 opacity-75"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Interactive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Project Showcase
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-4">
                Explore my{" "}
                <Highlighter action="underline" color="#FF9800">
                  portfolio projects
                </Highlighter>{" "}
                with interactive{" "}
                <Highlighter action="highlight" color="#87CEFA">
                  following pointer effects
                </Highlighter>
              </p>
              <p className="text-gray-400 text-sm">
                Hover over any card to experience the magic ✨
              </p>
            </motion.div>

            {/* Following Pointer Projects */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ProjectFollowingPointer
                projects={projects}
                getTechIconAndColor={getTechIconAndColor}
              />
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 px-4 relative overflow-hidden">
          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Achievements
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/30 hover:border-orange-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl">
                      <achievement.icon
                        size={28}
                        className="text-orange-400"
                      />
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

          <div className="container mx-auto max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let&apos;s{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Connect
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Ready to bring your{" "}
                <Highlighter action="underline" color="#FF9800">
                  ideas to life
                </Highlighter>
                ? Let&apos;s discuss your{" "}
                <Highlighter action="highlight" color="#87CEFA">
                  next project
                </Highlighter>
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 sm:space-y-8"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
                    Get in Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 sm:gap-4 text-gray-300">
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg">
                        <IconMail
                          size={18}
                          className="text-orange-400 sm:w-5 sm:h-5"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-sm sm:text-base">
                          Email
                        </p>
                        <p className="text-orange-400 text-sm sm:text-base break-all">
                          suraj.2201082cs@iiitbh.ac.in
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg">
                        <IconPhone size={20} className="text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-orange-400">+91 8329965584</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg">
                        <IconMapPin size={20} className="text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-orange-400">
                          Bhusawal, Maharashtra, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href="https://linkedin.com/in/ssp001"
                    target="_blank"
                    className="p-3 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <IconBrandLinkedin size={24} className="text-orange-400" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/suraj-78" // Please replace with your actual GitHub link
                    target="_blank"
                    className="p-3 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <IconBrandGithub size={24} className="text-orange-400" />
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-800">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-gray-400">
              © 2025 Suraj Pandit. All rights reserved. Built with ❤️
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}