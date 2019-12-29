<!-- : is shorthand for v-bind -->

<template>
    <div id="app" class="small-container">
        <h1>Pokemon Matchup</h1>
        <div class="flex">
            <type-form :side="mine" @set:poke="setMine" />
            <type-form :side="enemy" @set:poke="setEnemy" />
        </div>

        <matchup />

        <!-- <pokemon-table :pokemons="pokemons" /> -->

        <!-- <employee-form @add:employee="addEmployee" />
        <employee-table
            :employees="employees"
            @delete:employee="deleteEmployee"
            @edit:employee="editEmployee"
        /> -->
    </div>
</template>

<script>
import TypeForm from "./components/TypeForm";
import Matchup from "./components/Matchup";
// import PokemonTable from "./components/PokemonTable";
/* import EmployeeForm from "./components/EmployeeForm.vue";
import EmployeeTable from "./components/EmployeeTable.vue"; */

export default {
    name: "app",
    components: {
        //PokemonTable
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
    /* methods: {
        addEmployee(employee) {
            const lastId =
                this.employees.length > 0
                    ? this.employees[this.employees.length - 1].id
                    : 0;
            const id = lastId + 1;
            const newEmployee = { ...employee, id };

            this.employees = [...this.employees, newEmployee];
        },
        deleteEmployee(id) {
            this.employees = this.employees.filter(
                employee => employee.id !== id
            );
        },
        editEmployee(id, updatedEmployee) {
            this.employees = this.employees.map(employee =>
                employee.id === id ? updatedEmployee : employee
            );
        }
    } */
};
</script>

<style>
/* button {
    background: #009435;
    border: 1px solid #009435;
} */

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
