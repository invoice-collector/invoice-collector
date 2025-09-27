
import { SketchCollector } from '../../sketchCollector';

export class EWienerBikePartsB2bCollector extends SketchCollector {

    static CONFIG = {
        id: "e_wiener_bike_parts_b2b",
        name: "E. Wiener Bike Parts - B2B",
        description: "i18n.collectors.e_wiener_bike_parts_b2b.description",
        version: "0",
        website: "http://b2b.bike-parts.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/16630.jpg",
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
        entryUrl: "http://b2b.bike-parts.de",
    }

    constructor() {
        super(EWienerBikePartsB2bCollector.CONFIG);
    }
}
