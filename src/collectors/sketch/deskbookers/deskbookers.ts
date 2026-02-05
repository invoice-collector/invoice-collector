
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DeskbookersCollector extends SketchCollector {

    static CONFIG = {
        id: "deskbookers",
        name: "Deskbookers",
        description: "i18n.collectors.deskbookers.description",
        version: "0",
        website: "https://www.deskbookers.com/en-gb/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33389.jpg",
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
        loginUrl: "https://www.deskbookers.com/en-gb/home",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DeskbookersCollector.CONFIG);
    }
}
