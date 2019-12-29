<template>
    <div id="app" class="small-container">
        <h1>Pokemon Matchup</h1>
        <div class="flex">
            <type-form :side="mine" @set:poke="setMine" />
            <type-form :side="enemy" @set:poke="setEnemy" />
        </div>
        <matchup :mine="minePoke" :enemy="enemyPoke" />
    </div>
</template>

<script>
import TypeForm from "./components/TypeForm";
import Matchup from "./components/Matchup";

export default {
    name: "app",
    components: {
        TypeForm,
        Matchup
    },
    data() {
        return {
            mine: "my pokemon",
            enemy: "enemy pokemon",
            minePoke: "",
            enemyPoke: ""
        };
    },
    methods: {
        setMine(pokemon) {
            this.minePoke = pokemon;
        },
        setEnemy(pokemon) {
            this.enemyPoke = pokemon;
        }
    }
};
</script>

<style>
h1 {
    text-align: center;
}

.small-container {
    max-width: 6980px;
}

.flex {
    display: flex;
    justify-content: center;
}
</style>
