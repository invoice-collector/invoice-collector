
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EdvBuchversandDelfMichelCollector extends SketchCollector {

    static CONFIG = {
        id: "edv_buchversand_delf_michel",
        name: "EDV Buchversand Delf Michel",
        description: "i18n.collectors.edv_buchversand_delf_michel.description",
        version: "0",
        website: "https://www.edv-buchversand.de/index.php?cnt=userportal",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/94963.jpg",
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
        loginUrl: "https://www.edv-buchversand.de/index.php?cnt=userportal",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EdvBuchversandDelfMichelCollector.CONFIG);
    }
}
