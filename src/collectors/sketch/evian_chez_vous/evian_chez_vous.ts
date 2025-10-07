
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EvianChezVousCollector extends SketchCollector {

    static CONFIG = {
        id: "evian_chez_vous",
        name: "Evian chez vous",
        description: "i18n.collectors.evian_chez_vous.description",
        version: "0",
        website: "https://www.evianchezvous.com/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119113.jpg",
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
        entryUrl: "https://www.evianchezvous.com/customer/account/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EvianChezVousCollector.CONFIG);
    }
}
