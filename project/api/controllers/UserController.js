/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var console = require("rangoli");
module.exports = {
create : function(req, res){
		var userData = req.body;
		User.save(userData, function(err, resUser){
			if(!err){
				res.json(resUser);
			}
      else{
				res.json(err);
			}
       

		});
},


getUser : function(req, res){
       console.log('--------->GET body',req.params.all());
    	 var email = req.param('email');
          
       User.get(email, function(err, user){
            if(!err){
            res.json(user);
          }
          else{
            res.json(err);
          }
       });
    	
},

putUser : function(req, res){
        console.log('PUT BODY-------->');
        var idone = req.param('id');
        console.log(idone)
        var data = req.body;
        console.log(data);
           User.put(idone, data, function(err, user){
            if(!err){
              console.log(user);
            res.json(user);
                   }
          else{
            res.json(err);
              }
          });  
},


deleteUser: function(req, res, next){
    var email = req.param('email');
        var data = req.body;
       User.des(email, data, function(err, user)
       {
           if(!err){
                res.json(user);
              }

              else {
                res.json (err);
              }
              });

           },

//    postUserone: function(req, res){
//     var rp = require('request-promise');
//     rp = {
//     method: 'POST',
//     uri: 'https://podio.com/oauth/token',
//     body: {
//             grant_type:'authorization_code',
//              client_id:'podioapp-l9nmvz',
//               redirect_uri:'http://09a59dff.ngrok.io',
//                client_secret:'DZeSnkuIAiHvir9Bwvy65lgwYQlzWU7MhinxjaLHY7q1bI62vPnpIp36lJZwxO6u',
//                   code:'3d5bc329e6e244febc77bda6aa3419b7' 
//     },
//     json: true // Automatically stringifies the body to JSON 
// };
 
// rp(options)
//     .then(function (parsedBody) {
//         console.log("------>", data);
//     })
//     .catch(function (err) {
//         console.log('--->', err);
//     });
    // =============================================================================================>
     
 // module.exports = {
  // *****to access the token**********
  podioFunction: function(req, res){
    var rp = require('request-promise');
    rp({
              uri: 'https://podio.com/oauth/token?grant_type=authorization_code&client_id='+'podioapp-0xtgs1'+'&redirect_uri='+'http://447ec908.ngrok.io'+'&client_secret='+'LcfFjhinMUU2NKfYDRyrW8p1mosiWLGr173jCYxgoLCitnnKCprOgisngiJfEgZI'+'&code='+'42247381655649e888c12c431f1a7099', 
              method: "POST",
              json: true,
              headers: {
                  "content-type": "application/json"
              },
              resolveWithFullResponse: true
          })
          .then(function (body) {
            if(body.body){
              User.podiotoken(body.body, function(err, data){
                if(err){
                  sails.log(err);
                  res.json("error", err);
                }
                else{
                  sails.log(data);
                  res.json("data", data);
                }
              })
            }
           
       })
          .catch(function(error){
              sails.log.debug(error);
              sails.log.debug('catch');
          });

  },
  // *************to get refresh token******
 refreshtoken: function(req, res){
    var rp = require('request-promise');
    rp({
              uri: 'https://podio.com/oauth/token?grant_type=refresh_token&client_id=podioapp-0xtgs1&client_secret=LcfFjhinMUU2NKfYDRyrW8p1mosiWLGr173jCYxgoLCitnnKCprOgisngiJfEgZI&refresh_token=3baea408c05d444da37be2a9079b609f', 
              //    https://podio.com/oauth/token?grant_type=refresh_token&client_id=xeroapilocal&client_secret=IRKkh5HENJ4DKSSMbyMCJ8gVKHITt7UW4FkgtwR17htvBximvYT9SuIWSo0qY79l&refresh_token=1b29d48ff0094e18806b618a31289f52
              method: "POST",
              json: true,
              headers: {
                  "content-type": "application/json"
              },
              resolveWithFullResponse: true
          })
          .then(function (body) {
           if(body.body){
            User.saveToken(body.body, function(err, data){
              if(err){
                sails.log(err);
                console.err(err);
                res.json("Error",err);
              } else {
                // sails.log(data);
                console.succ(data);
                res.json(data);
              }
            })
           }

       })
          .catch(function(error){
              sails.log.debug(error);
              sails.log.debug('catch');
          });

},
// ***********************cto access an organization id**********************
  organizationid: function(req, res){
         var rp = require('request-promise');
         var options = {
                    // method: 'GET',
                     uri: 'https://api.podio.com/org?oauth_token=d86b150ff3d54588b8b5d8cd90869b17',
                     json: true
                  
};
 console.info(options);

rp(options)
     .then(function (body) {
       json : JSON.stringify(options);
       if(body.body){
            User.orgid(body.body, function(err, data){
              if(err){
                sails.log(err);
                console.err(err);
                res.json("Error",err);
              } else {
                // sails.log(data);
                console.succ(data);
                res.json(data);
              }
            })
           }


    // if(body){
        console.succ(body);
    })
     .catch(function (err) {
      console.err(err);
        // API call failed... 
    });
},

 createpodioapp:function(req, res){
     
      var userid = "3165421";
      var spaceName = "demospace";
      var spaceID = "4063280";
      var authtoken = "d86b150ff3d54588b8b5d8cd90869b17"

      podioAPI.createApp(spaceID, authtoken, sails.config.globals.taxTypePayLoad, function(err, data){
        if(err){
                  sails.log(err);
                  // res.json("error", err);
                }
                else{
                  
                  sails.log(data);
                  // res.json("data", data);
                }
        
      });
},
createitem :function(req, res){
     var externalid = "xero-tax-type-name";
      var appId = "14293853";
      var podioaccess = "d86b150ff3d54588b8b5d8cd90869b17"


         
      podioAPI.podioCreateItem( appId, sails.config.globals.createitem, podioaccess, function(err, data){
        if(err){
                  
                  sails.log("error");
                  res.json("error", err);
                }
                else{
                  sails.log("success");
                  res.json("data", data);
                }
        
      });
    },
     


      // rp({
//                uri: 'https://api.podio.com/org?oauth_token=3245161346f74a14b66511e5fe3cc1a7',
//               method: "GET",
//                json: true,
//               //  headers: {
//               //     "content-type": "application/json"
//               // },
//               resolveWithFullResponse: true
//           })
//           .then(function (body) {
//            if(body.body){
//             User.orgid(body.body, function(err, data){
//               if(err){
//                 sails.log(err);
//                 console.err(err);
//                 res.json("Error",err);
//               } else {
//                 // sails.log(data);
//                 console.succ(data);
//                 res.json(data);
//               }
//             })
//            }

//        })
//           .catch(function(error){
//               sails.log.debug(error);
//               sails.log.debug('catch');
//           });



// },



};
 //=====================================================>>>>>
  //parameters
  





     // console.log('PUT BODY-------->');
       // var request = require('request');
    //   var grant_type ='authorization_code';
    //   var client_id = 'podioapp-l9nmvz';
    //   var redirect_uri= 'http://09a59dff.ngrok.io';
    //   var client_secret = 'DZeSnkuIAiHvir9Bwvy65lgwYQlzWU7MhinxjaLHY7q1bI62vPnpIp36lJZwxO6u';
    //   var code = '3d5bc329e6e244febc77bda6aa3419b7';
    //   // https://podio.com/oauth/token?grant_type=authorization_code&client_id=podioapp-6ttmzd&redirect_uri=https://4c37d16e.ngrok.io&client_secret=pOLhs4JWiRIAwxB31AvYuOTurohJz4UK5NHiENs4c7uWDix4dRs03LtddayWPiEh&code=61f9766aa697408492a7a03b168b1f74
    //   var r = request.post('http://podio.com/oauth/token?'+grant_type+'&'+client_id+'&'+redirect_uri+'&'+client_secret+'&'+code, function optionalCallback(err, httpResponse, body) {
    //           if(err) {
    //             res.json('----->Errro ',err)
    //           } else if(httpResponse) {
    //             res.json('Http Response----->',httpResponse);
    //           } else {
    //             res.json('Bod---->',body);
    //           }
    // })  
        // var form = r.form()
 //       request.post({url:'https://podio.com/oauth/token?',
 //          form:{grant_type:'authorization_code',
 //         client_id:'podioapp-l9nmvz',
 //         redirect_uri:'http://09a59dff.ngrok.io',
 //         client_secret:'DZeSnkuIAiHvir9Bwvy65lgwYQlzWU7MhinxjaLHY7q1bI62vPnpIp36lJZwxO6u',
 //         code:'3d5bc329e6e244febc77bda6aa3419b7'}}, function (err, user) {
 //            if(!err){
 //             console.log('PUT BODY-------->');
 //                 res.json(user);
 //               }

 //               else {
 //                 res.json (err);
 //               }

 // });

       


// request.post({url:'http://service.com/upload',
//  form: {key:'value'}}, function(err,httpResponse,body)
// { /* ... */ })
// https://podio.com/oauth/token?grant_type=authorization_code&client_id=myfirstpodio&
// redirect_uri=http://689c3674.ngrok.io&
// client_secret=ZJpdgwk35kz7nYz8bOIPONjaUxihuibisNVbbdf3ZWgpX26KhCEFcflN2xy0SFR6&


