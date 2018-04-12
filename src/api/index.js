/**
 * 请求快捷方法
 * @param {string} method 请求方法 get/post/put/delete
 * @param {string} url url 地址
 * @param {object} opts 请求选项
 */
export const request = ({ method, url, data, params }) => {
    const payload = { method: method.toUpperCase(), url };

    if (payload.method === 'GET') {
        payload.params = params;
    } else {
        payload.body = data;
    }

    return fetch(payload).then(res => res.json());
};
