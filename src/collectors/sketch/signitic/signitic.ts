
import { SketchCollector } from '../../sketchCollector';

export class SigniticCollector extends SketchCollector {

    static CONFIG = {
        id: "signitic",
        name: "Signitic",
        description: "i18n.collectors.signitic.description",
        version: "0",
        website: "https://signitic.app/settings/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1919639.jpg",
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
        entryUrl: "https://signitic.app/settings/subscription",
    }

    constructor() {
        super(SigniticCollector.CONFIG);
    }
}
