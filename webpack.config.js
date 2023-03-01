/* Front */
var EncoreFront = require('@symfony/webpack-encore');
EncoreFront
    .setOutputPath('views/')
    .setPublicPath('/views/')
    .addEntry('front', './webpack/front/front.js')
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSassLoader()
    .enableSourceMaps(!EncoreFront.isProduction())
    .enableVersioning(EncoreFront.isProduction());

EncoreFront.configureFilenames({
    css: 'css/[name].css',
    js: 'js/[name].js'
});

const frontConfig = EncoreFront.getWebpackConfig();

/* Admin */
var EncoreAdmin = require('@symfony/webpack-encore');
EncoreAdmin
    .setOutputPath('views/')
    .setPublicPath('/views/')
    .addEntry('admin', './webpack/admin/admin.js')
    .disableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSassLoader()
    .enableSourceMaps(!EncoreAdmin.isProduction())
    .enableVersioning(EncoreAdmin.isProduction());

EncoreAdmin.configureFilenames({
    css: 'css/[name].css',
    js: 'js/[name].js'
});

const adminConfig = EncoreAdmin.getWebpackConfig();

module.exports = [frontConfig, adminConfig];
