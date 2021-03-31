<template>
  <div>
    <div class="key-common">
      <div class="inner">
        <p class="ttl">{{ label }}</p>
      </div>
    </div>

    <div class="breadcrumb">
      <ul>
        <li v-for="(item, key) in items" :key="key">
          <template v-if="item.to">
            <nuxt-link :to="item.to">{{ item.text }}</nuxt-link>
          </template>
          <template v-else>
            {{ item.text }}
          </template>
        </li>
      </ul>
    </div>

    <div class="contents-wrap">
      <main id="main-contents" class="main-contents">
        <!-- InstanceBeginEditable name="main" -->

        <slot />
        <section></section>
      </main>

      <div id="sidebar">
        <aside>
          <!-- InstanceBeginEditable name="sub" -->
          <nav>
            <h2>{{ label }}</h2>
            <ul>
              <li>
                <nuxt-link :to="localePath({ name: 'news' })">
                  {{ $t('今年度のニュース') }}
                </nuxt-link>
              </li>
              <li v-for="(value, index) in years" :key="index">
                <nuxt-link
                  :to="
                    localePath({
                      name: 'news-list-year',
                      params: { year: value },
                    })
                  "
                >
                  {{ value }}{{ $t('年度のニュース') }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
          <!-- InstanceEndEditable -->
        </aside>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import LayoutOrganization from '~/components/layout/LayoutOrganization.vue'

@Component({
  components: {
    LayoutOrganization,
  },
})
export default class LayoutAbout extends Vue {
  @Prop()
  title!: string

  get currentYear(): number {
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth() + 1
    return currentMonth < 4 ? currentYear - 1 : currentYear
  }

  get years() {
    const years = []
    for (let i = this.currentYear - 1; i >= 1997; i--) {
      years.push(i)
    }
    return years
  }

  label: any = this.$t('ニュース')

  items: any[] = [
    {
      text: 'HOME',
      disabled: false,
      to: this.localePath({
        name: 'index',
      }),
      exact: true,
    },
    {
      text: this.$t(this.label),
      disabled: false,
      to: this.localePath({
        name: 'news',
      }),
      exact: true,
    },
    {
      text: this.title,
    },
  ]
}
</script>
