
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GotaEnergiCollector extends SketchCollector {

    static CONFIG = {
        id: "gota_energi",
        name: "Gota Energi",
        description: "i18n.collectors.gota_energi.description",
        version: "0",
        website: "https://minasidor.gotaenergi.se/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/143860.jpg",
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
        entryUrl: "https://minasidor.gotaenergi.se/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GotaEnergiCollector.CONFIG);
    }
}
