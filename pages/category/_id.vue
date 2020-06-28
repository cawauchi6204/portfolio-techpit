<template>
  <div class="w-full my-3 py-2 bg-white overflow-hidden shadow-lg">
    <nuxt-link :to="'/category/' + work.fields.category.sys.id ">
      <div class="absolute bg-white py-1 px-3 rounded shadow mt-1 ml-1 text-sm">
        {{ work.fields.category.fields.name }}
      </div>
    </nuxt-link>
    <Item
      v-for="work in works"
      :key="work.sys.id"
      :work="work"
    />
  </div>
</template>

<script>
import Item from "@/components/Item";
import { createClient } from "~/plugins/contentful.js";
const client = createClient();
export default {
  components: {
    Item
  },
  asyncData({ params }) {
    return Promise.all([
      client.getEntries({
        'content_type': "work",
        "fields.category.sys.id": params.id,
        order: "-sys.createdAt"
      })
    ])
      .then(([works]) => {
        return {
          works: works.items
        };
      })
      .catch(console.error);
  }
};
</script>
