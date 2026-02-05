
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OntarioMunicipalUtilitiesCollector extends SketchCollector {

    static CONFIG = {
        id: "ontario_municipal_utilities",
        name: "Ontario Municipal Utilities",
        description: "i18n.collectors.ontario_municipal_utilities.description",
        version: "0",
        website: "https://customer.ontarioca.gov/Main-Menu/My-Account/Billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2723386.jpg",
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
        loginUrl: "https://customer.ontarioca.gov/Main-Menu/My-Account/Billing",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(OntarioMunicipalUtilitiesCollector.CONFIG);
    }
}
