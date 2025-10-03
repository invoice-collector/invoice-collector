
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BildmobilCollector extends SketchCollector {

    static CONFIG = {
        id: "bildmobil",
        name: "BILDmobil",
        description: "i18n.collectors.bildmobil.description",
        version: "0",
        website: "https://www.bildmobil.de/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9025.jpg",
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
        entryUrl: "https://www.bildmobil.de/login.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BildmobilCollector.CONFIG);
    }
}
