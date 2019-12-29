<template>
    <div id="type-form">
        <form @submit.prevent="handleSubmit">
            <input type="text" v-model="pokemon" :placeholder="side" />
            <button>Show Type</button>
        </form>
        <div v-if="imgUrl !== ''">
            <img :src="imgUrl" />
            <p v-for="type in typeArray" :key="type">
                {{ type }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "type-form",
    data() {
        return {
            pokemon: "",
            imgUrl: "",
            typeArray: []
        };
    },
    methods: {
        async handleSubmit() {
            try {
                const response = await fetch(
                    `http://localhost:3000/type/${this.pokemon}`
                );
                const data = await response.json();
                this.imgUrl = data.imgUrl;
                this.typeArray = data.type;
            } catch (error) {
                console.error(error);
            }
        }
    },
    props: {
        side: String
    }
};
</script>
