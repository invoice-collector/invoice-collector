
import { SketchCollector } from '../../sketchCollector';

export class AppcuesCollector extends SketchCollector {

    static CONFIG = {
        id: "appcues",
        name: "Appcues",
        description: "i18n.collectors.appcues.description",
        version: "0",
        website: "https://studio.appcues.com/settings/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/416019.jpg",
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
        entryUrl: "https://studio.appcues.com/settings/subscription",
    }

    constructor() {
        super(AppcuesCollector.CONFIG);
    }
}
