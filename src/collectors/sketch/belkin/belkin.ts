
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BelkinCollector extends SketchCollector {

    static CONFIG = {
        id: "belkin",
        name: "Belkin",
        description: "i18n.collectors.belkin.description",
        version: "0",
        website: "https://www.belkin.com/fr/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1122488.jpg",
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
        entryUrl: "https://www.belkin.com/fr/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BelkinCollector.CONFIG);
    }
}
