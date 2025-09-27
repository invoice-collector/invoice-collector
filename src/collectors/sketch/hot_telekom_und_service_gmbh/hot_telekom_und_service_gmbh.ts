
import { SketchCollector } from '../../sketchCollector';

export class HotTelekomUndServiceGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "hot_telekom_und_service_gmbh",
        name: "HoT Telekom und Service GmbH",
        description: "i18n.collectors.hot_telekom_und_service_gmbh.description",
        version: "0",
        website: "https://www.hot.at/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/508959.jpg",
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
        entryUrl: "https://www.hot.at/",
    }

    constructor() {
        super(HotTelekomUndServiceGmbhCollector.CONFIG);
    }
}
