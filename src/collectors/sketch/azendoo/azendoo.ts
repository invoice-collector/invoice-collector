
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AzendooCollector extends SketchCollector {

    static CONFIG = {
        id: "azendoo",
        name: "Azendoo",
        description: "i18n.collectors.azendoo.description",
        version: "0",
        website: "https://repo.octobat.com/customers/1473788658420ra3f2bc2d",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/170843.jpg",
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
        loginUrl: "https://repo.octobat.com/customers/1473788658420ra3f2bc2d",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AzendooCollector.CONFIG);
    }
}
