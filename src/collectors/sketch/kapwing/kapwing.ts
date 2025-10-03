
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KapwingCollector extends SketchCollector {

    static CONFIG = {
        id: "kapwing",
        name: "Kapwing",
        description: "i18n.collectors.kapwing.description",
        version: "0",
        website: "https://www.kapwing.com/settings/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/387978.jpg",
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
        entryUrl: "https://www.kapwing.com/settings/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KapwingCollector.CONFIG);
    }
}
