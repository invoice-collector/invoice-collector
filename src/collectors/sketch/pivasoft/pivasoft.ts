
import { SketchCollector } from '../../sketchCollector';

export class PivasoftCollector extends SketchCollector {

    static CONFIG = {
        id: "pivasoft",
        name: "Pivasoft",
        description: "i18n.collectors.pivasoft.description",
        version: "0",
        website: "https://lhp.pivacom.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2727696.jpg",
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
        entryUrl: "https://lhp.pivacom.com/",
    }

    constructor() {
        super(PivasoftCollector.CONFIG);
    }
}
