
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RegfishDeCollector extends SketchCollector {

    static CONFIG = {
        id: "regfish_de",
        name: "regfish.de",
        description: "i18n.collectors.regfish_de.description",
        version: "0",
        website: "https://www.regfish.de/my/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26389.jpg",
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
        entryUrl: "https://www.regfish.de/my/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RegfishDeCollector.CONFIG);
    }
}
