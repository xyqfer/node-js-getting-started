const rp = require('request-promise');

const wake = async () => {
    try {
        await rp.get({
            uri: process.env.SOURCE_URL
        });
    } catch(e) {
        rp.post({
            uri: process.env.DEPLOY_URL,
        });
    }

    rp.get({
        uri: process.env.APP_URL
    });
};
wake();