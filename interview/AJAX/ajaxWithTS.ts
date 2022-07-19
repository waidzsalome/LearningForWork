interface AjaxRequest {
  method: "GET" | "get" | "POST" | "post";
  url: string;
  data?: any;
}
interface AjaxResponse {
  [prop: string]: any;
}

export default async function ajax(
  options: AjaxRequest
): Promise<AjaxResponse> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const method = options.method.toUpperCase();
    xhr.open(method, options.url, true);
    if (method === "GET") {
      xhr.send(null);
    }
    if (method === "POST") {
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.send(JSON.stringify(options.data));
    }
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4 || xhr.status === 0) return;
      const responseData: AjaxResponse = JSON.parse(xhr.response);
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(responseData);
      } else {
        reject(`request failed with status code ${xhr.status}`);
      }
    };
  });
}
async function Auth() {
  const res = await ajax({
    method: "POST",
    url: "https://ug.baidu.com/mcp/pc/pcsearch",
    data: {
      invoke_info: {
        pos_1: [{}],
        pos_2: [{}],
        pos_3: [{}],
      },
    },
  });
  console.log(res);
}
Auth();
