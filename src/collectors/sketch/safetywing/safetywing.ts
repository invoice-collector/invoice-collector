
import { SketchCollector } from '../../sketchCollector';

export class SafetywingCollector extends SketchCollector {

    static CONFIG = {
        id: "safetywing",
        name: "SafetyWing",
        description: "i18n.collectors.safetywing.description",
        version: "0",
        website: "https://safetywing.com/nomad-insurance/profile/receipts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1347052.jpg",
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
        entryUrl: "https://safetywing.com/nomad-insurance/profile/receipts",
    }

    constructor() {
        super(SafetywingCollector.CONFIG);
    }
}
