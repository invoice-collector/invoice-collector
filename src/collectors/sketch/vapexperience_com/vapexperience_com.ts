
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VapexperienceComCollector extends SketchCollector {

    static CONFIG = {
        id: "vapexperience_com",
        name: "Vapexperience.com",
        description: "i18n.collectors.vapexperience_com.description",
        version: "0",
        website: "https://www.vapexperience.com/authentification?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123528.jpg",
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
        entryUrl: "https://www.vapexperience.com/authentification?back=my-account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VapexperienceComCollector.CONFIG);
    }
}
