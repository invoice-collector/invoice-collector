
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ProimageeditorsDeCollector extends SketchCollector {

    static CONFIG = {
        id: "proimageeditors_de",
        name: "ProImageEditors.de",
        description: "i18n.collectors.proimageeditors_de.description",
        version: "0",
        website: "https://pigonline.proimageeditors.de/index.php?fuseaction=proimageCustomer.orderList",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/65930.jpg",
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
        entryUrl: "https://pigonline.proimageeditors.de/index.php?fuseaction=proimageCustomer.orderList",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ProimageeditorsDeCollector.CONFIG);
    }
}
