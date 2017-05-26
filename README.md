# deploy.sample
Sample deployment for debugging on Now.

https://deploy-sample.db.team/



# Deploy
Run the `yarn run deploy` script which builds Typescript then deploys to `now`:

    yarn run build
    now


# Deployment Console Output
Error when installing `@tdb/util.server` (private on NPM).  No error when installing `@tdb/util` which is a public module in the NPM registry.

    yarn deploy v0.18.1
    $ yarn run build && now
    yarn run v0.18.1
    $ rm -rf ./lib && tsc
    ✨  Done in 1.81s.
    > Deploying ~/code/samples/deploy.sample under undefined
    > Using Node.js 7.10.0 (default)
    > Ready! https://deploysample-bdkmbehcin.now.sh (copied to clipboard) [3s]
    > Upload [====================] 100% 0.0s
    > Sync complete (6.78kB) [2s]
    > Initializing…
    > Building
    > ▲ npm install
    > ✓ Using "yarn.lock"
    > ⧗ Installing:
    >  ‣ @tdb/util@^1.0.72
    >  ‣ @tdb/util.server@^1.0.20
    > Error: Error 404 from http://10.100.202.49:3000/@tdb/util.server/-/util.server-1.0.20.tar
    >     at _callee15$ (/usr/lib/node_modules/@zeit/ace/build/install.js:909:21)
    >     at tryCatch (/usr/lib/node_modules/@zeit/ace/node_modules/regenerator-runtime/runtime.js:65:40)
    >     at Generator.invoke [as _invoke] (/usr/lib/node_modules/@zeit/ace/node_modules/regenerator-runtime/runtime.js:303:22)
    >     at Generator.prototype.(anonymous function) [as next] (/usr/lib/node_modules/@zeit/ace/node_modules/regenerator-runtime/runtime.js:117:21)
    >     at step (/usr/lib/node_modules/@zeit/ace/node_modules/babel-runtime/helpers/asyncToGenerator.js:17:30)
    >     at /usr/lib/node_modules/@zeit/ace/node_modules/babel-runtime/helpers/asyncToGenerator.js:28:13
    >     at process._tickCallback (internal/process/next_tick.js:109:7)
    > ▲ npm install
    > Installing package @tdb/util@^1.0.72
    > Installing package @tdb/util.server@^1.0.20
    > ▲ npm run now-build
    > > deploy.sample@1.0.0 now-build /home/nowuser/src
    > > echo no-op
    > no-op
    > ▲ npm start
    > > deploy.sample@1.0.0 start /home/nowuser/src
    > > node .
    > Running on 8080 (prod)
    > Deployment complete!
    ✨  Done in 54.45s.



