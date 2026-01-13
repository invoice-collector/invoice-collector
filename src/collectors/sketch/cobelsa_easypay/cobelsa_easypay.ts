
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CobelsaEasypayCollector extends SketchCollector {

    static CONFIG = {
        id: "cobelsa_easypay",
        name: "Cobelsa easypay",
        description: "i18n.collectors.cobelsa_easypay.description",
        version: "0",
        website: "https://cobelsa-easyonline.easypay-group.com/doc/611/20240220/EXTRA_INFO_PERFORMSHEET_258933_00000894ENGINE014lnt_2024022012082741_R.pdf?rule=com.easypaygroup.global.control.basedata.document.util.GloDocumentUserRule",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2698826.jpg",
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
        loginUrl: "https://cobelsa-easyonline.easypay-group.com/doc/611/20240220/EXTRA_INFO_PERFORMSHEET_258933_00000894ENGINE014lnt_2024022012082741_R.pdf?rule=com.easypaygroup.global.control.basedata.document.util.GloDocumentUserRule",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CobelsaEasypayCollector.CONFIG);
    }
}
