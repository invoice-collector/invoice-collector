
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EasyvereinCollector extends SketchCollector {

    static CONFIG = {
        id: "easyverein",
        name: "easyVerein",
        description: "i18n.collectors.easyverein.description",
        version: "0",
        website: "https://easyverein.com/app/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/95736.jpg",
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
        entryUrl: "https://easyverein.com/app/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EasyvereinCollector.CONFIG);
    }
}
