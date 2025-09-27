
import { SketchCollector } from '../../sketchCollector';

export class HubrisCollector extends SketchCollector {

    static CONFIG = {
        id: "hubris",
        name: "Hubris",
        description: "i18n.collectors.hubris.description",
        version: "0",
        website: "https://hubris-admin-dev.herokuapp.com/signup",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/532486.jpg",
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
        entryUrl: "https://hubris-admin-dev.herokuapp.com/signup",
    }

    constructor() {
        super(HubrisCollector.CONFIG);
    }
}
