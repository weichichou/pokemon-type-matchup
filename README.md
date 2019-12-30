# Pokemon Type Matchup

## Introduction

This is my full-stack app for practice purpose.

Pokemon lovers can easily check the results for different type matchup. (For example, water-type pokemons can make double damage to fire-type ones.)

![matchup](/demo/Peek-pokemon.gif)

## Table of Contents

- **[Introduction](#introduction)**
- **[Main Functions](#main-functions)**
- **[Technologies Used](#technologies-used)**

## Main Functions

- Input field with autocomplete function (The first generation of 151 pokemons).
- Pokemon type is retrieved from [Pokeapi](https://pokeapi.co/).
- Matchup results are calculated by damage relations.

## Technologies Used

- Backend
  - Jest
  - express
  - ORM (sequelize)
  - Postgres
  - [Pokeapi](https://pokeapi.co/)
- Frontend

  - Vue
  - Vue Material

This project was scaffolded using the vue-create cli. [See the standard vue-create docs](./client/vue-create-docs.md).
