
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KlearCollector extends SketchCollector {

    static CONFIG = {
        id: "klear",
        name: "Klear",
        description: "i18n.collectors.klear.description",
        version: "0",
        website: "https://klear.com/settings#/account/general",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/761258.jpg",
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
        entryUrl: "https://klear.com/settings#/account/general",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KlearCollector.CONFIG);
    }
}
