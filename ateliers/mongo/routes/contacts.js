const express = require('express');
const router = express.Router();

const Contact = require('../models/contact');


router.get('/', function (req, res, next) {
    Contact.find( (err, contacts)=> {
       if (err){
          console.log("error message "+err);
       }else{
          res.json({title :"contacts" , contracts:contacts});
       }
    });
 
   });

   router.post('/', function(req, res, next) {
    new Contact({
       Fullname : req.body.Fullname,
       Phone : req.body.Phone
       })
       .save(
       (err,newcontact)=>{
       if (err)
       console.log(err);
        else{
       console.log(newcontact.Fullname);
       res.json("  Contact " + newcontact._id +" added succesfuly");
       }
       }
      );
    });
   
    router.delete('/delete/:id', function (req, res, next) {
        console.log(req.params.id)
        Contact.deleteOne({ _id: req.params.id },
     (err, data) => {
       console.log(data);
    
       res.status(200).json({
        sucess:"done"
       })
     }
   );
 });
    
    router.get('/find/:id', function (req, res, next) {
       Contact.findById(req.params.id,
         (err, contacts) => { res.json(contacts); }
       );
     });

     router.patch('/update/:id', (req, res, next) => {
        const id = req.params.id;
        Contact.findByIdAndUpdate(id, req.body, {
                new: true
            },
            function(err,newcontact) {
                if (!err) {
                    res.status(201).json({
                        data:newcontact
                    }); 
                } else {
                    res.status(500).json({
                        message: "not data found"
                    })
                }
            });
    });


     
   module.exports = router;