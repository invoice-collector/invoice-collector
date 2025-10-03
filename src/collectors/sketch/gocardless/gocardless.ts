
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GocardlessCollector extends SketchCollector {

    static CONFIG = {
        id: "gocardless",
        name: "GoCardless",
        description: "i18n.collectors.gocardless.description",
        version: "0",
        website: "https://manage.gocardless.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21722.jpg",
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
        entryUrl: "https://manage.gocardless.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GocardlessCollector.CONFIG);
    }
}
