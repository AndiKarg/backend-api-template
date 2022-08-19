const checkApiKey = (req, res, next) => {
  console.log("CHECK API KEY", req.body);
  next();
};

exports.authorize = (req, res, next) => checkApiKey()(req, res, next);
