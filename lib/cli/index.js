const fs = require('..')

module.exports = (() => {
  return {
    ensureDir: pathToCreate => fs.ensureDirSync(pathToCreate),
    emptyDir: pathToCreate => fs.emptyDirSync(pathToCreate)
  }
})()
