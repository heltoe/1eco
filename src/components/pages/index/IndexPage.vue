<template>
  <div class="index-page">
    <Hero />
    <About />
    <Licence />
    <AutoPark />
    <Contacts />
  </div>
</template>

<script>
import Hero from '@/components/pages/index/Hero'
import About from '@/components/pages/index/About'
import Licence from '@/components/pages/index/Licence'
import AutoPark from '@/components/pages/index/AutoPark'
import Contacts from '@/components/pages/index/Contacts'

export default {
  components: { Hero, About, Licence, AutoPark, Contacts },
}
</script>
