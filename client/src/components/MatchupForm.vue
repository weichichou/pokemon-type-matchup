<template>
    <div id="matchup-form">
        <form @submit.prevent="handleSubmit">
            <label>My Pokemon</label>
            <input type="text" v-model="matchup.mine" />
            <label>Enemy Pokemon</label>
            <input type="text" v-model="matchup.enemy" />
            <button>Show Results</button>
        </form>
        <div v-if="results.length > 0">
            <p v-for="result in results" :key="result">
                {{ result }}
            </p>
        </div>
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
            results: []
        };
    },
    methods: {
        async handleSubmit() {
            try {
                const response = await fetch(
                    `http://localhost:3000/matchup?mine=${this.matchup.mine}&enemy=${this.matchup.enemy}`
                );
                const data = await response.json();
                this.results = this.makeSentence(data);
            } catch (error) {
                console.error(error);
            }
        },
        makeSentence(array) {
            const convert = {
                double_damage_to: "You will make 2x damage to the enemy.",
                double_damage_from:
                    "You will receive 2x damage from the enemy.",
                half_damage_to: "You will make 0.5x damage to the enemy.",
                half_damage_from:
                    "You will receive 0.5x damage from the enemy.",
                no_damage_to: "You will make no damage to the enemy.",
                no_damage_from: "You will receive no damage from the enemy."
            };
            return array.map(item => convert[item]);
        }
    }
};
</script>
