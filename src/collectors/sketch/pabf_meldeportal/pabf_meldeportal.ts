
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PabfMeldeportalCollector extends SketchCollector {

    static CONFIG = {
        id: "pabf_meldeportal",
        name: "PABF-Meldeportal",
        description: "i18n.collectors.pabf_meldeportal.description",
        version: "0",
        website: "https://abf-nds.de/meine_dateien",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3140076.jpg",
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
        entryUrl: "https://abf-nds.de/meine_dateien",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PabfMeldeportalCollector.CONFIG);
    }
}
