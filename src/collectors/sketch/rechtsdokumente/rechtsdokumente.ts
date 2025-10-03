
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RechtsdokumenteCollector extends SketchCollector {

    static CONFIG = {
        id: "rechtsdokumente",
        name: "Rechtsdokumente",
        description: "i18n.collectors.rechtsdokumente.description",
        version: "0",
        website: "https://www.rechtsdokumente.de/SignIn/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777000.jpg",
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
        entryUrl: "https://www.rechtsdokumente.de/SignIn/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RechtsdokumenteCollector.CONFIG);
    }
}
