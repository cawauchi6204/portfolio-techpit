<template>
  <div>
    <Item v-for="work in works" :key="work.sys.id" :work="work" />
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
import Item from "@/components/Item";
const client = createClient();
export default {
  compoents: {
    Item
  },
  asyncData() {
    return Promise.all([
      client.getEntries({
        content_type: "work",
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

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
