
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Dokom21DeCollector extends SketchCollector {

    static CONFIG = {
        id: "dokom21_de",
        name: "DOKOM21.de",
        description: "i18n.collectors.dokom21_de.description",
        version: "0",
        website: "https://service.dokom.net/site/login.asp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9192.jpg",
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
        entryUrl: "https://service.dokom.net/site/login.asp",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Dokom21DeCollector.CONFIG);
    }
}
