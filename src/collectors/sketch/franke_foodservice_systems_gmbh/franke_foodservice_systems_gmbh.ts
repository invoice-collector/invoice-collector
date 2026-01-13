
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FrankeFoodserviceSystemsGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "franke_foodservice_systems_gmbh",
        name: "Franke Foodservice Systems GmbH",
        description: "i18n.collectors.franke_foodservice_systems_gmbh.description",
        version: "0",
        website: "https://b2b-foodservicesystems-eu.franke.com/shop4/shop/my-orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3106785.jpg",
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
        loginUrl: "https://b2b-foodservicesystems-eu.franke.com/shop4/shop/my-orders",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FrankeFoodserviceSystemsGmbhCollector.CONFIG);
    }
}
