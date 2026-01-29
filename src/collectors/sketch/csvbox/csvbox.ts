
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CsvboxCollector extends SketchCollector {

    static CONFIG = {
        id: "csvbox",
        name: "csvbox",
        description: "i18n.collectors.csvbox.description",
        version: "0",
        website: "https://app.csvbox.io/user/plans",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1919783.jpg",
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
        loginUrl: "https://app.csvbox.io/user/plans",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CsvboxCollector.CONFIG);
    }
}
