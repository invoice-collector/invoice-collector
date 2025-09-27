
import { SketchCollector } from '../../sketchCollector';

export class Messteam2000Collector extends SketchCollector {

    static CONFIG = {
        id: "messteam_2000",
        name: "Messteam 2000",
        description: "i18n.collectors.messteam_2000.description",
        version: "0",
        website: "https://mt2000.prohka-cloud.de/objects",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4367862.jpg",
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
        entryUrl: "https://mt2000.prohka-cloud.de/objects",
    }

    constructor() {
        super(Messteam2000Collector.CONFIG);
    }
}
