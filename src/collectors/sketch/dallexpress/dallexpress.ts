
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DallexpressCollector extends SketchCollector {

    static CONFIG = {
        id: "dallexpress",
        name: "Dallexpress",
        description: "i18n.collectors.dallexpress.description",
        version: "0",
        website: "https://www.dallexpress.com/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1525114.jpg",
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
        entryUrl: "https://www.dallexpress.com/login.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DallexpressCollector.CONFIG);
    }
}
