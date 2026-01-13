
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EstgGrosshandelFurErneuerbareEnergienCollector extends SketchCollector {

    static CONFIG = {
        id: "estg_grosshandel_fur_erneuerbare_energien",
        name: "ESTG-Grosshandel fur erneuerbare Energien",
        description: "i18n.collectors.estg_grosshandel_fur_erneuerbare_energien.description",
        version: "0",
        website: "https://www.estg.eu/de-de/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153518.jpg",
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
        loginUrl: "https://www.estg.eu/de-de/customer/account/login/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EstgGrosshandelFurErneuerbareEnergienCollector.CONFIG);
    }
}
