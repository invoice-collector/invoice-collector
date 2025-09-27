
import { SketchCollector } from '../../sketchCollector';

export class MondayComCollector extends SketchCollector {

    static CONFIG = {
        id: "monday_com",
        name: "monday.com",
        description: "i18n.collectors.monday_com.description",
        version: "0",
        website: "https://auth.monday.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/38757.jpg",
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
        entryUrl: "https://auth.monday.com/login",
    }

    constructor() {
        super(MondayComCollector.CONFIG);
    }
}
