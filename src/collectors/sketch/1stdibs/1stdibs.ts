
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class _1stdibsCollector extends SketchCollector {

    static CONFIG = {
        id: "1stdibs",
        name: "1stdibs",
        description: "i18n.collectors.1stdibs.description",
        version: "0",
        website: "https://adminv2.1stdibs.com/dealers/statement",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/70081.jpg",
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
        entryUrl: "https://adminv2.1stdibs.com/dealers/statement",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_1stdibsCollector.CONFIG);
    }
}
