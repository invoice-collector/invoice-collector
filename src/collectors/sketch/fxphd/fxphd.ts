
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FxphdCollector extends SketchCollector {

    static CONFIG = {
        id: "fxphd",
        name: "fxphd",
        description: "i18n.collectors.fxphd.description",
        version: "0",
        website: "https://www.fxphd.com/wp/wp-login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/42369.jpg",
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
        entryUrl: "https://www.fxphd.com/wp/wp-login.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FxphdCollector.CONFIG);
    }
}
