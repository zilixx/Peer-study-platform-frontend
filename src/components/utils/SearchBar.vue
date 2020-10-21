<!-- Search bar component -->
<template xmlns:size="http://www.w3.org/1999/xhtml">
  <div>
    <div style="float: left">
        <input :value="currentValue" @input="inputload" placeholder="Please enter class number, eg: COMP5619" class="input" size="165.5">
    </div>
    <div style="float: right">
        <button class="button button1" @click="submit">Search</button>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'SearchBar',
        data() {
            return {
                currentValue: this.value,
            };
        },
        props: {
            value: {
                type: [String, Number],
                default: ''
            },
        },
        watch: {
            value(val) {
                this.setCurrentValue(val);
            }
        },
        methods: {
            setCurrentValue(value) {
                console.log(value)
                if (value === this.currentValue) return;
                this.currentValue = value;
            },
            inputload(event){
                let value = event.target.value;
                this.$emit('input', value)
            }
        }
    }
</script>

<style>
    .input{
        padding: 6px 10px;
    }
    .button {
      width: 100%;
      background-color: #4CAF50;
      color: white;
      padding: 8px 20px;
      /*margin: 8px 0;*/
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .button1{
      background-color: #4CAF50;
      color: white;
      border: none;
    }

    .button1:hover {
      background-color: white;
      color: #4CAF50;
    }
</style>