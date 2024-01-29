"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        Fuelled by a passion for containerization, automation, and migrating
        monolithic applications in{' '}
        <span className='font-medium'>cloud native environment</span>. I thrive
        in the dynamic realm of{' '}
        <span className='font-medium'>DevOps engineering</span>. Embracing the
        ever-evolving landscape of{' '}
        <span className='font-medium'>
          AWS, Kubernetes, and automation tools
        </span>
        , I navigate the intricacies of cloud infrastructure with enthusiasm.{' '}
      </p>
      <p>
        My core stack is{' '}
        <span className='font-medium'>
          AWS, Terraform, EKS, Jenkins and Gitlab-CI
        </span>
        . I am also familiar with Monitoring, Observability and Alerting tools.
        I am always looking to learn new technologies. I am currently looking
        for a{' '}
        <span className='font-medium'>
          opportunity to help companies addopting the Cloud
        </span>{' '}
        as a DevOps/Platform engineer and advisor.
      </p>
      <p>
        <span className='italic'>While away from the keyboard, </span>, I enjoy
        moments with family and friends. I also enjoy{' '}
        learning new things. I love{' '}

          swimming, cycling and snowboarding.
      </p>
    </motion.section>
  )
}
