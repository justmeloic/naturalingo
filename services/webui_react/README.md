## ⚠️ PRE-RELEASE ⚠️

**This service (`webui_react`) hosts the _future_ codebase for the "From First Principles" web UI, built with React.** This is a pre-release version, and the code is currently **under active development**. It is being published so that interested parties can observe the development process and provide early feedback.

**Do _not_ expect this code to be stable or fully functional at this time.** Features may be incomplete, broken, or subject to change without notice. Production deployment is _not_ recommended. This is a development preview only.

**To view the currently deployed, stable version of the web UI, refer to the legacy `webui` service (though note that `webui` is itself deprecated in favor of this React-based version).** This `webui_react` service will eventually replace `webui` once it reaches a stable release.

---

# From First Principles - Web UI Service

![Static Badge](https://img.shields.io/badge/build-passing-brightgreen)
[![Netlify Status](https://api.netlify.com/api/v1/badges/cf0167e8-ec88-47b7-975d-031ba60a0934/deploy-status)](https://app.netlify.com/sites/gorgeous-figolla-bf7c9d/deploys)
[![License](https://img.shields.io/badge/License-Apache%202.0-orange.svg)](https://opensource.org/licenses/Apache-2.0)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/justmeloic/From-First-Principles/issues)
[![GitHub issues](https://img.shields.io/github/issues/justmeloic/From-First-Principles)](https://github.com/justmeloic/From-First-Principles/issues)
[![GitHub stars](https://img.shields.io/github/stars/justmeloic/From-First-Principles)](https://github.com/justmeloic/From-First-Principles/stargazers)

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Tags:** `web-ui` `frontend` `next.js` `tailwind-css` `website` `user-interface`

## Table of Contents

1.  [Project Overview](#project-overview)
2.  [Directory Structure](#directory-structure)
3.  [Development](#development)
    - [Technologies Used](#technologies-used)
    - [Local Development](#local-development)
    - [Building](#building)
4.  [Contributing](#contributing)

This directory contains the source code for the web user interface of "From First Principles." This UI is responsible for presenting the website's content to users in a clear, accessible, and engaging manner. The project has been refactored to use **Next.js** and **Tailwind CSS**, providing a modern, performant, and maintainable foundation.

**[Loïc Muhirwa](https://github.com/justmeloic/)** initiated this project, and we enthusiastically welcome contributions from the community.

## Project Overview <a name="project-overview"></a>

The Web UI is built using Next.js, a React framework for building server-rendered and statically generated websites, and Tailwind CSS, a utility-first CSS framework. This provides a significant improvement over the original HTML, CSS, and JavaScript implementation, offering better performance, SEO, and developer experience.

## Directory Structure <a name="directory-structure"></a>

The directory is structured following standard Next.js conventions:

```
.
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── node_modules
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
├── src
│   ├── app
│   ├── components
│   ├── hooks
│   ├── lib
│   ├── providers
│   ├── styles
│   └── types
├── tailwind.config.ts
└── tsconfig.json
```

- **`public/`**: This directory mirrors the role of the old `assets` folder. It holds static files like images and fonts that will be served directly.
- **`src/app/`**: This is the core of the Next.js application using the App Router. It contains your pages, layouts, and API routes. The structure within `src/app` will likely reflect the old `pages` and `content` directories, but organized according to Next.js routing conventions.
- **`src/components/`**: Contains reusable UI components built with React and styled with Tailwind CSS.
- **`src/hooks/`**: Holds custom React hooks for reusable logic.
- **`src/lib`**: Contains utility and helper functions.
- **`src/styles/`**: Contains global styles and potentially a setup for Tailwind CSS.
- **`tailwind.config.ts`**: Configuration file for Tailwind CSS.
- **`tsconfig.json`**: Configuration file for TypeScript.
- **`components.json`**: Configuration file for components.

## Development <a name="development"></a>

### Technologies Used <a name="technologies-used"></a>

- **Next.js:** A React framework for server-side rendering, static site generation, and API routes.
- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **TypeScript:** A superset of JavaScript that adds static typing.
- **Node and NPM/Yarn**: Used to manage and install dependencies.

### Local Development <a name="local-development"></a>

1.  **Install Dependencies:**

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

2.  **Run the Development Server:**

    ```bash
    npm run dev
    ```

    or

    ```bash
    yarn dev
    ```

    This will start the Next.js development server, typically on `http://localhost:3000`. The development server includes hot-reloading, so changes you make to your code will be reflected in the browser automatically.

### Building <a name="building"></a>

To build the production-ready version of the site:

```bash
npm run build
```

or

```bash
yarn build
```

This command creates an optimized build of your application in the `.next` directory. Next.js will automatically perform static optimization where possible.

For a fully static export (similar to the original static site):
You would likely use the `next export` command if you've structured your application to be fully statically generatable. However, with Next.js 13+ App router you have to configure output in the `next.config.mjs` file by setting `output: 'export'`.

```bash
npm run export
```

or

```bash
yarn export
```

## Contributing <a name="contributing"></a>

We encourage contributions to the Web UI! Please refer to the main project's `CONTRIBUTING_DEV.md` for guidelines on contributing code.

**Specific areas for contribution to the Web UI include:**

- Improving the website's responsiveness and cross-browser compatibility.
- Enhancing the user interface and user experience.
- Adding new features or improving existing ones.
- Optimizing performance.
- Improving accessibility.
- Updating or replacing outdated libraries.

**Join us in making "From First Principles" a beautiful and functional website!**
