module.exports = async (instance, params) => {
    try {
        let response = await instance({
            url: "latest_headlines",
            method: "GET",
            params,
        });
        let { status, statusText, data } = response;
        return { status, statusText, data };
    } catch (error) {
        let {
            code,
            name,
            response: {
                status,
                data: { error_code, message },
            },
        } = error;
        return {
            code,
            name,
            status,
            error_code,
            message,
        };
    }
};
