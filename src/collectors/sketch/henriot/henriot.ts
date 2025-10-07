
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HenriotCollector extends SketchCollector {

    static CONFIG = {
        id: "henriot",
        name: "Henriot",
        description: "i18n.collectors.henriot.description",
        version: "0",
        website: "https://extranet.henriot.fr/WEB_GESDOUANE/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4356018.jpg",
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
        entryUrl: "https://extranet.henriot.fr/WEB_GESDOUANE/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HenriotCollector.CONFIG);
    }
}
