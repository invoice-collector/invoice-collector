
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ApothekenRechenzentrumGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "apotheken_rechenzentrum_gmbh",
        name: "Apotheken-Rechenzentrum GmbH",
        description: "i18n.collectors.apotheken_rechenzentrum_gmbh.description",
        version: "0",
        website: "https://www.arz-darmstadt.de/azuro/azuro_new/AbrechnungAction.do?anzeigen.x&SSO_TOKEN=ea6f0e2e-32f3-4c99-9c55-fe6237abb2e2",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2049708.jpg",
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
        entryUrl: "https://www.arz-darmstadt.de/azuro/azuro_new/AbrechnungAction.do?anzeigen.x&SSO_TOKEN=ea6f0e2e-32f3-4c99-9c55-fe6237abb2e2",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ApothekenRechenzentrumGmbhCollector.CONFIG);
    }
}
