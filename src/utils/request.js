import { logical } from 'utils/logical';

function makeFetch ({ url, config }) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      ...config,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resolve)
      .catch(reject);
  });
}

function addBodyToConfig (config, data) {
  if (logical.isDefined(data)) {
    config.body = JSON.stringify(data);
  }
}

export const request = {
  host: PRODUCTION ? '' : 'https://localhost:3030',
  dataToPathVariables (data) {
    let pathData = '';

    if (Object.keys(data).length > 0) {
      pathData += '?';
      pathData += Object
        .entries(data)
        .map(([key, val]) => key + '=' + val)
        .join('&');
    }
    return pathData;
  },
  get ({ url = '/', data = {}, config = {} }) {
    const pathVariables = request.dataToPathVariables(data);
    const fullUrl = request.host + url + pathVariables;

    return makeFetch({
      url: fullUrl,
      config: {
        method: 'GET',
        ...config,
      },
    });
  },
  post ({ url = '/', data, config = {} }) {
    const fullUrl = request.host + url;
    addBodyToConfig(config, data);

    return makeFetch({
      url: fullUrl,
      config: {
        method: 'POST',
        ...config,
      },
    });
  },
  put ({ url = '/', data = {}, config = {} }) {
    const fullUrl = request.host + url;
    addBodyToConfig(config, data);

    return makeFetch({
      url: fullUrl,
      config: {
        method: 'PUT',
        ...config,
      },
    });
  },
  delete ({ url = '/', data = {}, config = {} }) {
    const fullUrl = request.host + url;
    addBodyToConfig(config, data);

    return makeFetch({
      url: fullUrl,
      config: {
        method: 'DELETE',
        ...config,
      },
    });
  },
};

window.request = request;
