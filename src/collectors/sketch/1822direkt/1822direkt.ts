
import { SketchCollector } from '../../sketchCollector';

export class _1822direktCollector extends SketchCollector {

    static CONFIG = {
        id: "1822direkt",
        name: "1822direkt",
        description: "i18n.collectors.1822direkt.description",
        version: "0",
        website: "https://www.1822direkt-banking.de/JOBa1822Client/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105461.jpg",
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
        entryUrl: "https://www.1822direkt-banking.de/JOBa1822Client/#/login",
    }

    constructor() {
        super(_1822direktCollector.CONFIG);
    }
}
