# vue-material-icons (maintenance)
> Vue2 material design icons with easy access to icons names and types (all available in IDE hints).
Hints were tested on IntelliJ IDE. Fonts based on https://fonts.google.com/icons.

- [How to start](#how-to-start)
  - [Get repository](#get-repository)
  - [Setup in project](#installation)
  - [Scripts descriptions](#scripts-descriptions)
  - [Builders](#builders)
  - [Code quality tools](#code-quality-tools)

## How to start

### Get repository
```bash
git clone https://github.com/dbetka/vue-material-icons.git
```

### Installation
```bash
npm i
sudo npm install -g @microsoft/api-extractor
```

### Scripts descriptions

| Script                    | Description                                                                 |
|:------------------------- |:--------------------------------------------------------------------------- |
| `download-icons`          | Download list of icons and its types - save all it into files.              |
| `download-css-and-fonts`  | Download CSS files with links to Google fonts for icons and styles to them. |
| `download-all`            | Run `download-icons` and `download-css-and-fonts` one-by-one.               |
| `dev`                     | Run project demo on localhost.                                              |
| `build`                   | Build dist packages (`index.js`, `local.js`).                               |
| `download-and-build`      | Run `download-all` and `build` one-by-one.                                  |
| `push-to-whatusea`        | Push all project files to external project called Whatusea.                 |
| `download-build-push`     | Run `download-all`, `build` and `push-to-whatusea` one-by-one.              |

### Builders
Project use 2 js builders: 
- `Bili` to build dist packages.
- `Webpack` to run demo.

### Code quality tools
Project use ESLint. Before coding configure your environment to use ESLint configuration.
