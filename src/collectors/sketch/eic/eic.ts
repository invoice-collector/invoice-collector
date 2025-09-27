
import { SketchCollector } from '../../sketchCollector';

export class EicCollector extends SketchCollector {

    static CONFIG = {
        id: "eic",
        name: "EIC",
        description: "i18n.collectors.eic.description",
        version: "0",
        website: "https://www.eic.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/137158.jpg",
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
        entryUrl: "https://www.eic.fr/",
    }

    constructor() {
        super(EicCollector.CONFIG);
    }
}
