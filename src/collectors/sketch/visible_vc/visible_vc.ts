
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VisibleVcCollector extends SketchCollector {

    static CONFIG = {
        id: "visible_vc",
        name: "Visible.vc",
        description: "i18n.collectors.visible_vc.description",
        version: "0",
        website: "https://app.visible.vc/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1255659.jpg",
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
        entryUrl: "https://app.visible.vc/sign-in",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VisibleVcCollector.CONFIG);
    }
}
