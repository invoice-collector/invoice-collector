
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class YotpoCollector extends SketchCollector {

    static CONFIG = {
        id: "yotpo",
        name: "Yotpo",
        description: "i18n.collectors.yotpo.description",
        version: "0",
        website: "https://yap.yotpo.com/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32250.jpg",
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
        entryUrl: "https://yap.yotpo.com/#/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(YotpoCollector.CONFIG);
    }
}
