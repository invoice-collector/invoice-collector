
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NovalnetCollector extends SketchCollector {

    static CONFIG = {
        id: "novalnet",
        name: "Novalnet",
        description: "i18n.collectors.novalnet.description",
        version: "0",
        website: "https://admin.novalnet.de/index.php/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/35850.jpg",
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
        entryUrl: "https://admin.novalnet.de/index.php/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NovalnetCollector.CONFIG);
    }
}
