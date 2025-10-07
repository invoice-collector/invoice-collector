
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FranceBarterCollector extends SketchCollector {

    static CONFIG = {
        id: "france_barter",
        name: "FRANCE BARTER",
        description: "i18n.collectors.france_barter.description",
        version: "0",
        website: "https://korp.co/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1052827.jpg",
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
        entryUrl: "https://korp.co/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FranceBarterCollector.CONFIG);
    }
}
