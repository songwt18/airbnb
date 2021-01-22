<template>
  <div id="message">
      <message-title></message-title>
      <message-tab></message-tab>
  </div>
</template>

<script>
import MessageTitle from './components/title/MessageTitle'
import MessageTab from './components/tab/MessageTab'
export default {
    name: 'Message',
    components: {
      MessageTitle,
      MessageTab
    }
}
</script>

<style scoped>
#message {
  margin: 15px;
}
</style>