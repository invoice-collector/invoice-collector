
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JibbleCollector extends SketchCollector {

    static CONFIG = {
        id: "jibble",
        name: "Jibble",
        description: "i18n.collectors.jibble.description",
        version: "0",
        website: "https://app.jibble.io/#login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/96336.jpg",
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
        entryUrl: "https://app.jibble.io/#login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JibbleCollector.CONFIG);
    }
}
