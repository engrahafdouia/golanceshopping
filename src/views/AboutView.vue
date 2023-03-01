<template>

  <AboutSection id="aboutSection"/>
  <TimelineSection/>




<v-divider></v-divider>
<OurTeamSection/>

  <v-divider></v-divider>

  <TechnologiesSection/>
<v-divider></v-divider>
<StudentInfo/>

  </template>


  <script>
  import StudentInfo from '@/components/StudentInfo.vue';
  import AboutSection from '@/components/AboutSection.vue';
  import TechnologiesSection from '@/components/TechnologiesSection.vue';
  import TimelineSection from '@/components/TimelineSection.vue';
import OurTeamSection from '@/components/OurTeamSection.vue';

    export default {
        components: {
    AboutSection,

    TimelineSection,
    TechnologiesSection,
    StudentInfo,
    OurTeamSection
},

        data: () => ({
          title:'',
          bgHeroImage:'',
        }),
    }
  </script>
