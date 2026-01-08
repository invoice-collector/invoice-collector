import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MpcFrCollector extends SketchCollector {

    static CONFIG = {
        id: "mpc_fr",
        name: "Marketing Production Creation (MCP)",
        description: "i18n.collectors.mpc_fr.description",
        version: "0",
        website: "https://www.mpc.fr",
        logo: "https://www.mpc.fr/wp-content/themes/mpc/img/logo.png",
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
        loginUrl: "https://www.mpc.fr",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MpcFrCollector.CONFIG);
    }
}
