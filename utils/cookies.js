export const setCookie = (key, value) => {
  window.document.cookie = key + '=' + value + ';' + 'expires=0';
  // console.log(key, value);
};

export function getCookie(cname) {
  let name = cname + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

export function removeCookie(name) {
  // console.log("removed");
  document.cookie = name + '=0; expires=Thu, 01 Jan 1800 00:00:00 UTC;';
}
