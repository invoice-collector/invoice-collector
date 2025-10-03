
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WienerLinienCollector extends SketchCollector {

    static CONFIG = {
        id: "wiener_linien",
        name: "Wiener Linien",
        description: "i18n.collectors.wiener_linien.description",
        version: "0",
        website: "https://shop.wienmobil.at/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/59332.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://shop.wienmobil.at/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WienerLinienCollector.CONFIG);
    }
}
