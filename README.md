# 🏡&nbsp; [jarv.is](https://jarv.is/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/a7403a53-fd9d-44c0-a708-a84d9fc1454d/deploy-status)](https://app.netlify.com/sites/jakejarvis/deploys) [![View website](https://img.shields.io/badge/view%20site-jarv.is-green)](https://jarv.is/) [![Hugo v0.63.2](https://img.shields.io/badge/hugo-v0.63.2-orange)](https://github.com/gohugoio/hugo) [![Dependabot](https://api.dependabot.com/badges/status?host=github&repo=jakejarvis/jarv.is)](https://github.com/jakejarvis/jarv.is/pulls?q=is%3Apr+label%3Adependencies) [![GitHub repo size](https://img.shields.io/github/repo-size/jakejarvis/jarv.is)](https://github.com/jakejarvis/jarv.is) [![License](https://img.shields.io/github/license/jakejarvis/jarv.is?color=red)](LICENSE.md) [![Twitter Follow](https://img.shields.io/twitter/follow/jakejarvis?label=Follow&style=social)](https://twitter.com/intent/user?screen_name=jakejarvis)


Personal website of [@jakejarvis](https://github.com/jakejarvis), created and deployed using the following:

- [Hugo extended](https://github.com/gohugoio/hugo)
- [Netlify](https://www.netlify.com/)
- [Commento](https://gitlab.com/commento/commento)
- [...and much more.](https://jarv.is/uses/)

I keep an ongoing list of [blog post ideas](https://github.com/jakejarvis/jarv.is/issues/1) and [coding to-dos](https://github.com/jakejarvis/jarv.is/issues/11) as issues in this repo.


## Running a local testing server

#### Using Yarn/NPM:

Run `yarn install` ([Yarn must be installed](https://yarnpkg.com/en/docs/install) first, or use `npm install`) and `yarn start` (or `npm start`), then open [http://localhost:1313/](http://localhost:1313/). Pages will live-refresh when source files are changed.

#### Using Docker:

To ensure consistency and compatibility, the [`Dockerfile`](Dockerfile) in this repository will download the Hugo Extended binary and its dependencies, and start a live testing server.

```bash
docker build -t jarv.is:develop -f Dockerfile .
docker run -v $(pwd):/src -p 1313:1313 jarv.is:develop
```

...then open [http://localhost:1313/](http://localhost:1313/) as above.


## Licenses

![Creative Commons Attribution 4.0 International License](https://raw.githubusercontent.com/creativecommons/cc-cert-core/master/images/cc-by-88x31.png "CC BY")

Site content (everything in [`content/notes`](content/notes/)) is published under the [Creative Commons Attribution 4.0 International License](LICENSE.md) (CC-BY-4.0), which means that you can copy, redistribute, remix, transform, and build upon the content for any purpose as long as you give appropriate credit.

All code in this repository (like my [Hugo theme](layouts/)) is published under the [MIT license](https://opensource.org/licenses/MIT).
