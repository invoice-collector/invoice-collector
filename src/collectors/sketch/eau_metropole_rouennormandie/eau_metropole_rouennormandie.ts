
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EauMetropoleRouennormandieCollector extends SketchCollector {

    static CONFIG = {
        id: "eau_metropole_rouennormandie",
        name: "eau metropole ROUENNORMANDIE",
        description: "i18n.collectors.eau_metropole_rouennormandie.description",
        version: "0",
        website: "https://eau.metropole-rouen-normandie.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/880026.jpg",
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
        loginUrl: "https://eau.metropole-rouen-normandie.fr/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EauMetropoleRouennormandieCollector.CONFIG);
    }
}
