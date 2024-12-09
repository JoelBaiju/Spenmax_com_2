import React, { useEffect, useState } from "react";
import VendorsCard from "../../components/VendorsCard";
import logo from "../../assets/images/Spenmax transparent 1.png";
import "./Vendors.css";
import Footer from "../../components/Footer";
import CustomCarousel from "../../components/CustomCarousel";
import pin from '../../assets/images/pin.png'
function Vendors() {

    const [animating, setAnimating] = useState(false);
    const [vendors, setvendors] = useState('')

    const [left, setLeft] = useState(0);
    const center = (left + 1) % vendors.length;
    const right = (left + 2) % vendors.length;
    const nextIndex = (left + 3) % vendors.length;

    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [district, setDistrict] = useState("Thiruvananthapuram");
    const [error, setError] = useState("");
    const keralaDistricts = [
        "Alappuzha",
        "Ernakulam",
        "Idukki",
        "Kannur",
        "Kasaragod",
        "Kollam",
        "Kottayam",
        "Kozhikode",
        "Malappuram",
        "Palakkad",
        "Pathanamthitta",
        "Thiruvananthapuram",
        "Thrissur",
        "Wayanad"
    ];

    const Next = () => {
        if (animating) return;
        setAnimating(true);

        const leftelement = document.getElementById(`card-${left}`);
        const centerelement = document.getElementById(`card-${center}`);
        const rightelement = document.getElementById(`card-${right}`);
        const nextElement = document.getElementById(`card-${nextIndex}`);
        try {
            leftelement.style.transform = "translateX(400%) scale(0.7)";
            centerelement.style.transform = "translateX(-100%) scale(1)";
            rightelement.style.transform = "translateX(0) scale(0.7)";
            nextElement.style.transform = "translateX(100%) scale(0.7)";
        }
        catch {

        }
        setTimeout(() => {
            setLeft((prevIndex) => (prevIndex + 1) % vendors.length);
            setAnimating(false);
        }, 0);
    };

    useEffect(() => {
        if (!vendors || vendors.length === 0) {
            console.warn("Vendors array is empty or undefined.");
            return;
        }
    
        const leftelement = document.getElementById(`card-${left}`);
        const centerelement = document.getElementById(`card-${center}`);
        const rightelement = document.getElementById(`card-${right}`);
        const nextElement = document.getElementById(`card-${nextIndex}`);
    
        console.log('useEffect triggered');
        console.log(left, center, right, nextIndex);
    
        // Safeguard against null elements
        if (leftelement) {
            leftelement.style.transform = "translateX(400%) scale(0.7)";
            leftelement.style.opacity = "0";
        } else {
            console.warn(`Element with id card-${left} not found.`);
        }
    
        if (centerelement) {
            centerelement.style.transform = "translateX(0) scale(0.7)";
            centerelement.style.opacity = "1";
        } else {
            console.warn(`Element with id card-${center} not found.`);
        }
    
        if (rightelement) {
            rightelement.style.transform = "translateX(100%) scale(1)";
            rightelement.style.opacity = "1";
        } else {
            console.warn(`Element with id card-${right} not found.`);
        }
    
        if (nextElement) {
            nextElement.style.transform = "translateX(200%) scale(0.7)";
            nextElement.style.opacity = "1";
        } else {
            console.warn(`Element with id card-${nextIndex} not found.`);
        }
    }, [left, vendors]);
    
    

    setTimeout(() => {

        Next()

    }, 2500);










    const fetchvendors = async () => {
        try {
            const response = await fetch(`https://spenmax.in/api/shop/vendor/branches/user/?search=${district}`);

            if (response.ok) {
                const data = await response.json();
                console.log("Response Data:", data);
                setvendors(data)
            } else {
                console.error("Failed to fetch pricing. Status:", response.status);
            }
        } catch (error) {
            console.error("An error occurred while fetching pricing:", error);
        }
    };

    useEffect(() => {
        fetchvendors();
    }, [district]);

    useEffect(() => {
        console.log('doub')
        console.log(vendors)
    }, [vendors]);

    const handleDistrictChange = (e) => {
        setDistrict(e.target.value);
    };




    return (
        <div className=" w-full flex flex-col md:flex-row justify-end pt-10 gap-2">
            <div className="md:w-5/12 p-10">
                <h1 className="text-xl montserrat"> <span className="myshine_green">Discover</span> exclusive offers <br /> from our diverse selection of vendors across all categories! </h1>

                <div>
                    <div className='mt-5 cursor-pointer bg-black px-5 w-fit py-2 md:py-3 flex  rounded-md shadow-xl shadow-neutral-800/50 '>
                        <p className='myshine_gray text-sm font-semibold mr-2'>  Find Vendors near   </p>

                        <select onChange={handleDistrictChange} className="bg-black text-neutral-200  text-sm font-semibold " id="district" >
                            <option value="" className="text-end">&gt;&gt;</option>
                            {
                                keralaDistricts.map((d, index) => (
                                    <option key={index} className="" value={d}>{d}</option>
                                ))
                            }
                        </select    >
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
                        vendors ? vendors.map((i, index) => (
                            <VendorsCard data={i} />
                        )) : '' 
                    }
                </div>
            </div>




        </div>
    );
}

export default Vendors;



