
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MeineVrmCollector extends SketchCollector {

    static CONFIG = {
        id: "meine_vrm",
        name: "meine VRM",
        description: "i18n.collectors.meine_vrm.description",
        version: "0",
        website: "https://www.vrm-abo.de/profil/kundenlogin/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1266375.jpg",
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
        entryUrl: "https://www.vrm-abo.de/profil/kundenlogin/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MeineVrmCollector.CONFIG);
    }
}
