
import { SketchCollector } from '../../sketchCollector';

export class ImmergrunEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "immergrun_energie",
        name: "immergrun energie",
        description: "i18n.collectors.immergrun_energie.description",
        version: "0",
        website: "http://www.immergruen-energie.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/36948.jpg",
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
        entryUrl: "http://www.immergruen-energie.de",
    }

    constructor() {
        super(ImmergrunEnergieCollector.CONFIG);
    }
}
