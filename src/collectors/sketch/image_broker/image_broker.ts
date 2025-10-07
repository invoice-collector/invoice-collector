
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ImageBrokerCollector extends SketchCollector {

    static CONFIG = {
        id: "image_broker",
        name: "Image Broker",
        description: "i18n.collectors.image_broker.description",
        version: "0",
        website: "https://my.imagebroker.com/de/verkaeufe/?tab=2",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2105948.jpg",
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
        entryUrl: "https://my.imagebroker.com/de/verkaeufe/?tab=2",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ImageBrokerCollector.CONFIG);
    }
}
