
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class _12connectCollector extends SketchCollector {

    static CONFIG = {
        id: "12connect",
        name: "12connect",
        description: "i18n.collectors.12connect.description",
        version: "0",
        website: "http://www.12connect.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32706.jpg",
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
        entryUrl: "http://www.12connect.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_12connectCollector.CONFIG);
    }
}
