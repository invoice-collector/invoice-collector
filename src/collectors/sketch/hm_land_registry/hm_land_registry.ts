
import { SketchCollector } from '../../sketchCollector';

export class HmLandRegistryCollector extends SketchCollector {

    static CONFIG = {
        id: "hm_land_registry",
        name: "HM Land Registry",
        description: "i18n.collectors.hm_land_registry.description",
        version: "0",
        website: "https://eservices.landregistry.gov.uk/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3137497.jpg",
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
        entryUrl: "https://eservices.landregistry.gov.uk/",
    }

    constructor() {
        super(HmLandRegistryCollector.CONFIG);
    }
}
