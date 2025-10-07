
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BeehiveCollector extends SketchCollector {

    static CONFIG = {
        id: "beehive",
        name: "beehive",
        description: "i18n.collectors.beehive.description",
        version: "0",
        website: "https://www.beehive.work/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20259.jpg",
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
        entryUrl: "https://www.beehive.work/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BeehiveCollector.CONFIG);
    }
}
