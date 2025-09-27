
import { SketchCollector } from '../../sketchCollector';

export class KarafunCollector extends SketchCollector {

    static CONFIG = {
        id: "karafun",
        name: "Karafun",
        description: "i18n.collectors.karafun.description",
        version: "0",
        website: "https://www.karafun.fr/my/receipts.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1545161.jpg",
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
        entryUrl: "https://www.karafun.fr/my/receipts.html",
    }

    constructor() {
        super(KarafunCollector.CONFIG);
    }
}
