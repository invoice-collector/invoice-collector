
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TMobileRechnungonlineBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "t_mobile_rechnungonline_business",
        name: "T-Mobile Rechnungonline-business",
        description: "i18n.collectors.t_mobile_rechnungonline_business.description",
        version: "0",
        website: "https://rechnungonline-business.t-mobile.de/gk/auth",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102714.jpg",
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
        entryUrl: "https://rechnungonline-business.t-mobile.de/gk/auth",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TMobileRechnungonlineBusinessCollector.CONFIG);
    }
}
