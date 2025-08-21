export class CustomMap {
    googleMap: google.maps.Map;

    mapElement: HTMLElement;

    constructor() {
        //@ts-ignore
        this.mapElement = document.getElementById('map') ;
        this.googleMap = new google.maps.Map(this.mapElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addmarker(user: User):void{
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: user.location.lat,
                lng: user.location.lng
            }
        });
    }

    
}