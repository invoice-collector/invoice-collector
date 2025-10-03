
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PixiesetCollector extends SketchCollector {

    static CONFIG = {
        id: "pixieset",
        name: "Pixieset",
        description: "i18n.collectors.pixieset.description",
        version: "0",
        website: "https://pixieset.com/account/billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14602.jpg",
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
        entryUrl: "https://pixieset.com/account/billing/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PixiesetCollector.CONFIG);
    }
}
