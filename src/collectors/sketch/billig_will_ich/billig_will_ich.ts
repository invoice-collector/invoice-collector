
import { SketchCollector } from '../../sketchCollector';

export class BilligWillIchCollector extends SketchCollector {

    static CONFIG = {
        id: "billig_will_ich",
        name: "Billig Will ich",
        description: "i18n.collectors.billig_will_ich.description",
        version: "0",
        website: "https://onlineservice.billig-will-ich.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/162746.jpg",
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
        entryUrl: "https://onlineservice.billig-will-ich.de",
    }

    constructor() {
        super(BilligWillIchCollector.CONFIG);
    }
}
