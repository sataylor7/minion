/**
 * IndexController
 *
 * @description :: Server-side logic for managing indices
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	decide: function(req,res){
        DecisionsService.decide(req, function(data){
            //console.log(data);
            if(data === "admin"){
                console.log('admin showing');
                res.view('admin/login');
            }else{
                console.log('website showing');
                res.view('public/home');
            }
        });
    }
};

