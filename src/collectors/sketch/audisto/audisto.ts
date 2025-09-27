
import { SketchCollector } from '../../sketchCollector';

export class AudistoCollector extends SketchCollector {

    static CONFIG = {
        id: "audisto",
        name: "Audisto",
        description: "i18n.collectors.audisto.description",
        version: "0",
        website: "http://www.audisto.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/55988.jpg",
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
        entryUrl: "http://www.audisto.com/login",
    }

    constructor() {
        super(AudistoCollector.CONFIG);
    }
}
