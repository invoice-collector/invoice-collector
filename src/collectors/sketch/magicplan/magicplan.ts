
import { SketchCollector } from '../../sketchCollector';

export class MagicplanCollector extends SketchCollector {

    static CONFIG = {
        id: "magicplan",
        name: "magicplan",
        description: "i18n.collectors.magicplan.description",
        version: "0",
        website: "https://cloud.magicplan.app/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/820574.jpg",
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
        entryUrl: "https://cloud.magicplan.app/login",
    }

    constructor() {
        super(MagicplanCollector.CONFIG);
    }
}
