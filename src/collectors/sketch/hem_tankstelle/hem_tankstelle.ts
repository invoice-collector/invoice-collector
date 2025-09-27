
import { SketchCollector } from '../../sketchCollector';

export class HemTankstelleCollector extends SketchCollector {

    static CONFIG = {
        id: "hem_tankstelle",
        name: "HEM Tankstelle",
        description: "i18n.collectors.hem_tankstelle.description",
        version: "0",
        website: "https://www.hem-tankstelle.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30416.jpg",
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
        entryUrl: "https://www.hem-tankstelle.de",
    }

    constructor() {
        super(HemTankstelleCollector.CONFIG);
    }
}
