
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MyfarmvisCollector extends SketchCollector {

    static CONFIG = {
        id: "myfarmvis",
        name: "myfarmvis",
        description: "i18n.collectors.myfarmvis.description",
        version: "0",
        website: "https://www.myfarmvis.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777401.jpg",
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
        entryUrl: "https://www.myfarmvis.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MyfarmvisCollector.CONFIG);
    }
}
