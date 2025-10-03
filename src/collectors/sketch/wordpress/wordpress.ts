
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WordpressCollector extends SketchCollector {

    static CONFIG = {
        id: "wordpress",
        name: "Wordpress",
        description: "i18n.collectors.wordpress.description",
        version: "0",
        website: "https://wordpress.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8538.jpg",
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
        entryUrl: "https://wordpress.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WordpressCollector.CONFIG);
    }
}
