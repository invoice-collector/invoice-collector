
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VistaprintAtCollector extends SketchCollector {

    static CONFIG = {
        id: "vistaprint_at",
        name: "Vistaprint AT",
        description: "i18n.collectors.vistaprint_at.description",
        version: "0",
        website: "https://www.vistaprint.at/oh/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3207129.jpg",
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
        entryUrl: "https://www.vistaprint.at/oh/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VistaprintAtCollector.CONFIG);
    }
}
