
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Ametra06Collector extends SketchCollector {

    static CONFIG = {
        id: "ametra06",
        name: "Ametra06",
        description: "i18n.collectors.ametra06.description",
        version: "0",
        website: "https://pst-ametra06.medtra.fr/liste-factures-adh.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4175744.jpg",
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
        entryUrl: "https://pst-ametra06.medtra.fr/liste-factures-adh.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Ametra06Collector.CONFIG);
    }
}
