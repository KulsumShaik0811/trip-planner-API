const Trip = require("../models/Trip");

exports.getTrips = async(req, res, next) => {
    try{
        const {mode, sort} = req.query;
        const filter = { };
        if(mode){
            filter.mode = mode;
        }
        let sortBud = {};
        if(sort === "budget"){
            sortBud = {
                budget: 1
            };
        }
        const trips = await Trip.find(filter).sort(sortBud);
        res.status(200).json(trips);
    }
    catch(err){
        next(err);
    }
}

exports.getTrip = async(req, res, next) => {
    try{
        const id = req.params.id;
        const trip = await Trip.findById(id);
        if(!trip) {
            return res.status(404).json({
                message:  "Trip not found"
            });
        }
        res.status(200).json(trip);
    }
    catch(err){
        next(err);
    }
}

exports.getBooked = async (req, res, next) => {
    try{
        
        const trips = await Trip.find({booked : true});
        res.status(200).json(trips);
    }
    catch(err){
        next(err);
    }

};

exports.createTrip = async(req, res, next) => {
    try{
        const {place, budget, mode, tripDate} = req.body;
        if(!place){
            return res.status(400).json({
                message: "Place not found" 
            })
        }
        if(!budget){
            return res.status(400).json({
                message: "budget not found" 
            })
        }
        if(!mode){
            return res.status(400).json({
                message: "mode not found" 
            })
        }
        if(!tripDate){
            return res.status(400).json({
                message: "trip date not found" 
            })
        }
        const trip = await Trip.create(req.body)
        return res.status(201).json(trip);
    }
    catch(err){
        next(err);
    }
}

exports.putTrip = async(req, res, next) => {
    try{
        const id = req.params.id;
        const trip = await Trip.findByIdAndUpdate(id, req.body, {
            returnDocument: "after", runValidators: true
        });
        if(!trip){
            return res.status(404).json({
                message: "Trip not found"
            });
        }
        res.status(200).json(trip);
    }
    catch(err){
        next(err);
    }
}

exports.deleteTrip = async(req, res, next) => {
    try{
        const id = req.params.id;
        const trip = await Trip.findByIdAndDelete(id);
        if(!trip){
            return res.status(404).json({
                message: "Trip not found"
            });
        }
        res.status(200).json({
            message : "Trip deleted successfully"
        })
    }
    catch(err){
        next(err);
    }
}