#tutorial_hell

Persistent error occurring when running command in terminal
---
$ node server.js
Server is running on port 8080.
Cannot connect to the database! MongooseServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017
    at NativeConnection.Connection.openUri (/mnt/c/Users/murta/Desktop/VTLaptop/Work/Dev/projects/tutorial_hell/node_modules/mongoose/lib/connection.js:846:32)
    at /mnt/c/Users/murta/Desktop/VTLaptop/Work/Dev/projects/tutorial_hell/node_modules/mongoose/lib/index.js:351:10
    at /mnt/c/Users/murta/Desktop/VTLaptop/Work/Dev/projects/tutorial_hell/node_modules/mongoose/lib/helpers/promiseOrCallback.js:32:5
    at new Promise (<anonymous>)
    at promiseOrCallback (/mnt/c/Users/murta/Desktop/VTLaptop/Work/Dev/projects/tutorial_hell/node_modules/mongoose/lib/helpers/promiseOrCallback.js:31:10)
    at Mongoose._promiseOrCallback (/mnt/c/Users/murta/Desktop/VTLaptop/Work/Dev/projects/tutorial_hell/node_modules/mongoose/lib/index.js:1149:10)
    at Mongoose.connect (/mnt/c/Users/murta/Desktop/VTLaptop/Work/Dev/projects/tutorial_hell/node_modules/mongoose/lib/index.js:350:20)
    at Object.<anonymous> (/mnt/c/Users/murta/Desktop/VTLaptop/Work/Dev/projects/tutorial_hell/server.js:21:6)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47 {
  reason: TopologyDescription {
    type: 'Single',
    setName: null,
    maxSetVersion: null,
    maxElectionId: null,
    servers: Map(1) { 'localhost:27017' => [ServerDescription] },
    stale: false,
    compatible: true,
    compatibilityError: null,
    logicalSessionTimeoutMinutes: null,
    heartbeatFrequencyMS: 10000,
    localThresholdMS: 15,
    commonWireVersion: null
  }
}
---