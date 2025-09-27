
import { SketchCollector } from '../../sketchCollector';

export class XolphinCollector extends SketchCollector {

    static CONFIG = {
        id: "xolphin",
        name: "Xolphin",
        description: "i18n.collectors.xolphin.description",
        version: "0",
        website: "https://www.xolphin.com/cp/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32806.jpg",
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
        entryUrl: "https://www.xolphin.com/cp/",
    }

    constructor() {
        super(XolphinCollector.CONFIG);
    }
}
