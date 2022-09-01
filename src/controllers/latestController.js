const { NewsCatcherInstance, latestApi } = require("../api");

module.exports = async (req, res) => {
    let { query } = req;
    let result = await latestApi(NewsCatcherInstance, query);

    console.log(result);

    if ([200, 201].includes(result.status)) {
        return res.status(result.status).json({ success: true, result });
    }
    return res.status(result.status).json({ success: false, result });
};
