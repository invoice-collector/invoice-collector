
import { SketchCollector } from '../../sketchCollector';

export class KnackCollector extends SketchCollector {

    static CONFIG = {
        id: "knack",
        name: "Knack",
        description: "i18n.collectors.knack.description",
        version: "0",
        website: "https://builder.knack.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/68474.jpg",
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
        entryUrl: "https://builder.knack.com/",
    }

    constructor() {
        super(KnackCollector.CONFIG);
    }
}
