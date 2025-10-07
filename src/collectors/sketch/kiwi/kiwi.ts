
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KiwiCollector extends SketchCollector {

    static CONFIG = {
        id: "kiwi",
        name: "KIWI",
        description: "i18n.collectors.kiwi.description",
        version: "0",
        website: "https://kiwi.ki/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88389.jpg",
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
        entryUrl: "https://kiwi.ki/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KiwiCollector.CONFIG);
    }
}
