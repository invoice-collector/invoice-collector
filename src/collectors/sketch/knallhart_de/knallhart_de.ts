
import { SketchCollector } from '../../sketchCollector';

export class KnallhartDeCollector extends SketchCollector {

    static CONFIG = {
        id: "knallhart_de",
        name: "knallhart.de",
        description: "i18n.collectors.knallhart_de.description",
        version: "0",
        website: "https://my.knallhart.de/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49049.jpg",
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
        entryUrl: "https://my.knallhart.de/invoice",
    }

    constructor() {
        super(KnallhartDeCollector.CONFIG);
    }
}
