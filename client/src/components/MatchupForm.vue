<template>
    <div id="matchup-form">
        <form @submit.prevent="handleSubmit">
            <label>My Pokemon</label>
            <input type="text" v-model="matchup.mine" />
            <label>Enemy Pokemon</label>
            <input type="text" v-model="matchup.enemy" />
            <button>Show Results</button>
        </form>
        <div v-if="results !== ''">{{ results }}</div>
    </div>
</template>

<script>
export default {
    name: "matchup-form",
    data() {
        return {
            submitting: false,
            error: false,
            success: false,
            matchup: {
                mine: "",
                enemy: ""
            },
            results: ""
        };
    },
    methods: {
        async handleSubmit() {
            // console.log("clicked?");
            try {
                const response = await fetch(
                    `http://localhost:3000/matchup?mine=${this.matchup.mine}&enemy=${this.matchup.enemy}`
                );
                console.log("response?", response);
                this.results = await response.text();
                console.log("result?", this.results);
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
