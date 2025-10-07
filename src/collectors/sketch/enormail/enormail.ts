
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EnormailCollector extends SketchCollector {

    static CONFIG = {
        id: "enormail",
        name: "Enormail",
        description: "i18n.collectors.enormail.description",
        version: "0",
        website: "https://app.enormail.eu/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32866.jpg",
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
        entryUrl: "https://app.enormail.eu/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EnormailCollector.CONFIG);
    }
}
