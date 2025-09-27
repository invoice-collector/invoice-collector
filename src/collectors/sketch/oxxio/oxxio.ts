
import { SketchCollector } from '../../sketchCollector';

export class OxxioCollector extends SketchCollector {

    static CONFIG = {
        id: "oxxio",
        name: "Oxxio",
        description: "i18n.collectors.oxxio.description",
        version: "0",
        website: "http://www.oxxio.nl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32529.jpg",
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
        entryUrl: "http://www.oxxio.nl",
    }

    constructor() {
        super(OxxioCollector.CONFIG);
    }
}
