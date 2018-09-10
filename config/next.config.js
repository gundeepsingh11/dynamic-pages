// next.config.js

const getRoutes = require('../app/routes');

module.exports = {
    useFileSystemPublicRoutes: false
}

module.exports = {
    exportPathMap: getRoutes
};