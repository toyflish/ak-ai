<template>
  <div class="achievments">
    <h1>Achievments</h1>
    <ul>
      <li v-for="achievement in list">{{achievement.name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'achievements',
    data () {
      return {
        list: [
          {name: "deploying a Vue app"},
          {name: 'React Repo'},
          {name: 'beeing a dogfather'},
          {name: 'owning a Discothek'},
          {name: 'owning a Bar'},
          {name: 'owning a chlothing Brand'},
          {name: 'owning a garments Shop'},
          {name: 'having employes'}
        ]
      }
    }
  }
</script>