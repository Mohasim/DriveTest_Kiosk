module.exports= async(req,res)=>{
    res.render('appointment',{AppointmentError:req.flash('AppointmentError'),AppointmentSuccess:req.flash('AppointmentSuccess')});
}