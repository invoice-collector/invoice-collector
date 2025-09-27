
import { SketchCollector } from '../../sketchCollector';

export class SmartmobilDeCollector extends SketchCollector {

    static CONFIG = {
        id: "smartmobil_de",
        name: "smartmobil.de",
        description: "i18n.collectors.smartmobil_de.description",
        version: "0",
        website: "https://service.smartmobil.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8106.jpg",
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
        entryUrl: "https://service.smartmobil.de/",
    }

    constructor() {
        super(SmartmobilDeCollector.CONFIG);
    }
}
