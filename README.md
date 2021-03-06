# :zap: Pokemon Type Matchup :fire:

## Introduction

This is my full-stack app for practice purpose.

Simply input the enemy and your pokemon, and then get the type matchup results. (For example, water-type pokemons can make double damage to fire-type ones.)

## Table of Contents

- **[Introduction](#introduction)**
- **[Main Functions](#main-functions)**
- **[Technologies Used](#technologies-used)**

## Main Functions

- Input field with autocomplete function (The first generation of 151 pokemons).
- Pokemon type is retrieved from [Pokeapi](https://pokeapi.co/).
- Matchup results are calculated by damage relations.

![matchup](./matchup.gif)

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

The frontend was scaffolded using the vue-create cli. [See the standard vue-create docs](./client/vue-create-doc.md).
