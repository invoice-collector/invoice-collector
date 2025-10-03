
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class QuincaillerieProCollector extends SketchCollector {

    static CONFIG = {
        id: "quincaillerie_pro",
        name: "Quincaillerie Pro",
        description: "i18n.collectors.quincaillerie_pro.description",
        version: "0",
        website: "https://www.quincaillerie.pro/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778929.jpg",
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
        entryUrl: "https://www.quincaillerie.pro/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(QuincaillerieProCollector.CONFIG);
    }
}
