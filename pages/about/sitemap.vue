<template>
  <div>
    <LayoutAbout :title="title">
      <h1 class="h02">{{ title }}</h1>

      <template v-for="(obj, index) in items">
        <div v-if="obj.lang.includes(lang)" :key="index" class="mb-10">
          <h2 class="h03 mt-10">
            {{ $t(obj.label) }}
          </h2>

          <ul>
            <template v-for="child in obj.children">
              <li
                v-if="child.lang.includes(lang)"
                :key="child.label"
                class="mb-2"
              >
                <template v-if="child.to">
                  <nuxt-link :to="localePath(child.to)">{{
                    $t(child.label)
                  }}</nuxt-link>
                </template>
                <template v-else-if="child.href">
                  <a :href="child.href">{{ $t(child.label) }}</a>
                </template>

                <ul v-if="child.children">
                  <template v-for="child2 in child.children">
                    <li v-if="child2.lang.includes(lang)" :key="child2.label">
                      <template v-if="child2.to">
                        <nuxt-link :to="localePath(child2.to)">{{
                          $t(child2.label)
                        }}</nuxt-link>
                      </template>
                      <template v-else-if="child2.href">
                        <a :href="child2.href">{{ $t(child2.label) }}</a>
                      </template>
                    </li>
                  </template>
                </ul>
              </li>
            </template>
          </ul>
        </div>
      </template>
    </LayoutAbout>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import LayoutAbout from '~/components/layout/Layout.vue'

@Component({
  components: {
    LayoutAbout,
  },
})
export default class about extends Vue {
  baseUrl: string = process.env.BASE_URL || ''
  title: any = this.$t('サイトマップ')

  items: any = process.env.jsonData

  get lang() {
    return this.$i18n.locale
  }

  head() {
    const title = this.title
    return {
      title,
    }
  }
}
</script>
