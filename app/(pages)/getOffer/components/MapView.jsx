import { GoogleMapsEmbed } from '@next/third-parties/google';
import { useMemo } from 'react';

export default function MapView({coordinates, myApi}) {
    
    
    return (
        <>
            {coordinates && <section className='w-screen '>
                <GoogleMapsEmbed
                    apiKey={myApi}
                    height={350}
                    width="100%"
                    mode="place"
                    center={coordinates}
                    zoom={18}
                    q={coordinates}
                />
            </section>}
        </>

    )
}
