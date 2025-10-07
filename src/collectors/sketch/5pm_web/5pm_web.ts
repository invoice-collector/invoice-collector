
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class _5pmWebCollector extends SketchCollector {

    static CONFIG = {
        id: "5pm_web",
        name: "5pm Web",
        description: "i18n.collectors.5pm_web.description",
        version: "0",
        website: "https://www.5pmweb.com/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15610.jpg",
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
        entryUrl: "https://www.5pmweb.com/login.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_5pmWebCollector.CONFIG);
    }
}
