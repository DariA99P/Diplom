const axios = require('axios');

const fetchApps = async (_source, { id }, c, d) => {
    let apps = [];

    await axios.get(`http://localhost:3002/apps/${id || ''}`)
        .then(function (response) {
            apps = response.data;
        })

    return apps;
}

module.exports = {
    fetchApps,
}
