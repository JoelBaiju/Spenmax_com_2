import React, { useEffect, useState } from "react";
import VendorsCard from "../../components/VendorsCard";
import "./Vendors.css";

function Vendors({startloading,stoploading}) {

    const [vendors, setvendors] = useState('')



    async function getDeviceLocation() {
        try {
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });
            const { latitude, longitude } = position.coords;
            return { latitude, longitude };
        } catch (error) {
            console.error("Error retrieving device location:", error);
            return null;
        }
    }
    
    async function fetchLocationDetails(apiKey, lat, long) {
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat},${long}&key=${apiKey}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();

            return data;
        } catch (error) {
            console.error("Error fetching location details:", error);
            return null;
        }
    }
    
        const getlocation = async() => {
            const apiKey = "914daea5797d46cba512d1027b34c202";
            const location = await getDeviceLocation();
            if (location) {
                const { latitude, longitude } = location;
                const response = await fetchLocationDetails(apiKey, latitude, longitude);
                if (response) {
                    return ( response.results[0].components.state_district);
                } else {
                    console.log("Failed to fetch location details.");
                }
            } else {
                console.log("Device location could not be determined.");
            }
        };
    

        const fetchvendors = async (all) => {
            try{
                if(all){
                    const response = await fetch(`https://spenmax.in/api/shop/vendor/branches/user/`);
                    if (response.ok) {
                        const data = await response.json();
                        console.log("Response Data:", data);
                        setvendors(data)
                    } else {
                        console.error("Failed to fetch pricing. Status:", response.status);
                    }
                }
                else{
                    startloading()
                
                const address= await getlocation()
                console.log('address:',address)
                if (address){
                const response = await fetch(`https://spenmax.in/api/shop/vendor/branches/user/?search=${address}`);
                
                if (response.ok) {
                    const data = await response.json();
                    console.log("Response Data:", data);
                    setvendors(data)
                } else {
                    console.error("Failed to fetch pricing. Status:", response.status);
                }
            }
                stoploading()
        }
            } catch (error) {
                console.error("An error occurred while fetching pricing:", error);
            }
        };
    
        useEffect(()=>{
            
            fetchvendors(true)
        },[])
  





    return (
        <div className=" w-full flex flex-col md:flex-row justify-end pt-10 gap-2">
            <div className="md:w-5/12 p-10">
                <h1 className="text-xl montserrat"> <span className="myshine_green">Discover</span> exclusive offers <br /> from our diverse selection of vendors across all categories! </h1>

                <div>
                    <div onClick={()=>fetchvendors(false)} className='mt-5 cursor-pointer bg-black px-5 w-fit py-2 md:py-3 flex hover:scale-105 transition-all ease-out duration-500  rounded-md shadow-xl shadow-neutral-800/50 '>
                        <p className='myshine_gray text-sm font-semibold mr-2'>  Find Vendors near you <i className="fa-solid fa-location-dot ml-4" style={{ color: "#ededed;"}}/> </p>
                    </div>


                </div>

            </div>

            <div className=" md:w-7/12  md:flex flex-col p-5 items-s">
                {/* <div className="cardcontainer relative w-full gap-2 overflow-hidden">
                    {vendors?vendors.map((vendor, index) => (
                        <div
                            key={index}
                            id={`card-${index}`}
                            className="vendorcard absolute transition-all duration-500"
                        >
                            <VendorsCard data={vendor} />
                        </div>
                    )):<h1>eogndsngdsgdspgpghdsgheogigeshidshidshoiudeshgiupohgoigiuoashj</h1>}
                </div> */}
                <div className='flex w-full   benefits gap-3 overflow-x-scroll '>
                    {
                        vendors.length!=0 ? vendors.map((i, index) => (
                            <VendorsCard data={i} />
                        )) : 'No vendors in your location' 
                    }
                    
                </div>
            </div>




        </div>
    );
}

export default Vendors;



