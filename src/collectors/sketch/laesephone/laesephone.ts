
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LaesephoneCollector extends SketchCollector {

    static CONFIG = {
        id: "laesephone",
        name: "Laesephone",
        description: "i18n.collectors.laesephone.description",
        version: "0",
        website: "https://leasephone-crm.fr/menu/invoice/view",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4417378.jpg",
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
        entryUrl: "https://leasephone-crm.fr/menu/invoice/view",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LaesephoneCollector.CONFIG);
    }
}
