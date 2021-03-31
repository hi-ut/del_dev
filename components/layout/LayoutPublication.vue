<template>
  <div>
    <div class="key-common">
      <div class="inner">
        <p class="ttl">{{ $t(label) }}</p>
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
        <section>
          <slot />
        </section>
      </main>

      <div id="sidebar">
        <aside>
          <!-- InstanceBeginEditable name="sub" -->
          <nav>
            <h2>{{ $t(label) }}</h2>
            <ul>
              <template v-for="(obj, index) in menu">
                <li v-if="obj.lang.includes($i18n.locale)" :key="index">
                  <nuxt-link
                    :key="'parent_' + index"
                    :class="title == obj.label ? 'current' : ''"
                    :to="localePath(obj.to)"
                    exact
                  >
                    {{ $t(obj.label) }}
                  </nuxt-link>

                  <ul>
                    <template v-for="(obj2, index2) in obj.children">
                      <li
                        v-if="obj2.to && obj2.lang.includes($i18n.locale)"
                        :key="index2"
                      >
                        <nuxt-link :key="index2" :to="localePath(obj2.to)">
                          {{ $t(obj2.label) }}
                        </nuxt-link>
                      </li>
                    </template>
                  </ul>
                </li>
              </template>
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

@Component
export default class LayoutPublication extends Vue {
  baseUrl: string = process.env.BASE_URL || ''

  json: any = process.env.jsonData

  get menu(): any {
    return this.json[2].children
  }

  get label(): any {
    return this.json[2].label
  }

  @Prop()
  title!: string

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
        name: 'publication',
      }),
      exact: true,
    },
    {
      text: this.$t(this.title),
    },
  ]
}
</script>
