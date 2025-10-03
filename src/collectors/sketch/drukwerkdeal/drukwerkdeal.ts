
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DrukwerkdealCollector extends SketchCollector {

    static CONFIG = {
        id: "drukwerkdeal",
        name: "Drukwerkdeal",
        description: "i18n.collectors.drukwerkdeal.description",
        version: "0",
        website: "https://www.drukwerkdeal.nl/nl/account/login-page",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32718.jpg",
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
        entryUrl: "https://www.drukwerkdeal.nl/nl/account/login-page",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DrukwerkdealCollector.CONFIG);
    }
}
