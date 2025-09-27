
import { SketchCollector } from '../../sketchCollector';

export class BlinkplanCollector extends SketchCollector {

    static CONFIG = {
        id: "blinkplan",
        name: "blinkplan",
        description: "i18n.collectors.blinkplan.description",
        version: "0",
        website: "https://www.blinkplan.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/63711.jpg",
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
        entryUrl: "https://www.blinkplan.com/login",
    }

    constructor() {
        super(BlinkplanCollector.CONFIG);
    }
}
