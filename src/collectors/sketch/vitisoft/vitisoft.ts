
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VitisoftCollector extends SketchCollector {

    static CONFIG = {
        id: "vitisoft",
        name: "Vitisoft",
        description: "i18n.collectors.vitisoft.description",
        version: "0",
        website: "https://moncompte.vitisoft.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4571820.jpg",
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
        entryUrl: "https://moncompte.vitisoft.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VitisoftCollector.CONFIG);
    }
}
