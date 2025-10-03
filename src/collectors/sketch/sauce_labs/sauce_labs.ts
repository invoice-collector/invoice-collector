
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SauceLabsCollector extends SketchCollector {

    static CONFIG = {
        id: "sauce_labs",
        name: "Sauce Labs",
        description: "i18n.collectors.sauce_labs.description",
        version: "0",
        website: "https://saucelabs.com/beta/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/50915.jpg",
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
        entryUrl: "https://saucelabs.com/beta/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SauceLabsCollector.CONFIG);
    }
}
