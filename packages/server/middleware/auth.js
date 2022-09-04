const ensureAuth = (request, response, next) => {
  if (request.isAuthenticated()) {
    return next();
  } else {
    response.redirect('/');
  }
};

export { ensureAuth };
