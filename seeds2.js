var mongoose = require("mongoose");
var Campground = require("./models/campground");
//var Comment    = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1517523976439-e29c573a2b27?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=12bb07633a572791aa50cad3db93b4aa&auto=format&fit=crop&w=500&q=60",
        description: "blah blah blah"
    },
    {
        name: "Desert Mesa",
        image: "https://images.unsplash.com/photo-1519095614420-850b5671ac7f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63ffaa8c9b9aca319b57204b5d620f56&auto=format&fit=crop&w=500&q=60",
        description: "blah blah blah"
    },
    {
        name: "Canyon Floor",
        image: "https://images.unsplash.com/photo-1510672981848-a1c4f1cb5ccf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=12ad75c31d4e110e677b814a6d61066a&auto=format&fit=crop&w=500&q=60",
        description: "blah blah blah"
    }
];

function seedDB(){
        //REMOVE ALL CAMPGROUNDS
        Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed Campgrounds!");
            data.forEach(function(seed){
            //ADD A FEW CAMPGROUNDS
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else{
                    console.log("added a campground");
                    //CREATE A COMMENT
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer",
                        },  function(err, comment){
                            if(err){
                                console.log(err);
                            } else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment!");
                            }
                            
                        });
                }
            });
        });
        
    });
}

module.exports = seedDB;
