
import { SketchCollector } from '../../sketchCollector';

export class AhaCollector extends SketchCollector {

    static CONFIG = {
        id: "aha",
        name: "Aha!",
        description: "i18n.collectors.aha.description",
        version: "0",
        website: "https://secure.aha.io/session/new",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/103870.jpg",
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
        entryUrl: "https://secure.aha.io/session/new",
    }

    constructor() {
        super(AhaCollector.CONFIG);
    }
}
