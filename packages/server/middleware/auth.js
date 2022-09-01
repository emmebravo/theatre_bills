const ensureAuth = (request, response, next) => {
  if (request.isAuthenticated()) {
    return next();
  } else {
    response.redirect('/');
  }
};

const ensureGuest = (request, response, next) => {
  if (!request.isAuthenticated()) {
    return next();
  } else {
    response.redirect('/');
  }
};

export { ensureAuth, ensureGuest };
