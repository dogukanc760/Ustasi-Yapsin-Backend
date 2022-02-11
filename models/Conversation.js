const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
    targetName:{type:String, default:'Kullanıcı Adı'}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Conversation", ConversationSchema);
