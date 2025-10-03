
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PopupsmartCollector extends SketchCollector {

    static CONFIG = {
        id: "popupsmart",
        name: "Popupsmart",
        description: "i18n.collectors.popupsmart.description",
        version: "0",
        website: "https://app.popupsmart.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2846858.jpg",
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
        entryUrl: "https://app.popupsmart.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PopupsmartCollector.CONFIG);
    }
}
