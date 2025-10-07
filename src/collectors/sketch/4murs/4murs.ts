
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class _4mursCollector extends SketchCollector {

    static CONFIG = {
        id: "4murs",
        name: "4Murs",
        description: "i18n.collectors.4murs.description",
        version: "0",
        website: "https://www.4murs.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115876.jpg",
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
        entryUrl: "https://www.4murs.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_4mursCollector.CONFIG);
    }
}
