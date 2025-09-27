
import { SketchCollector } from '../../sketchCollector';

export class LogdnaCollector extends SketchCollector {

    static CONFIG = {
        id: "logdna",
        name: "LogDna",
        description: "i18n.collectors.logdna.description",
        version: "0",
        website: "https://app.logdna.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/178542.jpg",
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
        entryUrl: "https://app.logdna.com/",
    }

    constructor() {
        super(LogdnaCollector.CONFIG);
    }
}
