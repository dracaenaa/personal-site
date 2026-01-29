<template>
  <div class="timeline">
    <div class="outer" id="outer">
      <div v-for="item in historyItems" v-bind:key="item.title" class="timeline-card">
        <div class="flex">
          <PhCircle class="dot-style" />
          <div class="timeline-info">
            <div>
              <p class="timeline-time">{{ item.time }}</p>
              <h3 class="timeline-title">{{ item.title }}</h3>
              <p class="pt-3">
                {{ item.body }}
              </p>
            </div>
            <img v-if="item.image" :src="item.image" class="w-full md:w-70 rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PhCircle } from '@phosphor-icons/vue'

let historyItems = [
  {
    title: 'College',
    body: 'I dual-majored in Criminal Justice and Russian Language and Culture at Bowling Green State University and graduated Cum Laude. While there, I also took Mandarin Chinese and learned C++ in a couple of Computer Science courses, giving me a wide breadth of exposure and skills.',
    time: '2014-2018',
  },
  {
    title: 'Into the IT world',
    body: "After several months of working as a security guard after college, I got my first job in an IT-adjacent role at SSI Schaefer. I wasn't quite an IT professional at that point, but this was my first exposure to working in IT as I worked closely with the IT folks.",
    time: '2019-2020',
  },
  {
    title: 'IT Support',
    body: "My first job in the IT industry was with Chipotle's Restaurant Support Center, providing Tier 1 IT Support as a Technical Specialist contractor. I learned a lot about problem-solving here and excelled at communicating with the restaurant staff who had extremely varied levels of IT knowledge.",
    time: '2020-2022',
  },
  {
    title: 'Network Support',
    body: 'I was hired direct by Chipotle to work as a Network Support Specialist, as a Tier 2 for restaurant network-related issues. Unfortunately, I did not stay in this role long because I was accepted into Tech Elevator very soon after joining this newly-formed team.',
    time: 'mid 2022',
  },
  {
    title: 'Tech Elevator',
    body: 'Tech Elevator was short but intense, and taught me the fundamentals of software development and good development standards. I was nicknamed the "object-oriented princess" by my peers and was the unofficial valedictorian by my instructors, due to my top scores and my going out of my way to help my classmates.',
    time: 'late 2022',
    image: 'te_grad.png',
  },
  {
    title: 'First programming job at CGI',
    body: 'I received my offer letter for a software consultant role at CGI right around my Tech Elevator graduation. There, I joined the Early Career Program and was instructed on consulting and on different programming and technical concepts. After this several-week-long program, I was immediately placed on a high-performing team at a commercial insurance client, where I later joined the unofficial architecture team. I attended a few conferences while there and assisted in our student programming mentorship programs.',
    time: '2023-2025',
    image: 'cgi_conf.png',
  },
  {
    title: 'Freedom Pipeline - passion project startup',
    body: 'In late 2024, I participated in the Columbus GiveBackHack event, where I formed Freedom Pipeline with my teammates. I eventually left CGI to pursue this passion project, and as co-founder and founding engineer I was responsible for a great deal of the project. I learned a lot about business and operations, and I heavily participated in the prototyping and user research for our application.',
    time: '2024-2026',
    image: 'reentry_mixer.png',
  },
  {
    title: 'Now',
    body: "At the present, our project at Freedom Pipeline is winding down due to our members' personal conflicts and funding. I am looking for a long-term role on a project that has a large impact at a people-focused organization.",
    time: '2026-present',
  },
]
</script>
