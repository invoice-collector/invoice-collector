
import { SketchCollector } from '../../sketchCollector';

export class PoulpeoCollector extends SketchCollector {

    static CONFIG = {
        id: "poulpeo",
        name: "Poulpeo",
        description: "i18n.collectors.poulpeo.description",
        version: "0",
        website: "https://www.poulpeo.com/login.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107856.jpg",
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
        entryUrl: "https://www.poulpeo.com/login.htm",
    }

    constructor() {
        super(PoulpeoCollector.CONFIG);
    }
}
