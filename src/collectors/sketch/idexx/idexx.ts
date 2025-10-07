
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IdexxCollector extends SketchCollector {

    static CONFIG = {
        id: "idexx",
        name: "IDEXX",
        description: "i18n.collectors.idexx.description",
        version: "0",
        website: "http://www.idexx.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/65295.jpg",
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
        entryUrl: "http://www.idexx.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IdexxCollector.CONFIG);
    }
}
