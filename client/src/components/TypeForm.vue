<template>
    <div id="type-form">
        <form @submit.prevent="handleSubmit">
            <input type="text" v-model="pokemon" :placeholder="side" required />
            <br />
            <button>Show Type</button>
        </form>
        <div v-if="imgUrl !== ''" class="detail-div">
            <img :src="imgUrl" />
            <div class="p-div">
                <p v-for="type in typeArray" :key="type">
                    {{ type }}
                </p>
            </div>
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
                    `http://localhost:3000/type/${this.inputToLowerCase}`
                );
                const data = await response.json();
                this.imgUrl = data.imgUrl;
                this.typeArray = data.type;
            } catch (error) {
                console.error(error);
            }
        }
    },
    computed: {
        inputToLowerCase() {
            return this.pokemon.toLowerCase();
        }
    },
    props: {
        side: String
    }
};
</script>

<style scoped>
#type-form {
    margin: 0.5rem;
}

input {
    text-align: center;
}

button {
    width: 100%;
}

.detail-div {
    display: flex;
    justify-content: center;
    align-items: center;
}

.p-div p {
    display: block;
}
</style>
