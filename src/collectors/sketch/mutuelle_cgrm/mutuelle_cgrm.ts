
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleCgrmCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_cgrm",
        name: "Mutuelle CGRM",
        description: "i18n.collectors.mutuelle_cgrm.description",
        version: "0",
        website: "https://www.cgrm.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127691.jpg",
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
        entryUrl: "https://www.cgrm.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleCgrmCollector.CONFIG);
    }
}
