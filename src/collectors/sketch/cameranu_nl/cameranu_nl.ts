
import { SketchCollector } from '../../sketchCollector';

export class CameranuNlCollector extends SketchCollector {

    static CONFIG = {
        id: "cameranu_nl",
        name: "cameranu.nl",
        description: "i18n.collectors.cameranu_nl.description",
        version: "0",
        website: "https://www.cameranu.nl/nl/user/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32637.jpg",
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
        entryUrl: "https://www.cameranu.nl/nl/user/login",
    }

    constructor() {
        super(CameranuNlCollector.CONFIG);
    }
}
