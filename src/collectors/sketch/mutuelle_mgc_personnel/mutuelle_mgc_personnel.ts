
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleMgcPersonnelCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_mgc_personnel",
        name: "Mutuelle MGC - Personnel",
        description: "i18n.collectors.mutuelle_mgc_personnel.description",
        version: "0",
        website: "https://monespacepersonnel.cimut.net/web/mgc",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129363.jpg",
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
        loginUrl: "https://monespacepersonnel.cimut.net/web/mgc",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MutuelleMgcPersonnelCollector.CONFIG);
    }
}
