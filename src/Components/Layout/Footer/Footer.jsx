import React from 'react';
import IMAGE3 from '../../../assets/logos/comet logo 1.png';
import MapSection from './Sections/MapSection';
import CenterSection from './Sections/CenterSection';
import RightSection from './Sections/RightSection';

const CometFooter = () => {
    return (
        <footer className="w-full bg-[#F6F7F8] py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <MapSection />
                    </div>
                    <div className="lg:col-span-3">
                        <CenterSection logo={IMAGE3} />
                    </div>
                    <div className="lg:col-span-4">
                        <RightSection />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default CometFooter;