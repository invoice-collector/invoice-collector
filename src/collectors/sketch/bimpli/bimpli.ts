
import { SketchCollector } from '../../sketchCollector';

export class BimpliCollector extends SketchCollector {

    static CONFIG = {
        id: "bimpli",
        name: "BIMPLI",
        description: "i18n.collectors.bimpli.description",
        version: "0",
        website: "https://www.bimpli.com/se-connecter/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1060595.jpg",
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
        entryUrl: "https://www.bimpli.com/se-connecter/",
    }

    constructor() {
        super(BimpliCollector.CONFIG);
    }
}
