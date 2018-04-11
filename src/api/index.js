const HEALTH_APP_PATH = '/health/';
const HEALTH_REACT_PATH = '/health-react/';

/**
 * 请求快捷方法
 * @param {string} method 请求方法 get/post/put/delete
 * @param {string} url url 地址
 * @param {object} opts 请求选项
 */
export const request = ({ method, url, data, params }) => {
    const payload = { data, method, url };
    return fetch(payload).then(res => res.json());
};

/**
 *
 * @param {string} url base 地址
 * @param {object} actions resource 操作 query/list/update/delete
 */
export const resource = (baseUrl, actions) => {
    return;
};
