// 请求环境  development (开发环境)  production (生产环境)
const ENV = process.env.SERVER_URL ;

// 封装请求地址和环境
/**
 * 接口请求地址
 * 开发环境使用代理地址, 生产环境使用 API 地址
 * @return {String}
 */
function requertUrl() {
  let url = "";
  if (ENV === "production") {
    url = process.env.VUE_APP_SERVER_URL;
  }
  return url;
}

// get 请求

function requertByGet(axios, url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}

// post 请求
function requertByPost(axios, url, params) {
  return new Promise((reslve, reject) => {
    axios({
      method: "post",
      url,
      data: params
    })
      .then(res => {
        reslve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}

export { requertUrl, requertByGet, requertByPost };
