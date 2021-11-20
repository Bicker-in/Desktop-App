
<p align="center">
  <img src="/public/Bickerin_Logo.jpeg" alt="drawing" style="width:125px;"/>
  <h1 align="center">Bicker!n</h1>
</p>

> 
**Bicker!n** is a chat app that provides features such as:
- The ability to join and chat with other users with total anonymity.
- Custom widgets for chatrooms to interact with a chat group's integrations (i.e. GitHub, Jira, etc).

# Install

## Prerequisites 

First follow the instructions about installing Tarui [here](https://tauri.studio/en/docs/getting-started/intro)
This will give you all the instructions you need to set up your environment for the **Bicker!n** App such as downloading Rust.

## Installing Project

After you have cloned the **Bicker!n**, in the root of your repository run this command in your terminal:

```
npm i
```

# Run

After you have followed all the installation instructions, make sure that you have nothing on your computer running on `localhost:3000`.

If nothing is running on port `locahost:3000`, you can freely run the following command:

```
npm run run-app
```

*Be aware this command will take a bit to build the Bicker!n Desktop App.*

After 5-10 minutes at most, you should see a window pop up with the **Bicker!n** title. If so, good job it's up!

# Misc

## Linting

Currently the Bicker!n app uses `ESlint` with `Prettier` for linting. Much of the linting is dealt with by `husky`. If you do want to lint yourself, use the command:

```
npm run lint
```

## Testing

Bicker!n app uses jest for unit-testing. If you want to run it, use the command:

```
npm run test
```

# Technologies Used

1. Tauri
2. React
3. Jest
4. Prettier
5. ChakraUI
6. ESLint

# Contributors

1. (Cgunter1)[https://github.com/Cgunter1]
2. (Compile10)[https://github.com/compile10]

# Contact

[Keep Up With Development!](https://bickerin.com)
