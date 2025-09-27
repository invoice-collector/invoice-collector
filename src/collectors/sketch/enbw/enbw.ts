
import { SketchCollector } from '../../sketchCollector';

export class EnbwCollector extends SketchCollector {

    static CONFIG = {
        id: "enbw",
        name: "EnBW",
        description: "i18n.collectors.enbw.description",
        version: "0",
        website: "https://meine.enbw.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/76084.jpg",
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
        entryUrl: "https://meine.enbw.com/login",
    }

    constructor() {
        super(EnbwCollector.CONFIG);
    }
}
