
import { SketchCollector } from '../../sketchCollector';

export class CoopCollector extends SketchCollector {

    static CONFIG = {
        id: "coop",
        name: "coop",
        description: "i18n.collectors.coop.description",
        version: "0",
        website: "https://om.coop.dk/forside.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21970.jpg",
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
        entryUrl: "https://om.coop.dk/forside.aspx",
    }

    constructor() {
        super(CoopCollector.CONFIG);
    }
}
