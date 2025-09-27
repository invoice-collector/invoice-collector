
import { SketchCollector } from '../../sketchCollector';

export class HobexCollector extends SketchCollector {

    static CONFIG = {
        id: "hobex",
        name: "Hobex",
        description: "i18n.collectors.hobex.description",
        version: "0",
        website: "https://online.hobex.at/partnernet/Invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/202971.jpg",
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
        entryUrl: "https://online.hobex.at/partnernet/Invoice",
    }

    constructor() {
        super(HobexCollector.CONFIG);
    }
}
