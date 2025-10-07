
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JurimodelCollector extends SketchCollector {

    static CONFIG = {
        id: "jurimodel",
        name: "Jurimodel",
        description: "i18n.collectors.jurimodel.description",
        version: "0",
        website: "https://www.jurimodel.com/vie-pratique/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106827.jpg",
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
        entryUrl: "https://www.jurimodel.com/vie-pratique/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JurimodelCollector.CONFIG);
    }
}
