
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SgAutorepondeurCollector extends SketchCollector {

    static CONFIG = {
        id: "sg_autorepondeur",
        name: "SG Autorepondeur",
        description: "i18n.collectors.sg_autorepondeur.description",
        version: "0",
        website: "https://sg-autorepondeur.com/app/invoices.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778139.jpg",
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
        entryUrl: "https://sg-autorepondeur.com/app/invoices.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SgAutorepondeurCollector.CONFIG);
    }
}
