import { Loader } from '@googlemaps/js-api-loader'
import { IGoogleMapsCoords } from '@/services/GoogleMapsService/GoogleMapsSupport'

/** This service is responsible for Google Maps API. */
export default class GoogleMapsService {
  /**
   * Create settings for generation map.
   * @returns Settings.
   */
  private get loaderSettings(): Loader {
    return new Loader({ apiKey: '' })
  }

  /**
   * Init google map.
   * @param coords Geolocation coords.
   * @param mapHTMLElement HTMLElement of map.
   * @returns promise.
   */
  public async initGoogleMap(
    coords: IGoogleMapsCoords,
    mapHTMLElement: HTMLElement,
    stylesMapSettings: google.maps.MapTypeStyle[]
  ): Promise<void> {
    await this.loaderSettings
      .load()
      .then((google) => {
        const map = new google.maps.Map(mapHTMLElement, {
          center: {
            lat: coords.latitude,
            lng: coords.longitude,
          },
          zoom: 8,
          zoomControl: false,
          fullscreenControl: false,
          scrollwheel: false,
          gestureHandling: 'none',
          styles: stylesMapSettings,
        })

        new google.maps.Marker({
          position: {
            lat: coords.latitude,
            lng: coords.longitude,
          },
          map,
        })
      })
      .catch((error: string) => {
        console.warn(`GoogleMapsService:initGoogleMap: ${error}`)
      })
  }
}
