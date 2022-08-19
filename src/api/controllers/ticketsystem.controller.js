/**
 * Returns jwt token if registration was successful
 * @public
 */
exports.createTicket = async (req, res, next) => {
  try {
    console.log("CREATE TICKET", req.body);
    res.send("OK");
  } catch (error) {
    return next(error);
  }
};
