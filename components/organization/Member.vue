<template>
  <v-card>
    <v-list-item three-line>
      <v-list-item-content>
        <v-card-text>
          {{ person.position }}
          <template v-if="person.url">
            <a :href="person.url">{{ person.name_ja }}</a>
            <v-icon>mdi-open-in-new</v-icon>
          </template>
          <template v-else>
            {{ person.name_ja }}
          </template>

          <!-- ... より兼任 -->
          <template v-if="person.main && person.main !== id">
            <br /><span class="ml-4"
              >（<nuxt-link
                :to="
                  localePath({
                    name: person.main,
                  })
                "
                >{{ $t(organization[person.main]) }}</nuxt-link
              >より兼任）</span
            >
          </template>

          <!-- ... を兼任 -->
          <template v-if="person.also && person.also">
            <div v-for="(value, index3) in person.also" :key="index3">
              <template v-if="value !== id">
                <span class="ml-4"
                  >（<nuxt-link
                    :to="
                      localePath({
                        name: value,
                      })
                    "
                    >{{ $t(organization[value]) }}</nuxt-link
                  >を兼任）</span
                >
              </template>
            </div>
          </template>
          <ul>
            <li v-for="(res, index3) in person.researches" :key="index3">
              <template v-if="res.url">
                <a :href="res.url">{{ res.ja }}</a>
                <v-icon>mdi-open-in-new</v-icon>
              </template>
              <template v-else>
                {{ res.ja }}
              </template>
            </li>
          </ul>
        </v-card-text>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  components: {},
})
export default class Member extends Vue {
  @Prop()
  person!: any

  @Prop()
  id!: string

  organization: any = process.env.organization
}
</script>
