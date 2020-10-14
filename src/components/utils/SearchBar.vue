<!-- Search bar component -->
<template xmlns:size="http://www.w3.org/1999/xhtml">
    <div>
        <input :value="currentValue" @input="inputload" placeholder="Please enter class number, eg: COMP5619" class="input" size="66">
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
</style>