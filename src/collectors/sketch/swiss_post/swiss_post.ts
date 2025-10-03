
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SwissPostCollector extends SketchCollector {

    static CONFIG = {
        id: "swiss_post",
        name: "SWISS POST",
        description: "i18n.collectors.swiss_post.description",
        version: "0",
        website: "https://account.post.ch/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/807163.jpg",
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
        entryUrl: "https://account.post.ch/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SwissPostCollector.CONFIG);
    }
}
