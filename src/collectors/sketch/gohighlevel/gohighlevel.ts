
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GohighlevelCollector extends SketchCollector {

    static CONFIG = {
        id: "gohighlevel",
        name: "GoHighLevel",
        description: "i18n.collectors.gohighlevel.description",
        version: "0",
        website: "https://app.gohighlevel.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2693442.jpg",
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
        entryUrl: "https://app.gohighlevel.com/settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GohighlevelCollector.CONFIG);
    }
}
