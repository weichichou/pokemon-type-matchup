<template>
    <div id="pokemon-table">
        <table>
            <thead>
                <tr>
                    <th>Yours</th>
                    <th>Enemy</th>
                    <th>Results</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pokemon in pokemons" :key="pokemon.id">
                    <td>{{ pokemon.yours }}</td>
                    <td>{{ pokemon.enemy }}</td>
                    <td>{{ pokemon.results }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "pokemon-table",
    props: {
        pokemons: Array
    }
};
</script>
