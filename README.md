# RingCentral Demo App Template for Node.js

This repository contains a template app for RingCentral demo apps. It can be used by Node.js developers as a handy starting point.

### Globally Installed Assumptions

* Node.js
* NPM
* Bower.js
* Express.js

### Installation

* Fork this repository into your Github account
* Create a new directory which will contain your new demo
    ```
    mkdir path/to/demo && cd $_
    ```
* Clone your fork into your demo app directory
    ```
    git clone https://github.com/<yourUserName>/ringcentral-demo.git .
    ```
* Once it is cloned, install the Node dependencies
    ```
    npm install
    ```
* Finally install the Bower dependencies
    ```
    bower install
    ```
### Configuration
You will need to provide some configuration constants for the application. The demo app is configured to use the `dotenv` module.

Create a file in the root of the demo app named `.env`.

**Required Environment Variables**
```
# RING CENTRAL API KEYS
RC_APP_ENV=sandbox
RC_APP_KEY=<YOUR_APP_KEY>
RC_APP_SECRET=<YOUR_APP_SECRET>
RC_APP_NAME=<YOUR_APP_NAME>
RC_API_SERVER=https://platform.devtest.ringcentral.com
RC_APP_REDIRECT_URI=http://localhost:3000/oauth/redirect
RC_APP_AUTH_STATE=<SOME_RANDOM_INVALIDATION_STRING>
```

NOTE: The `.gitignore` file which comes with this demo app is set to ignore this environment variable file. It is highly recommended that you do not change this to prevent committing your API keys into your repository's history.

### Running Locally

```
npm start
```

Open your browser of choice, and visit: [http://localhost:3000](http://localhost:3000)

### Running Tests

```
npm test
```

If you would like to change the test runner, you can easily do so by modifying the `package.json.script.test` value and `npm uninstall --save mocha` followed by installing any test runner module you like.

## Issues &amp; Contributing
Before adding new issues, please review the issue tracker to make sure they haven't already been reported.

Please use the Github Issue tracker to report any issues and include:

* Good issue titles which summarize the issue
* Comprehensive issue data:
  * What the issue is
  * How to recreate the issue
  * Any supporting data or error codes

## License
Copyright &copy; 2015 Benjamin Dean
[View MIT License](/LICENSE)
