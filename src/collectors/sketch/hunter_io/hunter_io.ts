
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HunterIoCollector extends SketchCollector {

    static CONFIG = {
        id: "hunter_io",
        name: "hunter.io",
        description: "i18n.collectors.hunter_io.description",
        version: "0",
        website: "https://hunter.io/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15743.jpg",
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
        entryUrl: "https://hunter.io/users/sign_in",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HunterIoCollector.CONFIG);
    }
}
