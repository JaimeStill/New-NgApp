# Angular Template

* [Setup](#setup)
* [Baseline Packages Removed](#baseline-packages-removed)
* [Added Packages](#added-packages)
* [Removed Files](#removed-files)
* [Configuration Changed](#configuration-changed)

```bash
ng n {app} --packageManager=yarn --routing=true --skipTests=true --style=scss -g -f
```

## Setup
[Back to Top](#angular-template)

* Clone this repository to `%USERPROFILE%/Documents/PowerShell/Modules` via:
    ```bash
    git clone https://github.com/JaimeStill/New-NgApp
    ```

* Applications can be created from the template using the [New-NgApp](./New-NgApp.psm1) function:
  * `$Destination` - The directory the template should be copied to
  * `$Install` - If present, the script will call `yarn install` on the `$Destination` directory after the template is copied
  * Example:

    ```pwsh
    New-NgApp -Destination ..\src\app -Install
    ```

* You can specify the port that the Angular application runs in by modifying the `port` option in [angular.json](./angular.json):

  ```json
  {
    "projects": {
      "template": {
        "architect": {
          "serve": {
            "options" {
              "port": 3000
            }
          }
        }
      }
    }
  }
  ```

* Update the `start:server` and `build:server` scripts in [package.json](./package.json) to reflect your current server setup.

* Set the `title` in [index.html](./src/index.html)

* Adjust environment settings in [environment.ts](./environments/environment.ts)

## Baseline Packages Removed
[Back to Top](#angular-template)

* @types/jasmine
* @types/jasminewd2
* jasmine-core
* jasmine-spec-reporter
* karma
* karma-chrome-launcher
* karma-coverage-istanbul-reporter
* karma-jasmine
* karma-jasmine-html-reporter
* protractor

## Added Packages
[Back to Top](#angular-template)

* `dependencies`
    * @angular/cdk
    * @angular/flex-layout
    * @angular/material
    * hammerjs
    * marked
    * prismjs
* `devDependencies`
    * @angular/language-service
    * @fortawesome/fontawesome-free
    * concurrently
    * material-icons
    * roboto-fontface

## Removed Files
[Back to Top](#angular-template)

* karma.conf.js
* tsconfig.spec.json
* e2e (entire directory)
* src
    * styles.scss
    * test.ts

## Configuration Changes
[Back to Top](#angular-template)

* [angular.json](./angular.json)
* [package.json](./package.json)
* [tsconfig.json](./tsconfig.json)
* [tslint.json](./tslint.json)
