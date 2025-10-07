
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BootkoffieCollector extends SketchCollector {

    static CONFIG = {
        id: "bootkoffie",
        name: "Bootkoffie",
        description: "i18n.collectors.bootkoffie.description",
        version: "0",
        website: "https://www.bootkoffie.nl/sales/order/history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3206410.jpg",
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
        entryUrl: "https://www.bootkoffie.nl/sales/order/history/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BootkoffieCollector.CONFIG);
    }
}
