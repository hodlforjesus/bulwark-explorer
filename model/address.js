const mongoose = require('mongoose');

/**
 * Address
 *
 * Keeps track of various address activity within the network
 */
const Address = mongoose.model('Address', new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  address: { index: true, required: true, type: String },
  balance: { required: true, type: Number },

  // Deep analytics
  stakeRewardsCount: { required: true, type: Number },
  mnRewardsCount: { required: true, type: Number },
  stakeRewardsSum: { required: true, type: Number },
  mnRewardsSum: { required: true, type: Number },
  txsInCount: { required: true, type: Number },
  txsOutCount: { required: true, type: Number },
  firstTxDate: { required: true, type: Date },
  lastTxDate: { type: Date },
  totalValueIn: { required: true, type: Number },
  totalValueOut: { required: true, type: Number },
}, { versionKey: false }), 'addresses');

module.exports = Address;