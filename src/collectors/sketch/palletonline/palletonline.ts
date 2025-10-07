
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PalletonlineCollector extends SketchCollector {

    static CONFIG = {
        id: "palletonline",
        name: "PalletOnline",
        description: "i18n.collectors.palletonline.description",
        version: "0",
        website: "https://palletonline.co.uk/my-invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4181559.jpg",
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
        entryUrl: "https://palletonline.co.uk/my-invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PalletonlineCollector.CONFIG);
    }
}
