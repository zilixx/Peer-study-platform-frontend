<!-- Search bar component -->
<template>
    <div>
        <input :value="currentValue" @input="inputload">
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