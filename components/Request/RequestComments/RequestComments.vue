<template>
    <div class="request-comments">
      <RequestItemTemplate :headline="$t('request.comments.headline')" :opened="opened">
        <template slot="right">
          <textarea
            class="request-comments-textarea"
            :placeholder="$t('request.comments.placeholder')"
            v-model="comments"
          ></textarea>
        </template>
      </RequestItemTemplate>
    </div>
</template>

<script>
import RequestItemTemplate from '@/components/Request/RequestItemTemplate/RequestItemTemplate';

export default {
  name: 'RequestComments',
  components: { RequestItemTemplate },
  props: {
    opened: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    requestStore () { return this.$store.state.pageRequestStore; },
    comments: {
      get () {
        return this.requestStore.comments;
      },
      set (value) {
        this.$store.commit('pageRequestStore/setComments', value);
      }
    }
  }
};
</script>

<style scoped lang="scss">
  @import 'RequestComments';
</style>
