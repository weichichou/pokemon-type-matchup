<template>
    <div id="type-form">
        <form @submit.prevent="handleSubmit">
            <label>My Pokemon</label>
            <input type="text" v-model="pokemon" />
            <button>Show Type</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "type-form",
    data() {
        return {
            pokemon: ""
        };
    },
    methods: {
        async handleSubmit() {
            try {
                const response = await fetch(
                    `http://localhost:3000/type/${this.pokemon}`
                );
                console.log("response??", response);
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
