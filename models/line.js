import mongoose from "mongoose"

const lineSchema = new mongoose.Schema ({
  line: String,
  stations: [{
    Code: String,
    Name: String,
    StationTogether1: String,
    StationTogether2: String,
    LineCode1: String,
    LineCode2: String,
    LineCode3: String,
    LineCode4: String,
    /* Wont need until geospatial features
    Lat: Number,
    Lon: Number,
    */
    Address: [{
      Street: String,
      City: String,
      State: String,
      Zip: String,
    }]
  }]
})

const Line = mongoose.model('Line', lineSchema)

export {
  Line
}