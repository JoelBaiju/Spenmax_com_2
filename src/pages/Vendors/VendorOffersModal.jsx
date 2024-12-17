import React from 'react';

const VendorOffersModal = ({ show, closeModal, data ,storeName}) => {
    if (!show) {
        return null;
    }

    return (
        <div className="fixed w-full inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-11/12 md:w-5/12 p-6 rounded-lg shadow-xl">
                
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">{storeName} Exclusive Offers</h2>
                    <button
                        className="text-xl font-bold text-gray-500 hover:text-gray-800"
                        onClick={closeModal}
                    >
                        &times;
                    </button>
                </div>
                {data.map((d, index) => {
                    return (
                        <div key={index} className="mt-4 border-b-[1px] border-gray-700 p-5 ">
                            {d.discount_type === 'flat' ? (
                                <div className="flex flex-row justify-between items-center">
                                    <p className="text-sm font-medium text-gray-700 md:w-1/2 mb-2 md:mb-0">{`Flat ${d.offer}`}</p>
                                    <button className={`text-white font-semibold py-1 px-1 rounded-lg ${d.discount_type === 'flat' ? 'bg-yellow-500' : 'bg-green-500'}`}>
                                        <div className="flex items-center gap-2">
                                            <i className="fa-solid fa-fire text-whitei" ></i>
                                            <span className="text-xs">Save with Spenmax</span>
                                        </div>
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-row justify-between items-center">
                                    <p className="text-sm font-medium text-gray-700 md:w-1/2 mb-2 md:mb-0">{d.offer}</p>
                                    <button className={`text-white font-semibold py-1 px-1 rounded-lg ${d.discount_type === 'flat' ? 'bg-yellow-500' : 'bg-green-500'}`}>
                                        <div className="flex items-center gap-2">
                                            <i className="fa-solid fa-fire text-white"></i>
                                            <span className="text-xs">Save with Spenmax</span>
                                        </div>
                                    </button>
                                </div>
                            )}
                            {/* <p>   <strong>Offer:</strong> {d.discount_type} {d.offer}</p> */}
                        </div>
                    );
                })}

            </div>
        </div>
    );
};

export default VendorOffersModal;
