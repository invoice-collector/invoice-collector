
import { SketchCollector } from '../../sketchCollector';

export class GvlCollector extends SketchCollector {

    static CONFIG = {
        id: "gvl",
        name: "GVL",
        description: "i18n.collectors.gvl.description",
        version: "0",
        website: "https://www.artsys.gvl.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/63948.jpg",
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
        entryUrl: "https://www.artsys.gvl.de",
    }

    constructor() {
        super(GvlCollector.CONFIG);
    }
}
