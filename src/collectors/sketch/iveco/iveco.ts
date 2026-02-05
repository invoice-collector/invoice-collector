
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IvecoCollector extends SketchCollector {

    static CONFIG = {
        id: "iveco",
        name: "Iveco",
        description: "i18n.collectors.iveco.description",
        version: "0",
        website: "https://cnhice.espaceclient.fineasy.com/group/france-iveco/factures-avoirs",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1357536.jpg",
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
        loginUrl: "https://cnhice.espaceclient.fineasy.com/group/france-iveco/factures-avoirs",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(IvecoCollector.CONFIG);
    }
}
