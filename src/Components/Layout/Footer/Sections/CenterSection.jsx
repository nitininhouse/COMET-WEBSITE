import React from "react";

const CenterSection = ({ logo }) => {
    return (
        <div className="lg:col-span-3">
            <div className="flex flex-col space-y-6">
                <div className="h-full w-full">
                    <div className="flex items-center justify-center h-full w-full">
                        <img
                            src={logo}
                            alt="COMET Logo"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                        <span className="mt-1">📧</span>
                        <div>
                            <p className="text-sm">comet_cdc@iitr.ac.in</p>
                            <p className="text-sm">st_cdc@iitr.ac.in</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-3">
                        <span className="mt-1">📍</span>
                        <p className="text-sm">CDC Office, 341 Amod Kunj,<br />IIT Roorkee, Roorkee,<br />Uttarakhand India - 247667</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CenterSection;