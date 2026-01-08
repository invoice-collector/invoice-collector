
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DropboxCollector extends SketchCollector {

    static CONFIG = {
        id: "dropbox",
        name: "DropBox",
        description: "i18n.collectors.dropbox.description",
        version: "0",
        website: "https://www.dropbox.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/375.jpg",
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
        loginUrl: "https://www.dropbox.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DropboxCollector.CONFIG);
    }
}
