
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SubstackCollector extends SketchCollector {

    static CONFIG = {
        id: "substack",
        name: "Substack",
        description: "i18n.collectors.substack.description",
        version: "0",
        website: "https://substack.com/account/login?redirect=%2F&email=&with_password=",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/416012.jpg",
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
        entryUrl: "https://substack.com/account/login?redirect=%2F&email=&with_password=",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SubstackCollector.CONFIG);
    }
}
