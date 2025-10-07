
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SuperclixPublisherCollector extends SketchCollector {

    static CONFIG = {
        id: "superclix_publisher",
        name: "SuperClix - Publisher",
        description: "i18n.collectors.superclix_publisher.description",
        version: "0",
        website: "http://www.superclix.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9214.jpg",
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
        entryUrl: "http://www.superclix.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SuperclixPublisherCollector.CONFIG);
    }
}
