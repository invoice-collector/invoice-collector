
import { SketchCollector } from '../../sketchCollector';

export class PlacetelPartnerloginCollector extends SketchCollector {

    static CONFIG = {
        id: "placetel_partnerlogin",
        name: "Placetel - Partnerlogin",
        description: "i18n.collectors.placetel_partnerlogin.description",
        version: "0",
        website: "https://rap.placetel.de/rap/main/revenues",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23103.jpg",
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
        entryUrl: "https://rap.placetel.de/rap/main/revenues",
    }

    constructor() {
        super(PlacetelPartnerloginCollector.CONFIG);
    }
}
