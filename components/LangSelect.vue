<template>
  <ul
    class="lang-select"
    @click="isOpenLanguageSelection = !isOpenLanguageSelection"
  >
    <li>
      <span>Language</span>
      <VueSlideToggle :duration="500" :open="isOpenLanguageSelection">
        <ul class="child">
          <li v-if="lang !== 'ja'">
            <a @click="changeLocale('ja')">日本語</a>
          </li>
          <li v-if="lang !== 'en'">
            <a @click="changeLocale('en')">English</a>
          </li>
          <!-- <li><a :href="baseUrl + '/zh/'">中文</a></li>
                    <li><a :href="baseUrl + '/ko/'">한국어</a></li> -->
        </ul>
      </VueSlideToggle>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

// tslint:disable-next-line:no-var-requires
const { VueSlideToggle } = require('vue-slide-toggle')

@Component({
  components: {
    VueSlideToggle,
  },
})
export default class LangSelectComponent extends Vue {
  isOpenLanguageSelection: boolean = false

  baseUrl: string = process.env.BASE_URL || ''

  get lang() {
    return this.$i18n.locale
  }

  changeLocale(lang: string) {
    this.$i18n.locale = lang
    this.$router.push(this.localePath({ name: 'index' }))
  }
}
</script>
