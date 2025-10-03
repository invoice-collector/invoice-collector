
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BhostedNlCollector extends SketchCollector {

    static CONFIG = {
        id: "bhosted_nl",
        name: "bhosted.nl",
        description: "i18n.collectors.bhosted_nl.description",
        version: "0",
        website: "https://mijn.bhosted.nl/financieel/facturen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1876283.jpg",
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
        entryUrl: "https://mijn.bhosted.nl/financieel/facturen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BhostedNlCollector.CONFIG);
    }
}
