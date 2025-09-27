
import { SketchCollector } from '../../sketchCollector';

export class VerisanaCollector extends SketchCollector {

    static CONFIG = {
        id: "verisana",
        name: "Verisana",
        description: "i18n.collectors.verisana.description",
        version: "0",
        website: "https://www.verisana.de/my-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3004073.jpg",
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
        entryUrl: "https://www.verisana.de/my-account/",
    }

    constructor() {
        super(VerisanaCollector.CONFIG);
    }
}
