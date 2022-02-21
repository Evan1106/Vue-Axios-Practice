<template>

<div>
    Name: <input type="text" v-model="name">
    title: <input type="text" v-model="job">
    <button @click="updateTitle">Renew Data</button>
    <h3>{{ $store.getters.title }}</h3>
</div>

{{ $store.state.name }}
<br/>
{{ stateMessage }}
  <h1>UserId: {{ $route.params.userId }}</h1>
  <div>Name: {{ userInfo.name }}</div>
  <div>Email: {{ userInfo.email }}</div>
<hr>
  <router-link :to="`/users/${userId}/todos`">{{ userInfo.name }} 的 todo</router-link>
  <router-view></router-view>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      userInfo:{},

      name: '',
      job: ''
    }
  },
  computed:{
      userId(){
          return this.$route.params.userId
      },
      stateMessage(){
          return this.$store.state.message
      }
  },
  watch:{
      userId:function(val){
          this.fetchUserInfo(val)
      }
  },
  mounted(){
    this.fetchUserInfo(this.userId)
  },
  methods:{
    fetchUserInfo(id){
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
           .then(response => this.userInfo = response.data)
    },

    updateTitle(){
        this.$store.commit('setTitle', {
            name: this.name,
            job: this.job
        })
    }
  }
}
</script> 