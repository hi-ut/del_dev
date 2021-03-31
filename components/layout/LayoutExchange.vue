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
                <li :key="'parent_' + index">
                  <nuxt-link
                    v-if="obj.lang.includes($i18n.locale)"
                    :class="title == obj.label ? 'current' : ''"
                    :to="localePath(obj.to)"
                    exact
                  >
                    {{ $t(obj.label) }}
                  </nuxt-link>
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
export default class LayoutAbout extends Vue {
  @Prop()
  title!: string

  baseUrl: string = process.env.BASE_URL || ''
  json: any = process.env.jsonData

  get menu(): any {
    return this.json[6].children
  }

  get label(): any {
    return this.json[6].label
  }

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
        name: 'exchange',
      }),
      exact: true,
    },
    {
      text: this.$t(this.title),
    },
  ]
}
</script>
