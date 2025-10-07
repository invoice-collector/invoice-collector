
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WoltersKluwerCollector extends SketchCollector {

    static CONFIG = {
        id: "wolters_kluwer",
        name: "Wolters Kluwer",
        description: "i18n.collectors.wolters_kluwer.description",
        version: "0",
        website: "https://login.wolterskluwercloud.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/832472.jpg",
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
        entryUrl: "https://login.wolterskluwercloud.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WoltersKluwerCollector.CONFIG);
    }
}
