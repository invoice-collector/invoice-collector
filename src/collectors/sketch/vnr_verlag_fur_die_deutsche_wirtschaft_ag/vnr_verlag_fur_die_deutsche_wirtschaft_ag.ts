
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VnrVerlagFurDieDeutscheWirtschaftAgCollector extends SketchCollector {

    static CONFIG = {
        id: "vnr_verlag_fur_die_deutsche_wirtschaft_ag",
        name: "VNR VERLAG fur die Deutsche Wirtschaft AG",
        description: "i18n.collectors.vnr_verlag_fur_die_deutsche_wirtschaft_ag.description",
        version: "0",
        website: "https://kunde.vnrag.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/860271.jpg",
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
        loginUrl: "https://kunde.vnrag.de/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VnrVerlagFurDieDeutscheWirtschaftAgCollector.CONFIG);
    }
}
