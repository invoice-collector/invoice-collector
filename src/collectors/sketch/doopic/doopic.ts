
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DoopicCollector extends SketchCollector {

    static CONFIG = {
        id: "doopic",
        name: "Doopic",
        description: "i18n.collectors.doopic.description",
        version: "0",
        website: "https://my.doopic.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/43708.jpg",
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
        entryUrl: "https://my.doopic.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DoopicCollector.CONFIG);
    }
}
