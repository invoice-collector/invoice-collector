
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonComBeCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_com_be",
        name: "Amazon (com.be)",
        description: "i18n.collectors.amazon_com_be.description",
        version: "0",
        website: "https://www.amazon.com.be/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1488443.jpg",
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
        entryUrl: "https://www.amazon.com.be/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmazonComBeCollector.CONFIG);
    }
}
