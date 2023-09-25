"use strict";

const mongoose = require('mongoose');
const config = require('../../config/environment/dbDependencies');
const mongoosePaginate = require('mongoose-paginate');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const db = mongoose.connect(config.dbURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
const Schema = mongoose.Schema;
mongoose.set('debug', true);
let now;
mongoose.Promise = require('bluebird');


const TimezoneSchema = new Schema({
    timezone_uid: { type: String, required: true },
    timezone_name: { type: String, required: true },
    code: { type: String, required: true },
    zone_offset: { type: String, required: true },
    is_active: { type: Boolean, default: true },
    is_deleted: { type: Boolean, default: false },
    created_at: { type: Date, required: true, default: Date.now },
    updated_at: { type: Date, required: true, default: Date.now }
});
TimezoneSchema.pre('save', function (next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});


const CountrySchema = new Schema({
    country_uid: { type: String, required: true },
    country_name: { type: String, required: true },
    code: { type: String, required: true },
    //in_use: { type: Boolean, default: false },
    is_active: { type: Boolean, default: true },
    is_deleted: { type: Boolean, default: false },
    created_at: { type: Date, required: true, default: Date.now },
    updated_at: { type: Date, required: true, default: Date.now }
});
CountrySchema.pre('save', function (next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

const StateSchema = new Schema({
    state_uid: { type: String, required: true },
    state_name: { type: String, required: true },
    code: { type: String },
    country_id: { type: Schema.Types.ObjectId, ref: 'Country' },
    is_active: { type: Boolean, default: true },
    is_deleted: { type: Boolean, default: false },
    created_at: { type: Date, required: true, default: Date.now },
    updated_at: { type: Date, required: true, default: Date.now }
});
StateSchema.pre('save', function (next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

const CitySchema = new Schema({
    city_uid: { type: String, required: true },
    city_name: { type: String, required: true },
    code: { type: String },
    country_id: { type: Schema.Types.ObjectId, ref: 'Country' },
    state_id: { type: Schema.Types.ObjectId, ref: 'State' },
    is_active: { type: Boolean, default: true },
    is_deleted: { type: Boolean, default: false },
    created_at: { type: Date, required: true, default: Date.now },
    updated_at: { type: Date, required: true, default: Date.now }
});
CitySchema.pre('save', function (next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

const AdminUserSchema = new Schema({
    admin_user_uid: { type: String, required: true },
    time_zone_id: { type: Schema.Types.ObjectId, ref: 'Timezone' },
    admin_name: { type: String, required: true },
    user_name: { type: String },
    email: { type: String },
    password: { type: String },
    mobile_number: { type: String },
    type: { type: String, enum: ['ADMIN', 'SUPER_ADMIN'], required: true, default: 'ADMIN' },
    is_active: { type: Boolean, default: true },
    is_deleted: { type: Boolean, default: false },
    created_by: { type: Schema.Types.ObjectId, ref: 'Admin_User' },
    updated_by: { type: Schema.Types.ObjectId, ref: 'Admin_User' },
    created_at: { type: Date, required: true, default: Date.now },
    updated_at: { type: Date, required: true, default: Date.now }
});
AdminUserSchema.pre('save', function (next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});
AdminUserSchema.plugin(mongoosePaginate);


<<<<<<< HEAD
const NewsFeedsSchmea = new Schema ({
=======
const NewsFeedsSchema = new Schema ({
>>>>>>> e67d4436f7a9a760ade260287022da66428a4477
    newsfeeds_uid:{ type: String, required: true },    
    title: { type: String },
    feeds_type: { type: String, enum: ['NEWS_FEEDS', 'ARTICLES'], default: 'NEWS_FEEDS' },
    posted_by_caregiver: { type: Schema.Types.ObjectId, ref: 'Job_Seeker'}, 
    posted_by_admin: { type: Schema.Types.ObjectId, ref: 'Admin_User'},   
    content: {type: String },
    images: {type: String },
    is_hidden: { type: Boolean, default: false },
    is_active: { type: Boolean, default: true },
    is_deleted: { type: Boolean, default: false },
    created_at: { type: Date, required: true, default: Date.now },
    updated_at: { type: Date, required: true, default: Date.now },
});

<<<<<<< HEAD
NewsFeedsSchmea.pre('save', function (next) {
=======
NewsFeedsSchema.pre('save', function (next) {
>>>>>>> e67d4436f7a9a760ade260287022da66428a4477
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});

<<<<<<< HEAD
NewsFeedsSchmea.plugin(mongoosePaginate);
=======
NewsFeedsSchema.plugin(mongoosePaginate);



const LanguagesSchema = new mongoose.Schema({
    languages_uid: { type: String, required: true }, 
    language: { type: String, required: true },
    code: { type: String, required: true },
    is_active: { type: Boolean, default: true },
    is_deleted: { type: Boolean, default: false },
    created_at: { type: Date, required: true, default: Date.now },
    updated_at: { type: Date, required: true, default: Date.now }
});
LanguagesSchema.pre('save', function (next) {
    now = new Date();
    this.updated_at = now;
    if (!this.created_at) {
        this.created_at = now;
    }
    next();
});
>>>>>>> e67d4436f7a9a760ade260287022da66428a4477


// Export the schema to register with MongoDB
module.exports = {
<<<<<<< HEAD
    Timezone: mongoose.model('Timezone', TimezoneSchema),
    Country: mongoose.model('Country', CountrySchema),
    State: mongoose.model('State', StateSchema),
    City: mongoose.model('City', CitySchema),
    Admin_User: mongoose.model('Admin_User', AdminUserSchema),
    NewsFeeds: mongoose.model('NewsFeeds', NewsFeedsSchmea),
=======
    NewsFeeds: mongoose.model('NewsFeeds', NewsFeedsSchema),
    Languages: mongoose.model('Languages', LanguagesSchema)

>>>>>>> e67d4436f7a9a760ade260287022da66428a4477
}
