import { defineStore } from "pinia";

export let useCounterStore = defineStore('counter', 
{
  state() 
  {
    return {
      count: 5
    };

  },

  getters: 
  {
    remaining() {
      return 10 - this.count;
    }
    
  },

  actions: 
  {
    increment() {
      if (this.count < 10) {
        this.count++;
      }
    }
  }


  
});