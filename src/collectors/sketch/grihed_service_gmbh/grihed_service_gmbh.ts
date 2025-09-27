
import { SketchCollector } from '../../sketchCollector';

export class GrihedServiceGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "grihed_service_gmbh",
        name: "GRIHED Service GmbH",
        description: "i18n.collectors.grihed_service_gmbh.description",
        version: "0",
        website: "https://www.grihed.de/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1953779.jpg",
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
        entryUrl: "https://www.grihed.de/account/orders",
    }

    constructor() {
        super(GrihedServiceGmbhCollector.CONFIG);
    }
}
