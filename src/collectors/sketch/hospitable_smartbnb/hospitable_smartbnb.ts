
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HospitableSmartbnbCollector extends SketchCollector {

    static CONFIG = {
        id: "hospitable_smartbnb",
        name: "Hospitable/Smartbnb",
        description: "i18n.collectors.hospitable_smartbnb.description",
        version: "0",
        website: "https://my.hospitable.com/settings/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2513900.jpg",
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
        entryUrl: "https://my.hospitable.com/settings/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HospitableSmartbnbCollector.CONFIG);
    }
}
