
import { SketchCollector } from '../../sketchCollector';

export class ApperoCollector extends SketchCollector {

    static CONFIG = {
        id: "appero",
        name: "APPERO",
        description: "i18n.collectors.appero.description",
        version: "0",
        website: "https://admin.appero.co/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3202605.jpg",
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
        entryUrl: "https://admin.appero.co/#/login",
    }

    constructor() {
        super(ApperoCollector.CONFIG);
    }
}
