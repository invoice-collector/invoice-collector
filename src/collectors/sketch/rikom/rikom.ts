
import { SketchCollector } from '../../sketchCollector';

export class RikomCollector extends SketchCollector {

    static CONFIG = {
        id: "rikom",
        name: "RIKOM",
        description: "i18n.collectors.rikom.description",
        version: "0",
        website: "http://rikom-dsl.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9235.jpg",
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
        entryUrl: "http://rikom-dsl.de",
    }

    constructor() {
        super(RikomCollector.CONFIG);
    }
}
