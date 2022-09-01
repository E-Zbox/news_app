const { NewsCatcherInstance, sourcesApi } = require("../api");

module.exports = async (req, res) => {
    let { query } = req;
    let result = await sourcesApi(NewsCatcherInstance, query);

    res.status(result.status).json({
        success: [200, 201].includes(result.status),
        result,
    });
};
