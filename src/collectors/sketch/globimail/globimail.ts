
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GlobimailCollector extends SketchCollector {

    static CONFIG = {
        id: "globimail",
        name: "Globimail",
        description: "i18n.collectors.globimail.description",
        version: "0",
        website: "https://secure.globimail.com/billinghistory/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/78574.jpg",
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
        entryUrl: "https://secure.globimail.com/billinghistory/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GlobimailCollector.CONFIG);
    }
}
