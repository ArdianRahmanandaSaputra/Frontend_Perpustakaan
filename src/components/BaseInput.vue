<template>
    <div class="form-group">
        <div class="mt-3">
        <label>{{ label }}</label>
        <input class="form-control" v-bind="$attrs" :value="modelValue" @input="handleInput">
    </div>
</div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        label:{
            type: String,
            required: true,
        },
        modelValue: {
            type: [String, Number],
            default: null,
        },
        modelModifiers: {
            default: () => ({}),
        },
    },
    methods: {
        handleInput(event){
            let value = event.target.value;
            if(this.modelModifiers.Number){
                value = Number(value);
            }
            if(this.modelModifiers.trim){
                value = value.trim();
            }
            this.$emit("update:modelValue", value);
        },
    },
};
</script>