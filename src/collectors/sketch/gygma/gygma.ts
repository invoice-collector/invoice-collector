
import { SketchCollector } from '../../sketchCollector';

export class GygmaCollector extends SketchCollector {

    static CONFIG = {
        id: "gygma",
        name: "GYGMA",
        description: "i18n.collectors.gygma.description",
        version: "0",
        website: "https://www.bygma.dk",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21971.jpg",
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
        entryUrl: "https://www.bygma.dk",
    }

    constructor() {
        super(GygmaCollector.CONFIG);
    }
}
