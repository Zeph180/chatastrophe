const fs = require('fs-extra')

fs.copySync('public', 'build', {
    dereference: true,
    filter: file => file !== '../build/index.html'
    });