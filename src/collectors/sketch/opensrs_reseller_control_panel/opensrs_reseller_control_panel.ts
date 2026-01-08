
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OpensrsResellerControlPanelCollector extends SketchCollector {

    static CONFIG = {
        id: "opensrs_reseller_control_panel",
        name: "OpenSRS - Reseller Control Panel",
        description: "i18n.collectors.opensrs_reseller_control_panel.description",
        version: "0",
        website: "https://opensrs.com/manage/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/48727.jpg",
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
        loginUrl: "https://opensrs.com/manage/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OpensrsResellerControlPanelCollector.CONFIG);
    }
}
