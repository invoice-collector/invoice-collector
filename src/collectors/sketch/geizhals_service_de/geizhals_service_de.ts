
import { SketchCollector } from '../../sketchCollector';

export class GeizhalsServiceDeCollector extends SketchCollector {

    static CONFIG = {
        id: "geizhals_service_de",
        name: "Geizhals Service (.de)",
        description: "i18n.collectors.geizhals_service_de.description",
        version: "0",
        website: "https://service.geizhals.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2729777.jpg",
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
        entryUrl: "https://service.geizhals.de/",
    }

    constructor() {
        super(GeizhalsServiceDeCollector.CONFIG);
    }
}
