import { GoogleMapsEmbed } from '@next/third-parties/google';
import { useMemo } from 'react';

const myApi = process.env.NEXT_PUBLIC_MAPS_API_KEY;
export default function MapView({coordinates}) {
    
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
