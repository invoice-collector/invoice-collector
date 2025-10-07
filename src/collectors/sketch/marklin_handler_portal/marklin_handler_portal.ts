
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MarklinHandlerPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "marklin_handler_portal",
        name: "Marklin Handler Portal",
        description: "i18n.collectors.marklin_handler_portal.description",
        version: "0",
        website: "https://order.maerklin.de/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1920112.jpg",
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
        entryUrl: "https://order.maerklin.de/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MarklinHandlerPortalCollector.CONFIG);
    }
}
