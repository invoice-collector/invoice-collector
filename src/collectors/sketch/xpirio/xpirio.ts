
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class XpirioCollector extends SketchCollector {

    static CONFIG = {
        id: "xpirio",
        name: "xpirio",
        description: "i18n.collectors.xpirio.description",
        version: "0",
        website: "http://www.xpirio.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9429.jpg",
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
        entryUrl: "http://www.xpirio.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(XpirioCollector.CONFIG);
    }
}
