/**
 * Global Variable Configuration
 * (sails.config.globals)
 *
 * Configure which global variables which will be exposed
 * automatically by Sails.
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.globals.html
 */
module.exports.globals = {

  /****************************************************************************
  *                                                                           *
  * Expose the lodash installed in Sails core as a global variable. If this   *
  * is disabled, like any other node module you can always run npm install    *
  * lodash --save, then var _ = require('lodash') at the top of any file.     *
  *                                                                           *
  ****************************************************************************/
taxTypePayLoad:
{
    "space_id": 4063280,
        "config": {
        "allow_edit": true,
            "tasks": [],
            "yesno": false,
            "silent_creates": false,
            "yesno_label": null,
            "thumbs": false,
            "app_item_id_padding": 1,
            "show_app_item_id": false,
            "default_view": "badge",
            "allow_tags": false,
            "item_name": "Tax type",
            "allow_attachments": true,
            "allow_create": true,
            "app_item_id_prefix": "",
            "disable_notifications": false,
            "fivestar": false,
            "thumbs_label": null,
            "type": "standard",
            "rsvp": false,
            "description": null,
            "usage": null,
            "fivestar_label": null,
            "approved": false,
            "icon": "251.png",
            "allow_comments": true,
            "name": "Tax Types",
            "icon_id": 251,
            "silent_edits": false,
            "rsvp_label": null,
            "external_id": null
    },
    "fields": [
        {
            "status": "active",
            "type": "text",
            "label": "Xero Tax type name",
            "config": {
                "default_value": null,
                "description": null,
                "settings": {
                    "format": "plain",
                    "size": "small"
                },
                "required": false,
                "mapping": null,
                "label": "Xero Tax type name",
                "visible": true,
                "delta": 0,
                "hidden": false,
                "unique": false
            },
            "external_id": "title"
        }
    ]
},
createitem:{
  "fields": {
    "xero-tax-type-name": "sohitpodiotwo"            
  },
  "file_ids": [],
  "tags": []
}
	// _: true,

  /****************************************************************************
  *                                                                           *
  * Expose the async installed in Sails core as a global variable. If this is *
  * disabled, like any other node module you can always run npm install async *
  * --save, then var async = require('async') at the top of any file.         *
  *                                                                           *
  ****************************************************************************/

	// async: true,

  /****************************************************************************
  *                                                                           *
  * Expose the sails instance representing your app. If this is disabled, you *
  * can still get access via req._sails.                                      *
  *                                                                           *
  ****************************************************************************/

	// sails: true,

  /****************************************************************************
  *                                                                           *
  * Expose each of your app's services as global variables (using their       *
  * "globalId"). E.g. a service defined in api/models/NaturalLanguage.js      *
  * would have a globalId of NaturalLanguage by default. If this is disabled, *
  * you can still access your services via sails.services.*                   *
  *                                                                           *
  ****************************************************************************/

	// services: true,

  /****************************************************************************
  *                                                                           *
  * Expose each of your app's models as global variables (using their         *
  * "globalId"). E.g. a model defined in api/models/User.js would have a      *
  * globalId of User by default. If this is disabled, you can still access    *
  * your models via sails.models.*.                                           *
  *                                                                           *
  ****************************************************************************/

	// models: true
};
