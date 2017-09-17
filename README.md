# fs-dot

Adds cli support to fs-extra for commands such as mkdir -p, cp -r, and rm -rf.

Useful from npm scripts in `package.json`, for example...

    {
      "scripts": {
        "build": "fs.mkdirp lib && uglifyjs src/dev.js > lib/production.js"
      }
    }

## Usage

    fs.mkdirp directory/to/be/created
    fs.clean firectort/to/be/cleaned

For convenience, `fs-extra` is exported for programatic use, so you can import in the usual manner...

    const fs = require('fs-dot')
    // `fs` is reference to `fs-extra`

## Todo

- Tests
- All the other commands, and aliases :)

... for regular fs-extra functionality, see: [fs-extra](https://www.npmjs.com/package/fs-extra)
