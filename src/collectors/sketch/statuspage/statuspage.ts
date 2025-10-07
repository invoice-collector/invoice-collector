
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StatuspageCollector extends SketchCollector {

    static CONFIG = {
        id: "statuspage",
        name: "Statuspage",
        description: "i18n.collectors.statuspage.description",
        version: "0",
        website: "https://manage.statuspage.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/48661.jpg",
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
        entryUrl: "https://manage.statuspage.io/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StatuspageCollector.CONFIG);
    }
}
