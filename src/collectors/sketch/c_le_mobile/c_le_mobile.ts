
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CLeMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "c_le_mobile",
        name: "C le mobile",
        description: "i18n.collectors.c_le_mobile.description",
        version: "0",
        website: "https://www.clemobile.com/fr/index.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27495.jpg",
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
        entryUrl: "https://www.clemobile.com/fr/index.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CLeMobileCollector.CONFIG);
    }
}
