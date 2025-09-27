
import { SketchCollector } from '../../sketchCollector';

export class ChargebeeCollector extends SketchCollector {

    static CONFIG = {
        id: "chargebee",
        name: "Chargebee",
        description: "i18n.collectors.chargebee.description",
        version: "0",
        website: "https://app.chargebee.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/29511.jpg",
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
        entryUrl: "https://app.chargebee.com/login",
    }

    constructor() {
        super(ChargebeeCollector.CONFIG);
    }
}
