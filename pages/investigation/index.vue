<template>
  <LayoutPublication :title="title" :index="2">
    <h1 class="h02">{{ title }}</h1>

    <p>東京大学史料編纂所報掲載の史料調査に関する報告。</p>

    <p style="color: red">TODO</p>

    <!--
      <div class="frame01">
        <ul>
          <li v-for="(value, index) in items" :key="index">
            <nuxt-link
              :to="
                localePath({
                  name: 'investigation-syoho-slug',
                  params: { slug: value },
                })
              "
            >
              東京大学史料編纂所報第{{ value }}号</nuxt-link
            >
          </li>
        </ul>
      </div>
      -->
  </LayoutPublication>
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
  title: any = this.$t('史料調査')

  head() {
    const title = this.title
    return {
      title,
    }
  }

  get items(): number[] {
    const items: any[] = []
    for (let i = 53; i >= 1; i--) {
      // items.push(i)
    }
    return items
  }
}
</script>
