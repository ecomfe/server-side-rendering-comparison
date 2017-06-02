
const san = require('san');
const SanApp = require('../assets/build/server.san.bundle').default;
const renderToString = san.compileToRenderer(SanApp);

module.exports = {

    home: function* () {
        
        const pageConfig = {
            listData: require('../mock/list'),
            bannerData: require('../mock/banner')
        };

        yield this.render('page', {
            type: 'san',
            content: renderToString(pageConfig),
            global: JSON.stringify(pageConfig)
        });

    }

}