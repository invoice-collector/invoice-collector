
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GoneoCollector extends SketchCollector {

    static CONFIG = {
        id: "goneo",
        name: "goneo",
        description: "i18n.collectors.goneo.description",
        version: "0",
        website: "https://kundencenter.goneo.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10281.jpg",
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
        entryUrl: "https://kundencenter.goneo.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GoneoCollector.CONFIG);
    }
}
