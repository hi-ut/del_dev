<template>
  <form id="cse-search-box" action="https://google.com/cse">
    <input type="hidden" name="cx" value="1e10e2c945c90dfeb" />
    <input type="hidden" name="ie" value="UTF-8" />
    <input
      id="search-box"
      type="text"
      name="q"
      size="31"
      :placeholder="$t('Googleカスタム検索')"
    />
    <input id="search-btn" type="submit" name="sa" value=" " />
  </form>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class GoogleCustomSearchComponent extends Vue {}
</script>
