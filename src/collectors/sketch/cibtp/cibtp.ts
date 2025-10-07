
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CibtpCollector extends SketchCollector {

    static CONFIG = {
        id: "cibtp",
        name: "CIBTP",
        description: "i18n.collectors.cibtp.description",
        version: "0",
        website: "https://mon-espace.cibtp.fr/4/adh/documents/list-documents/recents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1277004.jpg",
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
        entryUrl: "https://mon-espace.cibtp.fr/4/adh/documents/list-documents/recents",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CibtpCollector.CONFIG);
    }
}
