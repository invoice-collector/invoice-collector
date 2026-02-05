
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CityOfHollywoodCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_hollywood",
        name: "City of Hollywood",
        description: "i18n.collectors.city_of_hollywood.description",
        version: "0",
        website: "https://ipn.paymentus.com/cp/bills.action?CSRF_TOKEN=1712891227536-fba4f02b5ce24c9bcda99a8acc0c4330dc0bd642c61d6cd3f2f274789704076e",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2724318.jpg",
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
        loginUrl: "https://ipn.paymentus.com/cp/bills.action?CSRF_TOKEN=1712891227536-fba4f02b5ce24c9bcda99a8acc0c4330dc0bd642c61d6cd3f2f274789704076e",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CityOfHollywoodCollector.CONFIG);
    }
}
