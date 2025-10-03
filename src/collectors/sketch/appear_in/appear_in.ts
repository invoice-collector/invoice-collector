
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AppearInCollector extends SketchCollector {

    static CONFIG = {
        id: "appear_in",
        name: "appear.in",
        description: "i18n.collectors.appear_in.description",
        version: "0",
        website: "https://appear.in/user/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/17790.jpg",
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
        entryUrl: "https://appear.in/user/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AppearInCollector.CONFIG);
    }
}
