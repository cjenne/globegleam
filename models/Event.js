const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  before_img_url: String,
  after_img_url: String,
  title: { type: String, required: true },
  date: { type: Date, required: true},
  start_time: { type: Date, required: true},
  street_address: { type: String, required: true },
  city: String,
  state: String,
  zip: Number

		// id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
		// before_img_url: { type: Sequelize.STRING },
		// after_img_url: { type: Sequelize.STRING },
		// title: {type:Sequelize.STRING, allowNull: false },
		// date: { type: Sequelize.DATE, allowNull: false},
		// start_time: {type:Sequelize.TIME, allowNull: false},
		// street_address: {type:Sequelize.STRING, allowNull: false },
		// city: { type:Sequelize.STRING },
    //     state: {type: Sequelize.STRING},
		// zip: {type: Sequelize.INTEGER}, 
    //     lat: {type: Sequelize.DECIMAL(10, 8) },
    //     lng: {type: Sequelize.DECIMAL(11, 8) },
    //     status: {type: Sequelize.ENUM('active','inactive'),defaultValue:'active' }

});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
