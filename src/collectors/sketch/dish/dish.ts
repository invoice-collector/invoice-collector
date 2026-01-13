
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DishCollector extends SketchCollector {

    static CONFIG = {
        id: "dish",
        name: "DISH",
        description: "i18n.collectors.dish.description",
        version: "0",
        website: "https://www.dish.co/DE/de/user/invoices/?tx_dishuser_currentestablishment%5Best%5D=5e4d5690-8d57-11eb-90a9-c143d1e47501&tx_dishuser_currentestablishment%5Baction%5D=form&tx_dishuser_currentestablishment%5Bcontroller%5D=CurrentEstablishment&cHash=bf7c0deb5",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1387432.jpg",
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
        loginUrl: "https://www.dish.co/DE/de/user/invoices/?tx_dishuser_currentestablishment%5Best%5D=5e4d5690-8d57-11eb-90a9-c143d1e47501&tx_dishuser_currentestablishment%5Baction%5D=form&tx_dishuser_currentestablishment%5Bcontroller%5D=CurrentEstablishment&cHash=bf7c0deb5",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DishCollector.CONFIG);
    }
}
