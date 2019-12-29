<!-- : is shorthand for v-bind -->

<template>
    <div id="app" class="small-container">
        <h1>Pokemon Matchup</h1>
        <type-form />
        <matchup-form />

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
import MatchupForm from "./components/MatchupForm";
// import PokemonTable from "./components/PokemonTable";
/* import EmployeeForm from "./components/EmployeeForm.vue";
import EmployeeTable from "./components/EmployeeTable.vue"; */

export default {
    name: "app",
    components: {
        //PokemonTable
        TypeForm,
        MatchupForm
    },
    data() {
        return {
            pokemons: [
                {
                    id: 1,
                    yours: "Pikachu",
                    enemy: "Butterfree",
                    results: "Double damage"
                }
            ]
        };
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

.small-container {
    max-width: 6980px;
}
</style>
