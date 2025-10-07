
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ActionVfxCollector extends SketchCollector {

    static CONFIG = {
        id: "action_vfx",
        name: "Action Vfx",
        description: "i18n.collectors.action_vfx.description",
        version: "0",
        website: "https://www.actionvfx.com/#sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4178741.jpg",
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
        entryUrl: "https://www.actionvfx.com/#sign-in",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ActionVfxCollector.CONFIG);
    }
}
