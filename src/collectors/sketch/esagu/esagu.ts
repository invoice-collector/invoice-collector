
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EsaguCollector extends SketchCollector {

    static CONFIG = {
        id: "esagu",
        name: "eSagu",
        description: "i18n.collectors.esagu.description",
        version: "0",
        website: "https://repricing.esagu.de/spa/index#/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/85097.jpg",
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
        entryUrl: "https://repricing.esagu.de/spa/index#/account/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EsaguCollector.CONFIG);
    }
}
