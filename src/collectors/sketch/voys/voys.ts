
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VoysCollector extends SketchCollector {

    static CONFIG = {
        id: "voys",
        name: "Voys",
        description: "i18n.collectors.voys.description",
        version: "0",
        website: "https://freedom.voys.nl/user/login/?next=/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32873.jpg",
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
        entryUrl: "https://freedom.voys.nl/user/login/?next=/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VoysCollector.CONFIG);
    }
}
