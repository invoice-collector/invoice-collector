
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TelecashVirtualTerminalCollector extends SketchCollector {

    static CONFIG = {
        id: "telecash_virtual_terminal",
        name: "Telecash Virtual Terminal",
        description: "i18n.collectors.telecash_virtual_terminal.description",
        version: "0",
        website: "https://www.ipg-online.com/vt/view/reports/reports.faces",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779839.jpg",
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
        loginUrl: "https://www.ipg-online.com/vt/view/reports/reports.faces",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TelecashVirtualTerminalCollector.CONFIG);
    }
}
