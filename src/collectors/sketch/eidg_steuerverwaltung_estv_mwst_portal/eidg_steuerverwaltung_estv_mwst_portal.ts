
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EidgSteuerverwaltungEstvMwstPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "eidg_steuerverwaltung_estv_mwst_portal",
        name: "Eidg. Steuerverwaltung (ESTV), MWST-Portal",
        description: "i18n.collectors.eidg_steuerverwaltung_estv_mwst_portal.description",
        version: "0",
        website: "https://www.mwstabrechnen.estv.admin.ch/pro/declarations",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732525.jpg",
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
        loginUrl: "https://www.mwstabrechnen.estv.admin.ch/pro/declarations",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EidgSteuerverwaltungEstvMwstPortalCollector.CONFIG);
    }
}
