
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AussiebumCollector extends SketchCollector {

    static CONFIG = {
        id: "aussiebum",
        name: "AussieBum",
        description: "i18n.collectors.aussiebum.description",
        version: "0",
        website: "https://www.aussiebum.com/members/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116073.jpg",
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
        entryUrl: "https://www.aussiebum.com/members/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AussiebumCollector.CONFIG);
    }
}
