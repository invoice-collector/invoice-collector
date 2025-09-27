
import { SketchCollector } from '../../sketchCollector';

export class NevercodeCollector extends SketchCollector {

    static CONFIG = {
        id: "nevercode",
        name: "Nevercode",
        description: "i18n.collectors.nevercode.description",
        version: "0",
        website: "https://nevercode.io/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/43622.jpg",
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
        entryUrl: "https://nevercode.io/login/",
    }

    constructor() {
        super(NevercodeCollector.CONFIG);
    }
}
