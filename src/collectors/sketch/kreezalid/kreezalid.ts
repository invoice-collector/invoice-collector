
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KreezalidCollector extends SketchCollector {

    static CONFIG = {
        id: "kreezalid",
        name: "Kreezalid",
        description: "i18n.collectors.kreezalid.description",
        version: "0",
        website: "https://www.kreezalid.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/748634.jpg",
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
        entryUrl: "https://www.kreezalid.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KreezalidCollector.CONFIG);
    }
}
