const parseCookies = (req, res, next) => {
  req.cookies = {};
  if (req.headers.cookie !== undefined) {
    let cookies = req.headers.cookie.split('; ');
    for (let cookie of cookies) {
      let pair = cookie.split('=');
      req.cookies[pair[0]] = pair[1];
    }
  }
  next();
};

module.exports = parseCookies;