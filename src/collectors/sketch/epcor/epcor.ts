
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EpcorCollector extends SketchCollector {

    static CONFIG = {
        id: "epcor",
        name: "EPCOR",
        description: "i18n.collectors.epcor.description",
        version: "0",
        website: "https://www.epcor.com/myaccount#/auth/login?returnRouteUrl=%2Fmanage%2Faccounts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9208.jpg",
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
        entryUrl: "https://www.epcor.com/myaccount#/auth/login?returnRouteUrl=%2Fmanage%2Faccounts",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EpcorCollector.CONFIG);
    }
}
