
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PostLuxembourgCollector extends SketchCollector {

    static CONFIG = {
        id: "post_luxembourg",
        name: "Post Luxembourg",
        description: "i18n.collectors.post_luxembourg.description",
        version: "0",
        website: "https://www.mypost.lu/fixe-web/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1282402.jpg",
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
        entryUrl: "https://www.mypost.lu/fixe-web/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PostLuxembourgCollector.CONFIG);
    }
}
