<!-- @change and @keyup?? -->

<template>
    <div id="type-form">
        <md-autocomplete
            v-model="pokemon"
            :md-options="list"
            @md-changed="getList"
            @md-opened="getList"
        >
            <label>{{ side }}</label>
        </md-autocomplete>

        <!-- <form @submit.prevent="handleSubmit">
            <input
                type="text"
                v-model="pokemon"
                :placeholder="side"
                @focus="clearStatus"
                @change="autoComplete"
                required
            />
            <br />
            <button>Show Type</button> 
        </form> -->
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
            list: [],
            pokemon: "",
            imgUrl: "",
            typeArray: []
        };
    },
    methods: {
        async getList() {
            try {
                const response = await fetch(
                    `http://localhost:3000/array/${this.firstLetterToCaps}`
                );
                const list = await response.json();
                this.list = list;
            } catch (error) {
                console.error(error);
            }
        },
        async handleSubmit() {
            try {
                const response = await fetch(
                    `http://localhost:3000/type/${this.inputToLowerCase}`
                );
                const data = await response.json();
                this.imgUrl = data.imgUrl;
                this.typeArray = data.type;
                this.$emit("set:poke", this.inputToLowerCase);
            } catch (error) {
                console.error(error);
            }
        },
        clearStatus() {
            this.pokemon = "";
            this.imgUrl = "";
            this.typeArray = [];
            this.$emit("set:poke", "");
        }
    },
    computed: {
        inputToLowerCase() {
            return this.pokemon.toLowerCase();
        },
        firstLetterToCaps() {
            return this.pokemon.charAt(0).toUpperCase() + this.pokemon.slice(1);
        }
    },
    props: {
        side: String
    },
    watch: {
        pokemon: {
            handler(val, oldVal) {
                console.log("props changes?", val, oldVal);
                if (this.list.includes(val)) {
                    this.handleSubmit();
                } else {
                    console.log("invalid input");
                }
            }
        }
    }
};
</script>

<style scoped>
#type-form {
    margin: 0.5rem;
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
