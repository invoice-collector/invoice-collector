
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EFluxCollector extends SketchCollector {

    static CONFIG = {
        id: "e_flux",
        name: "E-Flux",
        description: "i18n.collectors.e_flux.description",
        version: "0",
        website: "https://dashboard.e-flux.io/my-invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2695469.jpg",
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
        entryUrl: "https://dashboard.e-flux.io/my-invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EFluxCollector.CONFIG);
    }
}
