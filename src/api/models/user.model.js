const mongoose = require("mongoose");

/**
 * User Roles
 */
const roles = ["user", "admin"];

/**
 * Api Key Schema
 * @private
 */
const apiKeySchema = new mongoose.Schema(
  {
    apiKey: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 128,
    },
    name: {
      type: String,
      maxlength: 128,
      index: true,
      trim: true,
    },
    services: {
      facebook: String,
      google: String,
    },
    role: {
      type: String,
      enum: roles,
      default: "user",
    },
    picture: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Methods
 */
apiKeySchema.method({
  transform() {
    const transformed = {};
    const fields = ["id", "name", "picture", "role", "createdAt"];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});

/**
 * Statics
 */
apiKeySchema.statics = {
  roles,
};

/**
 * @typedef ApiKey
 */
module.exports = mongoose.model("ApiKey", apiKeySchema);
