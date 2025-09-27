
import { SketchCollector } from '../../sketchCollector';

export class SnafuDeCollector extends SketchCollector {

    static CONFIG = {
        id: "snafu_de",
        name: "snafu.de",
        description: "i18n.collectors.snafu_de.description",
        version: "0",
        website: "https://mein.snafu.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9230.jpg",
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
        entryUrl: "https://mein.snafu.de/",
    }

    constructor() {
        super(SnafuDeCollector.CONFIG);
    }
}
