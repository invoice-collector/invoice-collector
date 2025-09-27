
import { SketchCollector } from '../../sketchCollector';

export class ExtrudrCollector extends SketchCollector {

    static CONFIG = {
        id: "extrudr",
        name: "extrudr",
        description: "i18n.collectors.extrudr.description",
        version: "0",
        website: "https://www.extrudr.com/de/produkte/accounts/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/852727.jpg",
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
        entryUrl: "https://www.extrudr.com/de/produkte/accounts/orders/",
    }

    constructor() {
        super(ExtrudrCollector.CONFIG);
    }
}
