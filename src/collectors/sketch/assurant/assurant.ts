
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AssurantCollector extends SketchCollector {

    static CONFIG = {
        id: "assurant",
        name: "Assurant",
        description: "i18n.collectors.assurant.description",
        version: "0",
        website: "https://partner.assurant-schutzbrief.de/insuranceAccounting/listPartnerAccountings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1237297.jpg",
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
        loginUrl: "https://partner.assurant-schutzbrief.de/insuranceAccounting/listPartnerAccountings",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AssurantCollector.CONFIG);
    }
}
