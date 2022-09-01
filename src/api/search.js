module.exports = async (instance, params) => {
    try {
        let response = await instance({ url: "search", method: "GET", params });
        let { config, data, status, statusText } = response;

        return { status, statusText, data };
    } catch (error) {
        let {
            code,
            name,
            response: {
                status,
                statusText,
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
