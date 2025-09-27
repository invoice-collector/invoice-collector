
import { SketchCollector } from '../../sketchCollector';

export class OtaraGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "otara_gmbh",
        name: "Otara GmbH",
        description: "i18n.collectors.otara_gmbh.description",
        version: "0",
        website: "https://otara.de/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200765.jpg",
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
        entryUrl: "https://otara.de/account/orders",
    }

    constructor() {
        super(OtaraGmbhCollector.CONFIG);
    }
}
