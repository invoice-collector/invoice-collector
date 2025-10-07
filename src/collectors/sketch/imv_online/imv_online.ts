
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ImvOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "imv_online",
        name: "IMV online",
        description: "i18n.collectors.imv_online.description",
        version: "0",
        website: "https://www.imv-online.de/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2729773.jpg",
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
        entryUrl: "https://www.imv-online.de/login.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ImvOnlineCollector.CONFIG);
    }
}
