# Sandbox BEM build

    cd sandbox/bem/build
    npm install

## Build page

Sample config [src/poject-build-page/.bem/enb-make.js](src/poject-build-page/.bem/enb-make.js), [more info](https://github.com/enb/enb-bem-techs/blob/master/docs/build-page.ru.md).

    enb make -d src/poject-build-page

## Build by platform

Sample config [src/project-build-by-platform/.bem/enb-make.js](src/project-build-by-platform/.bem/enb-make.js).

```sh
  ├── .bem/
  │   └── enb-make.js # ENB-config
  ├── common.blocks/
  ├── desktop.blocks/
  ├── phone.blocks/
  └── bundle/
      ├── name
      │   ├── name.bemjson.js
      │   ├── name.desktop.css
      │   ├── name.phone.css
```

    enb make -d src/project-build-by-platform
