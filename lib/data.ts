import React from "react";
import { LuRocket } from 'react-icons/lu'
import { FaReact } from "react-icons/fa";
import { LuNetwork } from 'react-icons/lu'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { AiFillAmazonCircle } from 'react-icons/ai'
import { SiCisco } from 'react-icons/si'
import eduspire from "@/public/eduspire.png";
import estimates from "@/public/estimates.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: 'Cisco Network Engineer',
    location: 'Sofia, BG',
    description:
      'Contributed to the server virtualization team, performed troubleshooting, maintenance, and administration of UCS C and B series servers. Served as an escalated point of contact for resolving network-related, voice, email, and web service requests specific to Cisco equipment. Provided problem identification, executed action plans, documented activities, offered technical expertise for critical client situations, analyzed support logs, and communicated effectively with customers throughout the resolution process.',
    icon: React.createElement(LuNetwork),
    date: '2018',
  },
  {
    title: 'Cisco Network/Voice Engineer',
    location: 'Sofia, BG',
    description:
      'Configured Cisco servers for collaboration, deployed Cisco Prime for network automation, managed virtualization platforms, troubleshooted UCCX components, and provided technical support for operational systems and contact center tools.',
    icon: React.createElement(SiCisco),
    date: '2019 - 2020',
  },
  {
    title: 'DevOps engineer',
    location: 'Sofia, BG',
    description:
      'Supported IT systems, proficient in Linux, managed system changes, wrote automation scripts in Linux/Bash, utilized Terraform for infrastructure scripting, deployed AWS infrastructure as code, employed Docker and continuous integration for app deployment, implemented database and app backup scripts, adhered to best practices in security and cost optimization, conducted cost optimization reviews, established monitoring and health checks for optimal performance, ensured SLAs, addressed issues, created technical documentation, and collaborated with customers in regular meetings to plan tasks and enhance infrastructure and automation.',
    icon: React.createElement(LuRocket),
    date: '2020 - 2022',
  },
  {
    title: 'Senior DevOps engineer',
    location: 'Sofia, BG',
    description:
      'Led and managed impactful projects, oversaw end-to-end DevOps processes, ensured seamless integration of cutting-edge technologies. Initiated collaborative calls with fellow DevOps engineers to discuss future tasks and innovations. Collaborated with other Senior DevOps engineers to strategize subscription opportunities, proposed infrastructure enhancements, and implemented best practices within timelines.',
    icon: React.createElement(AiFillAmazonCircle),
    date: '2022 - present',
  },
] as const

export const projectsData = [
  {
    title: 'EduspireSolutions',
    description:
      'I played a key role in significant infrastructure enhancements. This involved implementing Kubernetes, orchestrating the migration of applications to Amazon EKS. Implementing monitoring systems like Datadog. Migrating DNS domains. Vastly improvments on git strategies, rollback automations and much more. ',
    tags: ['AWS', 'Aurora', 'EKS', 'Helm', 'Elasticsearch', 'Bitbucket CI'],
    imageUrl: eduspire,
  },
  {
    title: 'rmtDev',
    description:
      'In this role, I collaborated extensively with developer teams based in both the USA and Germany. I spearheaded the construction and migration of CI/CD pipelines, transitioning from Jenkins to GitLab CI. Additionally, I implemented various improvements essential for the seamless adoption of the new application by Bluebeam.',
    tags: ['AWS', 'EKS', 'Gitlab-CI', '.NET', 'React'],
    imageUrl: estimates,
  },
] as const

export const skillsData = [
  "AWS",
  "GCP",
  "Linux",
  "Terraform",
  "Docker",
  "Kubernetes",
  "Git",
  "Jenkins",
  "Gitlab-pipelines",
  "Github-actions",
  "Bitbucket-pipelines",
  "Elasticsearch",
  "Opensearch",
  "Datadog",
  "Prometheus",
  "PostgreSQL",
  "MySQL",
  "Bash",
  "Python",
] as const;
