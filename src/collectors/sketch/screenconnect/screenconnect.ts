
import { SketchCollector } from '../../sketchCollector';

export class ScreenconnectCollector extends SketchCollector {

    static CONFIG = {
        id: "screenconnect",
        name: "Screenconnect",
        description: "i18n.collectors.screenconnect.description",
        version: "0",
        website: "https://cloud.screenconnect.com/#/account#1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4414794.jpg",
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
        entryUrl: "https://cloud.screenconnect.com/#/account#1",
    }

    constructor() {
        super(ScreenconnectCollector.CONFIG);
    }
}
