
import { SketchCollector } from '../../sketchCollector';

export class DgparCollector extends SketchCollector {

    static CONFIG = {
        id: "dgpar",
        name: "dgpar",
        description: "i18n.collectors.dgpar.description",
        version: "0",
        website: "https://portal.dgpar.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778210.jpg",
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
        entryUrl: "https://portal.dgpar.de/login",
    }

    constructor() {
        super(DgparCollector.CONFIG);
    }
}
