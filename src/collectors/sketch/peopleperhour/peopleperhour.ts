
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PeopleperhourCollector extends SketchCollector {

    static CONFIG = {
        id: "peopleperhour",
        name: "peopleperhour",
        description: "i18n.collectors.peopleperhour.description",
        version: "0",
        website: "https://www.peopleperhour.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11908.jpg",
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
        entryUrl: "https://www.peopleperhour.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PeopleperhourCollector.CONFIG);
    }
}
