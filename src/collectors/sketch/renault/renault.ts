
import { SketchCollector } from '../../sketchCollector';

export class RenaultCollector extends SketchCollector {

    static CONFIG = {
        id: "renault",
        name: "Renault",
        description: "i18n.collectors.renault.description",
        version: "0",
        website: "https://dd2.dcs2.renault.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4385191.jpg",
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
        entryUrl: "https://dd2.dcs2.renault.com/",
    }

    constructor() {
        super(RenaultCollector.CONFIG);
    }
}
