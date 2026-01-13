
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LaserlineCollector extends SketchCollector {

    static CONFIG = {
        id: "laserline",
        name: "LASERLINE",
        description: "i18n.collectors.laserline.description",
        version: "0",
        website: "https://www.laser-line.de/benutzerkonto/bestellungen.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20592.jpg",
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
        loginUrl: "https://www.laser-line.de/benutzerkonto/bestellungen.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LaserlineCollector.CONFIG);
    }
}
