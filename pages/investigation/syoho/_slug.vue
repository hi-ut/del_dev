<template>
  <div>
    <v-container class="my-5">
      <LayoutPublication :title="title" :index="2">
        <h1 class="h02">{{ this.$t('史料調査') }}</h1>

        <p>東京大学史料編纂所報第53号掲載の史料調査に関する報告。</p>

        <ol>
          <li v-for="(value, index) in items" :key="index">
            <nuxt-link
              :to="
                localePath({
                  name: 'publication-syoho-vol-slug',
                  params: { vol: $route.params.slug, slug: value },
                })
              "
            >
              東京大学史料編纂所報第{{ value }}号</nuxt-link
            >
          </li>
        </ol>
      </LayoutPublication>
    </v-container>
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
export default class about extends Vue {
  title: string =
    this.$t('東京大学史料編纂所報') + this.$route.params.slug + '号'

  head() {
    const title = this.title
    return {
      title,
    }
  }

  get items(): string[] {
    const vol = this.$route.params.slug
    const items = []
    for (let i = 1; i <= 1; i++) {
      const index = ('000' + i).slice(-3)
      items.push('saiho_' + vol + '_' + index)
    }
    return items
  }
}
</script>
