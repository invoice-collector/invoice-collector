
import { SketchCollector } from '../../sketchCollector';

export class KautBullingerCollector extends SketchCollector {

    static CONFIG = {
        id: "kaut_bullinger",
        name: "KAUT Bullinger",
        description: "i18n.collectors.kaut_bullinger.description",
        version: "0",
        website: "https://www.kautbullinger.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/163757.jpg",
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
        entryUrl: "https://www.kautbullinger.de/",
    }

    constructor() {
        super(KautBullingerCollector.CONFIG);
    }
}
