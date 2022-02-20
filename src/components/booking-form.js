import React from "react";
import Select from 'react-select';
const options=[
    {value:"",label:"Number of Seats..."},
    {value:"1",label:"1"},
    {value:"2",label:"2"},
    {value:"3",label:"3"},
    {value:"4",label:"4"},
    {value:"5",label:"5"},
    {value:"6",label:"6"},
    {value:"7",label:"7"},
]
const towns=[
    
    {value:"Kisii",label:"Kisii"},
    {value:"Nakuru",label:"Nakuru"},
    {value:"Nairobi",label:"Nairobi"},
    {value:"Mombasa",label:"Mombasa"},
    {value:"Narok",label:"Nairobi"},
    {value:"Kisumu",label:"Kisumu"},
]
const BookingForm=(props)=>{
    return(
        <section className="mainBooking"  style={{backgroundColor:'#fff', marginBottom:'-100px'}}>
            <div className="bookingHeader">
            <h3>BOOK YOUR TRIP</h3>
            </div>
            <div className="bookingContent">
                <form>
                   <div className="bookContentAlignment1">
                        <div className="towns">
                                <h5>From:</h5>
                            <Select
                        
                            defaultLabel="from"
                            value={towns.value}
                            options={towns}
                            />
                        </div>
                        <div className="towns">
                            <h5>To:</h5>
                            <Select
                            name="To"
                            value={towns.value}
                            options={towns}/>
                        </div>
                        <div className="date">
                            <h5>Leaving:</h5>
                            <input type={"date"} placeholder="Leaving"/>
                        </div>
                        
                   </div>
                   <div className="bookContentAlignment2">
                        <div className="bookContentAlignment2content">
                            <Select 
                            value={options.value}
                            options={options}
                            defaultValue={options[0]} />
                        </div>
                        <div className="bookContentAlignment2content">
                        <button type="submit" placeholder=""><strong>SEARCH</strong></button>
                        </div>
                   </div>
                   
                    
                </form>
            </div>
        </section>

    );
}
export default BookingForm