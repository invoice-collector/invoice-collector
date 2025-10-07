
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class InnpowerCollector extends SketchCollector {

    static CONFIG = {
        id: "innpower",
        name: "InnPower",
        description: "i18n.collectors.innpower.description",
        version: "0",
        website: "https://www.innpower.ca",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8782.jpg",
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
        entryUrl: "https://www.innpower.ca",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InnpowerCollector.CONFIG);
    }
}
