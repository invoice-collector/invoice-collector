
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GatsbyCollector extends SketchCollector {

    static CONFIG = {
        id: "gatsby",
        name: "GATSBY",
        description: "i18n.collectors.gatsby.description",
        version: "0",
        website: "https://gatsby.run/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/819500.jpg",
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
        entryUrl: "https://gatsby.run/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GatsbyCollector.CONFIG);
    }
}
