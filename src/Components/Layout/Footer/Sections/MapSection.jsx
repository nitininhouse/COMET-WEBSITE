import React from 'react';

const MapSection = () => {
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.8868!2d77.8957!3d29.8657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb36bf463f887%3A0x2a4343f728d11b43!2sCDC%20Office%2C%20IIT%20Roorkee!5e0!3m2!1sen!2sin!4v1623456789";

    return (
        <div className="lg:col-span-5">
            <div className="w-full h-[250px] rounded-lg overflow-hidden shadow-md">
                <iframe
                    src={mapSrc}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CDC Office IIT Roorkee Location"
                />
            </div>
        </div>
    );
}

export default MapSection;