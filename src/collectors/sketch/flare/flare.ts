
import { SketchCollector } from '../../sketchCollector';

export class FlareCollector extends SketchCollector {

    static CONFIG = {
        id: "flare",
        name: "Flare",
        description: "i18n.collectors.flare.description",
        version: "0",
        website: "https://flareapp.io/teams/242-developer/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/169050.jpg",
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
        entryUrl: "https://flareapp.io/teams/242-developer/invoices",
    }

    constructor() {
        super(FlareCollector.CONFIG);
    }
}
