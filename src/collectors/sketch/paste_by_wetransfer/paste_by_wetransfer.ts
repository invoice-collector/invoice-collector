
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PasteByWetransferCollector extends SketchCollector {

    static CONFIG = {
        id: "paste_by_wetransfer",
        name: "Paste by wetransfer",
        description: "i18n.collectors.paste_by_wetransfer.description",
        version: "0",
        website: "https://pasteapp.com/?next=%2Fadmin%2Fteams%2Fbilling",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/406785.jpg",
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
        loginUrl: "https://pasteapp.com/?next=%2Fadmin%2Fteams%2Fbilling",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PasteByWetransferCollector.CONFIG);
    }
}
