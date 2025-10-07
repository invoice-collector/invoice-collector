
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CamaieuCollector extends SketchCollector {

    static CONFIG = {
        id: "camaieu",
        name: "Camaieu",
        description: "i18n.collectors.camaieu.description",
        version: "0",
        website: "https://www.camaieu.fr/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/117524.jpg",
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
        entryUrl: "https://www.camaieu.fr/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CamaieuCollector.CONFIG);
    }
}
