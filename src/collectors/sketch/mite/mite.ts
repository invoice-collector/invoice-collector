
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MiteCollector extends SketchCollector {

    static CONFIG = {
        id: "mite",
        name: "Mite",
        description: "i18n.collectors.mite.description",
        version: "0",
        website: "https://app.mite.yo.lk/where_to_login/de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1100.jpg",
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
        entryUrl: "https://app.mite.yo.lk/where_to_login/de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MiteCollector.CONFIG);
    }
}
