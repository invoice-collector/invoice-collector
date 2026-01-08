
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TaroxCollector extends SketchCollector {

    static CONFIG = {
        id: "tarox",
        name: "TAROX",
        description: "i18n.collectors.tarox.description",
        version: "0",
        website: "https://www.tarox-onlineshop.de/index.php?page=rechnungsnachdruck",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/71589.jpg",
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
        loginUrl: "https://www.tarox-onlineshop.de/index.php?page=rechnungsnachdruck",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TaroxCollector.CONFIG);
    }
}
