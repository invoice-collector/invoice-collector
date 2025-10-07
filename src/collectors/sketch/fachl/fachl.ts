
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FachlCollector extends SketchCollector {

    static CONFIG = {
        id: "fachl",
        name: "Fachl",
        description: "i18n.collectors.fachl.description",
        version: "0",
        website: "https://mein.fachl.at/Abrechnung/Abrechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1219803.jpg",
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
        entryUrl: "https://mein.fachl.at/Abrechnung/Abrechnungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FachlCollector.CONFIG);
    }
}
