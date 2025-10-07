
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UnycCollector extends SketchCollector {

    static CONFIG = {
        id: "unyc",
        name: "unyc",
        description: "i18n.collectors.unyc.description",
        version: "0",
        website: "https://atlas.unyc.io/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/940360.jpg",
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
        entryUrl: "https://atlas.unyc.io/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UnycCollector.CONFIG);
    }
}
