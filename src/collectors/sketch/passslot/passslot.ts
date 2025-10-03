
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PassslotCollector extends SketchCollector {

    static CONFIG = {
        id: "passslot",
        name: "Passslot",
        description: "i18n.collectors.passslot.description",
        version: "0",
        website: "https://pass.center/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1034195.jpg",
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
        entryUrl: "https://pass.center/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PassslotCollector.CONFIG);
    }
}
