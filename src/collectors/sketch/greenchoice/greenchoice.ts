
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GreenchoiceCollector extends SketchCollector {

    static CONFIG = {
        id: "greenchoice",
        name: "Greenchoice",
        description: "i18n.collectors.greenchoice.description",
        version: "0",
        website: "https://dossier.greenchoice.nl/?utm_source=greenchoicenl&utm_medium=button&utm_campaign=mdbuttongreenchoicenl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32716.jpg",
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
        loginUrl: "https://dossier.greenchoice.nl/?utm_source=greenchoicenl&utm_medium=button&utm_campaign=mdbuttongreenchoicenl",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GreenchoiceCollector.CONFIG);
    }
}
