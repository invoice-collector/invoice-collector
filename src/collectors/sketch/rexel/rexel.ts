
import { SketchCollector } from '../../sketchCollector';

export class RexelCollector extends SketchCollector {

    static CONFIG = {
        id: "rexel",
        name: "Rexel",
        description: "i18n.collectors.rexel.description",
        version: "0",
        website: "https://www.rexel.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/163751.jpg",
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
        entryUrl: "https://www.rexel.de/",
    }

    constructor() {
        super(RexelCollector.CONFIG);
    }
}
