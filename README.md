# MuruPortfolio

Personal portfolio built with React. It displays an introduction, about section, work experience, certifications and contact links.

## Quick start

1. Install dependencies:

```sh
npm install
```

2. Run locally:

```sh
npm start
```

Build for production:

```sh
npm run build
```

See scripts in [package.json](package.json).

## Project entry points

- App root: [src/index.js](src/index.js)
- Main app component: [src/App.js](src/App.js)
- Static HTML template: [public/index.html](public/index.html)

## Main components

- Navbar: [src/Component/Routes/Navbar/Navbar.js](src/Component/Routes/Navbar/Navbar.js) (`Navbar`)
- Intro: [src/Component/Intro/Intro.js](src/Component/Intro/Intro.js) (`Intro`)
- About: [src/Component/About/About.js](src/Component/About/About.js) (`About`)
- Experience: [src/Component/Experience/Experience.js](src/Component/Experience/Experience.js) (`Experience`)
- Certification: [src/Component/Certification/Certification.js](src/Component/Certification/Certification.js) (`Certification`)
- Contact: [src/Component/Contact/Contact.js](src/Component/Contact/Contact.js) (`Contact`)
- Contact list subcomponent: [src/Component/Contact/Contactme/Contactme.js](src/Component/Contact/Contactme/Contactme.js) (`Contactme`)
- (Optional) Project placeholder: [src/Component/Project/Project.js](src/Component/Project/Project.js) (`Project`)

## Styling

Global styles: [src/index.css](src/index.css) and [src/App.css](src/App.css). Component CSS lives next to components (for example [src/Component/Intro/Intro.css](src/Component/Intro/Intro.css)).

## Data & icons

All shared data and icons live in the utils module:

- Data and exports: [src/assets/utils.js](src/assets/utils.js)
  - [`utils.navBardetails`](src/assets/utils.js) — navbar items
  - [`utils.navBarTitle`](src/assets/utils.js) — site title
  - [`utils.myIntr`](src/assets/utils.js) — intro text
  - [`utils.myDetails`](src/assets/utils.js) — about cards
  - [`utils.skills`](src/assets/utils.js) — skills list and icons
  - [`utils.projectdetails`](src/assets/utils.js) — work experience entries
  - [`utils.myCertifications`](src/assets/utils.js) — certifications
  - [`utils.contact`](src/assets/utils.js) — contact links and icons
  - [`utils.contactme`](src/assets/utils.js) — contact section text

Icons are provided via `react-icons` and referenced inside [src/assets/utils.js](src/assets/utils.js).

## Tests & tooling

- Basic test: [src/App.test.js](src/App.test.js)
- Jest DOM setup: [src/setupTests.js](src/setupTests.js)
- Web vitals helper: [src/reportWebVitals.js](src/reportWebVitals.js)

## Notes

- Fonts: project includes variable Open Sans via dependency `@fontsource-variable/open-sans` (see [src/index.js](src/index.js)).
- WhatsApp floating chat is enabled in [src/App.js](src/App.js) via `react-floating-whatsapp`.
- Build output is placed in `build/` (ignored in .gitignore).
