
import { SketchCollector } from '../../sketchCollector';

export class AbfallwirtschaftSchleswigFlensburgGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "abfallwirtschaft_schleswig_flensburg_gmbh",
        name: "Abfallwirtschaft Schleswig-Flensburg GmbH",
        description: "i18n.collectors.abfallwirtschaft_schleswig_flensburg_gmbh.description",
        version: "0",
        website: "https://portal.asf-online.de/start",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2553009.jpg",
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
        entryUrl: "https://portal.asf-online.de/start",
    }

    constructor() {
        super(AbfallwirtschaftSchleswigFlensburgGmbhCollector.CONFIG);
    }
}
