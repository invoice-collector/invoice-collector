
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SwnGlasfaserGiga5Collector extends SketchCollector {

    static CONFIG = {
        id: "swn_glasfaser_giga5",
        name: "SWN Glasfaser / Giga5",
        description: "i18n.collectors.swn_glasfaser_giga5.description",
        version: "0",
        website: "https://connect.stadtwerke-neumuenster.de/index.mx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6240.jpg",
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
        loginUrl: "https://connect.stadtwerke-neumuenster.de/index.mx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SwnGlasfaserGiga5Collector.CONFIG);
    }
}
