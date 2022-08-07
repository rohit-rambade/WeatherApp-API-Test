const express = require('express')
const https =  require('https')
const { parse } = require('path')
const app = express()
app.listen(3000)


function lw(req , res){

    const wurl = "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=c3fe017c0b1ce1042e19e71dd838088c"
    
    https.get(wurl,(response)=>{
           
            //fetch data 
            response.on('data', (mydata )=>{

                //converts the data into JSON
                const wdata = JSON.parse(mydata)
                console.log(wdata)
                const t = wdata.main.temp;
                //data retrive
                const d = wdata.weather[0].description;
                res.send("current temp is " + t.toString())
                console.log(d)

            })
    })
    
}

app.get('/', lw)