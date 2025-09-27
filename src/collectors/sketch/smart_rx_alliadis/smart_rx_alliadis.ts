
import { SketchCollector } from '../../sketchCollector';

export class SmartRxAlliadisCollector extends SketchCollector {

    static CONFIG = {
        id: "smart_rx_alliadis",
        name: "Smart rx (Alliadis)",
        description: "i18n.collectors.smart_rx_alliadis.description",
        version: "0",
        website: "https://www.smart-rx.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/513530.jpg",
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
        entryUrl: "https://www.smart-rx.com/",
    }

    constructor() {
        super(SmartRxAlliadisCollector.CONFIG);
    }
}
