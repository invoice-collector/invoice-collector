
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FbsCollector extends SketchCollector {

    static CONFIG = {
        id: "fbs",
        name: "fbs",
        description: "i18n.collectors.fbs.description",
        version: "0",
        website: "https://www.fk-server.org/vue/#/abrechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1920126.jpg",
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
        entryUrl: "https://www.fk-server.org/vue/#/abrechnungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FbsCollector.CONFIG);
    }
}
