
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SugarsyncCollector extends SketchCollector {

    static CONFIG = {
        id: "sugarsync",
        name: "SugarSync",
        description: "i18n.collectors.sugarsync.description",
        version: "0",
        website: "https://www.sugarsync.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/12067.jpg",
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
        entryUrl: "https://www.sugarsync.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SugarsyncCollector.CONFIG);
    }
}
