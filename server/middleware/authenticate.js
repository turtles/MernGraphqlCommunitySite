module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({error: 'A valid login is required to access this page.'});
  }

  next();
};
