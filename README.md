# Issue
When using babel-plugin-transform-decorators-legacy, decorators work just fine in src/main.js. Dependencies imported from there, though, throw an error during parsing if they contain decorators (unexpected token on the '@'). The syntax of both decorators is the same. The external dependency decorator is [this one](https://github.com/Bizboard/arva-js/blob/develop/src/routers/ArvaRouter.js#L16).

Expected is that the decorator plugin would work for files imported from a dependency as well as from files in the project's source directory.

# Repro:
* npm i && jspm i
* jspm build src/main.js

If you remove the import from src/main.js and rebuild, the error is gone.
