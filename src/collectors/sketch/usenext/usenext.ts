
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UsenextCollector extends SketchCollector {

    static CONFIG = {
        id: "usenext",
        name: "Usenext",
        description: "i18n.collectors.usenext.description",
        version: "0",
        website: "https://premium.usenext.com/user-billings.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2635033.jpg",
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
        entryUrl: "https://premium.usenext.com/user-billings.do",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UsenextCollector.CONFIG);
    }
}
