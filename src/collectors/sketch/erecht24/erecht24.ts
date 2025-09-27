
import { SketchCollector } from '../../sketchCollector';

export class Erecht24Collector extends SketchCollector {

    static CONFIG = {
        id: "erecht24",
        name: "eRecht24",
        description: "i18n.collectors.erecht24.description",
        version: "0",
        website: "https://www.e-recht24.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9966.jpg",
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
        entryUrl: "https://www.e-recht24.de/",
    }

    constructor() {
        super(Erecht24Collector.CONFIG);
    }
}
