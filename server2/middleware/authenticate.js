module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({error: 'A valid log in is required to access this page.'});
  }

  next();
};
