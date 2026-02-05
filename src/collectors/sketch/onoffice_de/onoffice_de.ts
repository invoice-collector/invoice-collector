
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OnofficeDeCollector extends SketchCollector {

    static CONFIG = {
        id: "onoffice_de",
        name: "onoffice.de",
        description: "i18n.collectors.onoffice_de.description",
        version: "0",
        website: "https://smart.onoffice.de/smart/index.php?_ga=2.74610130.1155995631.1647524971-2123919288.1647524971",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1183354.jpg",
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
        loginUrl: "https://smart.onoffice.de/smart/index.php?_ga=2.74610130.1155995631.1647524971-2123919288.1647524971",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(OnofficeDeCollector.CONFIG);
    }
}
