
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FilestageCollector extends SketchCollector {

    static CONFIG = {
        id: "filestage",
        name: "Filestage",
        description: "i18n.collectors.filestage.description",
        version: "0",
        website: "https://app.filestage.io/#!/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/45662.jpg",
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
        loginUrl: "https://app.filestage.io/#!/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FilestageCollector.CONFIG);
    }
}
