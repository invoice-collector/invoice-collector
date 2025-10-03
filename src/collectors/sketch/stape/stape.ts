
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StapeCollector extends SketchCollector {

    static CONFIG = {
        id: "stape",
        name: "Stape",
        description: "i18n.collectors.stape.description",
        version: "0",
        website: "https://stape.io/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1539458.jpg",
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
        entryUrl: "https://stape.io/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StapeCollector.CONFIG);
    }
}
