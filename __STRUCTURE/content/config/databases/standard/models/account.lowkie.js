'use strict';

const lowkie = require('lowkie');
const Schema = lowkie.Schema;
const ObjectId = Schema.ObjectId;
const scheme = {
    email: {
        type: String,
    },
    firstname: String,
    lastname: String,
    username: {
        type: String,
    },
    password: String,
    url: String,
    birthday: Date,
    userid: {
        type: Number,
    },
    accesstoken: String,
    description: {
        type: String,
        'default': 'No profile'
    },
    activated: {
        type: Boolean,
        'default': false
    },
    location: {
        city: String,
        country: String,
        state: String,
        zip: String,
        loc: {
            longitude: Number,
            latitude: Number
        }
    },
    accounttype: {
        type: String,
        'default': 'basic'
    },
    gender: {
        type: String
    },
    assets: [{
        type: ObjectId,
        ref: 'Asset'
    }],
    primaryasset: {
        type: ObjectId,
        ref: 'Asset'
    },
    coverimages: [{
        type: ObjectId,
        ref: 'Asset'
    }],
    coverimage: {
        type: ObjectId,
        ref: 'Asset'
    },
    userroles: [{
        type: ObjectId,
        ref: 'Userrole'
    }],
    tags: [{
        type: ObjectId,
        ref: 'Tag'
    }],
    categories: [{
        type: ObjectId,
        ref: 'Category'
    }],
    apikey: String,
    random: Number
};

module.exports = {
    scheme,
    options: {},
    coreDataOptions: {
        docid: '_id',
        sort: { createdat: -1, },
        search: ['email', 'firstname', 'lastname', 'username', ],
        population: 'assets primaryasset coverimages coverimage userroles tags categories'
    }
};