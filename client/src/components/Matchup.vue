<template>
    <div id="matchup">
        <md-button
            class="md-primary"
            :disabled="!this.$props.mine || !this.$props.enemy"
            @click="handleClick"
        >
            Matchup Results!
        </md-button>
        <div
            class="result-div"
            v-if="results.length > 0 && this.$props.mine && this.$props.enemy"
        >
            <p v-for="result in results" :key="result">
                {{ result }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "matchup",
    data() {
        return {
            results: []
        };
    },
    methods: {
        async handleClick() {
            this.clearStatus();

            try {
                const response = await fetch(
                    `http://localhost:3000/matchup?mine=${this.$props.mine}&enemy=${this.$props.enemy}`
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
                no_damage_from: "You will receive no damage from the enemy.",
                "normal effectiveness":
                    "Normal effectiveness for this type matchup."
            };
            return array.map(item => convert[item]);
        },
        clearStatus() {
            this.results = [];
        }
    },
    props: {
        mine: String,
        enemy: String
    },
    watch: {
        $props: {
            handler(val, oldVal) {
                console.log("props changes?", val, oldVal);
                this.clearStatus();
            },
            deep: true
        }
    }
};
</script>

<style scoped>
button {
    text-align: center;
    display: block;
    margin: 0.5rem auto;
}

.result-div {
    width: 400px;
    margin: 2rem auto;
}
</style>
