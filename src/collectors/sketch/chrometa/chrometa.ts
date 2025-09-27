
import { SketchCollector } from '../../sketchCollector';

export class ChrometaCollector extends SketchCollector {

    static CONFIG = {
        id: "chrometa",
        name: "Chrometa",
        description: "i18n.collectors.chrometa.description",
        version: "0",
        website: "https://app.chrometa.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/78867.jpg",
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
        entryUrl: "https://app.chrometa.com/account",
    }

    constructor() {
        super(ChrometaCollector.CONFIG);
    }
}
