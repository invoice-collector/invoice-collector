
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JuslineCollector extends SketchCollector {

    static CONFIG = {
        id: "jusline",
        name: "Jusline",
        description: "i18n.collectors.jusline.description",
        version: "0",
        website: "https://www.jusline.at/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3495.jpg",
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
        entryUrl: "https://www.jusline.at/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JuslineCollector.CONFIG);
    }
}
