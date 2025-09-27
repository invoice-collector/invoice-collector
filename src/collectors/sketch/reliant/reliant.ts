
import { SketchCollector } from '../../sketchCollector';

export class ReliantCollector extends SketchCollector {

    static CONFIG = {
        id: "reliant",
        name: "Reliant",
        description: "i18n.collectors.reliant.description",
        version: "0",
        website: "https://www.reliant.com/public/altLogon.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8833.jpg",
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
        entryUrl: "https://www.reliant.com/public/altLogon.htm",
    }

    constructor() {
        super(ReliantCollector.CONFIG);
    }
}
