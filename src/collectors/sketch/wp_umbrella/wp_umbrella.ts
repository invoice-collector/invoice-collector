
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WpUmbrellaCollector extends SketchCollector {

    static CONFIG = {
        id: "wp_umbrella",
        name: "WP Umbrella",
        description: "i18n.collectors.wp_umbrella.description",
        version: "0",
        website: "https://app.wp-umbrella.com/auth/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2722060.jpg",
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
        entryUrl: "https://app.wp-umbrella.com/auth/signin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WpUmbrellaCollector.CONFIG);
    }
}
