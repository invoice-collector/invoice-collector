
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MouseflowCollector extends SketchCollector {

    static CONFIG = {
        id: "mouseflow",
        name: "mouseflow",
        description: "i18n.collectors.mouseflow.description",
        version: "0",
        website: "https://eu.mouseflow.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11215.jpg",
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
        entryUrl: "https://eu.mouseflow.com/account/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MouseflowCollector.CONFIG);
    }
}
