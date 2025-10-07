
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PlausibleCollector extends SketchCollector {

    static CONFIG = {
        id: "plausible",
        name: "Plausible",
        description: "i18n.collectors.plausible.description",
        version: "0",
        website: "https://plausible.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153553.jpg",
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
        entryUrl: "https://plausible.io/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PlausibleCollector.CONFIG);
    }
}
