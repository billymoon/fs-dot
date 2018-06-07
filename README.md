# fs-dot - fs commands in cli

When writing commands in npm scripts, there are many times it's useful to create, destroy, and clean files and directories. The problem is that the commands to do that might differ from platform to platform. [fs-extra](https://www.npmjs.com/package/fs-extra) does a great job of providing some utility commands missing from nodejs's native `fs` module.

... enter `fs-dot` which acts as a tiny cli wrapper to `fs-extra` (which includes all native nodejs `fs` methods). Any output will be passed through `JSON.stringify` and logged to the console.

## Quickstart

    $ npm i -g fs-dot

    $ fs-dot path-exists somedir
    $ fs-dot ensure-dir somedir
    $ fs-dot readdir .

## Usage

    $ fs-dot <command> [params] {opts}

## Commands

Ths command has non alphabetic characters removed, is then lowercased and comared to lowercased commands in `fs-extra`. This means you can write `ensureDir` or `ensure-dir` or `ENSUREDIR` and they will all resolve to `ensureDirSync` and run it.

    mkdirp
    ensuredir
    ... and all other fs-extra and fs methods etc...

## Params

Any arguments passed after the command as interpreted by minimist as `argv._` will be passed as arguments to the `fs` method being called.

## Opts

Any opts as parsed by minimist will be passed as the last argument to the `fs` method being called

## Programatic use

If you import `fs-dot` for use in npm scripts, the `fs-extra` library is also exposed for programatic use, so you can:

    const fs = require('fs-dot')

This is just a convenience method that directly exposes `fs-extra`, so will have identical behaviour.

## Gotchas

1. with great power comes great responsibility - this tool is powerful, please use responsibly
2. every command runs the `Sync` version
3. whatever you pass as arguments will passed through to the `fs` commands without validation
