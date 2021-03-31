<template>
  <div>
    <LayoutPublication :title="title" :index="2">
      <h1 class="h02">{{ title }}</h1>

      <p>
        <a
          :href="
            baseUrl +
            '/dip/?u=https://raw.githubusercontent.com/nakamura196/dip/master/docs/hi.json'
          "
          target="_blank"
          >別ウインドウで開く</a
        >
      </p>

      <iframe
        width="100%"
        height="900px"
        allowfullscreen
        frameborder="0"
        :src="
          baseUrl +
          '/dip/?u=https://raw.githubusercontent.com/nakamura196/dip/master/docs/hi.json&inline=true'
        "
      />
    </LayoutPublication>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutPublication from '~/components/layout/Layout.vue'

@Component({
  components: {
    LayoutPublication,
  },
})
export default class PublicationDip extends Vue {
  title: any = this.$t('史料集版面ギャラリー')
  baseUrl: string = process.env.BASE_URL || ''

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
