
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PlentymarketsBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "plentymarkets_business",
        name: "Plentymarkets Business",
        description: "i18n.collectors.plentymarkets_business.description",
        version: "0",
        website: "https://plentymarkets-cloud-de.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/159733.jpg",
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
        entryUrl: "https://plentymarkets-cloud-de.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PlentymarketsBusinessCollector.CONFIG);
    }
}
