
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ClozeComCollector extends SketchCollector {

    static CONFIG = {
        id: "cloze_com",
        name: "Cloze.com",
        description: "i18n.collectors.cloze_com.description",
        version: "0",
        website: "https://www.cloze.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7661.jpg",
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
        entryUrl: "https://www.cloze.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ClozeComCollector.CONFIG);
    }
}
