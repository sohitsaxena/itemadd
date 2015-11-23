/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {


  },
  saveToken : function(data, cb){
    User.create(data).exec(function(err, user){
      if(err){
        cb(err);
      } else {
        cb(null, user);
      }
    });
  },
  podiotoken : function(data, cb){
     // console.log("MODEL-->");
  	User.create(data).exec(function(err, user){
  		if(!err){
  			return cb(null, user);
  		}else{
  			return cb(err)
  		}
  	});
  },

   orgid: function(data, cb){
    User.find(data).exec(function(err, user){
      if(!err){
        return cb(null, user);
      }
      else{
        return cb(err)
      }
      
    });
   },

  save : function(data, cb){
    User.create(data).exec(function(err, user){
      if(!err){
        return cb(null, user);
      }else{
        return cb(err)
      }
    });
  },



  get : function(email, cb)
  {
    User.find({email : email }).exec(function(err, user){
      if(!err){
        return cb(null, user);
      }else{
        return cb(err)
      }
    });
  },  


   put: function(idone,data,cb){
    
    User.update({id: idone},data).exec(function(err, user){
      if(!err) {
        return cb(null, user);
      } else {
        return cb(err);
      }
    });
   },

  des : function(email, data, cb)
  {
       User.destroy(data, {email : email}).exec(function(err, user)
       {
            if(!err)
            {
               return cb(null, user);
            }
            else {
              return cb(err)
            }
       });
  },

  
};

