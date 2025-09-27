
import { SketchCollector } from '../../sketchCollector';

export class MapboxCollector extends SketchCollector {

    static CONFIG = {
        id: "mapbox",
        name: "Mapbox",
        description: "i18n.collectors.mapbox.description",
        version: "0",
        website: "https://www.mapbox.com/studio/signin/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14942.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://www.mapbox.com/studio/signin/",
    }

    constructor() {
        super(MapboxCollector.CONFIG);
    }
}
