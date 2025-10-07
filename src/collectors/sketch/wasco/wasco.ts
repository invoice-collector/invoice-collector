
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WascoCollector extends SketchCollector {

    static CONFIG = {
        id: "wasco",
        name: "Wasco",
        description: "i18n.collectors.wasco.description",
        version: "0",
        website: "https://www.wasco.nl/inloggen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32828.jpg",
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
        entryUrl: "https://www.wasco.nl/inloggen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WascoCollector.CONFIG);
    }
}
